'use client';

import { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { GrupoDefeitoEquipamentoFormData } from '@/lib/actions/defeito/schema';

interface GrupoDefeitoEquipamentoFormProps {
  onSubmit: (values: GrupoDefeitoEquipamentoFormData) => void;
  initialValues?: Partial<GrupoDefeitoEquipamentoFormData>;
  loading?: boolean;
}

export default function GrupoDefeitoEquipamentoForm({
  onSubmit,
  initialValues,
  loading = false,
}: GrupoDefeitoEquipamentoFormProps) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  return (
    <Form form={form} layout='vertical' initialValues={initialValues} onFinish={onSubmit}>
      <Form.Item name='nome' label='Nome' rules={[{ required: true }]}>
        <Input autoFocus />
      </Form.Item>

      <Form.Item name='codigo' label='Grupo Defeito Código' rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' block loading={loading}>
          Salvar
        </Button>
      </Form.Item>
    </Form>
  );
}
