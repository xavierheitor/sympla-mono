// src/lib/hooks/useServerData.ts
import useSWR from 'swr';

export function useServerData<T>(key: string, fetcher: () => Promise<T>) {
    const { data, error, isLoading, mutate } = useSWR(key, fetcher);
    return { data, error, isLoading, mutate };
}