'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import UserForm from './form';
import { UserFormData } from '@/lib/actions/user/schema';
import { User } from '@sympla/prisma';
import { createUser, deleteUser, getAllUsers, updateUser } from '@/lib/actions/user/actionsUser';

export default function UserPage() {
    const controller = useCrudController<User>('user');

    const { data: users, isLoading, error } = useServerData('users', getAllUsers);

    const columns = useTableColumnsWithActions<User>(
        [
            { title: 'Usuário', dataIndex: 'username', key: 'username' },
            { title: 'Nome', dataIndex: 'name', key: 'name' },
            { title: 'Email', dataIndex: 'email', key: 'email' },
        ],
        controller.open,
        (item) => controller.exec(() => deleteUser(item.id), 'Usuário excluído com sucesso!')
    );

    const handleSubmit = (values: UserFormData) => {
        const action = controller.editingItem?.id
            ? () => updateUser({ ...values, id: controller.editingItem!.id })
            : () => createUser(values);

        controller.exec(action, 'Usuário salvo com sucesso!');
    };

    if (error) return <p style={{ color: 'red' }}>Erro ao carregar usuários.</p>;

    return (
        <>
            <Card
                title="Usuários"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<User>
                    columns={columns}
                    dataSource={users?.data ?? []}
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
                <UserForm
                    initialValues={controller.editingItem ?? undefined}
                    onSubmit={handleSubmit}
                    loading={controller.loading}
                />
            </Modal>
        </>
    );
}