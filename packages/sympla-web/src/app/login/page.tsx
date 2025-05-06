'use client'

import React from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

const LoginPage: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onFinish = (values: any) => {
        console.log('Login enviado:', values);
        // Aqui você pode chamar sua API: ex: await login(values)
    };

    return (
        <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>

            <Card>
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
                        <Input prefix={<UserOutlined />} placeholder="Digite seu usuário" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Senha"
                        rules={[{ required: true, message: 'Informe sua senha!' }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Digite sua senha" />
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