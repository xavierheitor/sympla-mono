'use client';

import { useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { ChecklistModeloFormData } from '@/lib/actions/checklistModelo/checklistModeloFormSchema';
import { TipoAtividade } from '@sympla/prisma';

interface ChecklistModeloFormProps {
    onSubmit: (values: ChecklistModeloFormData) => void;
    initialValues?: Partial<ChecklistModeloFormData>;
    loading?: boolean;
    tipoAtividadeOptions: TipoAtividade[];
}

export default function ChecklistModeloForm({
    onSubmit,
    initialValues,
    loading = false,
    tipoAtividadeOptions,
}: ChecklistModeloFormProps) {
    const [form] = Form.useForm();

    useEffect(() => {
        if (initialValues) {
            form.setFieldsValue(initialValues);
        } else {
            form.resetFields();
        }
    }, [initialValues, form]);

    return (
        <Form layout="vertical" form={form} onFinish={onSubmit}>
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
                    placeholder="Selecione o tipo"
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