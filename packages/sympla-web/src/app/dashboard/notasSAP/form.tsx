'use client';

import { useEffect } from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import dayjs from 'dayjs';
import { NotasSAPFormData } from '@/lib/actions/notasSap/schema';
import { CentroTrabalho, Equipamento, Kpi, Regional } from '@sympla/prisma';
import { PrioridadeDefeito, StatusNota, TipoNota } from '@sympla/prisma';

interface NotasSapFormProps {
    onSubmit: (values: NotasSAPFormData) => void;
    initialValues?: Partial<NotasSAPFormData>;
    loading?: boolean;
    centroTrabalhoOptions: CentroTrabalho[];
    equipamentoOptions: Equipamento[];
    kpiOptions: Kpi[];
    regionalOptions: Regional[];
}

export default function NotasSapForm({
    onSubmit,
    initialValues,
    loading = false,
    centroTrabalhoOptions,
    equipamentoOptions,
    kpiOptions,
    regionalOptions,
}: NotasSapFormProps) {
    const [form] = Form.useForm();

    useEffect(() => {
        if (initialValues) {
            const withDates = {
                ...initialValues,
                dataNota: initialValues.dataNota ? dayjs(initialValues.dataNota) : null,
                dataInicioPlan: initialValues.dataInicioPlan ? dayjs(initialValues.dataInicioPlan) : null,
                dataFiPlan: initialValues.dataFiPlan ? dayjs(initialValues.dataFiPlan) : null,
                dataInicioReal: initialValues.dataInicioReal ? dayjs(initialValues.dataInicioReal) : null,
                dataFiReal: initialValues.dataFiReal ? dayjs(initialValues.dataFiReal) : null,
            };
            form.setFieldsValue(withDates);
        } else {
            form.resetFields();
        }
    }, [initialValues, form]);

    return (
        <Form form={form} layout="vertical" onFinish={onSubmit}>
            <Form.Item name="descricao" label="Descrição" rules={[{ required: true }]}>
                <Input.TextArea rows={2} />
            </Form.Item>

            <Form.Item name="notificador" label="Notificador" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="numeroNota" label="Número da Nota">
                <Input />
            </Form.Item>

            <Form.Item name="localInstalacao" label="Local de Instalação" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="tipoNota" label="Tipo de Nota" rules={[{ required: true }]}>
                <Select options={Object.values(TipoNota).map(t => ({ label: t, value: t }))} />
            </Form.Item>

            <Form.Item name="dataNota" label="Data da Nota" rules={[{ required: true }]}>
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item name="dataInicioPlan" label="Data Início Planejada">
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item name="dataFiPlan" label="Data Fim Planejada">
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item name="dataInicioReal" label="Data Início Real">
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item name="dataFiReal" label="Data Fim Real">
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item name="centroTrabalhoId" label="Centro de Trabalho" rules={[{ required: true }]}>
                <Select options={centroTrabalhoOptions.map(c => ({ label: c.nome, value: c.id }))} />
            </Form.Item>

            <Form.Item name="equipamentoId" label="Equipamento">
                <Select options={equipamentoOptions.map(e => ({ label: e.nome, value: e.id }))} allowClear />
            </Form.Item>

            <Form.Item name="kpiId" label="KPI">
                <Select options={kpiOptions.map(k => ({ label: k.nome, value: k.id }))} allowClear />
            </Form.Item>

            <Form.Item name="regionalId" label="Regional" rules={[{ required: true }]}>
                <Select options={regionalOptions.map(r => ({ label: r.nome, value: r.id }))} />
            </Form.Item>

            <Form.Item name="prioridade" label="Prioridade">
                <Select
                    options={Object.values(PrioridadeDefeito).map(p => ({ label: p, value: p }))}
                    allowClear
                />
            </Form.Item>

            <Form.Item name="status" label="Status" rules={[{ required: true }]}>
                <Select options={Object.values(StatusNota).map(s => ({ label: s, value: s }))} />
            </Form.Item>

            <Form.Item name="ordemServicoExecucao" label="Ordem de Serviço Execução">
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block loading={loading}>
                    Salvar
                </Button>
            </Form.Item>
        </Form>
    );
}