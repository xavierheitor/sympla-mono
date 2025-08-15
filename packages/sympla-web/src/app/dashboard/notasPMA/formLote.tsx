'use client';

import { useState } from 'react';
import { Button, Card, Form, Input, Space, Table, Typography, message } from 'antd';
import { CentroTrabalho, Kpi } from '@sympla/prisma';
import { createManyNotasPMA } from '@/lib/actions/pma/pmaActions';
import { NotaPMALoteInput } from '@/lib/actions/pma/schema';

const { Text } = Typography;

interface LinhaNotaPMA {
  key: string;
  numeroNota: string;
  centroTrabalhoNome: string;
  localInstalacao: string;
  kpiNome: string;
  statusTexto: string;
  mesTexto: string;
}

interface Props {
  centros: CentroTrabalho[];
  kpis: Kpi[];
  onSuccess?: () => void;
}

export default function NotaPMALoteForm({ centros, kpis, onSuccess }: Props) {
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState<LinhaNotaPMA[]>([]);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const centroMap = centros.map((c) => c.nome);
  const kpiMap = kpis.map((k) => k.nome);
  const statusMap = ['BAIXADO NO SAP', 'PROGRAMADO', 'EXECUTADO'];
  const meses = [
    'JANEIRO',
    'FEVEREIRO',
    'MARÇO',
    'ABRIL',
    'MAIO',
    'JUNHO',
    'JULHO',
    'AGOSTO',
    'SETEMBRO',
    'OUTUBRO',
    'NOVEMBRO',
    'DEZEMBRO',
  ];

  const columns = [
    {
      title: 'Nota',
      dataIndex: 'numeroNota',
      render: renderInput('numeroNota'),
    },
    {
      title: 'Centro de Trabalho',
      dataIndex: 'centroTrabalhoNome',
      render: renderInput('centroTrabalhoNome', centroMap),
    },
    {
      title: 'Local de Instalação',
      dataIndex: 'localInstalacao',
      render: renderInput('localInstalacao'),
    },
    {
      title: 'KPI',
      dataIndex: 'kpiNome',
      render: renderInput('kpiNome', kpiMap),
    },
    {
      title: 'Status',
      dataIndex: 'statusTexto',
      render: renderInput('statusTexto', statusMap),
    },
    {
      title: 'Mês',
      dataIndex: 'mesTexto',
      render: renderInput('mesTexto', meses),
    },
  ];

  function renderInput(field: keyof LinhaNotaPMA, enumList?: string[]) {
    const InputRenderer = (text: string, record: LinhaNotaPMA, index: number) => {
      const error = enumList && !enumList.includes(text.toUpperCase());
      return (
        <Input
          status={error ? 'error' : ''}
          value={text}
          onChange={(e) => handleInputChange(e.target.value, index, field)}
        />
      );
    };
    InputRenderer.displayName = `InputRenderer_${field}`;
    return InputRenderer;
  }

  const handleInputChange = (value: string, index: number, field: keyof LinhaNotaPMA) => {
    const newData = [...dataSource];
    newData[index][field] = value;
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
        centroTrabalhoNome: colunas[1]?.trim() ?? '',
        localInstalacao: colunas[2]?.trim() ?? '',
        kpiNome: colunas[3]?.trim() ?? '',
        statusTexto: colunas[4]?.trim().toUpperCase() ?? '',
        mesTexto: colunas[5]?.trim().toUpperCase() ?? '',
      };
    });

    setDataSource((prev) => [...prev, ...novasLinhas]);
    message.success(`${novasLinhas.length} linhas coladas`);
  };

  const handleSubmit = async () => {
    const invalid = dataSource.find(
      (l) =>
        !centroMap.includes(l.centroTrabalhoNome) ||
        !kpiMap.includes(l.kpiNome) ||
        !statusMap.includes(l.statusTexto) ||
        !meses.includes(l.mesTexto),
    );
    if (invalid) {
      message.error('Há valores inválidos. Verifique os campos destacados.');
      return;
    }

    try {
      setLoading(true);
      await createManyNotasPMA({ input: dataSource as NotaPMALoteInput[] });
      message.success('Notas PMA cadastradas com sucesso!');
      setDataSource([]);
      form.resetFields();
      onSuccess?.();
    } catch (err) {
      console.error(err);
      message.error('Erro ao cadastrar notas PMA');
    } finally {
      setLoading(false);
    }
  };

  const resetarTudo = () => {
    setDataSource([]);
    form.resetFields();
  };

  return (
    <Card
      title='Cadastro de Notas PMA em Lote'
      extra={
        <Space>
          <Button
            onClick={() =>
              setDataSource((prev) => [
                ...prev,
                {
                  key: Date.now().toString(),
                  numeroNota: '',
                  centroTrabalhoNome: '',
                  localInstalacao: '',
                  kpiNome: '',
                  statusTexto: '',
                  mesTexto: '',
                },
              ])
            }
          >
            Adicionar Linha
          </Button>
          <Button danger onClick={resetarTudo}>
            Resetar Tudo
          </Button>
        </Space>
      }
    >
      <Form form={form} layout='vertical' onFinish={handleSubmit}>
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
          <Text type='secondary'>
            Clique aqui e pressione <strong>CTRL + V</strong> para colar os dados do Excel
          </Text>
        </div>

        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          rowKey='key'
          scroll={{ x: 'max-content' }}
        />

        <Form.Item style={{ marginTop: 20 }}>
          <Button type='primary' htmlType='submit' loading={loading}>
            Salvar Tudo
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
