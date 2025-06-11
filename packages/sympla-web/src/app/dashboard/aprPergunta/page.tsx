'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import AprPerguntasForm from './form';
import { AprPerguntas } from '@sympla/prisma';
import {
    createAprPerguntas,
    deleteAprPerguntas,
    getAllAprPerguntas,
    setAprPerguntasRelations, // novo
    updateAprPerguntas,
} from '@/lib/actions/apr/actionsAprPergunta';
import { getAllAprModelos } from '@/lib/actions/apr/actionsAprModelo';
import { AprPerguntasFormData } from '@/lib/actions/apr/schema';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';
import { ActionResult } from '@/lib/types/ActionTypes';

export default function AprPerguntasPage() {
    const controller = useCrudController<AprPerguntas>('aprPerguntas');

    const perguntas = useEntityData<AprPerguntas>({
        key: 'aprPerguntas',
        fetcher: unwrapFetcher(getAllAprPerguntas),
        paginationEnabled: true,
    });

    const { data: modelos } = useServerData('aprModelos', unwrapFetcher(getAllAprModelos));

    const columns = useTableColumnsWithActions<AprPerguntas>(
        [{ title: 'Pergunta', dataIndex: 'pergunta', key: 'pergunta' }],
        {
            onEdit: controller.open,
            onDelete: (item) => controller.exec(() => deleteAprPerguntas(item.id), 'Pergunta excluída com sucesso!'),
        }
    );

    const handleSubmit = async (values: AprPerguntasFormData & { modeloIds: string[] }) => {
        const { modeloIds, ...rest } = values;

        const action = async (): Promise<ActionResult<AprPerguntas>> => {
            const pergunta = controller.editingItem?.id
                ? await updateAprPerguntas({ ...rest, id: controller.editingItem.id })
                : await createAprPerguntas(rest);

            await setAprPerguntasRelations({
                perguntaId: pergunta.data?.id ?? '',
                modeloIds,
            });

            return { success: true, data: pergunta.data };
        };

        controller.exec(action, 'Pergunta salva com sucesso!');
    };

    if (perguntas.error) {
        return <p style={{ color: 'red' }}>Erro ao carregar perguntas.</p>;
    }

    return (
        <>
            <Card
                title="Perguntas da APR"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<AprPerguntas>
                    columns={columns}
                    dataSource={perguntas.data}
                    loading={perguntas.isLoading}
                    rowKey="id"
                    pagination={perguntas.pagination}
                    onChange={perguntas.handleTableChange}
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
                    modelos={modelos ?? []}
                    onSubmit={handleSubmit}
                    loading={controller.loading || !modelos}
                />
            </Modal>
        </>
    );
}