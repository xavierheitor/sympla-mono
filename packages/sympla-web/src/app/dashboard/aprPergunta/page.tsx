'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import AprPerguntasForm from './form';
import { AprPerguntas } from '@sympla/prisma';
import { createAprPerguntas, deleteAprPerguntas, getAllAprPerguntass, updateAprPerguntas } from '@/lib/actions/apr/actionsAprPergunta';
import { AprPerguntasFormData } from '@/lib/actions/apr/schema';

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