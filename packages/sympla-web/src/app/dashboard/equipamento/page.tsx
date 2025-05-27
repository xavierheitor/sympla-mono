/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { Button, Card, Input, Modal, Select, Space, Table } from 'antd';
import { useEquipamentoPaginated } from '@/lib/hooks/useEquipamentoPaginated';
import { useServerData } from '@/lib/hooks/useServerData';

import { getAllGrupoDefeitoEquipamentos } from '@/lib/actions/grupoDefeitoEquipamento/getAll';
import { getAllSubestacoes } from '@/lib/actions/subestacao/getAll';
import { createEquipamento } from '@/lib/actions/equipamento/create';
import { updateEquipamento } from '@/lib/actions/equipamento/update';

import { useCrudController } from '@/lib/hooks/useCrudController';
import EquipamentoForm from './form';
import EquipamentoLoteForm from './equipamentoLoteForm';

export default function EquipamentoPage() {
    const [page, setPage] = useState(1);
    const [pageSize] = useState(20);
    const [search, setSearch] = useState('');
    const [subestacaoId, setSubestacaoId] = useState<string | undefined>(undefined);
    const [grupoDefeitoCodigo, setGrupoDefeitoCodigo] = useState<string | undefined>(undefined);
    const [loteModalOpen, setLoteModalOpen] = useState(false);

    const { data, total, isLoading, mutate } = useEquipamentoPaginated({
        page,
        pageSize,
        search,
        subestacaoId,
        grupoDefeitoCodigo,
    });

    const { data: grupos } = useServerData('grupoDefeitoEquipamento', getAllGrupoDefeitoEquipamentos);
    const { data: subestacoes } = useServerData('subestacao', getAllSubestacoes);

    const controller = useCrudController('equipamentos-paginated');

    const columns = [
        { title: 'Nome', dataIndex: 'nome', key: 'nome' },
        { title: 'Subestação', dataIndex: ['subestacao', 'nome'], key: 'subestacao.nome' },
        { title: 'Código', dataIndex: 'grupoDefeitoCodigo', key: 'grupoDefeitoCodigo' },
    ];

    const handleSubmit = (values: any) => {
        const action = controller.editingItem?.id
            ? () => updateEquipamento({ ...values, id: controller.editingItem!.id })
            : () => createEquipamento(values);

        controller.exec(action, 'Equipamento salvo com sucesso!', () => mutate());
    };

    return (
        <>
            <Card
                title="Equipamentos"
                extra={
                    <Space>
                        <Input.Search
                            placeholder="Buscar por nome"
                            onSearch={(v) => {
                                setSearch(v);
                                setPage(1);
                            }}
                            allowClear
                            style={{ width: 200 }}
                        />
                        <Select
                            allowClear
                            placeholder="Subestação"
                            style={{ width: 200 }}
                            options={subestacoes?.data?.map((s) => ({
                                label: s.nome,
                                value: s.id,
                            }))}
                            onChange={(v) => {
                                setSubestacaoId(v);
                                setPage(1);
                            }}
                        />
                        <Select
                            allowClear
                            placeholder="Grupo"
                            style={{ width: 200 }}
                            options={grupos?.data?.map((g) => ({
                                label: `${g.codigo} - ${g.nome}`,
                                value: g.codigo,
                            }))}
                            onChange={(v) => {
                                setGrupoDefeitoCodigo(v);
                                setPage(1);
                            }}
                        />
                        <Button type="primary" onClick={() => controller.open()}>
                            Adicionar
                        </Button>
                        <Button onClick={() => setLoteModalOpen(true)}>
                            Adicionar em Lote
                        </Button>
                    </Space>
                }
            >
                <Table
                    columns={columns}
                    dataSource={data}
                    rowKey="id"
                    pagination={{
                        current: page,
                        pageSize,
                        total,
                        onChange: (p) => setPage(p),
                    }}
                    loading={isLoading}
                />
            </Card>

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
                        mutate();
                    }}
                />
            </Modal>
        </>
    );
}