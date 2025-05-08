'use client';

import { useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { EquipamentoFormData } from '@/lib/actions/equipamento/equipamentoFormSchema';
import {
    GrupoDefeitoEquipamento,
    GrupoDefeitoCodigo,
    SubgrupoDefeitoEquipamento,
    Subestacao,
} from '@sympla/prisma';

interface EquipamentoFormProps {
    onSubmit: (values: EquipamentoFormData) => void;
    initialValues?: Partial<EquipamentoFormData>;
    loading?: boolean;
    grupoOptions: GrupoDefeitoEquipamento[];
    subgrupoOptions: SubgrupoDefeitoEquipamento[];
    codigoOptions: GrupoDefeitoCodigo[];
    subestacaoOptions: Subestacao[];
}

export default function EquipamentoForm({
    onSubmit,
    initialValues,
    loading = false,
    grupoOptions,
    subgrupoOptions,
    codigoOptions,
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

            <Form.Item name="grupoId" label="Grupo de Defeito" rules={[{ required: true }]}>
                <Select
                    options={grupoOptions.map((g) => ({ label: g.nome, value: g.id }))}
                    placeholder="Selecione o grupo de defeito"
                />
            </Form.Item>

            <Form.Item name="subgrupoId" label="Subgrupo de Defeito">
                <Select
                    options={subgrupoOptions.map((s) => ({ label: s.nome, value: s.id }))}
                    placeholder="Selecione o subgrupo de defeito"
                    allowClear
                />
            </Form.Item>

            <Form.Item name="grupoDefeitoCodigoId" label="Código do Grupo" rules={[{ required: true }]}>
                <Select
                    options={codigoOptions.map((c) => ({ label: c.codigo, value: c.id }))}
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