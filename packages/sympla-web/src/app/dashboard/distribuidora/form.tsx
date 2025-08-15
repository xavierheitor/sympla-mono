'use client';

import { useEffect, useState } from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { DistribuidoraFormData } from '@/lib/actions/distribuidora/schema';

interface DistribuidoraFormProps {
  onSubmit: (values: DistribuidoraFormData) => void;
  initialValues?: Partial<DistribuidoraFormData>;
  loading?: boolean;
}

export default function DistribuidoraForm({
  onSubmit,
  initialValues,
  loading = false,
}: DistribuidoraFormProps) {
  const [form] = Form.useForm();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    form.setFieldsValue(initialValues ?? {});
    setReady(true);
  }, [initialValues, form]);

  if (!ready || loading) {
    return <Spin spinning />;
  }

  const handleFinish = (values: DistribuidoraFormData) => {
    onSubmit(values);
  };

  return (
    <Form form={form} layout='vertical' onFinish={handleFinish}>
      <Form.Item name='nome' label='Nome' rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name='descricao' label='Descrição'>
        <Input.TextArea rows={3} />
      </Form.Item>
      <Form.Item name='codigoSap' label='Código SAP' rules={[{ required: true }]}>
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
