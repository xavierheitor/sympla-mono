'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import { getAllGrupoDefeitoCodigosWithIncludes } from '@/lib/actions/grupoDefeitoCodigo/getAllWithIncludes';
import { createGrupoDefeitoCodigo } from '@/lib/actions/grupoDefeitoCodigo/create';
import { updateGrupoDefeitoCodigo } from '@/lib/actions/grupoDefeitoCodigo/update';
import { deleteGrupoDefeitoCodigo } from '@/lib/actions/grupoDefeitoCodigo/delete';
import { getAllGrupoDefeitoEquipamentos } from '@/lib/actions/grupoDefeitoEquipamento/getAll';

import GrupoDefeitoCodigoForm from './form';
import { GrupoDefeitoCodigoFormData } from '@/lib/actions/grupoDefeitoCodigo/grupoDefeitoCodigoFormSchema';
import { GrupoDefeitoCodigo, GrupoDefeitoEquipamento } from '@sympla/prisma';

type CodigoWithGrupo = GrupoDefeitoCodigo & { grupo: GrupoDefeitoEquipamento };

export default function GrupoDefeitoCodigoPage() {
    const controller = useCrudController<CodigoWithGrupo>('grupoDefeitoCodigo');

    const { data: codigos, isLoading, error } = useServerData(
        'grupoDefeitoCodigo',
        getAllGrupoDefeitoCodigosWithIncludes
    );

    const { data: grupos } = useServerData(
        'grupoDefeitoEquipamento',
        getAllGrupoDefeitoEquipamentos
    );

    const columns = useTableColumnsWithActions<CodigoWithGrupo>(
        [
            { title: 'Sigla', dataIndex: 'sigla', key: 'sigla' },
            { title: 'Código', dataIndex: 'codigo', key: 'codigo' },
            {
                title: 'Grupo',
                dataIndex: ['grupo', 'nome'],
                key: 'grupo.nome',
            },
        ],
        controller.open,
        (item) =>
            controller.exec(
                () => deleteGrupoDefeitoCodigo(item.id),
                'Código excluído com sucesso!'
            )
    );

    const handleSubmit = (values: GrupoDefeitoCodigoFormData) => {
        const action = controller.editingItem?.id
            ? () => updateGrupoDefeitoCodigo({ ...values, id: controller.editingItem!.id })
            : () => createGrupoDefeitoCodigo(values);

        controller.exec(action, 'Código salvo com sucesso!');
    };

    if (error) return <p style={{ color: 'red' }}>Erro ao carregar códigos.</p>;

    return (
        <>
            <Card
                title="Códigos de Grupo de Defeito"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<CodigoWithGrupo>
                    columns={columns}
                    dataSource={codigos?.data ?? []}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar Código' : 'Novo Código'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                <GrupoDefeitoCodigoForm
                    initialValues={controller.editingItem ?? undefined}
                    onSubmit={handleSubmit}
                    loading={controller.loading}
                    grupoOptions={grupos?.data ?? []}
                />
            </Modal>
        </>
    );
}