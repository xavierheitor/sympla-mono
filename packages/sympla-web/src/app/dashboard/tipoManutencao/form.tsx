'use client';

import { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
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

    useEffect(() => {
        if (initialValues) {
            form.setFieldsValue(initialValues);
        } else {
            form.resetFields();
        }
    }, [initialValues, form]);

    return (
        <Form form={form} layout="vertical" onFinish={onSubmit}>
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