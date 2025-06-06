'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import GrupoDefeitoEquipamentoForm from './form';
import { GrupoDefeitoEquipamento } from '@sympla/prisma';
import { createGrupoDefeitoEquipamento, deleteGrupoDefeitoEquipamento, getAllGrupoDefeitoEquipamentos, updateGrupoDefeitoEquipamento } from '@/lib/actions/defeito/actionsGrupoDefeito';
import { GrupoDefeitoEquipamentoFormData } from '@/lib/actions/defeito/schema';

export default function GrupoDefeitoEquipamentoPage() {
    const controller = useCrudController<GrupoDefeitoEquipamento>('grupoDefeitoEquipamento');

    const { data, isLoading, error } = useServerData(
        'grupoDefeitoEquipamento',
        getAllGrupoDefeitoEquipamentos
    );

    const columns = useTableColumnsWithActions<GrupoDefeitoEquipamento>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            { title: 'Código', dataIndex: 'codigo', key: 'codigo' }
        ],
        controller.open,
        (item) => controller.exec(() => deleteGrupoDefeitoEquipamento(item.id), 'Grupo excluído com sucesso!')
    );

    const handleSubmit = (values: GrupoDefeitoEquipamentoFormData) => {
        const action = controller.editingItem?.id
            ? () => updateGrupoDefeitoEquipamento({ ...values, id: controller.editingItem!.id })
            : () => createGrupoDefeitoEquipamento(values);

        controller.exec(action, 'Grupo salvo com sucesso!');
    };

    if (error) {
        return <p style={{ color: 'red' }}>Erro ao carregar os grupos.</p>;
    }

    return (
        <>
            <Card
                title="Grupos de Defeito"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<GrupoDefeitoEquipamento>
                    columns={columns}
                    dataSource={data?.data ?? []}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar Grupo' : 'Novo Grupo'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                <GrupoDefeitoEquipamentoForm
                    initialValues={controller.editingItem ?? undefined}
                    onSubmit={handleSubmit}
                    loading={controller.loading}
                />
            </Modal>
        </>
    );
}