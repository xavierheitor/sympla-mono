'use client';

import { useEffect } from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import { TipoAtividade, StatusAtividade } from '@sympla/prisma';
import dayjs from 'dayjs';
import { AtividadeFormData } from '@/lib/actions/atividade/schema';
import { NotaPMAWithRelations } from '@/lib/actions/pma/schema';

interface AtividadeFormProps {
  onSubmit: (values: AtividadeFormData) => void;
  initialValues?: Partial<AtividadeFormData>;
  loading?: boolean;
  tipoAtividadeOptions: TipoAtividade[];
  notaOptions: NotaPMAWithRelations[];
}

export default function AtividadeForm({
  onSubmit,
  initialValues,
  loading = false,
  tipoAtividadeOptions,
  notaOptions,
}: AtividadeFormProps) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue({
        ...initialValues,
        dataInicioPlan: initialValues.dataInicioPlan ? dayjs(initialValues.dataInicioPlan) : null,
        dataFimPlan: initialValues.dataFimPlan ? dayjs(initialValues.dataFimPlan) : null,
        dataExecucaoInicio: initialValues.dataExecucaoInicio
          ? dayjs(initialValues.dataExecucaoInicio)
          : null,
        dataExecucaoFim: initialValues.dataExecucaoFim
          ? dayjs(initialValues.dataExecucaoFim)
          : null,
      });
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  return (
    <Form form={form} layout='vertical' onFinish={onSubmit}>
      <Form.Item name='descricao' label='Descrição'>
        <Input />
      </Form.Item>

      <Form.Item name='notaPmaId' label='Nota SAP' rules={[{ required: true }]}>
        <Select
          options={notaOptions.map((n) => ({
            label: n.numeroNota + ' - ' + n.kpi?.nome + ' - ' + n.equipamento?.nome,
            value: n.id,
          }))}
          placeholder='Selecione uma nota'
        />
      </Form.Item>

      <Form.Item name='tipoAtividadeId' label='Tipo de Atividade' rules={[{ required: true }]}>
        <Select
          options={tipoAtividadeOptions.map((t) => ({
            label: t.nome,
            value: t.id,
          }))}
          placeholder='Selecione o tipo'
        />
      </Form.Item>

      <Form.Item name='ordemServico' label='Ordem de Serviço'>
        <Input />
      </Form.Item>

      <Form.Item name='status' label='Status' rules={[{ required: true }]}>
        <Select
          options={Object.entries(StatusAtividade).map(([key, value]) => ({
            label: key,
            value: value,
          }))}
          placeholder='Selecione o status'
        />
      </Form.Item>

      <Form.Item name='dataInicioPlan' label='Data Início Planejado'>
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item name='dataFimPlan' label='Data Fim Planejado'>
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item name='dataExecucaoInicio' label='Data Execução Início'>
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item name='dataExecucaoFim' label='Data Execução Fim'>
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' block loading={loading}>
          Salvar
        </Button>
      </Form.Item>
    </Form>
  );
}
