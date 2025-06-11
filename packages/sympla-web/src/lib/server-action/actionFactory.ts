/* eslint-disable @typescript-eslint/no-explicit-any */

import { z, ZodSchema } from "zod";
import { Session } from "next-auth";
import { handleServerAction } from "./actionHandler";
import {
    ActionResult,
    DeleteOptions,
    paginatedParamsSchema,
    PaginatedResult,
    PrismaModel,
} from "../types/ActionTypes";

// ========== Helpers ==========
function zAnyWithEntity(entityName?: string) {
    return entityName ? z.any().describe(entityName) : z.any();
}

// ========== Create ==========
export function createPrismaCreateAction<TInput, TOutput>(
    schema: ZodSchema<TInput>,
    createFn: (input: TInput & { createdBy: number }) => Promise<TOutput>,
    entityName?: string
): (input: TInput) => Promise<ActionResult<TOutput>> {
    return (input) =>
        handleServerAction(
            schema,
            async (_input, session) =>
                createFn({ ..._input, createdBy: Number(session.user.id) }),
            input,
            entityName ? { actionType: "create", entityName } : undefined
        );
}

// ========== Update ==========
export function createPrismaUpdateAction<TInput, TOutput>(
    schema: ZodSchema<TInput>,
    updateFn: (input: TInput & { updatedBy: number }) => Promise<TOutput>,
    entityName?: string
): (input: TInput) => Promise<ActionResult<TOutput>> {
    return (input) =>
        handleServerAction(
            schema,
            async (_input, session) =>
                updateFn({ ..._input, updatedBy: Number(session.user.id) }),
            input,
            entityName ? { actionType: "update", entityName } : undefined
        );
}

// ========== Delete ==========
export function createPrismaDeleteAction<TOutput>(
    deleteFn: (id: string, session: Session) => Promise<TOutput>,
    options?: DeleteOptions<TOutput>
): (id: string) => Promise<ActionResult<TOutput>> {
    return async (id: string) =>
        handleServerAction(
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

                if (!exists) {
                    throw new Error("Registro não encontrado ou já excluído");
                }

                return deleteFn(id, session);
            },
            id,
            options?.entityName
                ? { actionType: "delete", entityName: options.entityName }
                : undefined
        );
}

// ========== Get All ==========
export function createPrismaGetAllAction<T>(
    prismaModel: PrismaModel<T>,
    entityName: string,
    searchFields: string[] = ["nome", "descricao"],
    defaultWhere: any = { deletedAt: null }
): (input?: unknown) => Promise<ActionResult<T[] | PaginatedResult<T>>> {
    return async function (rawInput: unknown = {}) {
        return handleServerAction(
            paginatedParamsSchema.partial(),
            async (params): Promise<T[] | PaginatedResult<T>> => {
                const {
                    page,
                    pageSize,
                    orderBy,
                    orderDir,
                    search,
                    where = {},
                    include = {},
                } = params || {};

                const hasPagination = !!page && !!pageSize;

                const finalWhere: any = {
                    ...defaultWhere,
                    ...where,
                };

                if (search && searchFields.length > 0) {
                    finalWhere.OR = searchFields.map((field) => ({
                        [field]: { contains: search, mode: "insensitive" },
                    }));
                }

                if (hasPagination && prismaModel.count) {
                    const skip = (page - 1) * pageSize;

                    const [items, total] = await Promise.all([
                        prismaModel.findMany({
                            skip,
                            take: pageSize,
                            where: finalWhere,
                            include,
                            orderBy: orderBy
                                ? { [orderBy]: orderDir ?? "asc" }
                                : undefined,
                        }),
                        prismaModel.count({ where: finalWhere }),
                    ]);

                    return {
                        data: items,
                        total,
                        totalPages: Math.ceil(total / pageSize),
                    } as PaginatedResult<T>;
                }

                const items = await prismaModel.findMany({
                    where: finalWhere,
                    include,
                    orderBy: orderBy ? { [orderBy]: orderDir ?? "asc" } : undefined,
                });

                return items;
            },
            rawInput,
            { actionType: "list", entityName }
        );
    };
}

// ========== Get By ID ==========
export function createPrismaGetByIdAction<TOutput>(
    getFn: (id: string, session: Session) => Promise<TOutput>,
    entityName: string
): (id: string) => Promise<ActionResult<TOutput>> {
    return async (id: string) => {
        return handleServerAction(
            z.string().describe(entityName),
            async (_id, session) => getFn(_id, session),
            id,
            { actionType: "get", entityName }
        );
    };
}

// ========== Get All With Includes ==========
export function createPrismaGetAllWithIncludesAction<T>(
    queryFn: (params: any) => Promise<T[] | PaginatedResult<T>>,
    entityName: string
): (input?: unknown) => Promise<ActionResult<T[] | PaginatedResult<T>>> {
    return async (rawInput: unknown = {}) => {
        return handleServerAction(
            paginatedParamsSchema.partial(),
            async (params) => {
                return await queryFn(params);
            },
            rawInput,
            { actionType: "list", entityName }
        );
    };
}

// ========== Set Many Relation ==========
export function createPrismaSetManyRelationAction<TInput>(
    schema: ZodSchema<TInput>,
    options: {
        entityName: string;
        deleteFn: (parentId: string, userId: string, now: Date) => Promise<void>;
        createFn: (
            parentId: string,
            childIds: string[],
            userId: string
        ) => Promise<void>;
        getParentId: (parsedInput: TInput) => string;
        getChildIds: (parsedInput: TInput) => string[];
    }
): (input: TInput) => Promise<ActionResult<{ success: true }>> {
    return async (rawInput) => {
        return handleServerAction(
            schema,
            async (parsedInput, session) => {
                const userId = session.user.id.toString();
                const now = new Date();

                const parentId = options.getParentId(parsedInput);
                const childIds = options.getChildIds(parsedInput);

                await options.deleteFn(parentId, userId, now);

                if (childIds.length > 0) {
                    await options.createFn(parentId, childIds, userId);
                }

                return { success: true };
            },
            rawInput,
            { actionType: "update", entityName: options.entityName }
        );
    };
}