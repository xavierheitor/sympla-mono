'use client';

import React, { useState } from 'react';
import { Button, Card, Modal, Space, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import DefeitoForm from './form';
import DefeitoLoteForm from './formLote';
import { DefeitoFormData, DefeitoWithRelations } from '@/lib/actions/defeito/schema';
import { createDefeito, deleteDefeito, getAllDefeitosWithIncludes, updateDefeito } from '@/lib/actions/defeito/actionsDefeito';
import { getAllGrupoDefeitoEquipamentos } from '@/lib/actions/defeito/actionsGrupoDefeito';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';
import { getAllSubgrupoDefeitoEquipamentosWithIncludes } from '@/lib/actions/defeito/actionsSubgrupoDefeito';

export default function DefeitoPage() {
    const controller = useCrudController<DefeitoWithRelations>('defeitos');
    const [loteModalOpen, setLoteModalOpen] = useState(false);

    const defeitos = useEntityData<DefeitoWithRelations>({
        key: 'defeitos',
        fetcher: unwrapFetcher(getAllDefeitosWithIncludes),
        paginationEnabled: true,
    });

    const { data: grupos } = useServerData(
        'grupoDefeitoEquipamento',
        unwrapFetcher(getAllGrupoDefeitoEquipamentos)
    );

    const { data: subgrupos } = useServerData(
        'subgrupoDefeitoEquipamento',
        unwrapFetcher(getAllSubgrupoDefeitoEquipamentosWithIncludes)
    );

    const columns = useTableColumnsWithActions<DefeitoWithRelations>(
        [
            {
                title: 'Código SAP',
                dataIndex: 'codigoSap',
                key: 'codigoSap',
                filteredValue: defeitos.params.filters?.codigoSap ?? null,
                onFilter: (value, record) => record.codigoSap.includes(value as string),
                sorter: true,
            },
            {
                title: 'Descrição',
                dataIndex: 'descricao',
                key: 'descricao',
                filteredValue: defeitos.params.filters?.descricao ?? null,
                onFilter: (value, record) => record.descricao.includes(value as string),
                sorter: true,
            },
            {
                title: 'Prioridade',
                dataIndex: 'prioridade',
                key: 'prioridade',
                sorter: true,
            },
            {
                title: 'Grupo',
                dataIndex: ['grupo', 'nome'],
                key: 'grupo.nome',
                filters: grupos?.map((g) => ({
                    text: `${g.codigo ? g.codigo + ' - ' : ''}${g.nome}`,
                    value: g.id,
                })) ?? [],
                filteredValue: defeitos.params.filters?.grupoId ?? null,
                onFilter: (value, record) => record.grupo.id === value,
                render: (_, record) =>
                    record.grupo.codigo
                        ? `${record.grupo.codigo} - ${record.grupo.nome}`
                        : record.grupo.nome,
            },
            {
                title: 'Subgrupo',
                dataIndex: ['subgrupo', 'nome'],
                key: 'subgrupo.nome',
                filters: subgrupos?.map((s) => ({
                    text: `${s.grupo.codigo ? s.grupo.codigo + ' - ' : ''}${s.nome}`,
                    value: s.id,
                })) ?? [],
                filteredValue: defeitos.params.filters?.['subgrupo.nome'] ?? null,
                onFilter: (value, record) => record.subgrupo.nome === value,
                render: (_, record) =>
                    record.subgrupo.grupo.codigo
                        ? `${record.subgrupo.grupo.codigo} - ${record.subgrupo.nome}`
                        : record.subgrupo.nome,
            }
        ],
        {
            onEdit: controller.open,
            onDelete: (item) =>
                controller.exec(() => deleteDefeito(item.id), 'Defeito excluído com sucesso!')
                    .finally(() => defeitos.mutate()),
        }
    );

    const handleSubmit = (values: DefeitoFormData) => {
        const action = controller.editingItem?.id
            ? () => updateDefeito({ ...values, id: controller.editingItem!.id })
            : () => createDefeito(values);

        controller.exec(action, 'Defeito salvo com sucesso!').finally(() => defeitos.mutate());
    };

    if (defeitos.error) return <p style={{ color: 'red' }}>Erro ao carregar defeitos.</p>;

    return (
        <>
            <Card
                title="Defeitos"
                extra={
                    <Space>
                        <Button type="primary" onClick={() => controller.open()}>Adicionar</Button>
                        <Button onClick={() => setLoteModalOpen(true)}>Adicionar em Lote</Button>
                    </Space>
                }
            >
                <Table<DefeitoWithRelations>
                    columns={columns}
                    dataSource={defeitos.data}
                    loading={defeitos.isLoading}
                    rowKey="id"
                    pagination={defeitos.pagination}
                    onChange={(pagination, filters, sorter) => {
                        const sort = Array.isArray(sorter) ? sorter[0] : sorter;
                        // Normaliza os filtros para garantir que grupoId e subgrupoId sejam enviados corretamente
                        const normalizedFilters = {
                            codigoSap: filters.codigoSap as string[] | undefined,
                            descricao: filters.descricao as string[] | undefined,
                            grupoId: filters["grupo.nome"] as string[] | undefined,
                            subgrupoId: filters["subgrupo.nome"] as string[] | undefined,
                        };
                        defeitos.setParams((prev) => ({
                            ...prev,
                            page: pagination.current ?? 1,
                            pageSize: pagination.pageSize ?? prev.pageSize,
                            orderBy: typeof sort?.field === 'string' ? sort.field : prev.orderBy,
                            orderDir: sort?.order === 'ascend' ? 'asc' : sort?.order === 'descend' ? 'desc' : prev.orderDir,
                            filters: normalizedFilters,
                        }));
                    }}
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar Defeito' : 'Novo Defeito'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                <DefeitoForm
                    initialValues={controller.editingItem ?? undefined}
                    onSubmit={handleSubmit}
                    loading={controller.loading}
                    subgrupoOptions={subgrupos ?? []} />
            </Modal>

            <Modal
                title="Adicionar Defeitos em Lote"
                open={loteModalOpen}
                onCancel={() => setLoteModalOpen(false)}
                footer={null}
                width={900}
                destroyOnClose
            >
                <DefeitoLoteForm
                    onSuccess={() => {
                        setLoteModalOpen(false);
                        defeitos.mutate();
                    }}
                    grupoOptions={grupos ?? []} 
                    subgrupoOptions={subgrupos ?? []} />
            </Modal>
        </>
    );
}