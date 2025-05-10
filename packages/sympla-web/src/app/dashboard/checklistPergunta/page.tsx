'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import { getAllChecklistPerguntas } from '@/lib/actions/checklistPergunta/getAll';
import { createChecklistPergunta } from '@/lib/actions/checklistPergunta/create';
import { updateChecklistPergunta } from '@/lib/actions/checklistPergunta/update';
import { deleteChecklistPergunta } from '@/lib/actions/checklistPergunta/delete';

import ChecklistPerguntaForm from './form';
import {
    ChecklistPerguntaFormData,
} from '@/lib/actions/checklistPergunta/checklistPerguntaFormSchema';
import { ChecklistPergunta } from '@sympla/prisma';

export default function ChecklistPerguntaPage() {
    const controller = useCrudController<ChecklistPergunta>('checklistPergunta');

    const { data: perguntas, isLoading, error } = useServerData(
        'checklistPerguntas',
        getAllChecklistPerguntas
    );

    const columns = useTableColumnsWithActions<ChecklistPergunta>(
        [
            { title: 'Pergunta', dataIndex: 'pergunta', key: 'pergunta' },
        ],
        controller.open,
        (item) =>
            controller.exec(
                () => deleteChecklistPergunta(item.id),
                'Pergunta excluída com sucesso!'
            )
    );

    const handleSubmit = (values: ChecklistPerguntaFormData) => {
        const action = controller.editingItem?.id
            ? () => updateChecklistPergunta({ ...values, id: controller.editingItem!.id })
            : () => createChecklistPergunta(values);

        controller.exec(action, 'Pergunta salva com sucesso!');
    };

    if (error) {
        return <p style={{ color: 'red' }}>Erro ao carregar perguntas.</p>;
    }

    return (
        <>
            <Card
                title="Perguntas do Checklist"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<ChecklistPergunta>
                    columns={columns}
                    dataSource={perguntas?.data ?? []}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar Pergunta' : 'Nova Pergunta'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                <ChecklistPerguntaForm
                    initialValues={controller.editingItem ?? undefined}
                    onSubmit={handleSubmit}
                    loading={controller.loading}
                />
            </Modal>
        </>
    );
}
