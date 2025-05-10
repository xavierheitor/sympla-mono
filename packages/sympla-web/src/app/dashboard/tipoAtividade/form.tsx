// form.tsx
'use client';

import { useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { TipoAtividadeFormData } from '@/lib/actions/tipoAtividade/tipoAtividadeFormSchema';
import { Kpi } from '@sympla/prisma';

interface EnumOption {
    label: string;
    value: string;
}

interface TipoAtividadeFormProps {
    onSubmit: (values: TipoAtividadeFormData) => void;
    initialValues?: Partial<TipoAtividadeFormData>;
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

    useEffect(() => {
        if (initialValues) {
            form.setFieldsValue(initialValues);
        } else {
            form.resetFields();
        }
    }, [initialValues, form]);

    return (
        <Form form={form} layout="vertical" initialValues={initialValues} onFinish={onSubmit}>
            <Form.Item name="nome" label="Nome" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="kpiId" label="KPI">
                <Select
                    options={kpiOptions.map(kpi => ({
                        label: kpi.nome,
                        value: kpi.id,
                    }))}
                    allowClear
                    placeholder="Selecione uma KPI"
                />
            </Form.Item>

            <Form.Item name="tipoAtividadeMobile" label="Tipo Mobile" rules={[{ required: true }]}>
                <Select options={tipoMobileOptions} placeholder="Selecione..." />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block loading={loading}>
                    Salvar
                </Button>
            </Form.Item>
        </Form>
    );
}
