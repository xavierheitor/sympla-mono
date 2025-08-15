'use client';

import React, { useState } from 'react';
import { Button, Card, Input, Modal, Space, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import EquipamentoForm from './form';
import EquipamentoLoteForm from './formLote';
import {
  createEquipamento,
  deleteEquipamento,
  getAllEquipamentosWithIncludes,
  updateEquipamento,
} from '@/lib/actions/equipamento/actionsEquipamento';
import { getAllGrupoDefeitoEquipamentos } from '@/lib/actions/defeito/actionsGrupoDefeito';
import { getAllSubestacoes } from '@/lib/actions/subestacao/actionsSubestacao';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';
import { EquipamentoFormData, EquipamentoWithRelations } from '@/lib/actions/equipamento/schema';

export default function EquipamentoPage() {
  const controller = useCrudController<EquipamentoWithRelations>('equipamentos');
  const [loteModalOpen, setLoteModalOpen] = useState(false);

  const equipamentos = useEntityData<EquipamentoWithRelations>({
    key: 'equipamentos',
    fetcher: unwrapFetcher(getAllEquipamentosWithIncludes),
    paginationEnabled: true,
  });

  const { data: subestacoes } = useServerData('subestacoes', unwrapFetcher(getAllSubestacoes));
  const { data: grupos } = useServerData(
    'gruposDefeito',
    unwrapFetcher(getAllGrupoDefeitoEquipamentos),
  );

  const columns = useTableColumnsWithActions<EquipamentoWithRelations>(
    [
      {
        title: 'Nome',
        dataIndex: 'nome',
        key: 'nome',
        filteredValue: equipamentos.params.filters?.nome ?? null,
        sorter: true,
      },
      {
        title: 'Subestação',
        dataIndex: ['subestacao', 'nome'], // ⚠️ isso é o que o filtro precisa enviar
        key: 'subestacao.nome',
        filters: subestacoes?.map((s) => ({ text: s.nome, value: s.id })) ?? [],
        onFilter: (value, record) => record.subestacao?.id === value,
      },
      {
        title: 'Grupo Defeito',
        dataIndex: 'grupoDefeitoCodigo',
        key: 'grupoDefeitoCodigo',
        onFilter: (value, record) => record.grupoDefeitoCodigo === value,
        filters:
          grupos?.map((g) => ({
            text: `${g.codigo} - ${g.nome}`,
            value: g.codigo,
          })) ?? [],
      },
    ],
    {
      onEdit: controller.open,
      onDelete: (item) =>
        controller
          .exec(() => deleteEquipamento(item.id), 'Equipamento excluído com sucesso!')
          .finally(() => equipamentos.mutate()),
    },
  );

  const handleSubmit = (values: EquipamentoFormData) => {
    const action = controller.editingItem?.id
      ? () => updateEquipamento({ ...values, id: controller.editingItem!.id })
      : () => createEquipamento(values);

    controller.exec(action, 'Equipamento salvo com sucesso!').finally(() => equipamentos.mutate());
  };

  if (equipamentos.error) return <p style={{ color: 'red' }}>Erro ao carregar equipamentos.</p>;

  return (
    <>
      <Card
        title='Equipamentos'
        extra={
          <Space>
            {/* 🔥 Aqui entra o campo de filtro texto */}
            <Input.Search
              placeholder='Buscar por nome'
              allowClear
              onSearch={(value) => {
                equipamentos.setParams((prev) => ({
                  ...prev,
                  page: 1,
                  filters: {
                    ...prev.filters,
                    nome: value ? [value] : undefined,
                  },
                }));
              }}
              style={{ width: 250 }}
            />
            <Button type='primary' onClick={() => controller.open()}>
              Adicionar
            </Button>
            <Button onClick={() => setLoteModalOpen(true)}>Adicionar em Lote</Button>
          </Space>
        }
      >
        <Table<EquipamentoWithRelations>
          columns={columns}
          dataSource={equipamentos.data}
          loading={equipamentos.isLoading}
          rowKey='id'
          pagination={equipamentos.pagination}
          onChange={(pagination, filters, sorter) => {
            const sort = Array.isArray(sorter) ? sorter[0] : sorter;

            const normalizedFilters = {
              nome: filters.nome as string[] | undefined,
              subestacaoId: filters.subestacaoId as string[] | undefined, // ✅ Correção aqui
              grupoDefeitoCodigo: filters.grupoDefeitoCodigo as string[] | undefined,
            };

            equipamentos.setParams((prev) => ({
              ...prev,
              page: pagination.current ?? 1,
              pageSize: pagination.pageSize ?? prev.pageSize,
              orderBy: typeof sort?.field === 'string' ? sort.field : prev.orderBy,
              orderDir:
                sort?.order === 'ascend'
                  ? 'asc'
                  : sort?.order === 'descend'
                    ? 'desc'
                    : prev.orderDir,
              filters: normalizedFilters,
            }));
          }}
        />
      </Card>

      <Modal
        title={controller.editingItem ? 'Editar Equipamento' : 'Novo Equipamento'}
        open={controller.isOpen}
        onCancel={controller.close}
        footer={null}
        destroyOnClose
      >
        <EquipamentoForm
          initialValues={controller.editingItem ?? undefined}
          onSubmit={handleSubmit}
          loading={controller.loading}
          grupoOptions={grupos ?? []}
          subestacaoOptions={subestacoes ?? []}
        />
      </Modal>

      <Modal
        title='Cadastro de Equipamentos em Lote'
        open={loteModalOpen}
        onCancel={() => setLoteModalOpen(false)}
        footer={null}
        width={900}
        destroyOnClose
      >
        <EquipamentoLoteForm
          onSuccess={() => {
            setLoteModalOpen(false);
            equipamentos.mutate();
          }}
        />
      </Modal>
    </>
  );
}
