import { ZodSchema, z } from 'zod';
import { handleServerAction } from './actionHandler';
import { ActionResult } from '@/lib/actions/common/types';
import { Session } from 'next-auth';

// Criação
export function createPrismaCreateAction<TInput, TOutput>(
    schema: ZodSchema<TInput>,
    createFn: (input: TInput & { createdBy: number }) => Promise<TOutput>,
    entityName?: string
): (input: TInput) => Promise<ActionResult<TOutput>> {
    return (input) =>
        handleServerAction(
            schema,
            async (_input, session) => {
                return await createFn({ ..._input, createdBy: Number(session.user.id) });
            },
            input,
            entityName ? { actionType: 'create', entityName } : undefined
        );
}

// Atualização
export function createPrismaUpdateAction<TInput, TOutput>(
    schema: ZodSchema<TInput>,
    updateFn: (input: TInput & { updatedBy: number }) => Promise<TOutput>,
    entityName?: string
): (input: TInput) => Promise<ActionResult<TOutput>> {
    return (input) =>
        handleServerAction(
            schema,
            async (_input, session) => {
                return await updateFn({ ..._input, updatedBy: Number(session.user.id) });
            },
            input,
            entityName ? { actionType: 'update', entityName } : undefined
        );
}

// Exclusão
export function createPrismaDeleteAction<TOutput>(
    deleteFn: (id: string, session: Session) => Promise<TOutput>,
    options?: {
        checkIfExists?: (id: string) => Promise<boolean>;
        defaultCheck?: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            prismaModel: any;
            modelName: string;
        };
        entityName?: string;
    }
): (id: string) => Promise<ActionResult<TOutput>> {
    return async (id: string) => {
        return await handleServerAction(
            z.any(),
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

// Busca por ID
export function createPrismaGetByIdAction<TOutput>(
    getFn: (id: number) => Promise<TOutput>,
    entityName?: string
): (id: number) => Promise<ActionResult<TOutput>> {
    return (id) =>
        handleServerAction(
            z.any(),
            async () => {
                return await getFn(id);
            },
            id,
            entityName ? { actionType: 'get', entityName } : undefined
        );
}

// Listagem
export function createPrismaGetAllAction<TOutput>(
    getAllFn: (filter: { deletedAt: null }) => Promise<TOutput[]>,
    entityName?: string
): () => Promise<ActionResult<TOutput[]>> {
    return () =>
        handleServerAction(
            z.any(),
            async () => {
                return await getAllFn({ deletedAt: null });
            },
            {},
            entityName ? { actionType: 'list', entityName } : undefined
        );
}
