'use client';

import { useState } from 'react';
import useSWR from 'swr';
import { TableProps } from 'antd';
import { PaginatedParams, PaginatedResult } from '../types/ActionTypes';

interface UseEntityDataOptions<T> {
    key: string;
    fetcher: (params?: PaginatedParams) => Promise<PaginatedResult<T> | T[]>;
    initialParams?: Partial<PaginatedParams>;
    paginationEnabled?: boolean;
}

export function useEntityData<T>({
    key,
    fetcher,
    initialParams = {},
    paginationEnabled = false,
}: UseEntityDataOptions<T>) {
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

    return {
        data: result.data,
        total: result.total,
        totalPages: result.totalPages,
        params,
        setParams,
        isLoading,
        error,
        mutate,
        pagination: paginationEnabled
            ? ({
                current: params.page,
                pageSize: params.pageSize,
                total: result.total,
                showSizeChanger: true,
            } satisfies TableProps<T>['pagination'])
            : false,
        handleTableChange,
    };
}