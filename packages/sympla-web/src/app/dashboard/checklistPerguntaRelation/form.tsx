'use client';

import { useEffect } from 'react';
import { Form, InputNumber, Select, Button } from 'antd';
import { ChecklisrPerguntaRelationFormData } from '@/lib/actions/checklisrPerguntaRelation/checklisrPerguntaRelationFormSchema';
import { ChecklistPergunta, ChecklistModelo } from '@sympla/prisma';

interface ChecklisrPerguntaRelationFormProps {
    onSubmit: (values: ChecklisrPerguntaRelationFormData) => void;
    initialValues?: Partial<ChecklisrPerguntaRelationFormData>;
    loading?: boolean;
    perguntas: ChecklistPergunta[];
    modelos: ChecklistModelo[];
}

export default function ChecklisrPerguntaRelationForm({
    onSubmit,
    initialValues,
    loading = false,
    perguntas,
    modelos,
}: ChecklisrPerguntaRelationFormProps) {
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
                <InputNumber style={{ width: '100%' }} min={0} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block loading={loading}>
                    Salvar
                </Button>
            </Form.Item>
        </Form>
    );
}