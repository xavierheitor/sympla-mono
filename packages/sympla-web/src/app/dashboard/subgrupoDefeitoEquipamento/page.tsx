'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import { getAllSubgrupoDefeitoEquipamentosWithIncludes } from '@/lib/actions/subgrupoDefeitoEquipamento/getAllWithIncludes';
import { createSubgrupoDefeitoEquipamento } from '@/lib/actions/subgrupoDefeitoEquipamento/create';
import { updateSubgrupoDefeitoEquipamento } from '@/lib/actions/subgrupoDefeitoEquipamento/update';
import { deleteSubgrupoDefeitoEquipamento } from '@/lib/actions/subgrupoDefeitoEquipamento/delete';

import SubgrupoDefeitoEquipamentoForm from './form';
import { SubgrupoDefeitoEquipamentoFormData } from '@/lib/actions/subgrupoDefeitoEquipamento/subgrupoDefeitoEquipamentoFormSchema';
import { GrupoDefeitoEquipamento, SubgrupoDefeitoEquipamento } from '@sympla/prisma';

type SubgrupoWithGrupo = SubgrupoDefeitoEquipamento & { grupo: GrupoDefeitoEquipamento };

export default function SubgrupoDefeitoEquipamentoPage() {
    const controller = useCrudController<SubgrupoWithGrupo>('subgrupoDefeitoEquipamento');

    const { data: subgrupos, isLoading, error } = useServerData(
        'subgrupos',
        getAllSubgrupoDefeitoEquipamentosWithIncludes
    );

    const { data: grupos } = useServerData(
        'gruposDefeito',
        async () => {
            const all = await import('@/lib/actions/grupoDefeitoEquipamento/getAll');
            return all.getAllGrupoDefeitoEquipamentos();
        }
    );

    const columns = useTableColumnsWithActions<SubgrupoWithGrupo>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            {
                title: 'Grupo',
                dataIndex: ['grupo', 'nome'],
                key: 'grupo.nome',
                filters: grupos?.data?.map((g) => ({
                    text: g.nome,
                    value: g.nome,
                })) ?? [],
                onFilter: (value, record) => record.grupo.nome.includes(value as string),
                sorter: (a, b) => a.grupo.nome.localeCompare(b.grupo.nome),
                sortDirections: ['descend'],
                render: (text, record) => `${record.grupo.codigo} - ${record.nome}`,
            }
        ],
        controller.open,
        (item) =>
            controller.exec(
                () => deleteSubgrupoDefeitoEquipamento(item.id),
                'Subgrupo excluído com sucesso!'
            )
    );

    const handleSubmit = (values: SubgrupoDefeitoEquipamentoFormData) => {
        const action = controller.editingItem?.id
            ? () => updateSubgrupoDefeitoEquipamento({ ...values, id: controller.editingItem!.id })
            : () => createSubgrupoDefeitoEquipamento(values);

        controller.exec(action, 'Subgrupo salvo com sucesso!');
    };

    if (error) return <p style={{ color: 'red' }}>Erro ao carregar subgrupos.</p>;

    return (
        <>
            <Card
                title="Subgrupos de Defeito"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<SubgrupoWithGrupo>
                    columns={columns}
                    dataSource={subgrupos?.data ?? []}
                    loading={isLoading}
                    rowKey="id"
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
                    grupoOptions={grupos?.data ?? []}
                />
            </Modal>
        </>
    );
}