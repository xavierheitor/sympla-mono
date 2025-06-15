'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import KpiForm from './form';
import { KpiFormData, KpiWithRelations } from '@/lib/actions/kpi/schema';
import { createKpi, deleteKpi, getAllKpisWithIncludes, updateKpi } from '@/lib/actions/kpi/actionsKpi';
import { getAllTipoManutencaos } from '@/lib/actions/tipoManutencao/actionsTipoManutencao';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';
import { ActionResult } from '@/lib/types/ActionTypes';

export default function KpiPage() {
    const controller = useCrudController<KpiWithRelations>('kpis');

    const kpis = useEntityData<KpiWithRelations>({
        key: 'kpis',
        fetcher: unwrapFetcher(getAllKpisWithIncludes),
        paginationEnabled: true,
    });

    const { data: tipos } = useServerData('tipoManutencao', unwrapFetcher(getAllTipoManutencaos));

    const columns = useTableColumnsWithActions<KpiWithRelations>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            { title: 'Tipo de Manutenção', dataIndex: ['tipoManutencao', 'nome'], key: 'tipoManutencao.nome' },
        ],
        {
            onEdit: controller.open,
            onDelete: (item) => controller.exec(() => deleteKpi(item.id), 'KPI excluído com sucesso!').finally(() => kpis.mutate()),
        }
    );

    const handleSubmit = async (values: KpiFormData) => {
        const action = async (): Promise<ActionResult<KpiWithRelations>> => {
            const kpi = controller.editingItem?.id
                ? await updateKpi({ ...values, id: controller.editingItem.id })
                : await createKpi(values);

            return { success: true, data: kpi.data };
        };

        controller.exec(action, 'KPI salvo com sucesso!').finally(() => kpis.mutate());
    };

    if (kpis.error) return <p style={{ color: 'red' }}>Erro ao carregar KPIs.</p>;

    return (
        <>
            <Card
                title="KPIs"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<KpiWithRelations>
                    columns={columns}
                    dataSource={kpis.data}
                    loading={kpis.isLoading}
                    rowKey="id"
                    pagination={kpis.pagination}
                    onChange={kpis.handleTableChange}
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar KPI' : 'Novo KPI'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                <KpiForm
                    initialValues={controller.editingItem ?? undefined}
                    onSubmit={handleSubmit}
                    loading={controller.loading}
                    tipoOptions={tipos ?? []}
                />
            </Modal>
        </>
    );
}