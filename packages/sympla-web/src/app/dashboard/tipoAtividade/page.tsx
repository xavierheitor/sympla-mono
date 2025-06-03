'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import { createTipoAtividade } from '@/lib/actions/atividade/tipoAtividade/create';
import { updateTipoAtividade } from '@/lib/actions/atividade/tipoAtividade/update';
import { deleteTipoAtividade } from '@/lib/actions/atividade/tipoAtividade/delete';
import { getAllKpis } from '@/lib/actions/kpi/getAll';

import TipoAtividadeForm from './form';
import { TipoAtividadeFormData, TipoAtividadeWithKpi } from '@/lib/actions/atividade/tipoAtividade/tipoAtividadeFormSchema';
import { getAllTipoAtividadeEnums } from '@/lib/actions/atividade/tipoAtividade/getAllTipoAtividadeEnums';
import { getAllTipoAtividadesWithIncludes } from '@/lib/actions/atividade/tipoAtividade/getAllWithIncludes';
import { setTipoAtividadeKpi } from '@/lib/actions/atividade/tipoAtividadeKpi/setRelations';

export default function TipoAtividadePage() {
    const controller = useCrudController<TipoAtividadeWithKpi>('tipoAtividade');

    const { data: tipoAtividades, isLoading } = useServerData(
        'tipoAtividades',
        getAllTipoAtividadesWithIncludes
    );

    const { data: kpis } = useServerData('kpis', getAllKpis);
    const { data: tipoMobileOptions } = useServerData('tipoAtividadeMobileEnum', getAllTipoAtividadeEnums);

    const columns = useTableColumnsWithActions<TipoAtividadeWithKpi>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            {
                title: 'Tipo Mobile',
                dataIndex: 'tipoAtividadeMobile',
                key: 'tipoAtividadeMobile',
            },
        ],
        controller.open,
        item => controller.exec(() => deleteTipoAtividade(item.id), 'Tipo de Atividade excluído com sucesso!')
    );

    const handleSubmit = async (values: TipoAtividadeFormData & { kpiIds: string[] }) => {
        const { kpiIds, ...rest } = values;

        const action = async () => {
            const tipoAtividade = controller.editingItem?.id
                ? await updateTipoAtividade({ ...rest, id: controller.editingItem!.id })
                : await createTipoAtividade(rest);

            await setTipoAtividadeKpi({ tipoAtividadeId: tipoAtividade.data!.id, kpiIds });
            return { success: true, data: tipoAtividade.data };
        };

        controller.exec(action, 'Tipo de Atividade salvo com sucesso!');
    };

    return (
        <>
            <Card
                title="Tipos de Atividade"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    columns={columns as any}
                    dataSource={tipoAtividades?.data ?? []}
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
                        initialValues={{
                            ...controller.editingItem,
                            kpiIds: controller.editingItem?.kpis?.map(k => k.id) ?? [],
                        }}
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