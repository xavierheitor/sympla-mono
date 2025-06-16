'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import SubgrupoDefeitoEquipamentoForm from './form';
import { SubgrupoDefeitoEquipamentoFormData, SubgrupoDefeitoEquipamentoWithRelations } from '@/lib/actions/defeito/schema';
import { createSubgrupoDefeitoEquipamento, deleteSubgrupoDefeitoEquipamento, getAllSubgrupoDefeitoEquipamentosWithIncludes, updateSubgrupoDefeitoEquipamento } from '@/lib/actions/defeito/actionsSubgrupoDefeito';
import { getAllGrupoDefeitoEquipamentos } from '@/lib/actions/defeito/actionsGrupoDefeito';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';

export default function SubgrupoDefeitoEquipamentoPage() {
    const controller = useCrudController<SubgrupoDefeitoEquipamentoWithRelations>('subgrupoDefeitoEquipamento');

    const subgrupos = useEntityData<SubgrupoDefeitoEquipamentoWithRelations>({
        key: 'subgrupoDefeitoEquipamento',
        fetcher: unwrapFetcher(getAllSubgrupoDefeitoEquipamentosWithIncludes),
        paginationEnabled: true,
    });

    const { data: grupos } = useServerData(
        'grupoDefeitoEquipamento',
        unwrapFetcher(getAllGrupoDefeitoEquipamentos)
    );

    const columns = useTableColumnsWithActions<SubgrupoDefeitoEquipamentoWithRelations>(
        [
            {
                title: 'Nome',
                dataIndex: 'nome',
                key: 'nome',
                filteredValue: subgrupos.params.filters?.nome ?? null,
                onFilter: (value, record) => record.nome.includes(value as string),
                sorter: true,
            },
            {
                title: 'Grupo',
                dataIndex: ['grupo', 'nome'],
                key: 'grupo.nome',
                filters: grupos?.map((g) => ({ text: g.nome, value: g.id })) ?? [],
                filteredValue: subgrupos.params.filters?.grupoId ?? null,
                onFilter: (value, record) => record.grupo.id === value,
            },
        ],
        {
            onEdit: controller.open,
            onDelete: (item) =>
                controller.exec(() => deleteSubgrupoDefeitoEquipamento(item.id), 'Subgrupo excluído com sucesso!')
                    .finally(() => subgrupos.mutate()),
        }
    );

    const handleSubmit = (values: SubgrupoDefeitoEquipamentoFormData) => {
        const action = controller.editingItem?.id
            ? () => updateSubgrupoDefeitoEquipamento({ ...values, id: controller.editingItem!.id })
            : () => createSubgrupoDefeitoEquipamento(values);

        controller.exec(action, 'Subgrupo salvo com sucesso!').finally(() => subgrupos.mutate());
    };

    if (subgrupos.error) return <p style={{ color: 'red' }}>Erro ao carregar subgrupos.</p>;

    return (
        <>
            <Card
                title="Subgrupos de Defeito"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<SubgrupoDefeitoEquipamentoWithRelations>
                    columns={columns}
                    dataSource={subgrupos.data}
                    loading={subgrupos.isLoading}
                    rowKey="id"
                    pagination={subgrupos.pagination}
                    onChange={subgrupos.handleTableChange}
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar Subgrupo' : 'Novo Subgrupo'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                <SubgrupoDefeitoEquipamentoForm
                    initialValues={controller.editingItem ?? undefined}
                    onSubmit={handleSubmit}
                    loading={controller.loading}
                    grupoOptions={grupos ?? []}
                />
            </Modal>
        </>
    );
}