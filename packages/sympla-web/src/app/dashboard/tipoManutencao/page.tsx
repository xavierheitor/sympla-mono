'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { TipoManutencao } from '@sympla/prisma';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import TipoManutencaoForm, { TipoManutencaoFormData } from './form';
import { createTipoManutencao, deleteTipoManutencao, getAllTipoManutencaos, updateTipoManutencao } from '@/lib/actions/tipoManutencao/actionsTipoManutencao';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';
import { ActionResult } from '@/lib/types/ActionTypes';

export default function TipoManutencaoPage() {
    const controller = useCrudController<TipoManutencao>('tipoManutencao');

    const tipos = useEntityData<TipoManutencao>({
        key: 'tipoManutencao',
        fetcher: unwrapFetcher(getAllTipoManutencaos),
        paginationEnabled: true,
    });

    const columns = useTableColumnsWithActions<TipoManutencao>(
        [{ title: 'Nome', dataIndex: 'nome', key: 'nome' }],
        {
            onEdit: controller.open,
            onDelete: (item) => controller.exec(() => deleteTipoManutencao(item.id), 'Tipo de manutenção excluído com sucesso!').finally(() => tipos.mutate()),
        }
    );

    const handleSubmit = async (values: TipoManutencaoFormData) => {
        const action = async (): Promise<ActionResult<TipoManutencao>> => {
            const tipo = controller.editingItem?.id
                ? await updateTipoManutencao({ ...values, id: controller.editingItem.id })
                : await createTipoManutencao(values);

            return { success: true, data: tipo.data };
        };

        controller.exec(action, 'Tipo de manutenção salvo com sucesso!').finally(() => tipos.mutate());
    };

    if (tipos.error) {
        return <p style={{ color: 'red' }}>Erro ao carregar tipos de manutenção.</p>;
    }

    return (
        <>
            <Card
                title="Tipos de Manutenção"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<TipoManutencao>
                    columns={columns}
                    dataSource={tipos.data}
                    loading={tipos.isLoading}
                    rowKey="id"
                    pagination={tipos.pagination}
                    onChange={tipos.handleTableChange}
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