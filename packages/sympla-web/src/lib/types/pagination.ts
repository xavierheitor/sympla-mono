/* eslint-disable @typescript-eslint/no-explicit-any */
export type OrderDirection = "asc" | "desc";

export interface PaginatedParams {
    page: number;
    pageSize: number;
    search?: string;
    orderBy?: string;
    orderDir?: OrderDirection;
    where?: Record<string, any>;     // Pode ser estendido para Zod futuramente
    include?: Record<string, any>;   // Ex: { relacao: true }
}

export interface PaginatedResult<T> {
    data: T[];
    total: number;
    totalPages: number;
}