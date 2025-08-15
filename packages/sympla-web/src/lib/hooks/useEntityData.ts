'use client';

import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { TableProps } from 'antd';
import { PaginatedParams, PaginatedResult } from '../types/ActionTypes';

type UseEntityDataPaginated<T> = {
  data: T[];
  total: number;
  totalPages: number;
  params: PaginatedParams;
  setParams: React.Dispatch<React.SetStateAction<PaginatedParams>>;
  isLoading: boolean;
  error: unknown;
  mutate: () => void;
  mutateKey: [string, PaginatedParams];
  pagination: TableProps<T>['pagination'];
  handleTableChange: TableProps<T>['onChange'];
};

type UseEntityDataSimple<T> = {
  data: T[];
  isLoading: boolean;
  error: unknown;
  mutate: () => void;
  mutateKey: string;
};

export function useEntityData<T>(options: {
  key: string;
  fetcher: (params?: PaginatedParams) => Promise<PaginatedResult<T> | T[]>;
  initialParams?: Partial<PaginatedParams>;
  paginationEnabled: true;
}): UseEntityDataPaginated<T>;

export function useEntityData<T>(options: {
  key: string;
  fetcher: (params?: PaginatedParams) => Promise<PaginatedResult<T> | T[]>;
  initialParams?: Partial<PaginatedParams>;
  paginationEnabled?: false;
}): UseEntityDataSimple<T>;

// Implementação
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

  // 🧪 Log de params usados
  useEffect(() => {
    console.log(`[useEntityData] 🧪 Parâmetros atualizados para ${key}:`, params);
  }, [params]);

  const swrKey = paginationEnabled ? [key, params] : key;

  const { data, error, isLoading, mutate } = useSWR(swrKey, () =>
    fetcher(paginationEnabled ? params : undefined),
  );

  const result = Array.isArray(data)
    ? { data, total: data.length, totalPages: 1 }
    : {
        data: data?.data ?? [],
        total: data?.total ?? 0,
        totalPages: data?.totalPages ?? 0,
      };

  // 🧪 Log de resposta dos dados
  useEffect(() => {
    if (data) {
      console.log(`[useEntityData] 📦 Dados carregados para ${key}:`, result);
    }
  }, [data]);

  const handleTableChange: TableProps<T>['onChange'] = (pagination, filters, sorter) => {
    const field = !Array.isArray(sorter) && sorter?.field;
    const order = !Array.isArray(sorter) && sorter?.order;

    console.log(`[useEntityData] 🎯 Filtros recebidos do AntD (${key}):`, filters);
    console.log(`[useEntityData] 🎯 Ordenação recebida:`, field, order);

    setParams((prev) => ({
      ...prev,
      page: pagination.current || 1,
      pageSize: pagination.pageSize || 10,
      orderBy: typeof field === 'string' ? field : prev.orderBy,
      orderDir: order === 'descend' ? 'desc' : 'asc',
      filters: filters,
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
      mutateKey: swrKey,
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
    mutateKey: swrKey,
  };
}
