'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import AtividadeAtribuicaoForm from './form';
import { createAtividadeAtribuicao, deleteAtividadeAtribuicao, getAllAtividadeAtribuicaosWithIncludes, updateAtividadeAtribuicao } from '@/lib/actions/atividade/actionsAtribuicaoAtividade';
import { AtividadeAtribuicaoFormData, AtividadeAtribuicaoWithIncludes } from '@/lib/actions/atividade/schema';
import { getAllAtividades } from '@/lib/actions/atividade/actionsAtividade';
import { getAllUsuarioMobiles } from '@/lib/actions/usuarioMobile/actionsUsuarioMobile';


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
                    dataSource={atribuicoes?.data ?? []}
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
