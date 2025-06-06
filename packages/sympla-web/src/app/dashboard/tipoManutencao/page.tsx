'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { TipoManutencao } from '@sympla/prisma';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import TipoManutencaoForm, { TipoManutencaoFormData } from './form';
import { createTipoManutencao, deleteTipoManutencao, getAllTipoManutencaos, updateTipoManutencao } from '@/lib/actions/tipoManutencao/actionsTipoManutencao';

export default function TipoManutencaoPage() {
    const controller = useCrudController<TipoManutencao>('tipoManutencao');

    const { data: tipos, isLoading, error } = useServerData(
        'tipoManutencao',
        getAllTipoManutencaos
    );

    const columns = useTableColumnsWithActions<TipoManutencao>(
        [{ title: 'Nome', dataIndex: 'nome', key: 'nome' }],
        controller.open,
        (item) =>
            controller.exec(() => deleteTipoManutencao(item.id), 'Tipo de manutenção excluído com sucesso!')
    );

    const handleSubmit = (values: TipoManutencaoFormData) => {
        const action = controller.editingItem?.id
            ? () => updateTipoManutencao({ ...values, id: controller.editingItem!.id })
            : () => createTipoManutencao(values);

        controller.exec(action, 'Tipo de manutenção salvo com sucesso!');
    };

    if (error) return <p style={{ color: 'red' }}>Erro ao carregar tipos de manutenção.</p>;

    return (
        <>
            <Card
                title="Tipos de Manutenção"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<TipoManutencao>
                    columns={columns}
                    dataSource={tipos?.data ?? []}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar Tipo de Manutenção' : 'Novo Tipo de Manutenção'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                <TipoManutencaoForm
                    initialValues={controller.editingItem ?? undefined}
                    onSubmit={handleSubmit}
                    loading={controller.loading}
                />
            </Modal>
        </>
    );
}