'use client';

import { useEffect, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import createDistribuidora from '@/lib/actions/distribuidora/new';

export default function DistribuidoraForm({ onClose, initialValues }) {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [actionResult, setActionResult] = useState<{ success?: boolean; error?: string } | null>(null);

    useEffect(() => {
        if (!actionResult) return;

        if (actionResult.success) {
            message.success('Distribuidora salva com sucesso!');
            onClose(); // fecha o modal
        } else if (actionResult.error) {
            message.error(actionResult.error || 'Erro ao salvar distribuidora');
        }

        setActionResult(null); // limpa o estado após o toast
    }, [actionResult, onClose]);

    const onFinish = async (values: any) => {
        setLoading(true);
        try {
            const res = await createDistribuidora(values);
            if (res.success) {
                setActionResult({ success: true });
            } else {
                setActionResult({ error: res.error || 'Erro inesperado.' });
            }
        } catch (err) {
            console.error(err);
            setActionResult({ error: 'Erro ao salvar distribuidora' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={initialValues}
            onFinish={onFinish}
        >
            <Form.Item name="nome" label="Nome" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="descricao" label="Descrição">
                <Input.TextArea rows={3} />
            </Form.Item>
            <Form.Item name="codigoSap" label="Código SAP">
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