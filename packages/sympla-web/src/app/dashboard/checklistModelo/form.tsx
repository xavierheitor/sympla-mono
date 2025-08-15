'use client';

import { useEffect, useState } from 'react';
import { Form, Input, Button, Spin, Transfer } from 'antd';
import { TipoAtividade, ChecklistPergunta } from '@sympla/prisma';
import { ChecklistModeloFormData } from '@/lib/actions/checklist/schema';
import {
  getAllChecklistModeloTipoAtividadeRelation,
  getAllChecklistModeloPerguntaRelation,
} from '@/lib/actions/checklist/actionsChecklistModelo';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';

interface ChecklistModeloFormProps {
  onSubmit: (
    values: ChecklistModeloFormData & {
      tipoAtividadeIds: string[];
      perguntaIds: string[];
    },
  ) => void;
  initialValues?: Partial<ChecklistModeloFormData>;
  tipoAtividades: TipoAtividade[];
  perguntas: ChecklistPergunta[];
  loading?: boolean;
}

export default function ChecklistModeloForm({
  onSubmit,
  initialValues,
  tipoAtividades,
  perguntas,
  loading = false,
}: ChecklistModeloFormProps) {
  const [form] = Form.useForm();

  const [selectedTipoAtividades, setSelectedTipoAtividades] = useState<string[]>([]);
  const [selectedPerguntas, setSelectedPerguntas] = useState<string[]>([]);
  const [selectedKeysTipo, setSelectedKeysTipo] = useState<string[]>([]);
  const [selectedKeysPergunta, setSelectedKeysPergunta] = useState<string[]>([]);
  const [loadingRelations, setLoadingRelations] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const fetchRelations = async () => {
      setLoadingRelations(true);
      try {
        if (initialValues?.id) {
          const resTipo = await unwrapFetcher(getAllChecklistModeloTipoAtividadeRelation)({
            where: { modeloId: initialValues.id },
          });
          const relacionadosTipo = resTipo.map((r) => String(r.tipoAtividadeId));
          setSelectedTipoAtividades(relacionadosTipo);

          const resPergunta = await unwrapFetcher(getAllChecklistModeloPerguntaRelation)({
            where: { modeloId: initialValues.id },
          });
          const relacionadosPergunta = resPergunta.map((r) => String(r.perguntaId));
          setSelectedPerguntas(relacionadosPergunta);
        }
      } catch (e) {
        console.error('🔥 Erro ao carregar relations:', e);
      } finally {
        setLoadingRelations(false);
      }
    };

    form.setFieldsValue(initialValues ?? {});
    fetchRelations();
  }, [initialValues, form]);

  useEffect(() => {
    if (!loadingRelations && tipoAtividades.length >= 0 && perguntas.length >= 0) {
      setReady(true);
    }
  }, [loadingRelations, tipoAtividades, perguntas]);

  const handleFinish = (values: ChecklistModeloFormData) => {
    onSubmit({
      ...values,
      tipoAtividadeIds: selectedTipoAtividades,
      perguntaIds: selectedPerguntas,
    });
  };

  if (!ready || loading) {
    return <Spin spinning />;
  }

  return (
    <Form form={form} layout='vertical' onFinish={handleFinish}>
      <Form.Item name='nome' label='Nome' rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name='descricao' label='Descrição'>
        <Input.TextArea rows={3} />
      </Form.Item>

      <Form.Item label='Tipos de Atividade'>
        <Transfer
          rowKey={(record) => record.id}
          dataSource={tipoAtividades}
          targetKeys={selectedTipoAtividades}
          selectedKeys={selectedKeysTipo}
          onChange={(nextKeys) => setSelectedTipoAtividades(nextKeys as string[])}
          onSelectChange={(sourceSelected, targetSelected) =>
            setSelectedKeysTipo([...sourceSelected, ...targetSelected] as string[])
          }
          render={(item) => item.nome || '[Sem Nome]'}
          showSearch
          pagination
          listStyle={{ width: 200, height: 300 }}
        />
      </Form.Item>

      <Form.Item label='Perguntas'>
        <Transfer
          rowKey={(record) => record.id}
          dataSource={perguntas}
          targetKeys={selectedPerguntas}
          selectedKeys={selectedKeysPergunta}
          onChange={(nextKeys) => setSelectedPerguntas(nextKeys as string[])}
          onSelectChange={(sourceSelected, targetSelected) =>
            setSelectedKeysPergunta([...sourceSelected, ...targetSelected] as string[])
          }
          render={(item) => item.pergunta || '[Sem Pergunta]'}
          showSearch
          pagination
          listStyle={{ width: 200, height: 300 }}
        />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' block loading={loading}>
          Salvar
        </Button>
      </Form.Item>
    </Form>
  );
}
