'use client';

import { useEffect, useState } from 'react';
import { Form, Input, Button, Transfer, Spin } from 'antd';
import { AprModeloFormData } from '@/lib/actions/aprModelo/aprModeloFormSchema';
import { TipoAtividade } from '@sympla/prisma';
import { getAllTipoAtividadesByAprModelo } from '@/lib/actions/aprModelo/aprModeloTipoAtividadeRelation/getAll';

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
    const [selectetKeys, setSelectedKeys] = useState<string[]>([]);
    const [loadingTipoAtividades, setLoadingTipoAtividades] = useState(false); // novo estado

    useEffect(() => {
        const carregarTipoAtividades = async () => {
            setLoadingTipoAtividades(true);
            try {
                if (initialValues?.id) {
                    const associados = await getAllTipoAtividadesByAprModelo(initialValues.id)
                    setSelectedTipoAtividades(associados)
                } else {
                    setSelectedTipoAtividades([])
                }
            } finally {
                setLoadingTipoAtividades(false);
            }
        };

        form.setFieldsValue(initialValues ?? {});
        carregarTipoAtividades();
    }, [initialValues, form]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleFinish = (values: any) => {
        onSubmit({ ...values, tipoAtividadeIds: selectedTipoAtividades })
    }

    return (
        <Spin spinning={loadingTipoAtividades}>


            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
            >
                <Form.Item name="nome" label="Nome" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="descricao" label="Descrição">
                    <Input.TextArea rows={3} />
                </Form.Item>

                <Form.Item name="tipoAtividadeIds" label="Tipos de Atividade">
                    <Transfer
                        dataSource={tipoAtividades.map((tipoAtividade) => ({
                            key: String(tipoAtividade.id),
                            title: tipoAtividade.nome,
                        }))}
                        titles={['Disponíveis', 'Selecionados']}
                        targetKeys={selectedTipoAtividades.map(String)} // 🔧 garante que são strings
                        selectedKeys={selectetKeys.map(String)} // 🔧 garante que são strings
                        onChange={(nextTargetKeys) => setSelectedTipoAtividades(nextTargetKeys.map(String))}
                        onSelectChange={(sourceSelected, targetSelected) =>
                            setSelectedKeys([...sourceSelected, ...targetSelected].map(String))
                        }
                        render={(item) => item.title!}
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
        </Spin>
    );
}