'use client';

import { Button, Card, Form, Input, Table, message, } from 'antd';
import { useState } from 'react';
import { createManyGrupoDefeitos } from '@/lib/actions/defeito/actionsGrupoDefeito';

interface LinhaGrupo {
  key: string;
  nome: string;
  codigo: string;
}

export default function GrupoDefeitoLoteForm({ onSuccess }: { onSuccess?: () => void }) {
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState<LinhaGrupo[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (value: string, index: number, field: keyof LinhaGrupo) => {
    const newData = [...dataSource];
    newData[index][field] = value;
    setDataSource(newData);
  };

  const columns = [
    {
      title: 'Código',
      dataIndex: 'codigo',
      render: (text: string, record: LinhaGrupo, index: number) => (
        <Input
          value={text}
          onChange={(e) => handleInputChange(e.target.value, index, 'codigo')}
        />
      ),
    },
    {
      title: 'Nome',
      dataIndex: 'nome',
      render: (text: string, record: LinhaGrupo, index: number) => (
        <Input
          value={text}
          onChange={(e) => handleInputChange(e.target.value, index, 'nome')}
        />
      ),
    },
  ];

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    const pastedData = event.clipboardData.getData('Text');
    const linhas = pastedData.trim().split(/\r?\n/);
    const novas = linhas.map((linha, i) => {
      const [codigo = '', nome = ''] = linha.split('\t');
      return { key: Date.now().toString() + i, codigo: codigo.trim(), nome: nome.trim() };
    });
    setDataSource((prev) => [...prev, ...novas]);
    message.success(`${novas.length} grupos adicionados via colagem`);
  };

  const handleSubmit = async () => {
    if (!dataSource.length) return message.error('Adicione pelo menos um grupo');
    try {
      setLoading(true);
      await createManyGrupoDefeitos(dataSource);
      message.success('Grupos cadastrados com sucesso!');
      setDataSource([]);
      if (onSuccess) onSuccess();
    } catch (e) {
      console.error(e);
      message.error('Erro ao cadastrar grupos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      title="Cadastro de Grupos em Lote"
      extra={<Button onClick={() => setDataSource([...dataSource, { key: Date.now().toString(), nome: '', codigo: '' }])}>Adicionar Linha</Button>}
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
        <Table dataSource={dataSource} columns={columns} pagination={false} rowKey="key" />
        <Form.Item style={{ marginTop: 20 }}>
          <Button type="primary" htmlType="submit" loading={loading}>Salvar Tudo</Button>
        </Form.Item>
      </Form>
    </Card>
  );
}