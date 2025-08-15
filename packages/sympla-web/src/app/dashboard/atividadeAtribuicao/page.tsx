'use client';

import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import AtividadeAtribuicaoForm from './form';
import {
  AtividadeAtribuicaoFormData,
  AtividadeAtribuicaoWithIncludes,
} from '@/lib/actions/atividade/schema';

import { getAllAtividades } from '@/lib/actions/atividade/actionsAtividade';
import { getAllUsuarioMobiles } from '@/lib/actions/usuarioMobile/actionsUsuarioMobile';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';
import {
  createAtividadeAtribuicao,
  deleteAtividadeAtribuicao,
  getAllAtividadeAtribuicaosWithIncludes,
  updateAtividadeAtribuicao,
} from '@/lib/actions/atividade/actionsAtividadeAtribuicao';

export default function AtividadeAtribuicaoPage() {
  const controller = useCrudController<AtividadeAtribuicaoWithIncludes>('atividadeAtribuicao');

  const atribuicoes = useEntityData<AtividadeAtribuicaoWithIncludes>({
    key: 'atividadeAtribuicoes',
    fetcher: unwrapFetcher(getAllAtividadeAtribuicaosWithIncludes),
    paginationEnabled: true,
  });

  const { data: atividades } = useServerData('atividades', unwrapFetcher(getAllAtividades));
  const { data: usuarios } = useServerData('usuariosMobile', unwrapFetcher(getAllUsuarioMobiles));

  const columns = useTableColumnsWithActions<AtividadeAtribuicaoWithIncludes>(
    [
      {
        title: 'Atividade',
        dataIndex: ['atividade', 'ordemServico'],
        key: 'atividade.ordemServico',
      },
      {
        title: 'Técnico',
        dataIndex: ['usuarioMobile', 'nome'],
        key: 'usuarioMobile.nome',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
      },
    ],
    {
      onEdit: controller.open,
      onDelete: (item) =>
        controller
          .exec(() => deleteAtividadeAtribuicao(item.id), 'Atribuição excluída com sucesso!')
          .finally(() => atribuicoes.mutate()),
    },
  );

  const handleSubmit = (values: AtividadeAtribuicaoFormData) => {
    const action = controller.editingItem?.id
      ? () =>
          updateAtividadeAtribuicao({
            ...values,
            id: controller.editingItem?.id ?? '',
          })
      : () => createAtividadeAtribuicao(values);

    controller.exec(action, 'Atribuição salva com sucesso!').finally(() => atribuicoes.mutate());
  };

  if (atribuicoes.error) {
    return <p style={{ color: 'red' }}>Erro ao carregar atribuições.</p>;
  }

  return (
    <>
      <Card
        title='Atribuições de Atividade'
        extra={
          <Button type='primary' onClick={() => controller.open()}>
            Nova
          </Button>
        }
      >
        <Table<AtividadeAtribuicaoWithIncludes>
          rowKey='id'
          columns={columns}
          dataSource={atribuicoes.data ?? []}
          loading={atribuicoes.isLoading}
          pagination={atribuicoes.pagination}
          onChange={atribuicoes.handleTableChange}
        />
      </Card>

      <Modal
        title={controller.editingItem ? 'Editar Atribuição' : 'Nova Atribuição'}
        open={controller.isOpen}
        onCancel={controller.close}
        destroyOnClose
        footer={null}
      >
        {atividades && usuarios && (
          <AtividadeAtribuicaoForm
            onSubmit={handleSubmit}
            initialValues={controller.editingItem ?? undefined}
            loading={controller.loading}
            atividades={atividades ?? []}
            usuarios={usuarios ?? []}
          />
        )}
      </Modal>
    </>
  );
}
