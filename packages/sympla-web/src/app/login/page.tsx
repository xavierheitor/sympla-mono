'use client';

import React from 'react';
import { Form, Input, Button, Typography, Card, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const { Title } = Typography;

const LoginPage: React.FC = () => {
    const router = useRouter();

    const onFinish = async (values: { username: string; password: string }) => {
        const res = await signIn('credentials', {
            redirect: false,
            username: values.username,
            password: values.password,
        });

        if (res?.ok) {
            message.success('Login realizado com sucesso!');
            router.push('/dashboard');
        } else {
            message.error('Usuário ou senha inválidos!');
        }
    };

    return (
        <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <Card style={{ width: 350 }}>
                <Title level={3} style={{ textAlign: 'center' }}>Login</Title>
                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Form.Item
                        name="username"
                        label="Usuário"
                        rules={[{ required: true, message: 'Informe seu usuário!' }]}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Digite seu usuário"
                            autoComplete="username"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Senha"
                        rules={[{ required: true, message: 'Informe sua senha!' }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Digite sua senha"
                            autoComplete="current-password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Entrar
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;