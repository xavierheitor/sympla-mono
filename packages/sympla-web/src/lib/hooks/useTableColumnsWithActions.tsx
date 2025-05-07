// src/lib/hooks/useTableColumnsWithActions.ts
'use client';

import { TableColumnsType } from 'antd';
import TableActionButtons from '../components/TableActionButtons';

export function useTableColumnsWithActions<T>(
  baseColumns: TableColumnsType<T>,
  onEdit: (item: T) => void,
  onDelete: (item: T) => void
): TableColumnsType<T> {
  return [
    ...baseColumns,
    {
      title: 'Ações',
      key: 'actions',
      render: (_, record) => (
        <TableActionButtons
          record={record}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ),
    },
  ];
}