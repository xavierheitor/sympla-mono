'use client';

import { useEffect, useState } from 'react';
import { Form, Input, Button, Spin, Transfer } from 'antd';
import { AprModelo } from '@sympla/prisma';
import { AprPerguntasFormData } from '@/lib/actions/apr/schema';
import { getAllAprPerguntasRelations } from '@/lib/actions/apr/actionsAprPergunta';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';

interface AprPerguntasFormProps {
    onSubmit: (values: AprPerguntasFormData & { modeloIds: string[] }) => void;
    initialValues?: Partial<AprPerguntasFormData>;
    modelos: AprModelo[];
    loading?: boolean;
}

export default function AprPerguntasForm({
    onSubmit,
    initialValues,
    modelos,
    loading = false,
}: AprPerguntasFormProps) {
    const [form] = Form.useForm();
    const [selectedModelos, setSelectedModelos] = useState<string[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const [loadingRelations, setLoadingRelations] = useState(false);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const fetchRelations = async () => {
            setLoadingRelations(true);
            try {
                if (initialValues?.id) {
                    const res = await unwrapFetcher(getAllAprPerguntasRelations)({
                        where: { perguntaId: initialValues.id },
                    });

                    const relacionados = res.map((r) => String(r.modeloId));
                    setSelectedModelos(relacionados);
                }
            } catch (e) {
                console.error("🔥 Erro:", e);
            } finally {
                setLoadingRelations(false);
            }
        };

        form.setFieldsValue(initialValues ?? {});
        fetchRelations();
    }, [initialValues, form]);

    useEffect(() => {
        if (!loadingRelations && modelos.length >= 0) {
            setReady(true);
        }
    }, [loadingRelations, modelos]);

    const handleFinish = (values: AprPerguntasFormData) => {
        onSubmit({ ...values, modeloIds: selectedModelos });
    };

    if (!ready || loading) {
        return <Spin spinning />;
    }

    return (
        <Form form={form} layout="vertical" onFinish={handleFinish}>
            <Form.Item name="pergunta" label="Pergunta" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Modelos de APR vinculados">
                <Transfer
                    rowKey={(record) => record.id}
                    dataSource={modelos}
                    targetKeys={selectedModelos}
                    selectedKeys={selectedKeys}
                    onChange={(nextKeys) => setSelectedModelos(nextKeys as string[])}
                    onSelectChange={(sourceSelected, targetSelected) =>
                        setSelectedKeys([...sourceSelected, ...targetSelected] as string[])
                    }
                    render={(item) => item.nome || '[Sem Nome]'}
                    showSearch
                    pagination
                    listStyle={{ width: 200, height: 300 }}
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