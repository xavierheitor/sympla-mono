'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import { createAprPerguntas } from '@/lib/actions/aprModelo/aprPerguntas/create';
import { updateAprPerguntas } from '@/lib/actions/aprModelo/aprPerguntas/update';
import { deleteAprPerguntas } from '@/lib/actions/aprModelo/aprPerguntas/delete';

import AprPerguntasForm from './form';
import { AprPerguntasFormData } from '@/lib/actions/aprModelo/aprPerguntas/aprPerguntasFormSchema';
import { AprPerguntas } from '@sympla/prisma';
import { getAllAprPerguntass } from '@/lib/actions/aprModelo/aprPerguntas/getAll';

export default function AprPerguntasPage() {
    const controller = useCrudController<AprPerguntas>('aprPerguntas');

    const { data: perguntas, isLoading, error } = useServerData('aprPerguntas', getAllAprPerguntass);

    const columns = useTableColumnsWithActions<AprPerguntas>(
        [{ title: 'Pergunta', dataIndex: 'pergunta', key: 'pergunta' }],
        controller.open,
        (item) => controller.exec(() => deleteAprPerguntas(item.id), 'Pergunta excluída com sucesso!')
    );

    const handleSubmit = (values: AprPerguntasFormData) => {
        const action = controller.editingItem?.id
            ? () => updateAprPerguntas({ ...values, id: controller.editingItem!.id })
            : () => createAprPerguntas(values);

        controller.exec(action, 'Pergunta salva com sucesso!');
    };

    if (error) return <p style={{ color: 'red' }}>Erro ao carregar perguntas.</p>;

    return (
        <>
            <Card
                title="Perguntas da APR"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<AprPerguntas>
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
                <AprPerguntasForm
                    initialValues={controller.editingItem ?? undefined}
                    onSubmit={handleSubmit}
                    loading={controller.loading}
                />
            </Modal>
        </>
    );
}