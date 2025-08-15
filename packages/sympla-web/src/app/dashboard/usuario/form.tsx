'use client';

import { useEffect, useState } from 'react';
import { Button, Form, Input, Spin } from 'antd';
import { UserFormData } from '@/lib/actions/user/schema';

type FormValues = UserFormData & { confirmPassword?: string };

interface UserFormProps {
  onSubmit: (values: UserFormData) => void;
  initialValues?: Partial<UserFormData>;
  loading?: boolean;
}

export default function UserForm({ onSubmit, initialValues, loading = false }: UserFormProps) {
  const [form] = Form.useForm();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    form.setFieldsValue({
      ...initialValues,
      password: '',
      confirmPassword: '',
    });
    setReady(true);
  }, [initialValues, form]);

  if (!ready || loading) {
    return <Spin spinning />;
  }

  const handleFinish = (values: FormValues) => {
    const data = { ...values };
    if (!data.password) {
      data.password = undefined as unknown as string;
    }
    onSubmit(data);
  };

  return (
    <Form form={form} layout='vertical' onFinish={handleFinish}>
      <Form.Item name='username' label='Username' rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name='email' label='Email' rules={[{ required: true }]}>
        <Input type='email' />
      </Form.Item>
      <Form.Item name='name' label='Nome' rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name='password' label='Senha' rules={[{ min: 6, message: 'Mínimo 6 caracteres' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item
        name='confirmPassword'
        label='Confirmar Senha'
        dependencies={['password']}
        rules={[
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!getFieldValue('password') || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('As senhas não coincidem.');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' block loading={loading}>
          Salvar
        </Button>
      </Form.Item>
    </Form>
  );
}
