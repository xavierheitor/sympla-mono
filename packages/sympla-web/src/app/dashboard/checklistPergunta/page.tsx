'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import ChecklistPerguntaForm from './form';
import { ChecklistPergunta } from '@sympla/prisma';
import {
  createChecklistPergunta,
  deleteChecklistPergunta,
  getAllChecklistPerguntas,
  updateChecklistPergunta,
} from '@/lib/actions/checklist/actionsChecklistPergunta';
import { ChecklistPerguntaFormData } from '@/lib/actions/checklist/schema';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';
import { ActionResult } from '@/lib/types/ActionTypes';

export default function ChecklistPerguntaPage() {
  const controller = useCrudController<ChecklistPergunta>('checklistPergunta');

  const perguntas = useEntityData<ChecklistPergunta>({
    key: 'checklistPerguntas',
    fetcher: unwrapFetcher(getAllChecklistPerguntas),
    paginationEnabled: true,
  });

  const columns = useTableColumnsWithActions<ChecklistPergunta>(
    [{ title: 'Pergunta', dataIndex: 'pergunta', key: 'pergunta' }],
    {
      onEdit: controller.open,
      onDelete: (item) =>
        controller
          .exec(() => deleteChecklistPergunta(item.id), 'Pergunta excluída com sucesso!')
          .finally(() => {
            perguntas.mutate();
          }),
    },
  );

  const handleSubmit = async (values: ChecklistPerguntaFormData) => {
    const action = async (): Promise<ActionResult<ChecklistPergunta>> => {
      const pergunta = controller.editingItem?.id
        ? await updateChecklistPergunta({
            ...values,
            id: controller.editingItem.id,
          })
        : await createChecklistPergunta(values);

      return { success: true, data: pergunta.data };
    };

    controller.exec(action, 'Pergunta salva com sucesso!').finally(() => {
      perguntas.mutate();
    });
  };

  if (perguntas.error) {
    return <p style={{ color: 'red' }}>Erro ao carregar perguntas.</p>;
  }

  return (
    <>
      <Card
        title='Perguntas do Checklist'
        extra={
          <Button type='primary' onClick={() => controller.open()}>
            Adicionar
          </Button>
        }
      >
        <Table<ChecklistPergunta>
          columns={columns}
          dataSource={perguntas.data}
          loading={perguntas.isLoading}
          rowKey='id'
          pagination={perguntas.pagination}
          onChange={perguntas.handleTableChange}
        />
      </Card>

      <Modal
        title={controller.editingItem ? 'Editar Pergunta' : 'Nova Pergunta'}
        open={controller.isOpen}
        onCancel={controller.close}
        footer={null}
        destroyOnClose
      >
        <ChecklistPerguntaForm
          initialValues={controller.editingItem ?? undefined}
          onSubmit={handleSubmit}
          loading={controller.loading}
        />
      </Modal>
    </>
  );
}
