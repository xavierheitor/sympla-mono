'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import { createTipoAtividade } from '@/lib/actions/tipoAtividade/create';
import { updateTipoAtividade } from '@/lib/actions/tipoAtividade/update';
import { deleteTipoAtividade } from '@/lib/actions/tipoAtividade/delete';
import { getAllKpis } from '@/lib/actions/kpi/getAll';

import TipoAtividadeForm from './form';
import { TipoAtividadeFormData, TipoAtividadeWithKpi } from '@/lib/actions/tipoAtividade/tipoAtividadeFormSchema';
import { getAllTipoAtividadeEnums } from '@/lib/actions/tipoAtividade/getAllTipoAtividadeEnums';
import { getAllTipoAtividadesWithIncludes } from '@/lib/actions/tipoAtividade/getAllWithIncludes';

export default function TipoAtividadePage() {
    const controller = useCrudController<TipoAtividadeWithKpi>('tipoAtividade');

    const { data: tipoAtividades, isLoading, error } = useServerData(
        'tipoAtividades',
        getAllTipoAtividadesWithIncludes
    );

    const { data: kpis } = useServerData('kpis', getAllKpis);
    const { data: tipoMobileOptions } = useServerData('tipoAtividadeMobileEnum', getAllTipoAtividadeEnums);

    const columns = useTableColumnsWithActions<TipoAtividadeWithKpi>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            {
                title: 'KPI',
                dataIndex: ['kpi', 'nome'],
                key: 'kpi.nome',
            },
            {
                title: 'Tipo Mobile',
                dataIndex: 'tipoAtividadeMobile',
                key: 'tipoAtividadeMobile',
            },
        ],
        controller.open,
        (item) => controller.exec(() => deleteTipoAtividade(item.id), 'Tipo de Atividade excluído com sucesso!')
    );

    const handleSubmit = (values: TipoAtividadeFormData) => {
        const action = controller.editingItem?.id
            ? () => updateTipoAtividade({ ...values, id: controller.editingItem!.id })
            : () => createTipoAtividade(values);

        controller.exec(action, 'Tipo de Atividade salvo com sucesso!');
    };

    if (error) {
        return <p style={{ color: 'red' }}>Erro ao carregar tipos de atividade.</p>;
    }

    return (
        <>
            <Card
                title="Tipos de Atividade"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<TipoAtividadeWithKpi>
                    columns={columns}
                    dataSource={tipoAtividades ?? []}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar Tipo de Atividade' : 'Novo Tipo de Atividade'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                {kpis && tipoMobileOptions && (
                    <TipoAtividadeForm
                        initialValues={controller.editingItem ?? undefined}
                        onSubmit={handleSubmit}
                        loading={controller.loading}
                        kpiOptions={kpis.data ?? []}
                        tipoMobileOptions={tipoMobileOptions}
                    />
                )}
            </Modal>
        </>
    );
}