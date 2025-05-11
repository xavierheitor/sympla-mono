'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import { getAllGrupoDefeitoEquipamentos } from '@/lib/actions/grupoDefeitoEquipamento/getAll';
import { getAllSubgrupoDefeitoEquipamentos } from '@/lib/actions/subgrupoDefeitoEquipamento/getAll';
import { getAllGrupoDefeitoCodigos } from '@/lib/actions/grupoDefeitoCodigo/getAll';
import { getAllSubestacoes } from '@/lib/actions/subestacao/getAll';
import { getAllEquipamentosWithIncludes } from '@/lib/actions/equipamento/getAllWithIncludes';
import { deleteEquipamento } from '@/lib/actions/equipamento/delete';
import { updateEquipamento } from '@/lib/actions/equipamento/update';
import { createEquipamento } from '@/lib/actions/equipamento/create';

import EquipamentoForm from './form';
import {
    EquipamentoFormData,
    EquipamentoWithRelations,
} from '@/lib/actions/equipamento/equipamentoFormSchema';

export default function EquipamentoPage() {
    const controller = useCrudController<EquipamentoWithRelations>('equipamentos');

    const { data: equipamentos, isLoading, error } = useServerData(
        'equipamentos',
        getAllEquipamentosWithIncludes
    );

    const { data: grupos } = useServerData('grupoDefeitoEquipamento', getAllGrupoDefeitoEquipamentos);
    const { data: subgrupos } = useServerData('subgrupoDefeitoEquipamento', getAllSubgrupoDefeitoEquipamentos);
    const { data: codigos } = useServerData('grupoDefeitoCodigos', getAllGrupoDefeitoCodigos);
    const { data: subestacoes } = useServerData('subestacao', getAllSubestacoes);

    const columns = useTableColumnsWithActions<EquipamentoWithRelations>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            { title: 'Subestação', dataIndex: ['subestacao', 'nome'], key: 'subestacao.nome' },
            { title: 'Grupo', dataIndex: ['grupo', 'nome'], key: 'grupo.nome' },
            { title: 'Subgrupo', dataIndex: ['subgrupo', 'nome'], key: 'subgrupo.nome' },
            { title: 'Código', dataIndex: ['grupoDefeitoCodigo', 'codigo'], key: 'grupoDefeitoCodigo.codigo' },
        ],
        controller.open,
        (item) => controller.exec(() => deleteEquipamento(item.id), 'Equipamento excluído com sucesso!')
    );

    const handleSubmit = (values: EquipamentoFormData) => {
        const action = controller.editingItem?.id
            ? () => updateEquipamento({ ...values, id: controller.editingItem!.id })
            : () => createEquipamento(values);

        controller.exec(action, 'Equipamento salvo com sucesso!');
    };

    if (error) return <p style={{ color: 'red' }}>Erro ao carregar equipamentos.</p>;

    return (
        <>
            <Card
                title="Equipamentos"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<EquipamentoWithRelations>
                    columns={columns}
                    dataSource={equipamentos?.data ?? []}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar Equipamento' : 'Novo Equipamento'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                <EquipamentoForm
                    initialValues={controller.editingItem ?? undefined}
                    onSubmit={handleSubmit}
                    loading={controller.loading}
                    grupoOptions={grupos?.data ?? []}
                    subgrupoOptions={subgrupos?.data ?? []}
                    codigoOptions={codigos?.data ?? []}
                    subestacaoOptions={subestacoes?.data ?? []}
                />
            </Modal>
        </>
    );
}