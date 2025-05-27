'use client';

import React, { useState } from 'react';
import { Button, Card, Modal, Table, Space } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import { getAllGrupoDefeitoEquipamentos } from '@/lib/actions/grupoDefeitoEquipamento/getAll';
import { getAllSubestacoes } from '@/lib/actions/subestacao/getAll';
import { getAllEquipamentosWithIncludes } from '@/lib/actions/equipamento/getAllWithIncludes';
import { deleteEquipamento } from '@/lib/actions/equipamento/delete';
import { updateEquipamento } from '@/lib/actions/equipamento/update';
import { createEquipamento } from '@/lib/actions/equipamento/create';

import EquipamentoForm from './form';
import {
    EquipamentoFormData,
    EquipamentoWithRelations,
} from '@/lib/actions/equipamento/equipamentoFormSchema';
import EquipamentoLoteForm from './equipamentoLoteForm';

export default function EquipamentoPage() {
    const controller = useCrudController<EquipamentoWithRelations>('equipamentos');

    const [loteModalOpen, setLoteModalOpen] = useState(false);

    const { data: equipamentos, isLoading, error, mutate } = useServerData(
        'equipamentos',
        getAllEquipamentosWithIncludes
    );

    const { data: grupos } = useServerData('grupoDefeitoEquipamento', getAllGrupoDefeitoEquipamentos);

    const { data: subestacoes } = useServerData('subestacao', getAllSubestacoes);

    const columns = useTableColumnsWithActions<EquipamentoWithRelations>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            { title: 'Subestação', dataIndex: ['subestacao', 'nome'], key: 'subestacao.nome' },
            { title: 'Código', dataIndex: 'grupoDefeitoCodigo', key: 'grupoDefeitoCodigo' },
        ],
        controller.open,
        (item) => controller.exec(() => deleteEquipamento(item.id), 'Equipamento excluído com sucesso!')
    );

    const handleSubmit = (values: EquipamentoFormData) => {
        const action = controller.editingItem?.id
            ? () => updateEquipamento({ ...values, id: controller.editingItem!.id })
            : () => createEquipamento(values);

        controller.exec(action, 'Equipamento salvo com sucesso!');
    };

    if (error) return <p style={{ color: 'red' }}>Erro ao carregar equipamentos.</p>;

    return (
        <>
            <Card
                title="Equipamentos"
                extra={
                    <Space>
                        <Button type="primary" onClick={() => controller.open()}>
                            Adicionar
                        </Button>
                        <Button onClick={() => setLoteModalOpen(true)}>
                            Adicionar em Lote
                        </Button>
                    </Space>
                }
            >
                <Table<EquipamentoWithRelations>
                    columns={columns}
                    dataSource={equipamentos?.data ?? []}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

            {/* Modal para cadastro individual */}
            <Modal
                title={controller.editingItem ? 'Editar Equipamento' : 'Novo Equipamento'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                <EquipamentoForm
                    initialValues={controller.editingItem ?? undefined}
                    onSubmit={handleSubmit}
                    loading={controller.loading}
                    grupoOptions={grupos?.data ?? []}
                    subestacaoOptions={subestacoes?.data ?? []}
                />
            </Modal>

            {/* Modal para cadastro em lote */}
            <Modal
                title="Cadastro de Equipamentos em Lote"
                open={loteModalOpen}
                onCancel={() => setLoteModalOpen(false)}
                footer={null}
                width={900}
                destroyOnClose
            >
                <EquipamentoLoteForm
                    onSuccess={() => {
                        setLoteModalOpen(false);
                        mutate(); // 🔥 Atualiza a tabela após cadastro
                    }}
                />
            </Modal>
        </>
    );
}