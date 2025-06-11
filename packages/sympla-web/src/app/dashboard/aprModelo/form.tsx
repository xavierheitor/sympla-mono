'use client';

import { useEffect, useState, } from 'react';
import { Form, Input, Button, Transfer, Spin } from 'antd';
import { TipoAtividade } from '@sympla/prisma';
import { AprModeloFormData } from '@/lib/actions/apr/schema';
import { getAllAprModeloTipoAtividadeRelation } from '@/lib/actions/apr/actionsAprModelo';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';

interface AprModeloFormProps {
    onSubmit: (values: AprModeloFormData & { tipoAtividadeIds: string[] }) => void;
    initialValues?: Partial<AprModeloFormData>;
    tipoAtividades: TipoAtividade[];
    loading?: boolean;
}

export default function AprModeloForm({
    onSubmit,
    initialValues,
    tipoAtividades,
    loading = false,
}: AprModeloFormProps) {
    const [form] = Form.useForm();
    const [selectedTipoAtividades, setSelectedTipoAtividades] = useState<string[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const [loadingTipoAtividades, setLoadingTipoAtividades] = useState(false);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const fetchRelations = async () => {
            setLoadingTipoAtividades(true);
            try {
                if (initialValues?.id) {
                    const res = await unwrapFetcher(getAllAprModeloTipoAtividadeRelation)({
                        where: { modeloId: initialValues.id },
                    });

                    const relacionados = res.map((r) => String(r.tipoAtividadeId));
                    setSelectedTipoAtividades(relacionados);
                }
            } catch (e) {
                console.error("🔥 Erro:", e);
            } finally {
                setLoadingTipoAtividades(false);
            }
        };

        form.setFieldsValue(initialValues ?? {});
        fetchRelations();
    }, [initialValues, form]);

    useEffect(() => {
        if (!loadingTipoAtividades && tipoAtividades.length >= 0) {
            setReady(true);
        }
    }, [loadingTipoAtividades, tipoAtividades]);

    const handleFinish = (values: AprModeloFormData) => {
        onSubmit({ ...values, tipoAtividadeIds: selectedTipoAtividades });
    };

    if (!ready || loading) {
        return <Spin spinning />;
    }

    return (
        <Form form={form} layout="vertical" onFinish={handleFinish}>
            <Form.Item name="nome" label="Nome" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="descricao" label="Descrição">
                <Input.TextArea rows={3} />
            </Form.Item>

            <Form.Item label="Tipos de Atividade">
                <Transfer
                    rowKey={(record) => record.id}
                    dataSource={tipoAtividades}
                    targetKeys={selectedTipoAtividades}
                    selectedKeys={selectedKeys}
                    onChange={(nextKeys) => setSelectedTipoAtividades(nextKeys as string[])}
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