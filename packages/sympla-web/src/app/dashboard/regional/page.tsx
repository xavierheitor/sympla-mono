'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { Regional } from '@sympla/prisma';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import RegionalForm from './form';
import { RegionalFormData } from '@/lib/actions/regional/schema';
import { getAllDistribuidoras } from '@/lib/actions/distribuidora/actionsDistribuidora';
import {
  createRegional,
  deleteRegional,
  getAllRegionais,
  updateRegional,
} from '@/lib/actions/regional/actionsRegional';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';
import { ActionResult } from '@/lib/types/ActionTypes';

export default function RegionalPage() {
  const controller = useCrudController<Regional>('regionais');

  const regionais = useEntityData<Regional>({
    key: 'regionais',
    fetcher: unwrapFetcher(getAllRegionais),
    paginationEnabled: true,
  });

  const { data: distribuidoras } = useServerData(
    'distribuidoras',
    unwrapFetcher(getAllDistribuidoras),
  );

  const columns = useTableColumnsWithActions<Regional>(
    [
      { title: 'Nome', dataIndex: 'nome', key: 'nome' },
      { title: 'Descrição', dataIndex: 'descricao', key: 'descricao' },
      { title: 'Código SAP', dataIndex: 'codigoSap', key: 'codigoSap' },
    ],
    {
      onEdit: controller.open,
      onDelete: (item) =>
        controller
          .exec(() => deleteRegional(item.id), 'Regional excluída com sucesso!')
          .finally(() => regionais.mutate()),
    },
  );

  const handleSubmit = async (values: RegionalFormData) => {
    const action = async (): Promise<ActionResult<Regional>> => {
      const regional = controller.editingItem?.id
        ? await updateRegional({ ...values, id: controller.editingItem.id })
        : await createRegional(values);

      return { success: true, data: regional.data };
    };

    controller.exec(action, 'Regional salva com sucesso!').finally(() => regionais.mutate());
  };

  if (regionais.error) {
    return <p style={{ color: 'red' }}>Erro ao carregar regionais.</p>;
  }

  return (
    <>
      <Card
        title='Regionais'
        extra={
          <Button type='primary' onClick={() => controller.open()}>
            Adicionar
          </Button>
        }
      >
        <Table<Regional>
          columns={columns}
          dataSource={regionais.data}
          loading={regionais.isLoading}
          rowKey='id'
          pagination={regionais.pagination}
          onChange={regionais.handleTableChange}
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
          distribuidoras={distribuidoras ?? []}
        />
      </Modal>
    </>
  );
}
