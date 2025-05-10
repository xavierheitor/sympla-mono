// form.tsx
'use client';

import { useEffect } from 'react';
import { Form, Button, Select, InputNumber } from 'antd';
import { AprPerguntasRelationFormData } from '@/lib/actions/aprPerguntasRelation/aprPerguntasRelationFormSchema';
import { AprModelo, AprPerguntas } from '@sympla/prisma';

interface AprPerguntasRelationFormProps {
    onSubmit: (values: AprPerguntasRelationFormData) => void;
    initialValues?: Partial<AprPerguntasRelationFormData>;
    loading?: boolean;
    modelos: AprModelo[];
    perguntas: AprPerguntas[];
}

export default function AprPerguntasRelationForm({
    onSubmit,
    initialValues,
    loading = false,
    modelos,
    perguntas,
}: AprPerguntasRelationFormProps) {
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
            <Form.Item name="perguntaId" label="Pergunta" rules={[{ required: true }]}>
                <Select
                    options={perguntas.map(p => ({ label: p.pergunta, value: p.id }))}
                    placeholder="Selecione a pergunta"
                />
            </Form.Item>

            <Form.Item name="modeloId" label="Modelo" rules={[{ required: true }]}>
                <Select
                    options={modelos.map(m => ({ label: m.nome, value: m.id }))}
                    placeholder="Selecione o modelo"
                />
            </Form.Item>

            <Form.Item name="ordem" label="Ordem" rules={[{ required: true }]}>
                <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block loading={loading}>
                    Salvar
                </Button>
            </Form.Item>
        </Form>
    );
} 
