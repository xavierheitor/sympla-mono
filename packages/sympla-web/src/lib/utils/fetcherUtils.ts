/* eslint-disable @typescript-eslint/no-explicit-any */
// src/lib/hooks/fetcherUtils.ts

import { ActionResult, PaginatedResult } from "../types/ActionTypes";

/**
 * Unwrap genérico: consegue retornar sempre T[]
 * mesmo se o servidor tiver retornado array puro ou paginado.
 */
export function unwrapFetcher<T>(
    fetcher: (params?: any) => Promise<ActionResult<T[] | PaginatedResult<T>>>
) {
    return async (params?: any): Promise<T[]> => {
        const res = await fetcher(params);
        if (!res.success) {
            throw new Error(res.error ?? "Erro ao buscar dados.");
        }

        const data = res.data;

        if (Array.isArray(data)) {
            return data;
        }

        return (data as PaginatedResult<T>).data;
    };
}