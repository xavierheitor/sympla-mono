'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import ChecklistModeloForm from './form';
import { ChecklistModelo } from '@sympla/prisma';
import {
    createChecklistModelo,
    deleteChecklistModelo,
    getAllChecklistModelos,
    setTipoAtividadesDoModelo,
    setPerguntasDoModelo,
    updateChecklistModelo,
} from '@/lib/actions/checklist/actionsChecklistModelo';
import { getAllTipoAtividades } from '@/lib/actions/atividade/actionsTipoAtividade';
import { getAllChecklistPerguntas } from '@/lib/actions/checklist/actionsChecklistPergunta';
import { ChecklistModeloFormData } from '@/lib/actions/checklist/schema';
import { ActionResult } from '@/lib/types/ActionTypes';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';

export default function ChecklistModeloPage() {
    const controller = useCrudController<ChecklistModelo>('checklistModelo');

    const modelos = useEntityData<ChecklistModelo>({
        key: 'checklistModelos',
        fetcher: unwrapFetcher(getAllChecklistModelos),
        paginationEnabled: true,
    });

    const { data: tipoAtividades } = useServerData('tipoAtividades', unwrapFetcher(getAllTipoAtividades));
    const { data: perguntas } = useServerData('checklistPerguntas', unwrapFetcher(getAllChecklistPerguntas));

    const columns = useTableColumnsWithActions<ChecklistModelo>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            { title: 'Descrição', dataIndex: 'descricao', key: 'descricao' },
        ],
        {
            onEdit: controller.open,
            onDelete: (item) => controller.exec(() => deleteChecklistModelo(item.id), 'Modelo excluído com sucesso!').finally(() => {
                modelos.mutate();
            }),
        }
    );

    const handleSubmit = async (values: ChecklistModeloFormData & { tipoAtividadeIds: string[], perguntaIds: string[] }) => {
        const { tipoAtividadeIds, perguntaIds, ...rest } = values;

        const action = async (): Promise<ActionResult<ChecklistModelo>> => {
            const modelo = controller.editingItem?.id
                ? await updateChecklistModelo({ ...rest, id: controller.editingItem.id })
                : await createChecklistModelo(rest);

            await setTipoAtividadesDoModelo({
                modeloId: modelo.data?.id ?? '',
                tipoAtividadeIds,
            });

            await setPerguntasDoModelo({
                modeloId: modelo.data?.id ?? '',
                perguntaIds,
            });

            return { success: true, data: modelo.data };
        };

        controller.exec(action, 'Modelo de checklist salvo com sucesso!').finally(() => {
            modelos.mutate();
        });
    };

    if (modelos.error) {
        return <p style={{ color: 'red' }}>Erro ao carregar modelos de checklist.</p>;
    }

    return (
        <>
            <Card
                title="Modelos de Checklist"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<ChecklistModelo>
                    columns={columns}
                    dataSource={modelos.data}
                    loading={modelos.isLoading}
                    rowKey="id"
                    pagination={modelos.pagination}
                    onChange={modelos.handleTableChange}
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar Modelo' : 'Novo Modelo'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                <ChecklistModeloForm
                    initialValues={controller.editingItem ?? undefined}
                    tipoAtividades={tipoAtividades ?? []}
                    perguntas={perguntas ?? []}
                    onSubmit={handleSubmit}
                    loading={controller.loading || !tipoAtividades || !perguntas}
                />
            </Modal>
        </>
    );
}