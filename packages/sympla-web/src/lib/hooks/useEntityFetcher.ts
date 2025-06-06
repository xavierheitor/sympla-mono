"use client";

import useSWR from "swr";
import type { PaginatedParams, PaginatedResult } from "../types/pagination";

type EntityFetcher<T> = (params: PaginatedParams) => Promise<PaginatedResult<T>>;

export function useEntityFetcher<T>(
    key: string,
    fetcher: EntityFetcher<T>,
    params: PaginatedParams
) {
    const { data, error, isLoading, mutate } = useSWR([key, params], () => fetcher(params));

    return {
        items: data?.data ?? [],
        total: data?.total ?? 0,
        totalPages: data?.totalPages ?? 0,
        isLoading,
        error,
        mutate,
    };
}