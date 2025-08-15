'use client';

import { useEffect, useState } from 'react';
import { Form, Input, Button, Spin, Switch, Transfer } from 'antd';
import { UsuarioMobileFormData } from '@/lib/actions/usuarioMobile/schema';
import { Regional } from '@sympla/prisma';
import { getAllUsuarioMobileRegionals } from '@/lib/actions/usuarioMobile/actionsUsuarioMobileRegional';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';

type FormValues = UsuarioMobileFormData & { confirmSenha?: string };

interface UsuarioMobileFormProps {
  onSubmit: (values: UsuarioMobileFormData & { regionalIds: string[] }) => void;
  initialValues?: Partial<UsuarioMobileFormData>;
  loading?: boolean;
  regionais: Regional[];
}

export default function UsuarioMobileForm({
  onSubmit,
  initialValues,
  loading = false,
  regionais,
}: UsuarioMobileFormProps) {
  const [form] = Form.useForm();
  const [ready, setReady] = useState(false);
  const [selectedRegionais, setSelectedRegionais] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [loadingRelations, setLoadingRelations] = useState(false);

  useEffect(() => {
    const fetchRelations = async () => {
      setLoadingRelations(true);
      try {
        if (initialValues?.id) {
          const response = await unwrapFetcher(getAllUsuarioMobileRegionals)({
            where: { usuarioMobileId: initialValues.id },
          });

          const relacionados = response.map((r) => r.regionalId);
          setSelectedRegionais(relacionados);
        }
      } finally {
        setLoadingRelations(false);
      }
    };

    form.setFieldsValue({
      ...initialValues,
      senha: '',
      confirmSenha: '',
    });

    fetchRelations().finally(() => setReady(true));
  }, [initialValues, form]);

  if (!ready || loading || loadingRelations) return <Spin spinning />;

  const handleFinish = (values: FormValues) => {
    const rest = { ...values };
    delete rest.confirmSenha;

    if (!rest.senha) {
      rest.senha = undefined as unknown as string;
    }

    onSubmit({ ...rest, regionalIds: selectedRegionais });
  };

  return (
    <Form form={form} layout='vertical' onFinish={handleFinish}>
      <Form.Item name='matricula' label='Matrícula' rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name='nome' label='Nome' rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name='email' label='Email'>
        <Input type='email' />
      </Form.Item>
      <Form.Item name='funcao' label='Função' rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name='senha' label='Senha' rules={[{ min: 6, message: 'Mínimo 6 caracteres' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item
        name='confirmSenha'
        label='Confirmar Senha'
        dependencies={['senha']}
        rules={[
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!getFieldValue('senha') || getFieldValue('senha') === value) {
                return Promise.resolve();
              }
              return Promise.reject('As senhas não coincidem.');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name='ativo' label='Ativo' valuePropName='checked'>
        <Switch defaultChecked />
      </Form.Item>

      <Form.Item label='Regionais vinculadas'>
        <Transfer
          rowKey={(record) => record.id}
          dataSource={regionais}
          targetKeys={selectedRegionais}
          selectedKeys={selectedKeys}
          onChange={(nextKeys) => setSelectedRegionais(nextKeys as string[])}
          onSelectChange={(sourceSelected, targetSelected) =>
            setSelectedKeys([...sourceSelected, ...targetSelected] as string[])
          }
          render={(item) => item.nome}
          showSearch
          pagination
          listStyle={{ width: 200, height: 300 }}
        />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' block loading={loading}>
          Salvar
        </Button>
      </Form.Item>
    </Form>
  );
}
