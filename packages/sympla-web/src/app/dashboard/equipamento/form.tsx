'use client';

import { useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { EquipamentoFormData } from '@/lib/actions/equipamento/equipamentoFormSchema';
import {
    GrupoDefeitoEquipamento,
    Subestacao,
} from '@sympla/prisma';

interface EquipamentoFormProps {
    onSubmit: (values: EquipamentoFormData) => void;
    initialValues?: Partial<EquipamentoFormData>;
    loading?: boolean;
    grupoOptions: GrupoDefeitoEquipamento[];
    subestacaoOptions: Subestacao[];
}

export default function EquipamentoForm({
    onSubmit,
    initialValues,
    loading = false,
    grupoOptions,
    subestacaoOptions,
}: EquipamentoFormProps) {
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

            <Form.Item name="subestacaoId" label="Subestação" rules={[{ required: true }]}>
                <Select
                    options={subestacaoOptions.map((s) => ({ label: s.nome, value: s.id }))}
                    placeholder="Selecione a subestação"
                />
            </Form.Item>

            <Form.Item name="grupoDefeitoCodigo" label="Código do Grupo" rules={[{ required: true }]}>
                <Select
                    options={grupoOptions.map((c) => ({ label: `${c.codigo} - ${c.nome}`, value: c.codigo }))}
                    placeholder="Selecione o código"
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