'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import AprModeloForm from './form';
import { AprModelo } from '@sympla/prisma';
import {
    createAprModelo,
    deleteAprModelo,
    getAllAprModelos,
    setTipoAtividadesDoModelo,
    setPerguntasDoModelo,
    updateAprModelo,
} from '@/lib/actions/apr/actionsAprModelo';
import { getAllTipoAtividades } from '@/lib/actions/atividade/actionsTipoAtividade';
import { getAllAprPerguntas } from '@/lib/actions/apr/actionsAprPergunta';
import { AprModeloFormData } from '@/lib/actions/apr/schema';
import { ActionResult } from '@/lib/types/ActionTypes';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';

export default function AprModeloPage() {
    const controller = useCrudController<AprModelo>('aprModelo');

    const modelos = useEntityData<AprModelo>({
        key: 'aprModelos',
        fetcher: unwrapFetcher(getAllAprModelos),
        paginationEnabled: true,
    });

    const { data: tipoAtividades } = useServerData('tipoAtividades', unwrapFetcher(getAllTipoAtividades));
    const { data: perguntas } = useServerData('aprPerguntas', unwrapFetcher(getAllAprPerguntas));

    const columns = useTableColumnsWithActions<AprModelo>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            { title: 'Descrição', dataIndex: 'descricao', key: 'descricao' },
        ],
        {
            onEdit: controller.open,
            onDelete: (item) => controller.exec(() => deleteAprModelo(item.id), 'Modelo excluído com sucesso!').finally(() => {
                modelos.mutate();
            }),
        }
    );

    const handleSubmit = async (values: AprModeloFormData & { tipoAtividadeIds: string[], perguntaIds: string[] }) => {
        const { tipoAtividadeIds, perguntaIds, ...rest } = values;

        const action = async (): Promise<ActionResult<AprModelo>> => {
            const modelo = controller.editingItem?.id
                ? await updateAprModelo({ ...rest, id: controller.editingItem.id })
                : await createAprModelo(rest);

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

        controller.exec(action, 'Modelo salvo com sucesso!').finally(() => {
            modelos.mutate();
        });
    };

    if (modelos.error) {
        return <p style={{ color: 'red' }}>Erro ao carregar modelos de APR.</p>;
    }

    return (
        <>
            <Card
                title="Modelos de APR"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<AprModelo>
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
                <AprModeloForm
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