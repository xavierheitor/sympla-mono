'use client';

import { useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { CentroTrabalhoFormData } from '@/lib/actions/centroTrabalho/centroTrabalhoFormSchema';
import { Regional } from '@sympla/prisma';

interface CentroTrabalhoFormProps {
    onSubmit: (values: CentroTrabalhoFormData) => void;
    initialValues?: Partial<CentroTrabalhoFormData>;
    loading?: boolean;
    regionals: Regional[];
}

export default function CentroTrabalhoForm({ onSubmit, initialValues, loading = false, regionals }: CentroTrabalhoFormProps) {
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

            <Form.Item name="regionalId" label="Regional" rules={[{ required: true }]}>
                <Select options={regionals.map((regional) => ({ label: regional.nome, value: regional.id }))} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block loading={loading}>Salvar</Button>
            </Form.Item>
        </Form>
    );
}
