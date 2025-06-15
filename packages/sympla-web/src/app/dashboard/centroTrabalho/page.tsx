'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import CentroTrabalhoForm from './form';
import { CentroTrabalhoFormData, CentroTrabalhoWithRelations } from '@/lib/actions/centroTrabalho/schema';
import { createCentroTrabalho, deleteCentroTrabalho, getAllCentroTrabalhosWithIncludes, updateCentroTrabalho } from '@/lib/actions/centroTrabalho/actionsCentroTrabalho';
import { getAllRegionais } from '@/lib/actions/regional/actionsRegional';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';

export default function CentroTrabalhoPage() {
    const controller = useCrudController<CentroTrabalhoWithRelations>('centroTrabalho');

    const { data: centrosTrabalho, isLoading, error } = useServerData(
        'centroTrabalho',
        unwrapFetcher(getAllCentroTrabalhosWithIncludes)
    );

    const { data: regionals } = useServerData('regional', unwrapFetcher(getAllRegionais));

    const columns = useTableColumnsWithActions<CentroTrabalhoWithRelations>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            { title: 'Regional', dataIndex: ['regional', 'nome'], key: 'regional.nome' },
        ],
        {
            onEdit: controller.open,
            onDelete: (item) => controller.exec(() => deleteCentroTrabalho(item.id), 'Centro de trabalho excluído com sucesso!'),
        }
    );
    const handleSubmit = (values: CentroTrabalhoFormData) => {
        const action = controller.editingItem?.id
            ? () => updateCentroTrabalho({ ...values, id: controller.editingItem!.id })
            : () => createCentroTrabalho(values);

        controller.exec(action, 'Centro de trabalho salvo com sucesso!');
    };

    if (error) return <p style={{ color: 'red' }}>Erro ao carregar centros de trabalho.</p>;

    return (
        <>
            <Card
                title="Centros de Trabalho"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<CentroTrabalhoWithRelations>
                    columns={columns}
                    dataSource={centrosTrabalho ?? []}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar Centro de Trabalho' : 'Novo Centro de Trabalho'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                <CentroTrabalhoForm
                    initialValues={controller.editingItem ?? undefined}
                    onSubmit={handleSubmit}
                    loading={controller.loading}
                    regionals={regionals ?? []}
                />
            </Modal>
        </>
    );
}