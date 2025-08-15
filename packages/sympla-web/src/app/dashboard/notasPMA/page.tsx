'use client';

import { useState } from 'react';
import { Button, Card, Modal, Space, Table } from 'antd';

import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';

import {
  createNotaPMA,
  deleteNotaPMA,
  getAllNotasPMAWithIncludes,
  updateNotaPMA,
} from '@/lib/actions/pma/pmaActions';

import { getAllCentroTrabalhos } from '@/lib/actions/centroTrabalho/actionsCentroTrabalho';
import { getAllEquipamentos } from '@/lib/actions/equipamento/actionsEquipamento';
import { getAllKpis } from '@/lib/actions/kpi/actionsKpi';

import { NotaPMAFormData, NotaPMAWithRelations } from '@/lib/actions/pma/schema';
import NotaPMAForm from './form';
import NotaPMALoteForm from './formLote'; // <-- componente de lote
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'; // <- isso importa o locale
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
dayjs.locale('pt-br');

export default function NotasPMAPage() {
  const controller = useCrudController<NotaPMAWithRelations>('notasPMA');
  const [loteModalOpen, setLoteModalOpen] = useState(false);

  const notasPMA = useEntityData<NotaPMAWithRelations>({
    key: 'notasPMA',
    fetcher: unwrapFetcher(getAllNotasPMAWithIncludes),
    paginationEnabled: true,
  });

  const { data: centroTrabalhoOptions } = useServerData(
    'centroTrabalhoOptions',
    unwrapFetcher(getAllCentroTrabalhos),
  );
  const { data: equipamentoOptions } = useServerData(
    'equipamentoOptions',
    unwrapFetcher(getAllEquipamentos),
  );
  const { data: kpiOptions } = useServerData('kpiOptions', unwrapFetcher(getAllKpis));
  const columns = useTableColumnsWithActions<NotaPMAWithRelations>(
    [
      { title: 'Número da Nota', dataIndex: 'numeroNota', key: 'numeroNota' },

      {
        title: 'Centro de Trabalho',
        dataIndex: ['centroTrabalho', 'nome'],
        key: 'centroTrabalho.nome',
        filters:
          centroTrabalhoOptions?.map((ct) => ({
            text: ct.nome,
            value: ct.id,
          })) ?? [],
        onFilter: (value, record) => record.centroTrabalho?.id === value,
      },
      {
        title: 'Equipamento',
        dataIndex: ['equipamento', 'nome'],
        key: 'equipamento.nome',
        filters: equipamentoOptions?.map((eq) => ({ text: eq.nome, value: eq.id })) ?? [],
        onFilter: (value, record) => record.equipamento?.id === value,
      },
      {
        title: 'KPI',
        dataIndex: ['kpi', 'nome'],
        key: 'kpi.nome',
        filters: kpiOptions?.map((kpi) => ({ text: kpi.nome, value: kpi.id })) ?? [],
        onFilter: (value, record) => record.kpi?.id === value,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        onFilter: (value, record) => record.status === value,
      },
      {
        title: 'Mês planejado',
        dataIndex: 'dataInicioPlan',
        key: 'mesPlanejado',
        filters: Array.from({ length: 12 }, (_, i) => {
          const month = dayjs().month(i).format('MMMM').toUpperCase();
          return { text: month, value: month };
        }),
        onFilter: (value, record) => {
          if (!record.dataInicioPlan) return false;
          const mes = dayjs.utc(record.dataInicioPlan).format('MMMM').toUpperCase();
          return mes === value;
        },
        render: (value) => {
          if (!value) return '-';
          const date = dayjs.utc(value);
          return date.isValid() ? date.format('MMMM').toUpperCase() : ' - ';
        },
      },
    ],
    {
      onEdit: controller.open,
      onDelete: (item) =>
        controller
          .exec(() => deleteNotaPMA(item.id), 'Nota PMA excluída com sucesso!')
          .finally(() => notasPMA.mutate()),
    },
  );
  const handleSubmit = (values: NotaPMAFormData) => {
    const action = controller.editingItem?.id
      ? () => updateNotaPMA({ ...values, id: controller.editingItem!.id })
      : () => createNotaPMA(values);

    controller.exec(action, 'Nota PMA salva com sucesso!').finally(() => notasPMA.mutate());
  };

  if (notasPMA.error) return <p style={{ color: 'red' }}>Erro ao carregar notas PMA.</p>;

  return (
    <>
      <Card
        title='Notas PMA'
        extra={
          <Space>
            <Button type='primary' onClick={() => controller.open()}>
              Adicionar
            </Button>
            <Button onClick={() => setLoteModalOpen(true)}>Adicionar em Lote</Button>
          </Space>
        }
      >
        <Table<NotaPMAWithRelations>
          columns={columns}
          dataSource={notasPMA.data}
          loading={notasPMA.isLoading}
          rowKey='id'
          pagination={notasPMA.pagination}
          onChange={(pagination, filters, sorter) => {
            const sort = Array.isArray(sorter) ? sorter[0] : sorter;

            const normalizedFilters = {
              centroTrabalhoId: filters['centroTrabalho.nome'] as string[] | undefined,
              equipamentoId: filters['equipamento.nome'] as string[] | undefined,
              kpiId: filters['kpi.nome'] as string[] | undefined,
              status: filters['status'] as string[] | undefined,
              mesPlanejado: filters['mesPlanejado'] as string[] | undefined,
            };

            notasPMA.setParams((prev) => ({
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

      {/* Modal individual */}
      <Modal
        title={controller.editingItem ? 'Editar Nota PMA' : 'Nova Nota PMA'}
        open={controller.isOpen}
        onCancel={controller.close}
        footer={null}
        destroyOnClose
      >
        {centroTrabalhoOptions && equipamentoOptions && kpiOptions && (
          <NotaPMAForm
            initialValues={controller.editingItem ?? undefined}
            onSubmit={handleSubmit}
            loading={controller.loading}
            centroTrabalhoOptions={centroTrabalhoOptions}
            equipamentoOptions={equipamentoOptions}
            kpiOptions={kpiOptions}
          />
        )}
      </Modal>

      {/* Modal em lote */}
      <Modal
        title='Cadastro em Lote de Notas PMA'
        open={loteModalOpen}
        onCancel={() => setLoteModalOpen(false)}
        footer={null}
        width={1000}
        destroyOnClose
      >
        {centroTrabalhoOptions && kpiOptions && (
          <NotaPMALoteForm
            centros={centroTrabalhoOptions}
            kpis={kpiOptions}
            onSuccess={() => {
              setLoteModalOpen(false);
              notasPMA.mutate();
            }}
          />
        )}
      </Modal>
    </>
  );
}
