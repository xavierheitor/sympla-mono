'use client';

import React, { useState } from 'react';
import { Button, Card, Modal, Space, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import SubestacaoForm from './form';
import { SubestacaoFormData, SubestacaoWithRegional } from '@/lib/actions/subestacao/schema';
import SubestacaoLoteForm from './formLote';
import {
    createSubestacao,
    deleteSubestacao,
    getAllSubestacoesWithRegionais,
    getSubestacaoEnums,
    updateSubestacao
} from '@/lib/actions/subestacao/actionsSubestacao';
import { getAllRegionais } from '@/lib/actions/regional/actionsRegional';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';

export default function SubestacaoPage() {
    const controller = useCrudController<SubestacaoWithRegional>('subestacoes');

    const [loteModalOpen, setLoteModalOpen] = useState(false);

    const subestacoes = useEntityData<SubestacaoWithRegional>({
        key: 'subestacoes',
        fetcher: unwrapFetcher(getAllSubestacoesWithRegionais),
        paginationEnabled: true,
    });

    const { data: enums } = useServerData('subestacaoEnums', getSubestacaoEnums);
    const { data: regionais } = useServerData('regionais', unwrapFetcher(getAllRegionais));


    const columns = useTableColumnsWithActions<SubestacaoWithRegional>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            { title: 'Sigla', dataIndex: 'sigla', key: 'sigla' },
            { title: 'Código SAP', dataIndex: 'codigoSap', key: 'codigoSap' },
            {
                title: 'Categoria',
                dataIndex: 'categoria',
                key: 'categoria',
                filters: enums?.categoriaOptions?.map((c) => ({ text: c.label, value: c.value })),
                onFilter: (value, record) => record.categoria === value,
            },
            {
                title: 'Propriedade',
                dataIndex: 'propriedade',
                key: 'propriedade',
                filters: enums?.propriedadeOptions?.map((p) => ({ text: p.label, value: p.value })),
                onFilter: (value, record) => record.propriedade === value,
            },
            {
                title: 'Tensão',
                dataIndex: 'tensao',
                key: 'tensao',
                filters: enums?.tensaoOptions?.map((t) => ({ text: t.label, value: t.value })),
                onFilter: (value, record) => record.tensao === value,
            },
            {
                title: 'Regional',
                dataIndex: ['regional', 'nome'],
                key: 'regional.nome',
                filters: regionais?.map((r) => ({ text: r.nome, value: r.id })) ?? [],
                onFilter: (value, record) => record.regional?.id === value,
            },
        ],
        {
            onEdit: controller.open,
            onDelete: (item) =>
                controller.exec(() => deleteSubestacao(item.id), 'Subestação excluída com sucesso!')
                    .finally(() => subestacoes.mutate()),
        }
    );

    const handleSubmit = (values: SubestacaoFormData) => {
        const action = controller.editingItem?.id
            ? () => updateSubestacao({ ...values, id: controller.editingItem!.id })
            : () => createSubestacao(values);

        controller.exec(action, 'Subestação salva com sucesso!').finally(() => subestacoes.mutate());
    };

    if (subestacoes.error) return <p style={{ color: 'red' }}>Erro ao carregar subestações.</p>;

    return (
        <>
            <Card
                title="Subestações"
                extra={
                    <Space>
                        <Button type="primary" onClick={() => controller.open()}>Adicionar</Button>
                        <Button onClick={() => setLoteModalOpen(true)}>Adicionar em Lote</Button>
                    </Space>
                }
            >
                <Table<SubestacaoWithRegional>
                    columns={columns}
                    dataSource={subestacoes.data}
                    loading={subestacoes.isLoading}
                    rowKey="id"
                    pagination={subestacoes.pagination}
                    onChange={subestacoes.handleTableChange}
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
                        propriedadeOptions={enums.propriedadeOptions}
                        categoriaOptions={enums.categoriaOptions}
                        tensaoOptions={enums.tensaoOptions}
                        regionalOptions={regionais ?? []}
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
                            subestacoes.mutate(); // 🔥 Atualiza tabela após salvar
                        }}
                        propriedadeOptions={enums.propriedadeOptions}
                        categoriaOptions={enums.categoriaOptions}
                        tensaoOptions={enums.tensaoOptions}
                        regionalOptions={regionais ?? []}
                    />
                )}
            </Modal>
        </>
    );
}