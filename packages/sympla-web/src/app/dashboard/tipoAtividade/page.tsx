'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import TipoAtividadeForm from './form';
import { createTipoAtividade, deleteTipoAtividade, updateTipoAtividade, getAllTipoAtividadesWithIncludes, getAllTipoAtividadeEnums, setTipoAtividadeKpi } from '@/lib/actions/atividade/actionsTipoAtividade';
import { TipoAtividadeFormData, TipoAtividadeWithKpi } from '@/lib/actions/atividade/schema';
import { getAllKpis } from '@/lib/actions/kpi/actionsKpi';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';

export default function TipoAtividadePage() {
    const controller = useCrudController<TipoAtividadeWithKpi>('tipoAtividade');

    const tipoAtividades = useEntityData<TipoAtividadeWithKpi>({
        key: 'tipoAtividade',
        fetcher: unwrapFetcher(() => getAllTipoAtividadesWithIncludes()),
        paginationEnabled: true,
    });

    const { data: kpis } = useServerData('kpis', unwrapFetcher(getAllKpis));
    const { data: tipoMobileOptions } = useServerData('tipoAtividadeMobileEnum', getAllTipoAtividadeEnums);

    const columns = useTableColumnsWithActions<TipoAtividadeWithKpi>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome', sorter: true },
            { title: 'Tipo Mobile', dataIndex: 'tipoAtividadeMobile', key: 'tipoAtividadeMobile' },
        ],
        {
            onEdit: controller.open,
            onDelete: (item) => controller.exec(() => deleteTipoAtividade(item.id), 'Tipo de Atividade excluído com sucesso!').finally(() => tipoAtividades.mutate()),
        }
    );

    const handleSubmit = async (values: TipoAtividadeFormData & { kpiIds: string[] }) => {
        const { kpiIds, ...rest } = values;

        const action = async () => {
            const tipoAtividade = controller.editingItem?.id
                ? await updateTipoAtividade({ ...rest, id: controller.editingItem.id })
                : await createTipoAtividade(rest);

            await setTipoAtividadeKpi({ tipoAtividadeId: tipoAtividade.data!.id, kpiIds });
            return { success: true, data: tipoAtividade.data };
        };

        controller.exec(action, 'Tipo de Atividade salvo com sucesso!').finally(() => tipoAtividades.mutate());
    };

    if (tipoAtividades.error) return <p style={{ color: 'red' }}>Erro ao carregar dados.</p>;

    return (
        <>
            <Card title="Tipos de Atividade" extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}>
                <Table<TipoAtividadeWithKpi>
                    columns={columns}
                    dataSource={tipoAtividades.data}
                    loading={tipoAtividades.isLoading}
                    rowKey="id"
                    pagination={tipoAtividades.pagination}
                    onChange={tipoAtividades.handleTableChange}
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
                            kpiIds: controller.editingItem?.tipoAtividadeKpi?.map(k => k.kpiId) ?? [],
                        }}
                        onSubmit={handleSubmit}
                        loading={controller.loading}
                        kpiOptions={kpis ?? []}
                        tipoMobileOptions={tipoMobileOptions ?? []}
                    />
                )}
            </Modal>
        </>
    );
}