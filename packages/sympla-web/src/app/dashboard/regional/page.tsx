'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { Regional, } from '@sympla/prisma';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import RegionalForm from './form';
import { RegionalFormData } from '@/lib/actions/regional/schema';
import { getAllDistribuidoras } from '@/lib/actions/distribuidora/actionsDistribuidora';
import { createRegional, deleteRegional, getAllRegionais, updateRegional } from '@/lib/actions/regional/actionsRegional';

export default function RegionalPage() {
    const controller = useCrudController<Regional>('regionais');

    const { data: regionais, isLoading: loadingRegionais, error } = useServerData(
        'regionais',
        getAllRegionais
    );

    const { data: distribuidoras } = useServerData(
        'distribuidoras',
        getAllDistribuidoras
    );

    const columns = useTableColumnsWithActions<Regional>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            { title: 'Descrição', dataIndex: 'descricao', key: 'descricao' },
            { title: 'Código SAP', dataIndex: 'codigoSap', key: 'codigoSap' },
        ],
        controller.open,
        (item) => controller.exec(() => deleteRegional(item.id), 'Regional excluída com sucesso!')
    );

    const handleSubmit = (values: RegionalFormData) => {
        const action = controller.editingItem?.id
            ? () => updateRegional({ ...values, id: controller.editingItem!.id })
            : () => createRegional(values);

        controller.exec(action, 'Regional salva com sucesso!');
    };

    if (error) {
        return <p style={{ color: 'red' }}>Erro ao carregar regionais.</p>;
    }

    return (
        <>
            <Card
                title="Regionais"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<Regional>
                    columns={columns}
                    dataSource={regionais?.data ?? []}
                    loading={loadingRegionais}
                    rowKey="id"
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar Regional' : 'Nova Regional'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                <RegionalForm
                    initialValues={controller.editingItem ?? undefined}
                    onSubmit={handleSubmit}
                    loading={controller.loading}
                    distribuidoras={distribuidoras?.success ? distribuidoras.data : []} />
            </Modal>
        </>
    );
}