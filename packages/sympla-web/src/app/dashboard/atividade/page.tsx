'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import { getAllAtividadesWithIncludes } from '@/lib/actions/atividade/getAllWithIncludes';
import { createAtividade } from '@/lib/actions/atividade/create';
import { updateAtividade } from '@/lib/actions/atividade/update';
import { deleteAtividade } from '@/lib/actions/atividade/delete';

import { getAllTipoAtividades } from '@/lib/actions/tipoAtividade/getAll';

import AtividadeForm from './form';
import { AtividadeFormData, AtividadeWithIncludes } from '@/lib/actions/atividade/atividadeFormSchema';
import { getAllNotasSaps } from '@/lib/actions/notasSap/getAll';

export default function AtividadePage() {
    const controller = useCrudController<AtividadeWithIncludes>('atividade');

    const { data: atividades, isLoading, error } = useServerData(
        'atividades',
        getAllAtividadesWithIncludes
    );

    const { data: tipoAtividades } = useServerData('tipoAtividades', getAllTipoAtividades);
    const { data: notas } = useServerData('notasSAP', getAllNotasSaps);

    const columns = useTableColumnsWithActions<AtividadeWithIncludes>(
        [
            { title: 'Nota', dataIndex: ['nota', 'numeroNota'], key: 'nota.numeroNota' },
            { title: 'Tipo de Atividade', dataIndex: ['tipoAtividade', 'nome'], key: 'tipoAtividade.nome' },
            { title: 'Status', dataIndex: 'status', key: 'status' },
            { title: 'Prazo Limite', dataIndex: 'prazoLimite', key: 'prazoLimite' },
        ],
        controller.open,
        (item) => controller.exec(() => deleteAtividade(item.id), 'Atividade excluída com sucesso!')
    );

    const handleSubmit = (values: AtividadeFormData) => {
        const action = controller.editingItem?.id
            ? () => updateAtividade({ ...values, id: controller.editingItem!.id })
            : () => createAtividade(values);

        controller.exec(action, 'Atividade salva com sucesso!');
    };

    if (error) {
        return <p style={{ color: 'red' }}>Erro ao carregar atividades.</p>;
    }

    return (
        <>
            <Card
                title="Atividades"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<AtividadeWithIncludes>
                    columns={columns}
                    dataSource={atividades ?? []}
                    loading={isLoading}
                    rowKey="id"
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
                        tipoAtividadeOptions={tipoAtividades.data ?? []}
                        notaOptions={notas.data ?? []}
                    />
                )}
            </Modal>
        </>
    );
}