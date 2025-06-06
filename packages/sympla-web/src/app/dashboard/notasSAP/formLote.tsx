import { useState } from 'react';
import {
    Button,
    Card,
    Input,
    Space,
    Table,
    message,
    Typography,
} from 'antd';
import { createManyNotasPMA } from '@/lib/actions/notasSap/actionsNotasSap';

const { Text } = Typography;

export interface LinhaNotaPMA {
    key: string;
    numeroNota: string;
    equipamento: string;
    mes: string;
    centroTrabalho: string;
    kpi: string;
    regional: string;
}

export default function NotasPmaLoteForm() {
    const [dataSource, setDataSource] = useState<LinhaNotaPMA[]>([]);
    const [loading, setLoading] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const columns = [
        { title: 'Número Nota', dataIndex: 'numeroNota', render: renderInput('numeroNota') },
        { title: 'Equipamento', dataIndex: 'equipamento', render: renderInput('equipamento') },
        { title: 'Mês', dataIndex: 'mes', render: renderInput('mes') },
        { title: 'Centro de Trabalho', dataIndex: 'centroTrabalho', render: renderInput('centroTrabalho') },
        { title: 'KPI', dataIndex: 'kpi', render: renderInput('kpi') },
        { title: 'Regional', dataIndex: 'regional', render: renderInput('regional') },
    ];

    function renderInput(field: keyof LinhaNotaPMA) {
        const RenderComponent = (text: string, record: LinhaNotaPMA, index: number) => {
            return (
                <Input
                    value={text}
                    onChange={(e) => handleInputChange(e.target.value, index, field)}
                />
            );
        };
        RenderComponent.displayName = `RenderInput_${field}`;
        return RenderComponent;
    }

    const handleInputChange = (value: string, index: number, field: keyof LinhaNotaPMA) => {
        const newData = [...dataSource];
        (newData[index][field] as string) = value;
        setDataSource(newData);
    };

    const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
        const pastedData = event.clipboardData.getData('Text');
        const linhas = pastedData.trim().split(/\r?\n/);

        const novasLinhas = linhas.map((linha, index) => {
            const colunas = linha.split('\t');

            return {
                key: Date.now().toString() + index,
                numeroNota: colunas[0]?.trim() ?? '',
                equipamento: colunas[1]?.trim() ?? '',
                mes: colunas[2]?.trim() ?? '',
                centroTrabalho: colunas[3]?.trim() ?? '',
                kpi: colunas[4]?.trim() ?? '',
                regional: colunas[5]?.trim() ?? '',
            };
        });

        setDataSource((prev) => [...prev, ...novasLinhas]);
        message.success(`${novasLinhas.length} linhas adicionadas via colagem`);
    };

    const handleSubmit = async () => {
        if (dataSource.length === 0) {
            message.error('Adicione pelo menos uma linha');
            return;
        }

        try {
            setLoading(true);
            await createManyNotasPMA(dataSource);
            message.success('Notas cadastradas com sucesso!');
            setDataSource([]);
        } catch (error) {
            console.error(error);
            message.error('Erro ao cadastrar notas. Verifique os dados.');
        } finally {
            setLoading(false);
        }
    };

    const resetarTudo = () => {
        setDataSource([]);
    };

    return (
        <Card
            title="Cadastro de Notas PMA em Lote"
            extra={
                <Space>
                    <Button
                        onClick={() => {
                            setDataSource((prev) => [
                                ...prev,
                                {
                                    key: Date.now().toString(),
                                    numeroNota: '',
                                    equipamento: '',
                                    mes: '',
                                    centroTrabalho: '',
                                    kpi: '',
                                    regional: '',
                                },
                            ]);
                        }}
                    >
                        Adicionar Linha
                    </Button>
                    <Button danger onClick={resetarTudo}>
                        Resetar Tudo
                    </Button>
                </Space>
            }
        >
            <div
                onPaste={handlePaste}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                tabIndex={0}
                style={{
                    border: isFocused ? '2px solid #1677ff' : '1px dashed #d9d9d9',
                    padding: 8,
                    marginBottom: 12,
                    cursor: 'text',
                    borderRadius: 6,
                    minHeight: 40,
                    outline: 'none',
                    background: isFocused ? '#e6f4ff' : 'white',
                    transition: 'all 0.2s ease',
                }}
            >
                <Text type="secondary">
                    Clique aqui e pressione <strong>CTRL + V</strong> para colar dados do Excel
                </Text>
            </div>

            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                rowKey="key"
                scroll={{ x: 'max-content' }}
            />

            <div style={{ marginTop: 20 }}>
                <Button type="primary" onClick={handleSubmit} loading={loading}>
                    Salvar Tudo
                </Button>
            </div>
        </Card>
    );
}