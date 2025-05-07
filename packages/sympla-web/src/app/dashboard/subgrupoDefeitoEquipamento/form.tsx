'use client';

import { useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { SubgrupoDefeitoEquipamentoFormData } from '@/lib/actions/subgrupoDefeitoEquipamento/subgrupoDefeitoEquipamentoFormSchema';
import { GrupoDefeitoEquipamento } from '@sympla/prisma';

interface SubgrupoDefeitoEquipamentoFormProps {
    onSubmit: (values: SubgrupoDefeitoEquipamentoFormData) => void;
    initialValues?: Partial<SubgrupoDefeitoEquipamentoFormData>;
    loading?: boolean;
    grupoOptions: GrupoDefeitoEquipamento[];
}

export default function SubgrupoDefeitoEquipamentoForm({
    onSubmit,
    initialValues,
    loading = false,
    grupoOptions,
}: SubgrupoDefeitoEquipamentoFormProps) {
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

            <Form.Item name="grupoId" label="Grupo de Defeito" rules={[{ required: true }]}>
                <Select
                    options={grupoOptions.map((g) => ({ label: g.nome, value: g.id }))}
                    placeholder="Selecione o grupo de defeito"
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