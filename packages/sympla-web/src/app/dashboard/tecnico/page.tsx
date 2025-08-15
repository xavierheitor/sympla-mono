'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { Tecnico } from '@sympla/prisma';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import TecnicoForm from './form';
import { TecnicoFormData } from '@/lib/actions/tecnico/schema';
import {
  createTecnico,
  deleteTecnico,
  getAllTecnicos,
  updateTecnico,
} from '@/lib/actions/tecnico/actionsTecnico';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';
import { ActionResult } from '@/lib/types/ActionTypes';

export default function TecnicoPage() {
  const controller = useCrudController<Tecnico>('tecnicos');

  const tecnicos = useEntityData<Tecnico>({
    key: 'tecnicos',
    fetcher: unwrapFetcher(getAllTecnicos),
    paginationEnabled: true,
  });

  const columns = useTableColumnsWithActions<Tecnico>(
    [
      { title: 'Nome', dataIndex: 'nome', key: 'nome' },
      { title: 'Email', dataIndex: 'email', key: 'email' },
      { title: 'Telefone', dataIndex: 'telefone', key: 'telefone' },
      { title: 'CPF', dataIndex: 'cpf', key: 'cpf' },
      { title: 'RG', dataIndex: 'rg', key: 'rg' },
    ],
    {
      onEdit: controller.open,
      onDelete: (item) =>
        controller
          .exec(() => deleteTecnico(item.id), 'Técnico excluído com sucesso!')
          .finally(() => tecnicos.mutate()),
    },
  );

  const handleSubmit = async (values: TecnicoFormData) => {
    const action = async (): Promise<ActionResult<Tecnico>> => {
      const tecnico = controller.editingItem?.id
        ? await updateTecnico({ ...values, id: controller.editingItem.id })
        : await createTecnico(values);

      return { success: true, data: tecnico.data };
    };

    controller.exec(action, 'Técnico salvo com sucesso!').finally(() => tecnicos.mutate());
  };

  if (tecnicos.error) {
    return <p style={{ color: 'red' }}>Erro ao carregar técnicos.</p>;
  }

  return (
    <>
      <Card
        title='Técnicos'
        extra={
          <Button type='primary' onClick={() => controller.open()}>
            Adicionar
          </Button>
        }
      >
        <Table<Tecnico>
          columns={columns}
          dataSource={tecnicos.data}
          loading={tecnicos.isLoading}
          rowKey='id'
          pagination={tecnicos.pagination}
          onChange={tecnicos.handleTableChange}
        />
      </Card>

      <Modal
        title={controller.editingItem ? 'Editar Técnico' : 'Novo Técnico'}
        open={controller.isOpen}
        onCancel={controller.close}
        footer={null}
        destroyOnClose
      >
        <TecnicoForm
          initialValues={controller.editingItem ?? undefined}
          onSubmit={handleSubmit}
          loading={controller.loading}
        />
      </Modal>
    </>
  );
}
