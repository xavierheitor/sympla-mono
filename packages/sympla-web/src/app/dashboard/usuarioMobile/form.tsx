// form.tsx
'use client';

import { useEffect } from 'react';
import { Button, Form, Input, Switch } from 'antd';
import { UsuarioMobileFormData } from '@/lib/actions/usuarioMobile/usuarioMobileFormSchema';

type FormValues = UsuarioMobileFormData & { confirmSenha?: string };

interface UsuarioMobileFormProps {
    onSubmit: (values: UsuarioMobileFormData) => void;
    initialValues?: Partial<UsuarioMobileFormData>;
    loading?: boolean;
}

export default function UsuarioMobileForm({
    onSubmit,
    initialValues,
    loading = false,
}: UsuarioMobileFormProps) {
    const [form] = Form.useForm();

    useEffect(() => {
        if (initialValues) {
            form.setFieldsValue({
                ...initialValues,
                senha: '',
                confirmSenha: '',
            });
        } else {
            form.resetFields();
        }
    }, [initialValues, form]);

    const handleFinish = (values: FormValues) => {
        // remove confirmSenha silenciosamente sem avisos do linter
        const rest = { ...values };
        delete rest.confirmSenha;

        if (!rest.senha) {
            // set undefined em vez de `delete`, pois `senha` não é opcional no tipo
            rest.senha = undefined as unknown as string;
        }

        onSubmit(rest);
    };

    return (
        <Form form={form} layout="vertical" onFinish={handleFinish}>
            <Form.Item name="matricula" label="Matrícula" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="nome" label="Nome" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="email" label="Email">
                <Input type="email" />
            </Form.Item>
            <Form.Item name="funcao" label="Função" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="senha" label="Senha" rules={[{ min: 6, message: 'Mínimo 6 caracteres' }]}>
                <Input.Password />
            </Form.Item>
            <Form.Item name="confirmSenha" label="Confirmar Senha" dependencies={['senha']} rules={[
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!getFieldValue('senha') || getFieldValue('senha') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject('As senhas não coincidem.');
                    },
                }),
            ]}>
                <Input.Password />
            </Form.Item>

            <Form.Item name="ativo" label="Ativo" valuePropName="checked">
                <Switch defaultChecked />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block loading={loading}>
                    Salvar
                </Button>
            </Form.Item>
        </Form>
    );
}
