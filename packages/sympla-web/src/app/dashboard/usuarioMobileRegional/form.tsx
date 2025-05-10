'use client';

import { useEffect } from 'react';
import { Form, Button, Select } from 'antd';
import { UsuarioMobileRegionalFormData } from '@/lib/actions/usuarioMobileRegional/usuarioMobileRegionalFormSchema';
import { UsuarioMobile, Regional } from '@sympla/prisma';

interface UsuarioMobileRegionalFormProps {
    onSubmit: (values: UsuarioMobileRegionalFormData) => void;
    initialValues?: Partial<UsuarioMobileRegionalFormData>;
    loading?: boolean;
    usuarioOptions: UsuarioMobile[];
    regionalOptions: Regional[];
}

export default function UsuarioMobileRegionalForm({
    onSubmit,
    initialValues,
    loading = false,
    usuarioOptions,
    regionalOptions,
}: UsuarioMobileRegionalFormProps) {
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
            <Form.Item name="usuarioMobileId" label="Usuário Mobile" rules={[{ required: true }]}>
                <Select
                    options={usuarioOptions.map((u) => ({ label: u.nome, value: u.id }))}
                    placeholder="Selecione o usuário"
                />
            </Form.Item>

            <Form.Item name="regionalId" label="Regional" rules={[{ required: true }]}>
                <Select
                    options={regionalOptions.map((r) => ({ label: r.nome, value: r.id }))}
                    placeholder="Selecione a regional"
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