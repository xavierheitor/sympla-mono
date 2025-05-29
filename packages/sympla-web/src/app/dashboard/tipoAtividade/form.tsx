'use client';

import { useEffect, useState } from 'react';
import { Form, Input, Button, Select, Transfer, Spin } from 'antd';
import { TipoAtividadeFormData } from '@/lib/actions/tipoAtividade/tipoAtividadeFormSchema';
import { Kpi } from '@sympla/prisma';
import { getKpisByTipoAtividade } from '@/lib/actions/tipoAtividadeKpi/getAll';

interface EnumOption {
    label: string;
    value: string;
}

interface TipoAtividadeFormProps {
    onSubmit: (values: TipoAtividadeFormData & { kpiIds: string[] }) => void;
    initialValues?: Partial<TipoAtividadeFormData & { kpiIds: string[] }>;
    loading?: boolean;
    tipoMobileOptions: EnumOption[];
    kpiOptions: Kpi[];
}

export default function TipoAtividadeForm({
    onSubmit,
    initialValues,
    loading = false,
    tipoMobileOptions,
    kpiOptions,
}: TipoAtividadeFormProps) {
    const [form] = Form.useForm();

    const [selectedKpiIds, setSelectedKpiIds] = useState<string[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const [loadingKpis, setLoadingKpis] = useState(false); // novo estado

    useEffect(() => {
        const carregarKpis = async () => {
            setLoadingKpis(true);
            try {
                if (initialValues?.id) {
                    const associados = await getKpisByTipoAtividade(initialValues.id);
                    setSelectedKpiIds(associados);
                } else {
                    setSelectedKpiIds([]);
                }
            } finally {
                setLoadingKpis(false);
            }
        };

        form.setFieldsValue(initialValues ?? {});
        carregarKpis();
    }, [initialValues, form]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleFinish = (values: any) => {
        onSubmit({ ...values, kpiIds: selectedKpiIds });
    };

    return (
        <Spin spinning={loadingKpis}>
            <Form form={form} layout="vertical" onFinish={handleFinish}>
                <Form.Item name="nome" label="Nome" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="tipoAtividadeMobile" label="Tipo Mobile" rules={[{ required: true }]}>
                    <Select options={tipoMobileOptions} placeholder="Selecione..." />
                </Form.Item>

                <Form.Item label="KPIs">
                    <Transfer
                        dataSource={kpiOptions.map((kpi) => ({
                            key: String(kpi.id), // 🔧 converte para string
                            title: kpi.nome,
                        }))}
                        titles={['Disponíveis', 'Selecionados']}
                        targetKeys={selectedKpiIds.map(String)} // 🔧 garante que são strings
                        selectedKeys={selectedKeys.map(String)} // 🔧 garante que são strings
                        onChange={(nextTargetKeys) => setSelectedKpiIds(nextTargetKeys.map(String))}
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