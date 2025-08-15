// === GrupoDefeitoEquipamentoPage.tsx ===
'use client';

import React, { useState } from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import GrupoDefeitoEquipamentoForm from './form';
import GrupoDefeitoEquipamentoLoteForm from './formLote';
import {
  GrupoDefeitoEquipamento,
  GrupoDefeitoEquipamentoFormData,
} from '@/lib/actions/defeito/schema';
import {
  createGrupoDefeitoEquipamento,
  deleteGrupoDefeitoEquipamento,
  getAllGrupoDefeitoEquipamentos,
  updateGrupoDefeitoEquipamento,
} from '@/lib/actions/defeito/actionsGrupoDefeito';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';

export default function GrupoDefeitoEquipamentoPage() {
  const controller = useCrudController<GrupoDefeitoEquipamento>('grupoDefeitoEquipamento');
  const [loteModalOpen, setLoteModalOpen] = useState(false);

  const grupos = useEntityData<GrupoDefeitoEquipamento>({
    key: 'grupoDefeitoEquipamento',
    fetcher: unwrapFetcher(getAllGrupoDefeitoEquipamentos),
    paginationEnabled: true,
  });

  const columns = useTableColumnsWithActions<GrupoDefeitoEquipamento>(
    [
      {
        title: 'Nome',
        dataIndex: 'nome',
        key: 'nome',
        filteredValue: grupos.params.filters?.nome ?? null,
        onFilter: (value, record) => record.nome.includes(value as string),
        sorter: true,
      },
      {
        title: 'Código',
        dataIndex: 'codigo',
        key: 'codigo',
        filteredValue: grupos.params.filters?.codigo ?? null,
        onFilter: (value, record) => record.codigo.includes(value as string),
        sorter: true,
      },
    ],
    {
      onEdit: controller.open,
      onDelete: (item) =>
        controller
          .exec(() => deleteGrupoDefeitoEquipamento(item.id), 'Grupo excluído com sucesso!')
          .finally(() => grupos.mutate()),
    },
  );

  const handleSubmit = (values: GrupoDefeitoEquipamentoFormData) => {
    const action = controller.editingItem?.id
      ? () =>
          updateGrupoDefeitoEquipamento({
            ...values,
            id: controller.editingItem!.id,
          })
      : () => createGrupoDefeitoEquipamento(values);

    controller.exec(action, 'Grupo salvo com sucesso!').finally(() => grupos.mutate());
  };

  return (
    <>
      <Card
        title='Grupos de Defeito'
        extra={
          <>
            <Button type='primary' onClick={() => controller.open()}>
              Adicionar
            </Button>
            <Button onClick={() => setLoteModalOpen(true)}>Adicionar em Lote</Button>
          </>
        }
      >
        <Table<GrupoDefeitoEquipamento>
          columns={columns}
          dataSource={grupos.data}
          loading={grupos.isLoading}
          rowKey='id'
          pagination={grupos.pagination}
          onChange={grupos.handleTableChange}
        />
      </Card>

      <Modal
        title={controller.editingItem ? 'Editar Grupo' : 'Novo Grupo'}
        open={controller.isOpen}
        onCancel={controller.close}
        footer={null}
        destroyOnClose
      >
        <GrupoDefeitoEquipamentoForm
          initialValues={controller.editingItem ?? undefined}
          onSubmit={handleSubmit}
          loading={controller.loading}
        />
      </Modal>

      <Modal
        title='Cadastro em Lote - Grupo de Defeito'
        open={loteModalOpen}
        onCancel={() => setLoteModalOpen(false)}
        footer={null}
        destroyOnClose
        width={800}
      >
        <GrupoDefeitoEquipamentoLoteForm
          onSuccess={() => {
            setLoteModalOpen(false);
            grupos.mutate();
          }}
        />
      </Modal>
    </>
  );
}
