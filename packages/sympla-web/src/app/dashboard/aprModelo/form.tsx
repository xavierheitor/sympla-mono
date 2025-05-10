// form.tsx
'use client';

import { useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { AprModeloFormData } from '@/lib/actions/aprModelo/aprModeloFormSchema';
import { TipoAtividade } from '@sympla/prisma';

interface AprModeloFormProps {
    onSubmit: (values: AprModeloFormData) => void;
    initialValues?: Partial<AprModeloFormData>;
    loading?: boolean;
    tipoAtividadeOptions: TipoAtividade[];
}

export default function AprModeloForm({
    onSubmit,
    initialValues,
    loading = false,
    tipoAtividadeOptions,
}: AprModeloFormProps) {
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

            <Form.Item name="descricao" label="Descrição">
                <Input.TextArea rows={3} />
            </Form.Item>

            <Form.Item name="tipoAtividadeId" label="Tipo de Atividade" rules={[{ required: true }]}>
                <Select
                    options={tipoAtividadeOptions.map((tipo) => ({
                        label: tipo.nome,
                        value: tipo.id,
                    }))}
                    placeholder="Selecione o tipo de atividade"
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
