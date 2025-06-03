// form.tsx
'use client';

import { useEffect } from 'react';
import { Form, Button, Select, DatePicker } from 'antd';
import dayjs from 'dayjs';
import { AtividadeAtribuicaoFormData } from '@/lib/actions/atividade/atividadeAtribuicao/atividadeAtribuicaoFormSchema';
import { Atividade, UsuarioMobile, StatusAtribuicao } from '@sympla/prisma';

interface AtividadeAtribuicaoFormProps {
    onSubmit: (values: AtividadeAtribuicaoFormData) => void;
    initialValues?: Partial<AtividadeAtribuicaoFormData>;
    loading?: boolean;
    atividades: Atividade[];
    usuarios: UsuarioMobile[];
}

export default function AtividadeAtribuicaoForm({
    onSubmit,
    initialValues,
    loading = false,
    atividades,
    usuarios,
}: AtividadeAtribuicaoFormProps) {
    const [form] = Form.useForm();

    useEffect(() => {
        if (initialValues) {
            form.setFieldsValue({
                ...initialValues,
                dataInicio: initialValues.dataInicio ? dayjs(initialValues.dataInicio) : null,
                dataFim: initialValues.dataFim ? dayjs(initialValues.dataFim) : null,
            });
        } else {
            form.resetFields();
        }
    }, [initialValues, form]);

    return (
        <Form form={form} layout="vertical" onFinish={onSubmit}>
            <Form.Item name="atividadeId" label="Atividade" rules={[{ required: true }]}>
                <Select
                    options={atividades.map((a) => ({ label: a.ordemServico || a.id, value: a.id }))}
                    placeholder="Selecione a atividade"
                />
            </Form.Item>

            <Form.Item name="usuarioMobileId" label="Técnico" rules={[{ required: true }]}>
                <Select
                    options={usuarios.map((u) => ({ label: u.nome, value: u.id }))}
                    placeholder="Selecione o técnico"
                />
            </Form.Item>

            <Form.Item name="status" label="Status" rules={[{ required: true }]}>
                <Select
                    options={Object.entries(StatusAtribuicao).map(([key, value]) => ({ label: key, value }))}
                />
            </Form.Item>

            <Form.Item name="dataInicio" label="Data Início">
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item name="dataFim" label="Data Fim">
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block loading={loading}>
                    Salvar
                </Button>
            </Form.Item>
        </Form>
    );
}
