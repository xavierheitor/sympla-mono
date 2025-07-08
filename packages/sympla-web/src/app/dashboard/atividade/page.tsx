/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { Button, Card, Modal, Space, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import AtividadeForm from './form';
import {
    AtividadeFormData,
    AtividadeWithIncludes,
} from '@/lib/actions/atividade/schema';

import {
    createAtividade,
    deleteAtividade,
    getAllAtividadesWithIncludes,
    updateAtividade,
} from '@/lib/actions/atividade/actionsAtividade';

import { getAllTipoAtividades } from '@/lib/actions/atividade/actionsTipoAtividade';
import { getAllNotasSapPMA } from '@/lib/actions/notasSap/actionsNotasSap';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';

export default function AtividadePage() {
    const controller = useCrudController<AtividadeWithIncludes>('atividade');

    const atividades = useEntityData<AtividadeWithIncludes>({
        key: 'atividades',
        fetcher: unwrapFetcher(getAllAtividadesWithIncludes),
        paginationEnabled: true,
    });

    const { data: tipoAtividades } = useServerData('tipoAtividades', unwrapFetcher(getAllTipoAtividades));
    const { data: notas } = useServerData('notasSAP', unwrapFetcher(getAllNotasSapPMA));

    const columns = useTableColumnsWithActions<AtividadeWithIncludes>(
        [
            { title: 'Descrição', dataIndex: 'descricao', key: 'descricao' },
            { title: 'Nota', dataIndex: ['nota', 'numeroNota'], key: 'nota.numeroNota' },
            { title: 'Tipo de Atividade', dataIndex: ['tipoAtividade', 'nome'], key: 'tipoAtividade.nome' },
            { title: 'Status', dataIndex: 'status', key: 'status' },
            { title: 'Prazo Limite', dataIndex: 'prazoLimite', key: 'prazoLimite' },
        ],
        {
            onEdit: controller.open,
            onDelete: (item) =>
                controller
                    .exec(() => deleteAtividade(item.id), 'Atividade excluída com sucesso!')
                    .finally(() => atividades.mutate()),
        }
    );

    const handleSubmit = (values: AtividadeFormData) => {
        const normalizeDate = (date?: unknown) =>
            date instanceof Date ? date.toISOString() : (date as any)?.toISOString?.() ?? null;

        const parsedValues = {
            ...values,
            prazoLimite: normalizeDate(values.prazoLimite),
            dataProgramacao: normalizeDate(values.dataProgramacao),
            dataExecucaoInicio: normalizeDate(values.dataExecucaoInicio),
            dataExecucaoFim: normalizeDate(values.dataExecucaoFim),
        };

        const action = controller.editingItem?.id
            ? () => updateAtividade({ ...parsedValues, id: controller.editingItem?.id ?? '' })
            : () => createAtividade(parsedValues);

        controller.exec(action, 'Atividade salva com sucesso!').finally(() => atividades.mutate());
    };

    if (atividades.error) {
        return <p style={{ color: 'red' }}>Erro ao carregar as atividades.</p>;
    }

    return (
        <>
            <Card
                title="Atividades"
                extra={
                    <Space>
                        <Button type="primary" onClick={() => controller.open()}>
                            Adicionar
                        </Button>
                    </Space>
                }
            >
                <Table<AtividadeWithIncludes>
                    columns={columns}
                    dataSource={atividades.data ?? []}
                    loading={atividades.isLoading}
                    rowKey="id"
                    pagination={atividades.pagination}
                    onChange={atividades.handleTableChange}
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar Atividade' : 'Nova Atividade'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                {tipoAtividades && notas && (
                    <AtividadeForm
                        initialValues={controller.editingItem ?? undefined}
                        onSubmit={handleSubmit}
                        loading={controller.loading}
                        tipoAtividadeOptions={tipoAtividades ?? []}
                        notaOptions={notas ?? []}
                    />
                )}
            </Modal>
        </>
    );
}