'use client';

import { useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { GrupoDefeitoEquipamentoWithRelations, SubgrupoDefeitoEquipamentoFormData } from '@/lib/actions/defeito/schema';

interface SubgrupoDefeitoEquipamentoFormProps {
    onSubmit: (values: SubgrupoDefeitoEquipamentoFormData) => void;
    initialValues?: Partial<SubgrupoDefeitoEquipamentoFormData>;
    loading?: boolean;
    grupoOptions: GrupoDefeitoEquipamentoWithRelations[];
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
                <Input autoFocus />
            </Form.Item>

            <Form.Item name="grupoId" label="Grupo de Defeito" rules={[{ required: true }]}>
                <Select
                    showSearch
                    optionFilterProp="label"
                    filterOption={(input, option) =>
                        (option?.label as string).toLowerCase().includes(input.toLowerCase())
                    }
                    options={grupoOptions.map((g) => ({
                        label: `${g.codigo} - ${g.nome}`,
                        value: g.id,
                    }))}
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