'use client';

import { useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { GrupoDefeitoCodigoFormData } from '@/lib/actions/grupoDefeitoCodigo/grupoDefeitoCodigoFormSchema';
import { GrupoDefeitoEquipamento } from '@sympla/prisma';

interface GrupoDefeitoCodigoFormProps {
    onSubmit: (values: GrupoDefeitoCodigoFormData) => void;
    initialValues?: Partial<GrupoDefeitoCodigoFormData>;
    loading?: boolean;
    grupoOptions: GrupoDefeitoEquipamento[];
}

export default function GrupoDefeitoCodigoForm({
    onSubmit,
    initialValues,
    loading = false,
    grupoOptions,
}: GrupoDefeitoCodigoFormProps) {
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
            <Form.Item name="sigla" label="Sigla" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="codigo" label="Código" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="grupoId" label="Grupo de Defeito" rules={[{ required: true }]}>
                <Select
                    options={grupoOptions.map((g) => ({ label: g.nome, value: g.id }))}
                    placeholder="Selecione o grupo"
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