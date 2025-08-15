'use client';

import { useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { SubestacaoFormData } from '@/lib/actions/subestacao/schema';
import { Regional } from '@sympla/prisma';

interface EnumOption {
  label: string;
  value: string;
}

interface SubestacaoFormProps {
  onSubmit: (values: SubestacaoFormData) => void;
  initialValues?: Partial<SubestacaoFormData>;
  loading?: boolean;

  propriedadeOptions: EnumOption[];
  categoriaOptions: EnumOption[];
  tensaoOptions: EnumOption[];
  regionalOptions: Regional[];
}

export default function SubestacaoForm({
  onSubmit,
  initialValues,
  loading = false,
  propriedadeOptions,
  categoriaOptions,
  tensaoOptions,
  regionalOptions,
}: SubestacaoFormProps) {
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
        <Input />
      </Form.Item>

      <Form.Item name='sigla' label='Sigla' rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name='localInstalacao' label='Local de Instalação' rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name='codigoSap' label='Código SAP' rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name='propriedade' label='Propriedade' rules={[{ required: true }]}>
        <Select options={propriedadeOptions} placeholder='Selecione...' />
      </Form.Item>

      <Form.Item name='categoria' label='Categoria' rules={[{ required: true }]}>
        <Select options={categoriaOptions} placeholder='Selecione...' />
      </Form.Item>

      <Form.Item name='tensao' label='Tensão' rules={[{ required: true }]}>
        <Select options={tensaoOptions} placeholder='Selecione...' />
      </Form.Item>

      <Form.Item name='regionalId' label='Regional' rules={[{ required: true }]}>
        <Select
          options={regionalOptions.map((regional) => ({
            label: regional.nome,
            value: regional.id,
          }))}
          placeholder='Selecione uma regional'
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
