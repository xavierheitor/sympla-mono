'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { Distribuidora } from '@sympla/prisma';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import DistribuidoraForm from './form';
import { DistribuidoraFormData } from '@/lib/actions/distribuidora/schema';
import {
  createDistribuidora,
  deleteDistribuidora,
  getAllDistribuidoras,
  updateDistribuidora,
} from '@/lib/actions/distribuidora/actionsDistribuidora';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';
import { ActionResult } from '@/lib/types/ActionTypes';

export default function DistribuidoraPage() {
  const controller = useCrudController<Distribuidora>('distribuidoras');

  const distribuidoras = useEntityData<Distribuidora>({
    key: 'distribuidoras',
    fetcher: unwrapFetcher(getAllDistribuidoras),
    paginationEnabled: true,
  });

  const columns = useTableColumnsWithActions<Distribuidora>(
    [
      { title: 'Nome', dataIndex: 'nome', key: 'nome' },
      { title: 'Descrição', dataIndex: 'descricao', key: 'descricao' },
      { title: 'Código SAP', dataIndex: 'codigoSap', key: 'codigoSap' },
    ],
    {
      onEdit: controller.open,
      onDelete: (item) =>
        controller
          .exec(() => deleteDistribuidora(item.id), 'Distribuidora excluída com sucesso!')
          .finally(() => distribuidoras.mutate()),
    },
  );

  const handleSubmit = async (values: DistribuidoraFormData) => {
    const action = async (): Promise<ActionResult<Distribuidora>> => {
      const distribuidora = controller.editingItem?.id
        ? await updateDistribuidora({
            ...values,
            id: controller.editingItem.id,
          })
        : await createDistribuidora(values);

      return { success: true, data: distribuidora.data };
    };

    controller
      .exec(action, 'Distribuidora salva com sucesso!')
      .finally(() => distribuidoras.mutate());
  };

  if (distribuidoras.error) {
    return <p style={{ color: 'red' }}>Erro ao carregar distribuidoras.</p>;
  }

  return (
    <>
      <Card
        title='Distribuidoras'
        extra={
          <Button type='primary' onClick={() => controller.open()}>
            Adicionar
          </Button>
        }
      >
        <Table<Distribuidora>
          columns={columns}
          dataSource={distribuidoras.data}
          loading={distribuidoras.isLoading}
          rowKey='id'
          pagination={distribuidoras.pagination}
          onChange={distribuidoras.handleTableChange}
        />
      </Card>

      <Modal
        title={controller.editingItem ? 'Editar Distribuidora' : 'Nova Distribuidora'}
        open={controller.isOpen}
        onCancel={controller.close}
        footer={null}
        destroyOnClose
      >
        <DistribuidoraForm
          initialValues={controller.editingItem ?? undefined}
          onSubmit={handleSubmit}
          loading={controller.loading}
        />
      </Modal>
    </>
  );
}
