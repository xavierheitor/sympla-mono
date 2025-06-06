// src/lib/hooks/usePaginatedTable.ts
'use client';

import { TableProps } from 'antd';
import { useState } from 'react';
import { usePaginatedData, PaginatedParams, PaginatedResult } from './usePaginatedData';

interface UsePaginatedTableProps<T> {
    key: string;
    fetcher: (params: PaginatedParams) => Promise<PaginatedResult<T>>;
    initialParams?: Partial<PaginatedParams>;
}

export function usePaginatedTable<T>({
    key,
    fetcher,
    initialParams = {},
}: UsePaginatedTableProps<T>) {
    const [params, setParams] = useState<PaginatedParams>({
        page: 1,
        pageSize: 10,
        orderDir: 'asc',
        orderBy: 'id',
        ...initialParams,
    });

    const { data, total, totalPages, isLoading, error, mutate } = usePaginatedData<T>(key, fetcher, params);

    const handleTableChange: TableProps<T>['onChange'] = (pagination, _, sorter) => {
        setParams((prev) => ({
            ...prev,
            page: pagination.current || 1,
            pageSize: pagination.pageSize || 10,
            orderBy: typeof sorter === 'object' && !Array.isArray(sorter) ? (sorter.field as string) : prev.orderBy,
            orderDir: typeof sorter === 'object' && !Array.isArray(sorter) && sorter.order === 'descend' ? 'desc' : 'asc',
        }));
    };

    return {
        data,
        total,
        totalPages,
        params,
        setParams,
        isLoading,
        error,
        mutate,
        pagination: {
            current: params.page,
            pageSize: params.pageSize,
            total,
            showSizeChanger: true,
        } satisfies TableProps<T>['pagination'],
        handleTableChange,
    };
}