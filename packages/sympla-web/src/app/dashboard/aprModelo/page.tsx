'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import { createAprModelo } from '@/lib/actions/aprModelo/create';
import { updateAprModelo } from '@/lib/actions/aprModelo/update';
import { deleteAprModelo } from '@/lib/actions/aprModelo/delete';
import { getAllTipoAtividades } from '@/lib/actions/tipoAtividade/getAll';

import AprModeloForm from './form';
import { AprModeloFormData, AprModeloWithIncludes } from '@/lib/actions/aprModelo/aprModeloFormSchema';
import { getAllAprModelosWithIncludes } from '@/lib/actions/aprModelo/getAllWithIncludes';

export default function AprModeloPage() {
    const controller = useCrudController<AprModeloWithIncludes>('aprModelo');

    const { data: modelos, isLoading, error } = useServerData(
        'aprModelos',
        getAllAprModelosWithIncludes
    );

    const { data: tipoAtividades } = useServerData(
        'tipoAtividades',
        getAllTipoAtividades
    );

    const columns = useTableColumnsWithActions<AprModeloWithIncludes>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            { title: 'Descrição', dataIndex: 'descricao', key: 'descricao' },
            {
                title: 'Tipo de Atividade',
                dataIndex: ['tipoAtividade', 'nome'],
                key: 'tipoAtividade.nome',
            },
        ],
        controller.open,
        (item) => controller.exec(() => deleteAprModelo(item.id), 'Modelo excluído com sucesso!')
    );

    const handleSubmit = (values: AprModeloFormData) => {
        const action = controller.editingItem?.id
            ? () => updateAprModelo({ ...values, id: controller.editingItem!.id })
            : () => createAprModelo(values);

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
                <Table<AprModeloWithIncludes>
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
                {tipoAtividades && (
                    <AprModeloForm
                        initialValues={controller.editingItem ?? undefined}
                        onSubmit={handleSubmit}
                        loading={controller.loading}
                        tipoAtividadeOptions={tipoAtividades.data ?? []}
                    />
                )}
            </Modal>
        </>
    );
}