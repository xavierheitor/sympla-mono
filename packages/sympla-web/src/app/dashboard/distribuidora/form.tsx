// src/app/dashboard/distribuidora/form.tsx
'use client';

import { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { type Distribuidora } from '@sympla/prisma';

interface DistribuidoraFormProps {
    onSubmit: (values: Partial<Distribuidora>) => void;
    initialValues?: Partial<Distribuidora>;
    loading?: boolean;
}

export default function DistribuidoraForm({
    onSubmit,
    initialValues,
    loading = false,
}: DistribuidoraFormProps) {
    const [form] = Form.useForm();

    useEffect(() => {
        if (initialValues) {
            form.setFieldsValue(initialValues);
        } else {
            form.resetFields();
        }
    }, [initialValues, form]);

    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={initialValues}
            onFinish={onSubmit}
        >
            <Form.Item name="nome" label="Nome" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="descricao" label="Descrição">
                <Input.TextArea rows={3} />
            </Form.Item>
            <Form.Item name="codigoSap" label="Código SAP">
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block loading={loading}>
                    Salvar
                </Button>
            </Form.Item>
        </Form>
    );
}