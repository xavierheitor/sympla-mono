/* eslint-disable @typescript-eslint/no-explicit-any */
// src/lib/hooks/usePaginatedData.ts
"use client";

import useSWR from "swr";

export interface PaginatedParams {
    page: number;
    pageSize: number;
    search?: string;
    orderBy?: string;
    orderDir?: "asc" | "desc";
    where?: Record<string, any>;
    include?: Record<string, any>;
}

export interface PaginatedResult<T> {
    data: T[];
    total: number;
    totalPages: number;
}

export function usePaginatedData<T>(
    key: string,
    fetcher: (params: PaginatedParams) => Promise<PaginatedResult<T>>,
    params: PaginatedParams
) {
    const { data, error, isLoading, mutate } = useSWR([key, params], () =>
        fetcher(params)
    );

    return {
        data: data?.data ?? [],
        total: data?.total ?? 0,
        totalPages: data?.totalPages ?? 0,
        isLoading,
        error,
        mutate,
    };
}
