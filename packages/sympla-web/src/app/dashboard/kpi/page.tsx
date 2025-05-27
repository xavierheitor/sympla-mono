'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import { getAllKpisWithIncludes } from '@/lib/actions/kpi/getAllWithIncludes';
import { createKpi } from '@/lib/actions/kpi/create';
import { updateKpi } from '@/lib/actions/kpi/update';
import { deleteKpi } from '@/lib/actions/kpi/delete';
import { getAllTipoManutencaos } from '@/lib/actions/tipoManutencao/getAll';

import KpiForm from './form';
import { KpiFormData, KpiWithRelations } from '@/lib/actions/kpi/kpiFormSchema';

export default function KpiPage() {
    const controller = useCrudController<KpiWithRelations>('kpis');

    const { data: kpis, isLoading, error } = useServerData('kpis', getAllKpisWithIncludes);
    const { data: tipos } = useServerData('tipoManutencao', getAllTipoManutencaos);

    const columns = useTableColumnsWithActions<KpiWithRelations>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            { title: 'Tipo de Manutenção', dataIndex: ['tipoManutencao', 'nome'], key: 'tipoManutencao.nome' },
        ],
        controller.open,
        (item) => controller.exec(() => deleteKpi(item.id), 'KPI excluído com sucesso!')
    );

    const handleSubmit = (values: KpiFormData) => {
        const action = controller.editingItem?.id
            ? () => updateKpi({ ...values, id: controller.editingItem!.id })
            : () => createKpi(values);

        controller.exec(action, 'KPI salvo com sucesso!');
    };

    if (error) return <p style={{ color: 'red' }}>Erro ao carregar KPIs.</p>;

    return (
        <>
            <Card
                title="KPIs"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<KpiWithRelations>
                    columns={columns}
                    dataSource={kpis?.data ?? []}
                    loading={isLoading}
                    rowKey="id"
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
                    tipoOptions={tipos?.data ?? []}
                />
            </Modal>
        </>
    );
}