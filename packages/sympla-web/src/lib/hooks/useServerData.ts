// src/lib/hooks/useServerData.ts
"use client";

import useSWR from 'swr';

export function useServerData<T>(
    key: string | [string, ...unknown[]],
    fetcher: () => Promise<T>
) {
    const { data, error, isLoading, mutate } = useSWR(key, fetcher);
    return { data, error, isLoading, mutate };
}