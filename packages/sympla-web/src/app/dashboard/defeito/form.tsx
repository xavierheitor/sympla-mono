'use client';

import { useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { DefeitoFormData, DefeitoWithRelations } from '@/lib/actions/defeito/defeitoFormSchema';
import {
    GrupoDefeitoEquipamento,
    SubgrupoDefeitoEquipamento,
    GrupoDefeitoCodigo,
} from '@sympla/prisma';

interface DefeitoFormProps {
    onSubmit: (values: DefeitoFormData) => void;
    initialValues?: Partial<DefeitoWithRelations>;
    loading?: boolean;
    grupoOptions: GrupoDefeitoEquipamento[];
    subgrupoOptions: SubgrupoDefeitoEquipamento[];
    codigoOptions: GrupoDefeitoCodigo[];
}

export default function DefeitoForm({
    onSubmit,
    initialValues,
    loading = false,
    grupoOptions,
    subgrupoOptions,
    codigoOptions,
}: DefeitoFormProps) {
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
            <Form.Item name="codigoSap" label="Código SAP" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="descricao" label="Descrição" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="grupoId" label="Grupo" rules={[{ required: true }]}>
                <Select options={grupoOptions.map(g => ({ label: g.nome, value: g.id }))} />
            </Form.Item>

            <Form.Item name="subgrupoId" label="Subgrupo" rules={[{ required: true }]}>
                <Select options={subgrupoOptions.map(s => ({ label: s.nome, value: s.id }))} />
            </Form.Item>

            <Form.Item name="grupoDefeitoCodigoId" label="Código do Grupo" rules={[{ required: true }]}>
                <Select options={codigoOptions.map(c => ({ label: c.codigo, value: c.id }))} />
            </Form.Item>

            <Form.Item name="acaoRecomendada" label="Ação Recomendada">
                <Input />
            </Form.Item>

            <Form.Item name="custeioOuInvestimento" label="Custeio / Investimento">
                <Input />
            </Form.Item>

            <Form.Item name="equipe" label="Equipe">
                <Input />
            </Form.Item>

            <Form.Item name="prioridade" label="Prioridade">
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block loading={loading}>
                    Salvar
                </Button>
            </Form.Item>
        </Form>
    );
}
