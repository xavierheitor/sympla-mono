'use client';

import { Form, Input, Button, Select, Transfer, Spin } from 'antd';
import { TipoAtividadeFormData } from '@/lib/actions/atividade/schema';
import { Kpi } from '@sympla/prisma';
import { Key, useState } from 'react';

interface EnumOption {
  label: string;
  value: string;
}

interface TipoAtividadeFormProps {
  onSubmit: (values: TipoAtividadeFormData & { kpiIds: string[] }) => void;
  initialValues?: Partial<TipoAtividadeFormData & { kpiIds: string[] }>;
  loading?: boolean;
  tipoMobileOptions: EnumOption[];
  kpiOptions: Kpi[];
}

export default function TipoAtividadeForm({
  onSubmit,
  initialValues,
  loading = false,
  tipoMobileOptions,
  kpiOptions,
}: TipoAtividadeFormProps) {
  const [form] = Form.useForm();
  const [selectedKpiIds, setSelectedKpiIds] = useState<Key[]>(initialValues?.kpiIds ?? []);

  const handleFinish = (values: TipoAtividadeFormData) => {
    onSubmit({ ...values, kpiIds: selectedKpiIds.map(String) });
  };

  return (
    <Spin spinning={loading}>
      <Form form={form} layout='vertical' initialValues={initialValues} onFinish={handleFinish}>
        <Form.Item name='nome' label='Nome' rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name='tipoAtividadeMobile' label='Tipo Mobile' rules={[{ required: true }]}>
          <Select options={tipoMobileOptions} placeholder='Selecione...' />
        </Form.Item>

        <Form.Item label='KPIs'>
          <Transfer
            dataSource={kpiOptions.map((kpi) => ({
              key: String(kpi.id),
              title: kpi.nome,
            }))}
            titles={['Disponíveis', 'Selecionados']}
            targetKeys={selectedKpiIds}
            onChange={(nextTargetKeys) => setSelectedKpiIds(nextTargetKeys)}
            render={(item) => item.title}
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
    </Spin>
  );
}
