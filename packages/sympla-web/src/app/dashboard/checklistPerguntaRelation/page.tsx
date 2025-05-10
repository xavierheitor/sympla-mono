'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import { getAllChecklisrPerguntaRelationsWithIncludes } from '@/lib/actions/checklisrPerguntaRelation/getAllWithIncludes';
import { createChecklisrPerguntaRelation } from '@/lib/actions/checklisrPerguntaRelation/create';
import { updateChecklisrPerguntaRelation } from '@/lib/actions/checklisrPerguntaRelation/update';
import { deleteChecklisrPerguntaRelation } from '@/lib/actions/checklisrPerguntaRelation/delete';

import { getAllChecklistPerguntas } from '@/lib/actions/checklistPergunta/getAll';
import { getAllChecklistModelos } from '@/lib/actions/checklistModelo/getAll';
import ChecklisrPerguntaRelationForm from './form';

import {
    ChecklisrPerguntaRelationWithIncludes,
    ChecklisrPerguntaRelationFormData
} from '@/lib/actions/checklisrPerguntaRelation/checklisrPerguntaRelationFormSchema';

export default function ChecklisrPerguntaRelationPage() {
    const controller = useCrudController<ChecklisrPerguntaRelationWithIncludes>('checklisrPerguntaRelation');

    const { data: relations, isLoading, error } = useServerData(
        'checklisrPerguntaRelations',
        getAllChecklisrPerguntaRelationsWithIncludes
    );

    const { data: perguntas } = useServerData('checklistPerguntas', getAllChecklistPerguntas);
    const { data: modelos } = useServerData('checklistModelos', getAllChecklistModelos);

    const columns = useTableColumnsWithActions<ChecklisrPerguntaRelationWithIncludes>(
        [
            { title: 'Pergunta', dataIndex: ['pergunta', 'pergunta'], key: 'pergunta.pergunta' },
            { title: 'Modelo', dataIndex: ['modelo', 'nome'], key: 'modelo.nome' },
            { title: 'Ordem', dataIndex: 'ordem', key: 'ordem' },
        ],
        controller.open,
        (item) =>
            controller.exec(
                () => deleteChecklisrPerguntaRelation(item.id),
                'Relação excluída com sucesso!'
            )
    );

    const handleSubmit = (values: ChecklisrPerguntaRelationFormData) => {
        const action = controller.editingItem?.id
            ? () => updateChecklisrPerguntaRelation({ ...values, id: controller.editingItem!.id })
            : () => createChecklisrPerguntaRelation(values);

        controller.exec(action, 'Relação salva com sucesso!');
    };

    if (error) {
        return <p style={{ color: 'red' }}>Erro ao carregar dados.</p>;
    }

    return (
        <>
            <Card
                title="Relações de Perguntas e Modelos (Checklist)"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<ChecklisrPerguntaRelationWithIncludes>
                    columns={columns}
                    dataSource={relations ?? []}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar Relação' : 'Nova Relação'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                {perguntas && modelos && (
                    <ChecklisrPerguntaRelationForm
                        initialValues={controller.editingItem ?? undefined}
                        onSubmit={handleSubmit}
                        loading={controller.loading}
                        perguntas={perguntas.data ?? []}
                        modelos={modelos.data ?? []}
                    />
                )}
            </Modal>
        </>
    );
}