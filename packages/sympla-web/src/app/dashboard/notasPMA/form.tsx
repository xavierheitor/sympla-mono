'use client';

import { useEffect } from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import { NotaPMAFormData } from '@/lib/actions/pma/schema';
import { CentroTrabalho, Equipamento, Kpi, StatusNota } from '@sympla/prisma';
import dayjs from 'dayjs';

interface NotaPMAFormProps {
    onSubmit: (values: NotaPMAFormData) => void;
    initialValues?: Partial<NotaPMAFormData>;
    loading?: boolean;

    centroTrabalhoOptions: CentroTrabalho[];
    equipamentoOptions: Equipamento[];
    kpiOptions: Kpi[];
}

export default function NotaPMAForm({
    onSubmit,
    initialValues,
    loading = false,
    centroTrabalhoOptions,
    equipamentoOptions,
    kpiOptions }: NotaPMAFormProps) {
    const [form] = Form.useForm();

    useEffect(() => {
        if (initialValues) {
            const convertedDates = {
                ...initialValues,
                dataInicioPlan: initialValues.dataInicioPlan ? dayjs(initialValues.dataInicioPlan) : undefined,
                dataFiPlan: initialValues.dataFiPlan ? dayjs(initialValues.dataFiPlan) : undefined,
                dataInicioReal: initialValues.dataInicioReal ? dayjs(initialValues.dataInicioReal) : undefined,
                dataFiReal: initialValues.dataFiReal ? dayjs(initialValues.dataFiReal) : undefined,
            };
            console.log(convertedDates);
            form.setFieldsValue(convertedDates);
        } else {
            form.resetFields();
        }
    }, [initialValues, form]);

    const statusOptions = Object.values(StatusNota);

    return (
        <Form form={form} layout="vertical"  onFinish={onSubmit}>
            <Form.Item name="numeroNota" label="Número da Nota" rules={[{ required: true, message: 'Número da Nota é obrigatório' }]}>
                <Input />
            </Form.Item>

            <Form.Item name="localInstalacao" label="Local de Instalação" rules={[{ required: true, message: 'Local de Instalação é obrigatório' }]}>
                <Input />
            </Form.Item>

            <Form.Item name="dataInicioPlan" label="Data Início Planejado" rules={[{ required: true, message: 'Data Início Planejado é obrigatório' }]}>
                <DatePicker style={{ width: '100%' }}  />
            </Form.Item>

            <Form.Item name="dataFiPlan" label="Data Fim Planejado" rules={[{ required: true, message: 'Data Fim Planejado é obrigatório' }]}>
                <DatePicker/>
            </Form.Item>

            <Form.Item name="dataInicioReal" label="Data Início Real">
                <DatePicker />
            </Form.Item>

            <Form.Item name="dataFiReal" label="Data Fim Real">
                <DatePicker />
            </Form.Item>

            <Form.Item name="centroTrabalhoId" label="Centro de Trabalho">
                <Select options={centroTrabalhoOptions.map(ct => ({ label: ct.nome, value: ct.id }))} />
            </Form.Item>

            <Form.Item name="equipamentoId" label="Equipamento">
                <Select options={equipamentoOptions.map(e => ({ label: e.nome, value: e.id }))}
                    showSearch />
            </Form.Item>

            <Form.Item name="kpiId" label="KPI">
                <Select options={kpiOptions.map(k => ({ label: k.nome, value: k.id }))} />
            </Form.Item>

            <Form.Item name="status" label="Status" rules={[{ required: true, message: 'Status é obrigatório' }]}>
                <Select options={statusOptions.map(s => ({ label: s, value: s }))} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>Salvar</Button>
            </Form.Item>
        </Form>
    );
}