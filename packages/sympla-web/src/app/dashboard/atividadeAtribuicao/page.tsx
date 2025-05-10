'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import { createAtividadeAtribuicao } from '@/lib/actions/atividadeAtribuicao/create';
import { updateAtividadeAtribuicao } from '@/lib/actions/atividadeAtribuicao/update';
import { deleteAtividadeAtribuicao } from '@/lib/actions/atividadeAtribuicao/delete';
import { getAllAtividades } from '@/lib/actions/atividade/getAll';
import { getAllUsuarioMobiles } from '@/lib/actions/usuarioMobile/getAll';
import { getAllAtividadeAtribuicaosWithIncludes } from '@/lib/actions/atividadeAtribuicao/getAllWithIncludes';

import AtividadeAtribuicaoForm from './form';
import {
    AtividadeAtribuicaoFormData,
    AtividadeAtribuicaoWithIncludes,
} from '@/lib/actions/atividadeAtribuicao/atividadeAtribuicaoFormSchema';

export default function AtividadeAtribuicaoPage() {
    const controller = useCrudController<AtividadeAtribuicaoWithIncludes>('atividadeAtribuicao');

    const { data: atribuicoes, isLoading, error } = useServerData(
        'atividadeAtribuicoes',
        getAllAtividadeAtribuicaosWithIncludes
    );

    const { data: atividades } = useServerData('atividades', getAllAtividades);
    const { data: usuarios } = useServerData('usuariosMobile', getAllUsuarioMobiles);

    const columns = useTableColumnsWithActions<AtividadeAtribuicaoWithIncludes>(
        [
            {
                title: 'Atividade',
                dataIndex: ['atividade', 'id'],
                key: 'atividade.id',
            },
            {
                title: 'Usuário',
                dataIndex: ['usuarioMobile', 'nome'],
                key: 'usuarioMobile.nome',
            },
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
            },
            {
                title: 'Início',
                dataIndex: 'dataInicio',
                key: 'dataInicio',
            },
            {
                title: 'Fim',
                dataIndex: 'dataFim',
                key: 'dataFim',
            },
        ],
        controller.open,
        (item) => controller.exec(() => deleteAtividadeAtribuicao(item.id), 'Atribuição excluída com sucesso!')
    );

    const handleSubmit = (values: AtividadeAtribuicaoFormData) => {
        const action = controller.editingItem?.id
            ? () => updateAtividadeAtribuicao({ ...values, id: controller.editingItem!.id })
            : () => createAtividadeAtribuicao(values);

        controller.exec(action, 'Atribuição salva com sucesso!');
    };

    if (error) {
        return <p style={{ color: 'red' }}>Erro ao carregar atribuições de atividade.</p>;
    }

    return (
        <>
            <Card
                title="Atribuições de Atividade"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<AtividadeAtribuicaoWithIncludes>
                    columns={columns}
                    dataSource={atribuicoes ?? []}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar Atribuição' : 'Nova Atribuição'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                {atividades && usuarios && (
                    <AtividadeAtribuicaoForm
                        initialValues={controller.editingItem ?? undefined}
                        onSubmit={handleSubmit}
                        loading={controller.loading}
                        atividades={atividades.data ?? []}
                        usuarios={usuarios.data ?? []}
                    />
                )}
            </Modal>
        </>
    );
}
