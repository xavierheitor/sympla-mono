'use client';

import { useState } from 'react';
import { Button, Card, Form, Input, Select, Space, Table, message } from 'antd';
import { GrupoDefeitoEquipamento } from '@sympla/prisma';
import { createManyDefeitos } from '@/lib/actions/defeito/actionsDefeito';
import { SubgrupoDefeitoEquipamentoWithRelations } from '@/lib/actions/defeito/schema';

interface Props {
    grupoOptions: GrupoDefeitoEquipamento[];
    subgrupoOptions: SubgrupoDefeitoEquipamentoWithRelations[];
    onSuccess?: () => void;
}

interface LinhaDefeito {
    key: string;
    codigoSap: string;
    descricao: string;
    prioridade?: string;
    acaoRecomendada?: string;
    custeioOuInvestimento?: string;
    equipe?: string;
}

export default function DefeitoLoteForm({ grupoOptions, subgrupoOptions, onSuccess }: Props) {
    const [form] = Form.useForm();
    const [dataSource, setDataSource] = useState<LinhaDefeito[]>([]);
    const [loading, setLoading] = useState(false);
    const [grupoSelecionado, setGrupoSelecionado] = useState<string | undefined>(undefined);

    const [isFocused, setIsFocused] = useState(false);

    const filteredSubgrupos = grupoSelecionado
        ? subgrupoOptions.filter((s) => s.grupoId === grupoSelecionado)
        : subgrupoOptions;

    const columns = [
        {
            title: 'Código SAP',
            dataIndex: 'codigoSap',
            render: (text: string, record: LinhaDefeito, index: number) => (
                <Input
                    value={text}
                    onChange={(e) => handleInputChange(e.target.value, index, 'codigoSap')}
                />
            ),
        },
        {
            title: 'Descrição',
            dataIndex: 'descricao',
            render: (text: string, record: LinhaDefeito, index: number) => (
                <Input
                    value={text}
                    onChange={(e) => handleInputChange(e.target.value, index, 'descricao')}
                />
            ),
        },
        {
            title: 'Prioridade',
            dataIndex: 'prioridade',
            render: (text: string, record: LinhaDefeito, index: number) => (
                <Input
                    value={text}
                    onChange={(e) => handleInputChange(e.target.value, index, 'prioridade')}
                />
            ),
        },
        {
            title: 'Ação Recomendada',
            dataIndex: 'acaoRecomendada',
            render: (text: string, record: LinhaDefeito, index: number) => (
                <Input
                    value={text}
                    onChange={(e) => handleInputChange(e.target.value, index, 'acaoRecomendada')}
                />
            ),
        },
        {
            title: 'Custeio/Investimento',
            dataIndex: 'custeioOuInvestimento',
            render: (text: string, record: LinhaDefeito, index: number) => (
                <Input
                    value={text}
                    onChange={(e) => handleInputChange(e.target.value, index, 'custeioOuInvestimento')}
                />
            ),
        },
        {
            title: 'Equipe',
            dataIndex: 'equipe',
            render: (text: string, record: LinhaDefeito, index: number) => (
                <Input
                    value={text}
                    onChange={(e) => handleInputChange(e.target.value, index, 'equipe')}
                />
            ),
        },
    ];

    const handleInputChange = (value: string, index: number, field: keyof LinhaDefeito) => {
        const newData = [...dataSource];
        newData[index][field] = value;
        setDataSource(newData);
    };

    const addRow = () => {
        setDataSource([
            ...dataSource,
            {
                key: Date.now().toString(),
                codigoSap: '',
                descricao: '',
            },
        ]);
    };

    const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
        const pastedData = event.clipboardData.getData('Text');

        const linhas = pastedData.trim().split(/\r?\n/);

        const novasLinhas = linhas.map((linha, index) => {
            const colunas = linha.split('\t');

            return {
                key: Date.now().toString() + index,
                codigoSap: colunas[0]?.trim() ?? '',
                descricao: colunas[1]?.trim() ?? '',
                prioridade: colunas[2]?.trim() ?? '',
                acaoRecomendada: colunas[3]?.trim() ?? '',
                custeioOuInvestimento: colunas[4]?.trim() ?? '',
                equipe: colunas[5]?.trim() ?? '',
            };
        });

        setDataSource((prev) => [...prev, ...novasLinhas]);
        message.success(`${novasLinhas.length} linhas adicionadas via colagem do Excel`);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = async (values: any) => {
        if (dataSource.length === 0) {
            message.error('Adicione pelo menos uma linha');
            return;
        }

        const payload = dataSource.map((item) => ({
            ...item,
            grupoId: values.grupoId,
            subgrupoId: values.subgrupoId,
        }));

        try {
            setLoading(true);
            await createManyDefeitos(payload);
            message.success('Defeitos cadastrados com sucesso!');
            setDataSource([]);
            form.resetFields();
            setGrupoSelecionado(undefined);
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error(error);
            message.error('Erro ao cadastrar defeitos.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card
            title="Cadastro de Defeitos em Lote"
            extra={
                <Space>
                    <Button onClick={addRow}>Adicionar Linha</Button>
                </Space>
            }
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                onValuesChange={(changed) => {
                    if (changed.grupoId !== undefined) {
                        setGrupoSelecionado(changed.grupoId);
                        form.setFieldValue('subgrupoId', undefined);
                    }
                }}
            >
                <Space>
                    <Form.Item
                        label="Grupo"
                        name="grupoId"
                        rules={[{ required: true, message: 'Selecione um grupo' }]}
                    >
                        <Select
                            autoFocus={true}
                            showSearch
                            allowClear
                            optionFilterProp="label"
                            filterOption={(input, option) =>
                                (option?.label as string).toLowerCase().includes(input.toLowerCase())
                            }
                            options={grupoOptions.map((g) => ({
                                label: `${g.codigo ? g.codigo + ' - ' : ''}${g.nome}`,
                                value: g.id,
                            }))}
                            style={{ width: 250 }}
                            placeholder="Selecione o grupo"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Subgrupo"
                        name="subgrupoId"
                        rules={[{ required: true, message: 'Selecione um subgrupo' }]}
                    >
                        <Select
                            showSearch
                            allowClear
                            optionFilterProp="label"
                            filterOption={(input, option) =>
                                (option?.label as string).toLowerCase().includes(input.toLowerCase())
                            }
                            options={filteredSubgrupos.map((s) => ({
                                label: `${s.grupo.codigo ? s.grupo.codigo + ' - ' : ''}${s.nome}`,
                                value: s.id,
                            }))}
                            style={{ width: 250 }}
                            placeholder="Selecione o subgrupo"
                        />
                    </Form.Item>
                </Space>

                <div
                    onPaste={handlePaste}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    tabIndex={0} // 👈 Faz o div ser focável
                    style={{
                        border: isFocused ? '2px solid #1677ff' : '1px dashed #d9d9d9',
                        backgroundColor: isFocused ? '#e6f4ff' : 'white',
                        boxShadow: isFocused ? '0 0 0 2px rgba(22, 119, 255, 0.2)' : 'none',
                        padding: 8,
                        marginBottom: 12,
                        cursor: 'text',
                        borderRadius: 6,
                        minHeight: 40,
                        transition: 'all 0.2s ease',
                    }}
                >
                    <span style={{ color: isFocused ? '#1677ff' : '#999' }}>
                        {isFocused ? 'Pronto! Cole agora seus dados (CTRL + V)' : 'Clique aqui e pressione CTRL + V para colar dados do Excel'}
                    </span>
                </div>

                <Table
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                    rowKey="key"
                />

                <Form.Item style={{ marginTop: 20 }}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Salvar Tudo
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
}