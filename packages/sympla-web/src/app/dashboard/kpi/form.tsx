'use client';

import { useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { KpiFormData } from '@/lib/actions/kpi/schema';
import { TipoManutencao } from '@sympla/prisma';

interface KpiFormProps {
    onSubmit: (values: KpiFormData) => void;
    initialValues?: Partial<KpiFormData>;
    loading?: boolean;
    tipoOptions: TipoManutencao[];
}

export default function KpiForm({
    onSubmit,
    initialValues,
    loading = false,
    tipoOptions,
}: KpiFormProps) {
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

            <Form.Item name="descricao" label="Descrição" rules={[{ required: true }]}>
                <Input.TextArea rows={3} />
            </Form.Item>

            <Form.Item name="tipoManutencaoId" label="Tipo de Manutenção" rules={[{ required: true }]}>
                <Select
                    options={tipoOptions.map((t) => ({ label: t.nome, value: t.id }))}
                    placeholder="Selecione o tipo de manutenção"
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