'use client';

import { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { CentroTrabalhoFormData } from '@/lib/actions/centroTrabalho/centroTrabalhoFormSchema';

interface CentroTrabalhoFormProps {
    onSubmit: (values: CentroTrabalhoFormData) => void;
    initialValues?: Partial<CentroTrabalhoFormData>;
    loading?: boolean;
}

export default function CentroTrabalhoForm({ onSubmit, initialValues, loading = false }: CentroTrabalhoFormProps) {
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

            <Form.Item>
                <Button type="primary" htmlType="submit" block loading={loading}>Salvar</Button>
            </Form.Item>
        </Form>
    );
}
