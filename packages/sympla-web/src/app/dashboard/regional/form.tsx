'use client';

import { useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { RegionalFormData } from '@/lib/actions/regional/schema';
import { Distribuidora } from '@sympla/prisma';

interface RegionalFormProps {
    onSubmit: (values: RegionalFormData) => void;
    initialValues?: Partial<RegionalFormData>;
    loading?: boolean;
    distribuidoras?: Distribuidora[];
}

export default function RegionalForm({
    onSubmit,
    initialValues,
    loading = false,
    distribuidoras,
}: RegionalFormProps) {
    const [form] = Form.useForm();

    useEffect(() => {
        if (initialValues) {
            form.setFieldsValue(initialValues);
        } else {
            form.resetFields();
        }
    }, [initialValues, form]);


    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={initialValues}
            onFinish={onSubmit}
        >
            <Form.Item name="nome" label="Nome" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="descricao" label="Descrição">
                <Input.TextArea rows={3} />
            </Form.Item>

            <Form.Item
                name="codigoSap"
                label="Código SAP"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="distribuidoraId"
                label="Distribuidora"
                rules={[{ required: true, message: 'Selecione uma distribuidora' }]}
            >
                <Select
                    options={
                        distribuidoras?.map((d) => ({
                            label: d.nome,
                            value: d.id,
                        })) ?? []
                    }
                    placeholder="Selecione uma distribuidora"
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