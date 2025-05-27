'use client';

import React, { useState } from 'react';
import { Button, Card, Modal, Space, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import { createSubestacao } from '@/lib/actions/subestacao/create';
import { updateSubestacao } from '@/lib/actions/subestacao/update';
import { deleteSubestacao } from '@/lib/actions/subestacao/delete';
import { getAllSubestacoesWithRegionais } from '@/lib/actions/subestacao/getAll';
import { getAllRegionais } from '@/lib/actions/regional/getAll';
import { getSubestacaoEnums } from '@/lib/actions/subestacao/getSubestacaoEnums';

import SubestacaoForm from './form';
import { SubestacaoFormData, SubestacaoWithRegional } from '@/lib/actions/subestacao/subestacaoFormSchema';
import SubestacaoLoteForm from './SubestacaoLoteForm';

export default function SubestacaoPage() {
    const controller = useCrudController<SubestacaoWithRegional>('subestacoes');
    const [loteModalOpen, setLoteModalOpen] = useState(false);

    const { data: subestacoes, isLoading, error, mutate } = useServerData(
        'subestacoes',
        getAllSubestacoesWithRegionais
    );

    const { data: enums } = useServerData('subestacaoEnums', getSubestacaoEnums);
    const { data: regionais } = useServerData('regionais', getAllRegionais);

    const columns = useTableColumnsWithActions<SubestacaoWithRegional>(
        [
            {
                title: 'Nome',
                dataIndex: 'nome',
                key: 'nome',
                sorter: (a, b) => a.nome.localeCompare(b.nome),
            },
            {
                title: 'Sigla',
                dataIndex: 'sigla',
                key: 'sigla',
                sorter: (a, b) => a.sigla.localeCompare(b.sigla),
            },
            {
                title: 'Código SAP',
                dataIndex: 'codigoSap',
                key: 'codigoSap',
                sorter: (a, b) => a.codigoSap.localeCompare(b.codigoSap),
            },
            {
                title: 'Categoria',
                dataIndex: 'categoria',
                key: 'categoria',
                filters: enums?.categoriaOptions.map((e) => ({
                    text: e.label,
                    value: e.value,
                })) ?? [],
                onFilter: (value, record) => record.categoria.includes(value as string),
                sorter: (a, b) => a.categoria.localeCompare(b.categoria),
            },
            {
                title: 'Propriedade',
                dataIndex: 'propriedade',
                key: 'propriedade',
                filters: enums?.propriedadeOptions.map((e) => ({
                    text: e.label,
                    value: e.value,
                })) ?? [],
                onFilter: (value, record) => record.propriedade.includes(value as string),
                sorter: (a, b) => a.propriedade.localeCompare(b.propriedade),
            },
            {
                title: 'Regional',
                dataIndex: ['regional', 'nome'],
                key: 'regional.nome',
                filters: regionais?.data?.map((r) => ({
                    text: r.nome,
                    value: r.nome,
                })) ?? [],
                onFilter: (value, record) => record.regional.nome.includes(value as string),
                sorter: (a, b) => a.regional.nome.localeCompare(b.regional.nome),
            },
        ],
        controller.open,
        (item) =>
            controller.exec(() => deleteSubestacao(item.id), 'Subestação excluída com sucesso!')
    );

    const handleSubmit = (values: SubestacaoFormData) => {
        const action = controller.editingItem?.id
            ? () => updateSubestacao({ ...values, id: controller.editingItem!.id })
            : () => createSubestacao(values);

        controller.exec(action, 'Subestação salva com sucesso!');
    };

    if (error) return <p style={{ color: 'red' }}>Erro ao carregar subestações.</p>;

    return (
        <>
            <Card
                title="Subestações"
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
                <Table<SubestacaoWithRegional>
                    columns={columns}
                    dataSource={subestacoes?.data ?? []}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

            {/* Modal individual */}
            <Modal
                title={controller.editingItem ? 'Editar Subestação' : 'Nova Subestação'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                {enums && (
                    <SubestacaoForm
                        initialValues={controller.editingItem ?? undefined}
                        onSubmit={handleSubmit}
                        loading={controller.loading}
                        capitalOptions={enums.capitalOptions}
                        propriedadeOptions={enums.propriedadeOptions}
                        categoriaOptions={enums.categoriaOptions}
                        tensaoOptions={enums.tensaoOptions}
                        regionalOptions={regionais?.data ?? []}
                    />
                )}
            </Modal>

            {/* Modal lote */}
            <Modal
                title="Adicionar Subestações em Lote"
                open={loteModalOpen}
                onCancel={() => setLoteModalOpen(false)}
                footer={null}
                width={1000}
                destroyOnClose
            >
                {enums && (
                    <SubestacaoLoteForm
                        onSuccess={() => {
                            setLoteModalOpen(false);
                            mutate(); // 🔥 Atualiza tabela após salvar
                        }}
                        capitalOptions={enums.capitalOptions}
                        propriedadeOptions={enums.propriedadeOptions}
                        categoriaOptions={enums.categoriaOptions}
                        tensaoOptions={enums.tensaoOptions}
                        regionalOptions={regionais?.data ?? []}
                    />
                )}
            </Modal>
        </>
    );
}