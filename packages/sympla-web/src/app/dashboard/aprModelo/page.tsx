'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import AprModeloForm from './form';
import { ActionResult } from '@/lib/types/ActionResult';
import { AprModelo } from '@sympla/prisma';
import { createAprModelo, deleteAprModelo, getAllAprModelosWithIncludes, setTipoAtividadesDoModelo, updateAprModelo } from '@/lib/actions/apr/actionsAprModelo';
import { getAllTipoAtividades } from '@/lib/actions/atividade/actionsTipoAtividade';
import { AprModeloFormData } from '@/lib/actions/apr/schema';

export default function AprModeloPage() {
    const controller = useCrudController<AprModelo>('aprModelo');

    const { data: modelos, isLoading, error } = useServerData(
        'aprModelos',
        getAllAprModelosWithIncludes
    );

    const { data: tipoAtividades } = useServerData(
        'tipoAtividades',
        getAllTipoAtividades
    );

    const columns = useTableColumnsWithActions<AprModelo>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            { title: 'Descrição', dataIndex: 'descricao', key: 'descricao' },

        ],
        controller.open,
        (item) => controller.exec(() => deleteAprModelo(item.id), 'Modelo excluído com sucesso!')
    );

    const handleSubmit = async (values: AprModeloFormData & { tipoAtividadeIds: string[] }) => {
        const { tipoAtividadeIds, ...rest } = values;

        const action = async (): Promise<ActionResult<AprModelo>> => {
            const modelo =
                controller.editingItem?.id
                    ? await updateAprModelo({ ...rest, id: controller.editingItem!.id })
                    : await createAprModelo(rest);

            await setTipoAtividadesDoModelo({
                modeloId: modelo.data?.id ?? '',
                tipoAtividadeIds,
            });

            return { success: true, data: modelo.data }; // ✅ Agora retorna corretamente
        };

        controller.exec(action, 'Modelo salvo com sucesso!');
    };

    if (error) {
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
                    <AprModeloForm
                        initialValues={controller.editingItem ?? undefined}
                        tipoAtividades={tipoAtividades.data ?? []}
                        onSubmit={handleSubmit}
                        loading={controller.loading}
                        // tipoAtividadeOptions={tipoAtividades.data ?? []}
                    />
                )}
            </Modal>
        </>
    );
}