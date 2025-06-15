'use client';

import { useEffect } from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { ChecklistPerguntaFormData } from '@/lib/actions/checklist/schema';

interface ChecklistPerguntaFormProps {
    onSubmit: (values: ChecklistPerguntaFormData) => void;
    initialValues?: Partial<ChecklistPerguntaFormData>;
    loading?: boolean;
}

export default function ChecklistPerguntaForm({
    onSubmit,
    initialValues,
    loading = false,
}: ChecklistPerguntaFormProps) {
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