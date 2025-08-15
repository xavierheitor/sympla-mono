'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import UserForm from './form';
import { UserFormData } from '@/lib/actions/user/schema';
import { User } from '@sympla/prisma';
import { createUser, deleteUser, getAllUsers, updateUser } from '@/lib/actions/user/actionsUser';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';
import { ActionResult } from '@/lib/types/ActionTypes';

export default function UserPage() {
  const controller = useCrudController<User>('user');

  const users = useEntityData<User>({
    key: 'users',
    fetcher: unwrapFetcher(getAllUsers),
    paginationEnabled: true,
  });

  const columns = useTableColumnsWithActions<User>(
    [
      { title: 'Usuário', dataIndex: 'username', key: 'username' },
      { title: 'Nome', dataIndex: 'name', key: 'name' },
      { title: 'Email', dataIndex: 'email', key: 'email' },
    ],
    {
      onEdit: controller.open,
      onDelete: (item) =>
        controller
          .exec(() => deleteUser(item.id), 'Usuário excluído com sucesso!')
          .finally(() => users.mutate()),
    },
  );

  const handleSubmit = async (values: UserFormData) => {
    const action = async (): Promise<ActionResult<User>> => {
      const user = controller.editingItem?.id
        ? await updateUser({ ...values, id: controller.editingItem.id })
        : await createUser(values);

      return { success: true, data: user.data };
    };

    controller.exec(action, 'Usuário salvo com sucesso!').finally(() => users.mutate());
  };

  if (users.error) return <p style={{ color: 'red' }}>Erro ao carregar usuários.</p>;

  return (
    <>
      <Card
        title='Usuários'
        extra={
          <Button type='primary' onClick={() => controller.open()}>
            Adicionar
          </Button>
        }
      >
        <Table<User>
          columns={columns}
          dataSource={users.data}
          loading={users.isLoading}
          rowKey='id'
          pagination={users.pagination}
          onChange={users.handleTableChange}
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
