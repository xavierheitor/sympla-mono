import { useState } from 'react';
import { Button, Card, Form, Input, Select, Space, Table, message, Typography } from 'antd';
import { Regional } from '@sympla/prisma';
import { createManySubestacoes } from '@/lib/actions/subestacao/actionsSubestacao';

const { Text } = Typography;

interface EnumOption {
  label: string;
  value: string;
}

interface LinhaSubestacao {
  key: string;
  nome: string;
  sigla: string;
  codigoSap: string;
  localInstalacao: string;
  propriedade: string;
  categoria: string;
  tensao: string;
  hasError?: boolean;
}

interface Props {
  regionalOptions: Regional[];
  propriedadeOptions: EnumOption[];
  categoriaOptions: EnumOption[];
  tensaoOptions: EnumOption[];
  onSuccess?: () => void;
}

export default function SubestacaoLoteForm({
  regionalOptions,
  propriedadeOptions,
  categoriaOptions,
  tensaoOptions,
  onSuccess,
}: Props) {
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState<LinhaSubestacao[]>([]);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // 🔥 Estado para controle de foco

  const enums = {
    propriedade: propriedadeOptions.map((e) => e.value),
    categoria: categoriaOptions.map((e) => e.value),
    tensao: tensaoOptions.map((e) => e.value),
  };

  const columns = [
    { title: 'Nome', dataIndex: 'nome', render: renderInput('nome') },
    { title: 'Sigla', dataIndex: 'sigla', render: renderInput('sigla') },
    {
      title: 'Código SAP',
      dataIndex: 'codigoSap',
      render: renderInput('codigoSap'),
    },
    {
      title: 'Local Instalação',
      dataIndex: 'localInstalacao',
      render: renderInput('localInstalacao'),
    },
    {
      title: 'Propriedade',
      dataIndex: 'propriedade',
      render: renderInput('propriedade', true),
    },
    {
      title: 'Categoria',
      dataIndex: 'categoria',
      render: renderInput('categoria', true),
    },
    {
      title: 'Tensão',
      dataIndex: 'tensao',
      render: renderInput('tensao', true),
    },
  ];

  function renderInput(field: keyof LinhaSubestacao, isEnum = false) {
    const RenderComponent = (text: string, record: LinhaSubestacao, index: number) => {
      const error = isEnum && !enums[field as keyof typeof enums]?.includes(text);

      return (
        <Input
          status={error ? 'error' : ''}
          value={text}
          onChange={(e) => handleInputChange(e.target.value, index, field)}
        />
      );
    };

    RenderComponent.displayName = `RenderInput_${field}`;

    return RenderComponent;
  }

  const handleInputChange = (value: string, index: number, field: keyof LinhaSubestacao) => {
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
        nome: colunas[0]?.trim() ?? '',
        sigla: colunas[1]?.trim() ?? '',
        codigoSap: colunas[2]?.trim() ?? '',
        localInstalacao: colunas[3]?.trim() ?? '',
        propriedade: colunas[4]?.trim() ?? '',
        categoria: colunas[5]?.trim() ?? '',
        tensao: colunas[6]?.trim() ?? '',
      };
    });

    setDataSource((prev) => [...prev, ...novasLinhas]);
    message.success(`${novasLinhas.length} linhas adicionadas via colagem`);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: any) => {
    if (dataSource.length === 0) {
      message.error('Adicione pelo menos uma linha');
      return;
    }

    const linhasComErro = dataSource.filter(
      (linha) =>
        !enums.propriedade.includes(linha.propriedade) ||
        !enums.categoria.includes(linha.categoria) ||
        !enums.tensao.includes(linha.tensao),
    );

    if (linhasComErro.length > 0) {
      message.error('Corrija os erros nas linhas antes de salvar');
      return;
    }

    const payload = dataSource.map((item) => ({
      ...item,
      regionalId: values.regionalId,
    }));

    try {
      setLoading(true);
      await createManySubestacoes(payload);
      message.success('Subestações cadastradas com sucesso!');
      setDataSource([]);
      form.resetFields();
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error(error);
      message.error('Erro ao cadastrar subestações.');
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
      title='Cadastro de Subestações em Lote'
      extra={
        <Space>
          <Button
            onClick={() => {
              setDataSource((prev) => [
                ...prev,
                {
                  key: Date.now().toString(),
                  nome: '',
                  sigla: '',
                  codigoSap: '',
                  localInstalacao: '',
                  propriedade: '',
                  categoria: '',
                  tensao: '',
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
      <Form form={form} layout='vertical' onFinish={handleSubmit}>
        <Form.Item
          label='Regional'
          name='regionalId'
          rules={[{ required: true, message: 'Selecione uma regional' }]}
        >
          <Select
            options={regionalOptions.map((r) => ({
              label: r.nome,
              value: r.id,
            }))}
            style={{ width: 300 }}
            placeholder='Selecione a regional'
          />
        </Form.Item>

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
            Clique aqui e pressione <strong>CTRL + V</strong> para colar dados do Excel
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
