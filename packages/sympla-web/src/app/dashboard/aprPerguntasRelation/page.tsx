'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import { createAprPerguntasRelation } from '@/lib/actions/aprPerguntasRelation/create';
import { updateAprPerguntasRelation } from '@/lib/actions/aprPerguntasRelation/update';
import { deleteAprPerguntasRelation } from '@/lib/actions/aprPerguntasRelation/delete';
import { getAllAprPerguntasWithIncludes } from '@/lib/actions/aprPerguntasRelation/getAllWithIncludes';
import { getAllAprModelos } from '@/lib/actions/aprModelo/getAll';
import { getAllAprPerguntass } from '@/lib/actions/aprPerguntas/getAll';

import AprPerguntasRelationForm from './form';
import {
    AprPerguntasRelationFormData,
    AprPerguntasRelationWithIncludes,
} from '@/lib/actions/aprPerguntasRelation/aprPerguntasRelationFormSchema';

export default function AprPerguntasRelationPage() {
    const controller = useCrudController<AprPerguntasRelationWithIncludes>('aprPerguntasRelation');

    const { data: relacoes, isLoading, error } = useServerData(
        'aprPerguntasRelations',
        getAllAprPerguntasWithIncludes
    );

    const { data: modelos } = useServerData('aprModelos', getAllAprModelos);
    const { data: perguntas } = useServerData('aprPerguntas', getAllAprPerguntass);

    const columns = useTableColumnsWithActions<AprPerguntasRelationWithIncludes>(
        [
            {
                title: 'Pergunta',
                dataIndex: ['pergunta', 'pergunta'],
                key: 'pergunta.pergunta',
            },
            {
                title: 'Modelo',
                dataIndex: ['modelo', 'nome'],
                key: 'modelo.nome',
            },
            {
                title: 'Ordem',
                dataIndex: 'ordem',
                key: 'ordem',
            },
        ],
        controller.open,
        (item) => controller.exec(() => deleteAprPerguntasRelation(item.id), 'Relação excluída com sucesso!')
    );

    const handleSubmit = (values: AprPerguntasRelationFormData) => {
        const action = controller.editingItem?.id
            ? () => updateAprPerguntasRelation({ ...values, id: controller.editingItem!.id })
            : () => createAprPerguntasRelation(values);

        controller.exec(action, 'Relação salva com sucesso!');
    };

    if (error) {
        return <p style={{ color: 'red' }}>Erro ao carregar relações de perguntas.</p>;
    }

    return (
        <>
            <Card
                title="Relações de Perguntas e Modelos"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<AprPerguntasRelationWithIncludes>
                    columns={columns}
                    dataSource={relacoes?.data ?? []}
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
                    <AprPerguntasRelationForm
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