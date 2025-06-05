'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import { getAllChecklistModelosWithIncludes } from '@/lib/actions/checklistModelo/getAllWithIncludes';
import { createChecklistModelo } from '@/lib/actions/checklistModelo/create';
import { updateChecklistModelo } from '@/lib/actions/checklistModelo/update';
import { deleteChecklistModelo } from '@/lib/actions/checklistModelo/delete';
import { getAllTipoAtividades } from '@/lib/actions/atividade/tipoAtividade/getAll';

import ChecklistModeloForm from './form';
import {
    ChecklistModeloFormData,
    ChecklistModeloWithIncludes,
} from '@/lib/actions/checklistModelo/checklistModeloFormSchema';

import { setTipoAtividadesDoModelo } from '@/lib/actions/checklistModelo/checklistModeloTipoAtividadeRelation/setRelation';
import { ActionResult } from '@/lib/types/ActionResult';
import { ChecklistModelo } from '@sympla/prisma';

export default function ChecklistModeloPage() {
    const controller = useCrudController<ChecklistModeloWithIncludes>('checklistModelos');

    const { data: modelos, isLoading, error } = useServerData(
        'checklistModelos',
        getAllChecklistModelosWithIncludes
    );

    const { data: tipoAtividades } = useServerData(
        'tipoAtividades',
        getAllTipoAtividades
    );

    const columns = useTableColumnsWithActions<ChecklistModeloWithIncludes>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            { title: 'Descrição', dataIndex: 'descricao', key: 'descricao' },
        ],
        controller.open,
        (item) => controller.exec(() => deleteChecklistModelo(item.id), 'Modelo excluído com sucesso!')
    );

    const handleSubmit = async (values: ChecklistModeloFormData & { tipoAtividadeIds: string[] }) => {
        const { tipoAtividadeIds, ...rest } = values;

        const action = async (): Promise<ActionResult<ChecklistModelo>> => {
            const modelo = controller.editingItem?.id
                ? await updateChecklistModelo({ ...rest, id: controller.editingItem!.id })
                : await createChecklistModelo(rest);

            await setTipoAtividadesDoModelo({
                modeloId: modelo.data?.id ?? '',
                tipoAtividadeIds,
            });

            return { success: true, data: modelo.data };
        };

        controller.exec(action, 'Modelo de checklist salvo com sucesso!');
    };

    if (error) {
        return <p style={{ color: 'red' }}>Erro ao carregar modelos de checklist.</p>;
    }

    return (
        <>
            <Card
                title="Modelos de Checklist"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<ChecklistModeloWithIncludes>
                    columns={columns}
                    dataSource={modelos?.data ?? []}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar Modelo' : 'Novo Modelo'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                {tipoAtividades && (
                    <ChecklistModeloForm
                        initialValues={controller.editingItem ?? undefined}
                        tipoAtividadeOptions={tipoAtividades.data ?? []}
                        onSubmit={handleSubmit}
                        loading={controller.loading}
                    />
                )}
            </Modal>
        </>
    );
}