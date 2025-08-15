'use client';

import { useEffect, useState } from 'react';
import { Form, Input, Button, Spin, Select } from 'antd';
import { KpiFormData } from '@/lib/actions/kpi/schema';
import { TipoManutencao } from '@sympla/prisma';

interface KpiFormProps {
  onSubmit: (values: KpiFormData) => void;
  initialValues?: Partial<KpiFormData>;
  loading?: boolean;
  tipoOptions: TipoManutencao[];
}

export default function KpiForm({
  onSubmit,
  initialValues,
  loading = false,
  tipoOptions,
}: KpiFormProps) {
  const [form] = Form.useForm();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    form.setFieldsValue(initialValues ?? {});
    setReady(true);
  }, [initialValues, form]);

  if (!ready || loading) {
    return <Spin spinning />;
  }

  const handleFinish = (values: KpiFormData) => {
    onSubmit(values);
  };

  return (
    <Form form={form} layout='vertical' onFinish={handleFinish}>
      <Form.Item name='nome' label='Nome' rules={[{ required: true }]}>
        <Input autoFocus />
      </Form.Item>

      <Form.Item name='descricao' label='Descrição' rules={[{ required: true }]}>
        <Input.TextArea rows={3} />
      </Form.Item>

      <Form.Item name='tipoManutencaoId' label='Tipo de Manutenção' rules={[{ required: true }]}>
        <Select
          options={tipoOptions.map((t) => ({ label: t.nome, value: t.id }))}
          placeholder='Selecione o tipo de manutenção'
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
