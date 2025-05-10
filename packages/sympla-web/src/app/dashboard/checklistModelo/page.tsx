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
import { getAllTipoAtividades } from '@/lib/actions/tipoAtividade/getAll';

import ChecklistModeloForm from './form';
import {
    ChecklistModeloFormData,
    ChecklistModeloWithIncludes,
} from '@/lib/actions/checklistModelo/checklistModeloFormSchema';

export default function ChecklistModeloPage() {
    const controller = useCrudController<ChecklistModeloWithIncludes>('checklistModelo');

    const { data: modelos, isLoading, error } = useServerData(
        'checklistModelos',
        getAllChecklistModelosWithIncludes
    );

    const { data: tipos } = useServerData('tipoAtividade', getAllTipoAtividades);

    const columns = useTableColumnsWithActions<ChecklistModeloWithIncludes>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            { title: 'Descrição', dataIndex: 'descricao', key: 'descricao' },
            { title: 'Tipo de Atividade', dataIndex: ['tipoAtividade', 'nome'], key: 'tipoAtividade.nome' },
        ],
        controller.open,
        (item) => controller.exec(() => deleteChecklistModelo(item.id), 'Modelo excluído com sucesso!')
    );

    const handleSubmit = (values: ChecklistModeloFormData) => {
        const action = controller.editingItem?.id
            ? () => updateChecklistModelo({ ...values, id: controller.editingItem!.id })
            : () => createChecklistModelo(values);

        controller.exec(action, 'Modelo salvo com sucesso!');
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
                    dataSource={modelos ?? []}
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
                {tipos && (
                    <ChecklistModeloForm
                        initialValues={controller.editingItem ?? undefined}
                        onSubmit={handleSubmit}
                        loading={controller.loading}
                        tipoAtividadeOptions={tipos.data ?? []}
                    />
                )}
            </Modal>
        </>
    );
}