'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import { getAllDefeitosWithIncludes } from '@/lib/actions/defeito/getAllWithIncludes';
import { createDefeito } from '@/lib/actions/defeito/create';
import { updateDefeito } from '@/lib/actions/defeito/update';
import { deleteDefeito } from '@/lib/actions/defeito/delete';

import { getAllGrupoDefeitoEquipamentos } from '@/lib/actions/grupoDefeitoEquipamento/getAll';
import { getAllSubgrupoDefeitoEquipamentos } from '@/lib/actions/subgrupoDefeitoEquipamento/getAll';
import { getAllGrupoDefeitoCodigos } from '@/lib/actions/grupoDefeitoCodigo/getAll';

import { DefeitoFormData, DefeitoWithRelations } from '@/lib/actions/defeito/defeitoFormSchema';
import DefeitoForm from './form';



export default function DefeitoPage() {
    const controller = useCrudController<DefeitoWithRelations>('defeitos');

    const { data: defeitos, isLoading, error } = useServerData(
        'defeitos',
        getAllDefeitosWithIncludes
    );

    const { data: grupos } = useServerData('grupoDefeitoEquipamento', getAllGrupoDefeitoEquipamentos);
    const { data: subgrupos } = useServerData('subgrupoDefeitoEquipamento', getAllSubgrupoDefeitoEquipamentos);
    const { data: codigos } = useServerData('grupoDefeitoCodigos', getAllGrupoDefeitoCodigos);

    const columns = useTableColumnsWithActions<DefeitoWithRelations>(
        [
            { title: 'Código SAP', dataIndex: 'codigoSap', key: 'codigoSap' },
            { title: 'Descrição', dataIndex: 'descricao', key: 'descricao' },
            { title: 'Grupo', dataIndex: ['grupo', 'nome'], key: 'grupo.nome' },
            { title: 'Subgrupo', dataIndex: ['subgrupo', 'nome'], key: 'subgrupo.nome' },
            { title: 'Código do Grupo', dataIndex: ['grupoDefeitoCodigo', 'codigo'], key: 'grupoDefeitoCodigo.codigo' },
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
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<DefeitoWithRelations>
                    columns={columns}
                    dataSource={defeitos ?? []}
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
                    codigoOptions={codigos?.data ?? []}
                />
            </Modal>
        </>
    );
}