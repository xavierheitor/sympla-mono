'use client';

import { useEffect, useState } from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { TipoManutencao } from '@sympla/prisma';

interface TipoManutencaoFormProps {
    onSubmit: (values: TipoManutencaoFormData) => void;
    initialValues?: Partial<TipoManutencaoFormData>;
    loading?: boolean;
}

export type TipoManutencaoFormData = Pick<TipoManutencao, 'nome'> & Partial<Pick<TipoManutencao, 'id'>>;

export default function TipoManutencaoForm({
    onSubmit,
    initialValues,
    loading = false,
}: TipoManutencaoFormProps) {
    const [form] = Form.useForm();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        form.setFieldsValue(initialValues ?? {});
        setReady(true);
    }, [initialValues, form]);

    if (!ready || loading) {
        return <Spin spinning />;
    }

    const handleFinish = (values: TipoManutencaoFormData) => {
        onSubmit(values);
    };

    return (
        <Form form={form} layout="vertical" onFinish={handleFinish}>
            <Form.Item name="nome" label="Nome" rules={[{ required: true, message: 'Nome é obrigatório' }]}>
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