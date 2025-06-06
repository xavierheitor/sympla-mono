

// page.tsx
'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import UsuarioMobileForm from './form';
import { UsuarioMobileFormData } from '@/lib/actions/usuarioMobile/schema';
import { UsuarioMobile } from '@sympla/prisma';
import { createUsuarioMobile, deleteUsuarioMobile, getAllUsuarioMobiles, updateUsuarioMobile } from '@/lib/actions/usuarioMobile/actionsUsuarioMobile';

export default function UsuarioMobilePage() {
    const controller = useCrudController<UsuarioMobile>('usuarioMobile');

    const { data: usuarios, isLoading, error } = useServerData('usuariosMobile', getAllUsuarioMobiles);

    const columns = useTableColumnsWithActions<UsuarioMobile>(
        [
            { title: 'Matrícula', dataIndex: 'matricula', key: 'matricula' },
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            { title: 'Email', dataIndex: 'email', key: 'email' },
            { title: 'Função', dataIndex: 'funcao', key: 'funcao' },
            { title: 'Ativo', dataIndex: 'ativo', key: 'ativo', render: (v) => (v ? 'Sim' : 'Não') },
        ],
        controller.open,
        (item) => controller.exec(() => deleteUsuarioMobile(item.id), 'Usuário excluído com sucesso!')
    );

    const handleSubmit = (values: UsuarioMobileFormData) => {
        console.log(values);
        const action = controller.editingItem?.id
            ? () => updateUsuarioMobile({ ...values, id: controller.editingItem!.id })
            : () => createUsuarioMobile(values);

        controller.exec(action, 'Usuário salvo com sucesso!');
    };

    if (error) return <p style={{ color: 'red' }}>Erro ao carregar usuários.</p>;

    return (
        <>
            <Card
                title="Usuários Mobile"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<UsuarioMobile>
                    columns={columns}
                    dataSource={usuarios?.data ?? []}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar Usuário' : 'Novo Usuário'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                <UsuarioMobileForm
                    initialValues={controller.editingItem ?? undefined}
                    onSubmit={handleSubmit}
                    loading={controller.loading}
                />
            </Modal>
        </>
    );
}
