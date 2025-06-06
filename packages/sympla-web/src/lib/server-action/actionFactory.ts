/* eslint-disable @typescript-eslint/no-explicit-any */
import { ZodSchema, z } from 'zod';
import { handleServerAction } from './actionHandler';
import { ActionResult } from '@/lib/actions/common/types';
import { Session } from 'next-auth';
import { PaginatedResult } from '../hooks/usePaginatedData';

function zAnyWithEntity(entityName?: string) {
    return entityName ? z.any().describe(entityName) : z.any();
}

export function createPrismaCreateAction<TInput, TOutput>(
    schema: ZodSchema<TInput>,
    createFn: (input: TInput & { createdBy: number }) => Promise<TOutput>,
    entityName?: string
): (input: TInput) => Promise<ActionResult<TOutput>> {
    return (input) =>
        handleServerAction(
            schema,
            async (_input, session) => createFn({ ..._input, createdBy: Number(session.user.id) }),
            input,
            entityName ? { actionType: 'create', entityName } : undefined
        );
}

export function createPrismaUpdateAction<TInput, TOutput>(
    schema: ZodSchema<TInput>,
    updateFn: (input: TInput & { updatedBy: number }) => Promise<TOutput>,
    entityName?: string
): (input: TInput) => Promise<ActionResult<TOutput>> {
    return (input) =>
        handleServerAction(
            schema,
            async (_input, session) => updateFn({ ..._input, updatedBy: Number(session.user.id) }),
            input,
            entityName ? { actionType: 'update', entityName } : undefined
        );
}

export function createPrismaDeleteAction<TOutput>(
    deleteFn: (id: string, session: Session) => Promise<TOutput>,
    options?: {
        checkIfExists?: (id: string) => Promise<boolean>;
        defaultCheck?: {
            prismaModel: any;
            modelName: string;
        };
        entityName?: string;
    }
): (id: string) => Promise<ActionResult<TOutput>> {
    return async (id: string) => {
        return await handleServerAction(
            zAnyWithEntity(options?.entityName),
            async (_input, session) => {
                let exists = true;

                if (options?.checkIfExists) {
                    exists = await options.checkIfExists(id);
                } else if (options?.defaultCheck) {
                    const record = await options.defaultCheck.prismaModel.findUnique({
                        where: { id },
                        select: { deletedAt: true },
                    });
                    exists = !!record && !record.deletedAt;
                }

                if (!exists) throw new Error('Registro não encontrado ou já excluído');

                return await deleteFn(id, session);
            },
            id,
            options?.entityName ? { actionType: 'delete', entityName: options.entityName } : undefined
        );
    };
}

export function createPrismaGetByIdAction<TOutput>(
    getFn: (id: number) => Promise<TOutput>,
    entityName?: string
): (id: number) => Promise<ActionResult<TOutput>> {
    return (id) =>
        handleServerAction(
            zAnyWithEntity(entityName),
            async () => getFn(id),
            id,
            entityName ? { actionType: 'get', entityName } : undefined
        );
}

export function createPrismaGetAllAction<TOutput>(
    getAllFn: (filter: { deletedAt: null }) => Promise<TOutput[]>,
    entityName?: string
): () => Promise<ActionResult<TOutput[]>> {
    return () =>
        handleServerAction(
            zAnyWithEntity(entityName),
            async () => getAllFn({ deletedAt: null }),
            {},
            entityName ? { actionType: 'list', entityName } : undefined
        );
}

export const paginatedParamsSchema = z.object({
    page: z.number().min(1),
    pageSize: z.number().min(1),
    search: z.string().optional(),
    orderBy: z.string().optional(),
    orderDir: z.enum(['asc', 'desc']).optional(),
    where: z.record(z.any()).optional(),
    include: z.record(z.any()).optional(),
});

export function getPaginatedPrismaAction<T>(
    prismaModel: {
        findMany: (args: any) => Promise<T[]>;
        count: (args: any) => Promise<number>;
    },
    entityName: string,
    searchFields: string[] = ['nome', 'descricao']
) {
    return async function (
        rawInput: unknown
    ): Promise<ActionResult<PaginatedResult<T>>> {
        return await handleServerAction(
            paginatedParamsSchema,
            async (params: z.infer<typeof paginatedParamsSchema>) => {
                const { page, pageSize, orderBy, orderDir, search, where = {}, include = {} } = params;

                const skip = (page - 1) * pageSize;

                const finalWhere = { ...where };

                if (search && searchFields.length > 0) {
                    finalWhere.OR = searchFields.map((field) => ({
                        [field]: { contains: search, mode: 'insensitive' },
                    }));
                }

                const [data, total] = await Promise.all([
                    prismaModel.findMany({
                        skip,
                        take: pageSize,
                        where: finalWhere,
                        include,
                        orderBy: orderBy ? { [orderBy]: orderDir ?? 'asc' } : undefined,
                    }),
                    prismaModel.count({ where: finalWhere }),
                ]);

                return {
                    success: true,
                    data,
                    total,
                    totalPages: Math.ceil(total / pageSize),
                };
            },
            rawInput,
            { actionType: 'list', entityName }
        );
    };
}