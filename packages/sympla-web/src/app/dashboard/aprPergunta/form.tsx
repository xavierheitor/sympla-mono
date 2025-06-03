'use client';

import { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { AprPerguntasFormData } from '@/lib/actions/aprModelo/aprPerguntas/aprPerguntasFormSchema';

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