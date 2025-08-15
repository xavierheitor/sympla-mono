// src/lib/hooks/useTableColumnsWithActions.ts
'use client';

import { TableColumnsType } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space, Tooltip } from 'antd';
import React from 'react';

interface TableActionButtonsProps<T> {
  record: T;
  onEdit?: (record: T) => void;
  onDelete?: (record: T) => Promise<void> | void;
  customActions?: React.ReactNode;
}

function TableActionButtons<T>({
  record,
  onEdit,
  onDelete,
  customActions,
}: TableActionButtonsProps<T>) {
  return (
    <Space>
      {onEdit && (
        <Tooltip title='Editar'>
          <Button icon={<EditOutlined />} size='small' onClick={() => onEdit(record)} />
        </Tooltip>
      )}
      {onDelete && (
        <Popconfirm
          title='Tem certeza que deseja excluir este item?'
          onConfirm={() => onDelete(record)}
          okText='Sim'
          cancelText='Cancelar'
        >
          <Tooltip title='Excluir'>
            <Button icon={<DeleteOutlined />} size='small' danger />
          </Tooltip>
        </Popconfirm>
      )}
      {customActions}
    </Space>
  );
}

export function useTableColumnsWithActions<T>(
  baseColumns: TableColumnsType<T>,
  options: {
    onEdit?: (record: T) => void;
    onDelete?: (record: T) => Promise<void> | void;
    customActions?: (record: T) => React.ReactNode;
  },
): TableColumnsType<T> {
  return [
    ...baseColumns,
    {
      title: 'Ações',
      key: 'actions',
      render: (_, record) => (
        <TableActionButtons
          record={record}
          onEdit={options.onEdit}
          onDelete={options.onDelete}
          customActions={options.customActions?.(record)}
        />
      ),
    },
  ];
}
