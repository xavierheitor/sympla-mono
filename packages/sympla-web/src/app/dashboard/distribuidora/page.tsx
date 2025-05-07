'use client';

import React from 'react';
import useSWR from 'swr';
import { Button, Card, Modal, Table, TableColumnsType, TableProps } from 'antd';
import { Distribuidora } from '@sympla/prisma';
import TableActionButtons from '@/lib/components/TableActionButtons';
import DistribuidoraForm from './form';
import { useCrudModal } from '@/lib/hooks/useCrudModal';
import { handleAction } from '@/lib/hooks/useActionHandler';

import { getAllDistribuidoras } from '@/lib/actions/distribuidora/getAll';
import { createDistribuidora } from '@/lib/actions/distribuidora/create';
import { updateDistribuidora } from '@/lib/actions/distribuidora/update';
import { deleteDistribuidora } from '@/lib/actions/distribuidora/delete';

import { DistribuidoraFormData } from '@/lib/actions/distribuidora/distribuidoraFormData';

export default function DistribuidoraPage() {
    const {
        isOpen: modalOpen,
        editingItem: editingDistribuidora,
        open,
        close,
        loading,
    } = useCrudModal<Distribuidora>();

    const { data: distribuidoras, isLoading, error } = useSWR(
        'distribuidoras',
        async () => {
            const res = await getAllDistribuidoras();
            return res.success ? res.data : [];
        }
    );

    const handleSubmit = (values: DistribuidoraFormData) => {
        const action = editingDistribuidora?.id
            ? () => updateDistribuidora({ ...values, id: editingDistribuidora.id })
            : () => createDistribuidora(values);

        return handleAction({
            action,
            payload: undefined,
            onSuccessMessage: 'Distribuidora salva com sucesso!',
            mutateKey: 'distribuidoras',
            onSuccess: close,
        });
    };

    const handleDelete = (record: Distribuidora) => {
        return handleAction({
            action: () => deleteDistribuidora(record.id),
            payload: undefined,
            onSuccessMessage: 'Distribuidora excluída com sucesso!',
            mutateKey: 'distribuidoras',
        });
    };

    const columns: TableColumnsType<Distribuidora> = [
        { title: 'Nome', dataIndex: 'nome', key: 'nome' },
        { title: 'Descrição', dataIndex: 'descricao', key: 'descricao' },
        { title: 'Código SAP', dataIndex: 'codigoSap', key: 'codigoSap' },
        {
            title: 'Ações',
            key: 'actions',
            render: (_, record) => (
                <TableActionButtons
                    record={record}
                    onEdit={open}
                    onDelete={handleDelete}
                />
            ),
        },
    ];

    const rowSelection: TableProps<Distribuidora>['rowSelection'] = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log('selectedRowKeys:', selectedRowKeys, 'selectedRows:', selectedRows);
        },
    };

    if (error) {
        return <p style={{ color: 'red' }}>Erro ao carregar distribuidoras.</p>;
    }

    return (
        <>
            <Card
                title="Distribuidoras"
                extra={<Button type="primary" onClick={() => open()}>Adicionar</Button>}
                style={{ width: '100%' }}
            >
                <Table<Distribuidora>
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={distribuidoras}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

            <Modal
                title={editingDistribuidora ? 'Editar Distribuidora' : 'Nova Distribuidora'}
                open={modalOpen}
                onCancel={close}
                footer={null}
                destroyOnClose
            >
                <DistribuidoraForm
                    initialValues={editingDistribuidora ?? undefined}
                    onSubmit={handleSubmit}
                    loading={loading}
                />
            </Modal>
        </>
    );
}