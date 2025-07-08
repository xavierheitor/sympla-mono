'use client';

import { useEffect } from 'react';
import { Form, Button, Select, DatePicker } from 'antd';
import dayjs from 'dayjs';
import { StatusAtribuicao } from '@sympla/prisma';
import { Atividade, UsuarioMobile } from '@sympla/prisma';
import { AtividadeAtribuicaoFormData } from '@/lib/actions/atividade/schema';

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
        form.setFieldsValue({
            ...initialValues,
            dataInicio: initialValues?.dataInicio ? dayjs(initialValues.dataInicio) : null,
            dataFim: initialValues?.dataFim ? dayjs(initialValues.dataFim) : null,
        });
    }, [initialValues, form]);

    return (
        <Form layout="vertical" form={form} onFinish={onSubmit}>
            <Form.Item name="atividadeId" label="Atividade" rules={[{ required: true }]}>
                <Select
                    placeholder="Selecione a atividade"
                    options={atividades.map((a) => ({
                        label: a.ordemServico || a.id,
                        value: a.id,
                    }))}
                />
            </Form.Item>

            <Form.Item name="usuarioMobileId" label="Técnico" rules={[{ required: true }]}>
                <Select
                    placeholder="Selecione o técnico"
                    options={usuarios.map((u) => ({
                        label: u.nome,
                        value: u.id,
                    }))}
                />
            </Form.Item>

            <Form.Item name="status" label="Status" rules={[{ required: true }]}>
                <Select
                    placeholder="Selecione o status"
                    options={Object.entries(StatusAtribuicao).map(([label, value]) => ({
                        label,
                        value,
                    }))}
                />
            </Form.Item>

            <Form.Item name="dataInicio" label="Data de Início">
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item name="dataFim" label="Data de Fim">
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