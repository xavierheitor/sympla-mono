'use client';

import React, { useState } from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import SubgrupoDefeitoEquipamentoForm from './form';
import SubgrupoDefeitoEquipamentoLoteForm from './formLote';
import {
    SubgrupoDefeitoEquipamentoFormData,
    SubgrupoDefeitoEquipamentoWithRelations,
} from '@/lib/actions/defeito/schema';
import {
    createSubgrupoDefeitoEquipamento,
    deleteSubgrupoDefeitoEquipamento,
    getAllSubgrupoDefeitoEquipamentosWithIncludes,
    updateSubgrupoDefeitoEquipamento,
} from '@/lib/actions/defeito/actionsSubgrupoDefeito';
import { getAllGrupoDefeitoEquipamentos } from '@/lib/actions/defeito/actionsGrupoDefeito';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';

export default function SubgrupoDefeitoEquipamentoPage() {
    const controller = useCrudController<SubgrupoDefeitoEquipamentoWithRelations>('subgrupoDefeitoEquipamento');
    const [loteModalOpen, setLoteModalOpen] = useState(false);

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
                filters: grupos?.map((g) => ({ text: g.nome, value: g.nome })) ?? [],
                filteredValue: subgrupos.params.filters?.['grupo.nome'] ?? null,
                onFilter: (value, record) => record.grupo.nome === value,
                render: (_, record) =>
                    record.grupo.codigo
                        ? `${record.grupo.codigo} - ${record.grupo.nome}`
                        : record.grupo.nome,
            }
        ],
        {
            onEdit: controller.open,
            onDelete: (item) =>
                controller
                    .exec(() => deleteSubgrupoDefeitoEquipamento(item.id), 'Subgrupo excluído com sucesso!')
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
                extra={
                    <>
                        <Button type="primary" onClick={() => controller.open()}>
                            Adicionar
                        </Button>
                        <Button onClick={() => setLoteModalOpen(true)}>Adicionar em Lote</Button>
                    </>
                }
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

            <Modal
                title="Cadastro de Subgrupos em Lote"
                open={loteModalOpen}
                onCancel={() => setLoteModalOpen(false)}
                footer={null}
                destroyOnClose
                width={900}
            >
                <SubgrupoDefeitoEquipamentoLoteForm
                    onSuccess={() => {
                        setLoteModalOpen(false);
                        subgrupos.mutate();
                    }}
                />
            </Modal>
        </>
    );
}