'use client';

import React, { useState } from 'react';
import { Button, Card, Modal, Table, Space } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import { DefeitoFormData, DefeitoWithRelations } from '@/lib/actions/defeito/schema';
import DefeitoForm from './form';
import { createDefeito, deleteDefeito, getAllDefeitosWithIncludes, updateDefeito } from '@/lib/actions/defeito/actionsDefeito';
import DefeitoLoteForm from './formLote';
import { getAllGrupoDefeitoEquipamentos } from '@/lib/actions/defeito/actionsGrupoDefeito';
import { getAllSubgrupoDefeitoEquipamentosWithIncludes } from '@/lib/actions/defeito/actionsSubgrupoDefeito';

export default function DefeitoPage() {
    const controller = useCrudController<DefeitoWithRelations>('defeitos');

    const [loteModalOpen, setLoteModalOpen] = useState(false);

    const { data: defeitos, isLoading, error, mutate } = useServerData(
        'defeitos',
        getAllDefeitosWithIncludes
    );

    const { data: grupos } = useServerData('grupoDefeitoEquipamento', getAllGrupoDefeitoEquipamentos);
    const { data: subgrupos } = useServerData('subgrupoDefeitoEquipamento', getAllSubgrupoDefeitoEquipamentosWithIncludes);

    const columns = useTableColumnsWithActions<DefeitoWithRelations>(
        [
            {
                title: 'Código SAP',
                dataIndex: 'codigoSap',
                key: 'codigoSap',
                sorter: (a, b) => a.codigoSap.localeCompare(b.codigoSap),
                sortDirections: ['descend', 'ascend'],
            },
            {
                title: 'Prioridade',
                dataIndex: 'prioridade',
                key: 'prioridade',
                sorter: (a, b) => a.prioridade?.localeCompare(b.prioridade ?? '') ?? 0,
                sortDirections: ['descend', 'ascend'],
            },
            {
                title: 'Descrição',
                dataIndex: 'descricao',
                key: 'descricao',
                sorter: (a, b) => a.descricao.localeCompare(b.descricao),
                sortDirections: ['descend', 'ascend'],
            },
            {
                title: 'Grupo',
                dataIndex: ['grupo', 'nome'],
                key: 'grupo.nome',
                filters: grupos?.data?.map((g) => ({
                    text: `${g.codigo ? g.codigo + ' - ' : ''}${g.nome}`,
                    value: g.nome,
                })) ?? [],
                onFilter: (value, record) => record.grupo.nome.includes(value as string),
                sorter: (a, b) => a.grupo.nome.localeCompare(b.grupo.nome),
                sortDirections: ['descend', 'ascend'],
                render: (_, record) => `${record.grupo.codigo ? record.grupo.codigo + ' - ' : ''}${record.grupo.nome}`,
            },
            {
                title: 'Subgrupo',
                dataIndex: ['subgrupo', 'nome'],
                key: 'subgrupo.nome',
                filters: subgrupos?.data?.map((s) => ({
                    text: `${s.grupo.codigo ? s.grupo.codigo + ' - ' : ''}${s.nome}`,
                    value: s.nome,
                })) ?? [],
                onFilter: (value, record) => record.subgrupo.nome.includes(value as string),
                sorter: (a, b) => a.subgrupo.nome.localeCompare(b.subgrupo.nome),
                sortDirections: ['descend', 'ascend'],
                render: (_, record) => `${record.subgrupo.grupo.codigo ? record.subgrupo.grupo.codigo + ' - ' : ''}${record.subgrupo.nome}`,
            },
        ],
        controller.open,
        (item) =>
            controller.exec(() => deleteDefeito(item.id), 'Defeito excluído com sucesso!')
    );

    const handleSubmit = (values: DefeitoFormData) => {
        const action = controller.editingItem?.id
            ? () => updateDefeito({ ...values, id: controller.editingItem!.id })
            : () => createDefeito(values);

        controller.exec(action, 'Defeito salvo com sucesso!');
    };

    if (error) return <p style={{ color: 'red' }}>Erro ao carregar defeitos.</p>;

    return (
        <>
            <Card
                title="Defeitos"
                extra={
                    <Space>
                        <Button type="primary" onClick={() => controller.open()}>
                            Adicionar
                        </Button>
                        <Button onClick={() => setLoteModalOpen(true)}>
                            Adicionar em Lote
                        </Button>
                    </Space>
                }
            >
                <Table<DefeitoWithRelations>
                    columns={columns}
                    dataSource={defeitos?.data ?? []}
                    loading={isLoading}
                    rowKey="id"
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
                    grupoOptions={grupos?.data ?? []}
                    subgrupoOptions={subgrupos?.data ?? []}
                />
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
                        mutate(); // 🔥 Atualiza a tabela após salvar
                    }}
                    grupoOptions={grupos?.data ?? []}
                    subgrupoOptions={subgrupos?.data ?? []}
                />
            </Modal>
        </>
    );
}