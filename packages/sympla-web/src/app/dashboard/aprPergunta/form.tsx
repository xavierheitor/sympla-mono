'use client';

import { useEffect } from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { AprPerguntasFormData } from '@/lib/actions/apr/schema';

interface AprPerguntasFormProps {
    onSubmit: (values: AprPerguntasFormData) => void;
    initialValues?: Partial<AprPerguntasFormData>;
    loading?: boolean;
}

export default function AprPerguntasForm({
    onSubmit,
    initialValues,
    loading = false,
}: AprPerguntasFormProps) {
    const [form] = Form.useForm();

    useEffect(() => {
        if (initialValues) {
            form.setFieldsValue(initialValues);
        } else {
            form.resetFields();
        }
    }, [initialValues, form]);

    if (loading) return <Spin spinning />;

    return (
        <Form form={form} layout="vertical" onFinish={onSubmit}>
            <Form.Item name="pergunta" label="Pergunta" rules={[{ required: true }]}>
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