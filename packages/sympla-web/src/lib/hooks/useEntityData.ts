'use client';

import { useState } from 'react';
import useSWR from 'swr';
import { TableProps } from 'antd';
import { PaginatedParams, PaginatedResult } from '../types/ActionTypes';

// ✅ Primeiro definimos as duas variações de retorno:
type UseEntityDataPaginated<T> = {
    data: T[];
    total: number;
    totalPages: number;
    params: PaginatedParams;
    setParams: React.Dispatch<React.SetStateAction<PaginatedParams>>;
    isLoading: boolean;
    error: unknown;
    mutate: () => void;
    pagination: TableProps<T>['pagination'];
    handleTableChange: TableProps<T>['onChange'];
};

type UseEntityDataSimple<T> = {
    data: T[];
    isLoading: boolean;
    error: unknown;
    mutate: () => void;
};

// ✅ Sobrecarga paginada
export function useEntityData<T>(
    options: {
        key: string;
        fetcher: (params?: PaginatedParams) => Promise<PaginatedResult<T> | T[]>;
        initialParams?: Partial<PaginatedParams>;
        paginationEnabled: true;
    }
): UseEntityDataPaginated<T>;

// ✅ Sobrecarga simples
export function useEntityData<T>(
    options: {
        key: string;
        fetcher: (params?: PaginatedParams) => Promise<PaginatedResult<T> | T[]>;
        initialParams?: Partial<PaginatedParams>;
        paginationEnabled?: false;
    }
): UseEntityDataSimple<T>;

// ✅ Implementação única
export function useEntityData<T>(options: {
    key: string;
    fetcher: (params?: PaginatedParams) => Promise<PaginatedResult<T> | T[]>;
    initialParams?: Partial<PaginatedParams>;
    paginationEnabled?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
}): any {
    const { key, fetcher, initialParams = {}, paginationEnabled = false } = options;

    const [params, setParams] = useState<PaginatedParams>({
        page: 1,
        pageSize: 10,
        orderDir: 'asc',
        orderBy: 'id',
        ...initialParams,
    });

    const { data, error, isLoading, mutate } = useSWR(
        [key, paginationEnabled ? params : undefined],
        () => fetcher(paginationEnabled ? params : undefined)
    );

    const result = Array.isArray(data)
        ? {
            data,
            total: data.length,
            totalPages: 1,
        }
        : {
            data: data?.data ?? [],
            total: data?.total ?? 0,
            totalPages: data?.totalPages ?? 0,
        };

    const handleTableChange: TableProps<T>['onChange'] = (pagination, _, sorter) => {
        setParams((prev) => ({
            ...prev,
            page: pagination.current || 1,
            pageSize: pagination.pageSize || 10,
            orderBy:
                typeof sorter === 'object' && !Array.isArray(sorter)
                    ? (sorter.field as string)
                    : prev.orderBy,
            orderDir:
                typeof sorter === 'object' && !Array.isArray(sorter) && sorter.order === 'descend'
                    ? 'desc'
                    : 'asc',
        }));
    };

    if (paginationEnabled) {
        return {
            data: result.data,
            total: result.total,
            totalPages: result.totalPages,
            params,
            setParams,
            isLoading,
            error,
            mutate,
            pagination: {
                current: params.page,
                pageSize: params.pageSize,
                total: result.total,
                showSizeChanger: true,
            } as TableProps<T>['pagination'],
            handleTableChange,
        };
    }

    return {
        data: result.data,
        isLoading,
        error,
        mutate,
    };
}