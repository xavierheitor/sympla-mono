'use client';

import { useEffect } from 'react';
import { Form, Input, Button, Transfer } from 'antd';
import type { TransferItem } from 'antd/es/transfer';
import { AprModeloFormData } from '@/lib/actions/aprModelo/aprModeloFormSchema';
import { TipoAtividade } from '@sympla/prisma';

interface AprModeloFormProps {
    onSubmit: (values: AprModeloFormData & { tipoAtividadeIds: string[] }) => void;
    initialValues?: Partial<AprModeloFormData>;
    tipoAtividades: TipoAtividade[];
    selectedTipoAtividadeIds?: string[];
    loading?: boolean;
}

export default function AprModeloForm({
    onSubmit,
    initialValues,
    tipoAtividades,
    selectedTipoAtividadeIds = [],
    loading = false,
}: AprModeloFormProps) {
    const [form] = Form.useForm();

    useEffect(() => {
        if (initialValues) {
            form.setFieldsValue({ ...initialValues, tipoAtividadeIds: selectedTipoAtividadeIds });
        } else {
            form.resetFields();
        }
    }, [initialValues, selectedTipoAtividadeIds, form]);

    const transferData: TransferItem[] = tipoAtividades.map((ta) => ({
        key: ta.id,
        title: ta.nome,
    }));

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onSubmit}
            initialValues={{ tipoAtividadeIds: selectedTipoAtividadeIds }}
        >
            <Form.Item name="nome" label="Nome" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="descricao" label="Descrição">
                <Input.TextArea rows={3} />
            </Form.Item>

            <Form.Item name="tipoAtividadeIds" label="Tipos de Atividade">
                <Transfer
                    dataSource={transferData}
                    targetKeys={form.getFieldValue('tipoAtividadeIds')}
                    onChange={(keys) => form.setFieldValue('tipoAtividadeIds', keys)}
                    render={(item: TransferItem) => item.title ?? ''}
                    showSearch
                    rowKey={(item: TransferItem) => item.key ?? ''}
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