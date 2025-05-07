'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import { getAllSubestacoesWithRegionais } from '@/lib/actions/subestacao/getAll';
import { createSubestacao } from '@/lib/actions/subestacao/create';
import { updateSubestacao } from '@/lib/actions/subestacao/update';
import { deleteSubestacao } from '@/lib/actions/subestacao/delete';
import { getSubestacaoEnums } from '@/lib/actions/subestacao/getSubestacaoEnums';

import SubestacaoForm from './form';
import { SubestacaoFormData, SubestacaoWithRegional } from '@/lib/actions/subestacao/subestacaoFormSchema';
import { getAllRegionais } from '@/lib/actions/regional/getAll';

export default function SubestacaoPage() {
    const controller = useCrudController<SubestacaoWithRegional>('subestacoes');

    const { data: subestacoes, isLoading, error } = useServerData(
        'subestacoes',
        getAllSubestacoesWithRegionais
    );

    const { data: enums } = useServerData(
        'subestacaoEnums',
        getSubestacaoEnums
    );

    const { data: regionais } = useServerData(
        'regionais',
        getAllRegionais
    );

    const columns = useTableColumnsWithActions<SubestacaoWithRegional>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            { title: 'Sigla', dataIndex: 'sigla', key: 'sigla' },
            { title: 'Código SAP', dataIndex: 'codigoSap', key: 'codigoSap' },
            { title: 'Propriedade', dataIndex: 'propriedade', key: 'propriedade' },
            { title: 'Categoria', dataIndex: 'categoria', key: 'categoria' },
            {
                title: 'Regional',
                dataIndex: ['regional', 'nome'],
                key: 'regional.nome',
            }
        ],
        controller.open,
        (item) => controller.exec(() => deleteSubestacao(item.id), 'Subestação excluída com sucesso!')
    );

    const handleSubmit = (values: SubestacaoFormData) => {
        const action = controller.editingItem?.id
            ? () => updateSubestacao({ ...values, id: controller.editingItem!.id })
            : () => createSubestacao(values);

        controller.exec(action, 'Subestação salva com sucesso!');
    };

    if (error) {
        return <p style={{ color: 'red' }}>Erro ao carregar subestações.</p>;
    }

    return (
        <>
            <Card
                title="Subestações"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<SubestacaoWithRegional>
                    columns={columns}
                    dataSource={subestacoes ?? []}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

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
        </>
    );
}