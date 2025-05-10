'use client';

import { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { TecnicoFormData } from '@/lib/actions/tecnico/tecnicoFormSchema';

interface TecnicoFormProps {
    onSubmit: (values: TecnicoFormData) => void;
    initialValues?: Partial<TecnicoFormData>;
    loading?: boolean;
}

export default function TecnicoForm({
    onSubmit,
    initialValues,
    loading = false,
}: TecnicoFormProps) {
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
            <Form.Item name="nome" label="Nome" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
                <Input />
            </Form.Item>

            <Form.Item name="telefone" label="Telefone" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="cpf" label="CPF" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="rg" label="RG" rules={[{ required: true }]}>
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