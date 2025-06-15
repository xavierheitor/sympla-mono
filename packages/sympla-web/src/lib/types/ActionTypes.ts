/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

export interface ActionResult<T = unknown> {
    success: boolean;
    data?: T;
    error?: string;
    redirectToLogin?: boolean;
}

export type OrderDirection = "asc" | "desc";

export interface PaginatedParams {
    page: number;
    pageSize: number;
    search?: string;
    orderBy?: string;
    orderDir?: OrderDirection;
    where?: Record<string, any>;     // Pode ser estendido para Zod futuramente
    include?: Record<string, any>;   // Ex: { relacao: true }
    filters?: Record<string, any>;
}

export interface PaginatedResult<T> {
    data: T[];
    total: number;
    totalPages: number;
}

export type PrismaModel<T> = {
    findMany: (args: any) => Promise<T[]>;
    count?: (args: any) => Promise<number>; // count pode ser omitido se não houver paginação
};

export type DeleteCheckOptions = {
    prismaModel: any;
    modelName: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type DeleteOptions<TOutput> = {
    checkIfExists?: (id: string) => Promise<boolean>;
    defaultCheck?: DeleteCheckOptions;
    entityName?: string;
};


/**
 * Schema de parâmetros de paginação, ordenação e filtros.
 */
export const paginatedParamsSchema = z.object({
    page: z.number().min(1).optional(),
    pageSize: z.number().min(1).optional(),
    search: z.string().optional(),
    orderBy: z.string().optional(),
    orderDir: z.enum(["asc", "desc"]).optional(),
    where: z.record(z.any()).optional(),
    include: z.record(z.any()).optional(),
});