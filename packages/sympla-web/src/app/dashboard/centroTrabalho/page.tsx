'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import { getAllCentroTrabalhos } from '@/lib/actions/centroTrabalho/getAll';
import { createCentroTrabalho } from '@/lib/actions/centroTrabalho/create';
import { updateCentroTrabalho } from '@/lib/actions/centroTrabalho/update';
import { deleteCentroTrabalho } from '@/lib/actions/centroTrabalho/delete';

import CentroTrabalhoForm from './form';
import { CentroTrabalhoFormData } from '@/lib/actions/centroTrabalho/centroTrabalhoFormSchema';
import { CentroTrabalho } from '@sympla/prisma';
import { getAllRegionais } from '@/lib/actions/regional/getAll';

export default function CentroTrabalhoPage() {
    const controller = useCrudController<CentroTrabalho>('centroTrabalho');

    const { data: centrosTrabalho, isLoading, error } = useServerData(
        'centroTrabalho',
        getAllCentroTrabalhos
    );

    const { data: regionals } = useServerData(
        'regional',
        getAllRegionais
    );

    const columns = useTableColumnsWithActions<CentroTrabalho>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
        ],
        controller.open,
        (item) => controller.exec(() => deleteCentroTrabalho(item.id), 'Centro de trabalho excluído com sucesso!')
    );

    const handleSubmit = (values: CentroTrabalhoFormData) => {
        const action = controller.editingItem?.id
            ? () => updateCentroTrabalho({ ...values, id: controller.editingItem!.id })
            : () => createCentroTrabalho(values);

        controller.exec(action, 'Centro de trabalho salvo com sucesso!');
    };

    if (error) return <p style={{ color: 'red' }}>Erro ao carregar centros de trabalho.</p>;

    return (
        <>
            <Card
                title="Centros de Trabalho"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<CentroTrabalho>
                    columns={columns}
                    dataSource={centrosTrabalho?.data ?? []}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar Centro de Trabalho' : 'Novo Centro de Trabalho'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                <CentroTrabalhoForm
                    initialValues={controller.editingItem ?? undefined}
                    onSubmit={handleSubmit}
                    loading={controller.loading}
                    regionals={regionals?.data ?? []}
                />
            </Modal>
        </>
    );
}