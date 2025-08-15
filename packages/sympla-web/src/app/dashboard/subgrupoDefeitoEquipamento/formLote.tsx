'use client';

import { Button, Card, Form, Input, Table, message } from 'antd';
import { useState } from 'react';
import { createManySubgrupoDefeitos } from '@/lib/actions/defeito/actionsSubgrupoDefeito';

interface LinhaSubgrupo {
  key: string;
  grupoCodigo: string;
  nome: string;
}

export default function SubgrupoDefeitoLoteForm({ onSuccess }: { onSuccess?: () => void }) {
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState<LinhaSubgrupo[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (value: string, index: number, field: keyof LinhaSubgrupo) => {
    const newData = [...dataSource];
    newData[index][field] = value;
    setDataSource(newData);
  };
  const columns = [
    {
      title: 'Código do Grupo',
      dataIndex: 'grupoCodigo',
      render: (text: string, record: LinhaSubgrupo, index: number) => (
        <Input
          value={text}
          onChange={(e) => handleInputChange(e.target.value, index, 'grupoCodigo')}
        />
      ),
    },
    {
      title: 'Nome do Subgrupo',
      dataIndex: 'nome',
      render: (text: string, record: LinhaSubgrupo, index: number) => (
        <Input value={text} onChange={(e) => handleInputChange(e.target.value, index, 'nome')} />
      ),
    },
  ];
  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    const pastedData = event.clipboardData.getData('Text');
    const linhas = pastedData.trim().split(/\r?\n/);
    const novas = linhas.map((linha, i) => {
      const [grupoCodigo = '', nome = ''] = linha.split('\t');
      return {
        key: Date.now().toString() + i,
        grupoCodigo: grupoCodigo.trim(),
        nome: nome.trim(),
      };
    });
    setDataSource((prev) => [...prev, ...novas]);
    message.success(`${novas.length} subgrupos colados com sucesso`);
  };

  const handleSubmit = async () => {
    const preenchidos = dataSource.filter((d) => d.grupoCodigo && d.nome);
    if (!preenchidos.length)
      return message.error('Preencha ao menos um subgrupo com grupo, código e nome');

    try {
      setLoading(true);

      const finalData = preenchidos.map((item) => ({
        nome: item.nome,
        grupoCodigo: item.grupoCodigo,
      }));

      if (!finalData.length) {
        return message.error('Nenhum código de grupo corresponde aos grupos cadastrados');
      }

      await createManySubgrupoDefeitos(finalData);
      message.success('Subgrupos cadastrados com sucesso!');
      setDataSource([]);
      if (onSuccess) onSuccess();
    } catch (e) {
      console.error(e);
      message.error('Erro ao cadastrar subgrupos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      title='Cadastro de Subgrupos em Lote'
      extra={
        <Button
          onClick={() =>
            setDataSource((prev) => [
              ...prev,
              { key: Date.now().toString(), grupoCodigo: '', nome: '' },
            ])
          }
        >
          Adicionar Linha
        </Button>
      }
    >
      <Form form={form} onFinish={handleSubmit}>
        <div
          onPaste={handlePaste}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          tabIndex={0}
          style={{
            border: isFocused ? '2px solid #1677ff' : '1px dashed #d9d9d9',
            padding: 8,
            marginBottom: 12,
            borderRadius: 6,
            minHeight: 40,
          }}
        >
          <span style={{ color: isFocused ? '#1677ff' : '#999' }}>
            {isFocused ? 'Cole agora seus dados (CTRL+V)' : 'Clique aqui e cole dados do Excel'}
          </span>
        </div>

        <Table dataSource={dataSource} columns={columns} pagination={false} rowKey='key' />

        <Form.Item style={{ marginTop: 20 }}>
          <Button type='primary' htmlType='submit' loading={loading}>
            Salvar Tudo
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
