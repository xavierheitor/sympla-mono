'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import TecnicoForm from './form';
import { TecnicoFormData } from '@/lib/actions/tecnico/schema';
import { createTecnico, deleteTecnico, getAllTecnicos, updateTecnico } from '@/lib/actions/tecnico/actionsTecnico';

export default function TecnicoPage() {
    const controller = useCrudController<TecnicoFormData>('tecnico');

    const { data: tecnicos, isLoading, error } = useServerData('tecnico', getAllTecnicos);

    const columns = useTableColumnsWithActions<TecnicoFormData>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            { title: 'Email', dataIndex: 'email', key: 'email' },
            { title: 'Telefone', dataIndex: 'telefone', key: 'telefone' },
            { title: 'CPF', dataIndex: 'cpf', key: 'cpf' },
            { title: 'RG', dataIndex: 'rg', key: 'rg' },
        ],
        controller.open,
        (item) => controller.exec(() => deleteTecnico(item.id ?? ''), 'Técnico excluído com sucesso!')
    );

    const handleSubmit = (values: TecnicoFormData) => {
        const action = controller.editingItem?.id
            ? () => updateTecnico({ ...values, id: controller.editingItem!.id })
            : () => createTecnico(values);

        controller.exec(action, 'Técnico salvo com sucesso!');
    };

    if (error) return <p style={{ color: 'red' }}>Erro ao carregar técnicos.</p>;

    return (
        <>
            <Card
                title="Técnicos"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<TecnicoFormData>
                    columns={columns}
                    dataSource={tecnicos?.data ?? []}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar Técnico' : 'Novo Técnico'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                <TecnicoForm
                    initialValues={controller.editingItem ?? undefined}
                    onSubmit={handleSubmit}
                    loading={controller.loading}
                />
            </Modal>
        </>
    );
}