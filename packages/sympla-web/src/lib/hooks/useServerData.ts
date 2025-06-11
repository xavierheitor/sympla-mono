// src/lib/hooks/useServerData.ts
"use client";

import useSWR from 'swr';
import { App } from 'antd';
import { useEffect } from 'react';

export function useServerData<T>(
    key: string | [string, ...unknown[]],
    fetcher: () => Promise<T>
) {
    const { message } = App.useApp();

    const { data, error, isLoading, mutate } = useSWR(key, async () => {
        try {
            return await fetcher();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            // Já vai cair no error do SWR normalmente
            throw err;
        }
    });

    useEffect(() => {
        if (error) {
            console.error("Erro em useServerData:", error);
            message.error(error?.message ?? "Erro ao carregar os dados.");
        }
    }, [error, message]);

    return { data, error, isLoading, mutate };
}