'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import UsuarioMobileForm from './form';
import { UsuarioMobileFormData } from '@/lib/actions/usuarioMobile/schema';
import { UsuarioMobile } from '@sympla/prisma';
import {
  createUsuarioMobile,
  deleteUsuarioMobile,
  getAllUsuarioMobiles,
  updateUsuarioMobile,
} from '@/lib/actions/usuarioMobile/actionsUsuarioMobile';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';
import { ActionResult } from '@/lib/types/ActionTypes';
import { setRegionaisDoUsuarioMobile } from '@/lib/actions/usuarioMobile/actionsUsuarioMobileRegional';
import { useServerData } from '@/lib/hooks/useServerData';
import { getAllRegionais } from '@/lib/actions/regional/actionsRegional';

export default function UsuarioMobilePage() {
  const controller = useCrudController<UsuarioMobile>('usuarioMobile');

  const usuarios = useEntityData<UsuarioMobile>({
    key: 'usuariosMobile',
    fetcher: unwrapFetcher(getAllUsuarioMobiles),
    paginationEnabled: true,
  });

  const { data: regionais } = useServerData('regionais', unwrapFetcher(getAllRegionais));

  const columns = useTableColumnsWithActions<UsuarioMobile>(
    [
      { title: 'Matrícula', dataIndex: 'matricula', key: 'matricula' },
      { title: 'Nome', dataIndex: 'nome', key: 'nome' },
      { title: 'Email', dataIndex: 'email', key: 'email' },
      { title: 'Função', dataIndex: 'funcao', key: 'funcao' },
      {
        title: 'Ativo',
        dataIndex: 'ativo',
        key: 'ativo',
        render: (v) => (v ? 'Sim' : 'Não'),
      },
    ],
    {
      onEdit: controller.open,
      onDelete: (item) =>
        controller
          .exec(() => deleteUsuarioMobile(item.id), 'Usuário excluído com sucesso!')
          .finally(() => usuarios.mutate()),
    },
  );

  const handleSubmit = async (values: UsuarioMobileFormData & { regionalIds: string[] }) => {
    const { regionalIds, ...rest } = values;

    const action = async (): Promise<ActionResult<UsuarioMobile>> => {
      let usuarioResult;

      if (controller.editingItem?.id) {
        usuarioResult = await updateUsuarioMobile({
          ...rest,
          id: controller.editingItem.id,
        });
      } else {
        usuarioResult = await createUsuarioMobile(rest);
      }

      // ⚠ Aqui a correção: garantir o ID
      const usuarioId = usuarioResult.data?.id ?? controller.editingItem?.id ?? '';

      await setRegionaisDoUsuarioMobile({
        usuarioMobileId: usuarioId,
        regionalIds,
      });

      return { success: true, data: usuarioResult.data };
    };

    controller.exec(action, 'Usuário salvo com sucesso!').finally(() => usuarios.mutate());
  };

  if (usuarios.error) return <p style={{ color: 'red' }}>Erro ao carregar usuários.</p>;

  return (
    <>
      <Card
        title='Usuários Mobile'
        extra={
          <Button type='primary' onClick={() => controller.open()}>
            Adicionar
          </Button>
        }
      >
        <Table<UsuarioMobile>
          columns={columns}
          dataSource={usuarios.data}
          loading={usuarios.isLoading}
          rowKey='id'
          pagination={usuarios.pagination}
          onChange={usuarios.handleTableChange}
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
          regionais={regionais ?? []}
        />
      </Modal>
    </>
  );
}
