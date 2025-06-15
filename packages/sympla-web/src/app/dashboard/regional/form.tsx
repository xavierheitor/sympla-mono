'use client';

import { useEffect, useState } from 'react';
import { Form, Input, Button, Spin, Select } from 'antd';
import { RegionalFormData } from '@/lib/actions/regional/schema';
import { Distribuidora } from '@sympla/prisma';

interface RegionalFormProps {
    onSubmit: (values: RegionalFormData) => void;
    initialValues?: Partial<RegionalFormData>;
    loading?: boolean;
    distribuidoras: Distribuidora[];
}

export default function RegionalForm({
    onSubmit,
    initialValues,
    loading = false,
    distribuidoras,
}: RegionalFormProps) {
    const [form] = Form.useForm();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        form.setFieldsValue(initialValues ?? {});
        setReady(true);
    }, [initialValues, form]);

    if (!ready || loading) {
        return <Spin spinning />;
    }

    const handleFinish = (values: RegionalFormData) => {
        onSubmit(values);
    };

    return (
        <Form form={form} layout="vertical" onFinish={handleFinish}>
            <Form.Item name="nome" label="Nome" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="descricao" label="Descrição">
                <Input.TextArea rows={3} />
            </Form.Item>

            <Form.Item name="codigoSap" label="Código SAP" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="distribuidoraId" label="Distribuidora" rules={[{ required: true }]}>
                <Select
                    options={distribuidoras.map((d) => ({ label: d.nome, value: d.id }))}
                    placeholder="Selecione uma distribuidora"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block loading={loading}>
                    Salvar
                </Button>
            </Form.Item>
        </Form>
    );
}