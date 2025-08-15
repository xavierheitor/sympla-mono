'use client';

import { useEffect } from 'react';
import { Button, Form, Input, Select } from 'antd';
import {
  DefeitoFormData,
  SubgrupoDefeitoEquipamentoWithRelations,
} from '@/lib/actions/defeito/schema';

interface DefeitoFormProps {
  onSubmit: (values: DefeitoFormData) => void;
  initialValues?: Partial<DefeitoFormData>;
  subgrupoOptions: SubgrupoDefeitoEquipamentoWithRelations[];
  loading?: boolean;
}

export default function DefeitoForm({
  onSubmit,
  initialValues,
  subgrupoOptions,
  loading = false,
}: DefeitoFormProps) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(initialValues ?? {});
  }, [initialValues, form]);

  return (
    <Form form={form} layout='vertical' onFinish={onSubmit}>
      <Form.Item
        label='Nome do Defeito'
        name='nome'
        rules={[{ required: true, message: 'Informe o nome do defeito' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Código SAP'
        name='codigoSAP'
        rules={[{ required: true, message: 'Informe o código SAP' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Subgrupo do Defeito'
        name='subGrupoDefeitosId'
        rules={[{ required: true, message: 'Selecione o subgrupo' }]}
      >
        <Select showSearch optionFilterProp='label' placeholder='Selecione um subgrupo'>
          {subgrupoOptions.map((subgrupo) => (
            <Select.Option
              key={subgrupo.id}
              value={subgrupo.id}
              label={`[${subgrupo.grupo.codigo}] ${subgrupo.nome}`}
            >
              [{subgrupo.grupo.codigo}] {subgrupo.nome}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' loading={loading}>
          Salvar
        </Button>
      </Form.Item>
    </Form>
  );
}
