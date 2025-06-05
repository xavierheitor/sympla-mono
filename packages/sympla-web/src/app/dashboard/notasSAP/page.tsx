'use client';

import React, { useState } from 'react';
import { Button, Card, Modal, Space, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import { createNotasSap } from '@/lib/actions/notasSap/create';
import { updateNotasSap } from '@/lib/actions/notasSap/update';
import { deleteNotasSap } from '@/lib/actions/notasSap/delete';
import { getAllCentroTrabalhos } from '@/lib/actions/centroTrabalho/getAll';
import { getAllEquipamentos } from '@/lib/actions/equipamento/getAll';
import { getAllKpis } from '@/lib/actions/kpi/getAll';
import { getAllRegionais } from '@/lib/actions/regional/getAll';

import NotasSapForm from './form';

import { NotasSAPFormData } from '@/lib/actions/notasSap/notasSapFormSchema';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/pt-br';
// Aplica o plugin
dayjs.extend(utc);
dayjs.locale('pt-br'); // 🔥 Importante! Isso ativa o locale como padrão.
import NotasPmaLoteForm from './formLote';
import { getAllNotasSapPMA } from '@/lib/actions/notasSap/getAll';

export default function NotasSapPage() {
    const controller = useCrudController<NotasSAPFormData>('notasSap');
    const [isLoteOpen, setIsLoteOpen] = useState(false);

    const { data: notas, isLoading, error } = useServerData('notasSap', getAllNotasSapPMA);
    const { data: centros } = useServerData('centroTrabalho', getAllCentroTrabalhos);
    const { data: equipamentos } = useServerData('equipamento', getAllEquipamentos);
    const { data: kpis } = useServerData('kpi', getAllKpis);
    const { data: regionais } = useServerData('regional', getAllRegionais);

    const columns = useTableColumnsWithActions<NotasSAPFormData>(
        [
            { title: 'Nota', dataIndex: 'numeroNota', key: 'numeroNota' },
            { title: 'Status', dataIndex: 'status', key: 'status' },
            { title: 'KPI', dataIndex: ['kpi', 'nome'], key: 'kpi.nome' },
            { title: 'Tipo', dataIndex: ['kpi', 'tipoManutencao', 'nome'], key: 'kpi.tipoManutencao.nome' },
            { title: 'Equipamento', dataIndex: ['equipamento', 'nome'], key: 'equipamento.nome' },
            {
                title: 'Mês', dataIndex: 'dataInicioPlan', key: 'dataInicioPlan', render: (text: string) =>
                    dayjs(text).utc().locale('pt-br').format('MMMM').toUpperCase(),
            },
            { title: 'Regional', dataIndex: ['regional', 'nome'], key: 'regional.nome' },
            { title: 'Centro de Trabalho', dataIndex: ['centroTrabalho', 'nome'], key: 'centroTrabalho.nome' },
        ],
        controller.open,
        (item) => controller.exec(() => deleteNotasSap(item.id ?? ''), 'Nota excluída com sucesso!')
    );

    const handleSubmit = (values: NotasSAPFormData) => {
        const valuesSanitized = {
            ...values,
            descricao: values.descricao ?? null,
            notificador: values.notificador ?? null,
            numeroNota: values.numeroNota ?? null,
            dataNota: values.dataNota ? dayjs(values.dataNota).toISOString() : new Date().toISOString(),
            dataInicioPlan: values.dataInicioPlan ? dayjs(values.dataInicioPlan).toISOString() : null,
            dataFiPlan: values.dataFiPlan ? dayjs(values.dataFiPlan).toISOString() : null,
            dataInicioReal: values.dataInicioReal ? dayjs(values.dataInicioReal).toISOString() : null,
            dataFiReal: values.dataFiReal ? dayjs(values.dataFiReal).toISOString() : null,
            equipamentoId: values.equipamentoId ?? null,
            kpiId: values.kpiId ?? null,
            prioridade: values.prioridade ?? null,
            ordemServicoExecucao: values.ordemServicoExecucao ?? null,
        };

        const action = controller.editingItem?.id
            ? () => updateNotasSap({ ...valuesSanitized, id: controller.editingItem!.id })
            : () => createNotasSap(valuesSanitized);

        controller.exec(action, 'Nota salva com sucesso!');
    };

    if (error) return <p style={{ color: 'red' }}>Erro ao carregar as notas.</p>;

    return (
        <>
            <Card
                title="Notas SAP - PLANO DE MANUTENCAO"
                extra={<Space><Button onClick={() => setIsLoteOpen(true)}>Adicionar em lote</Button><Button type="primary" onClick={() => controller.open()}>Adicionar</Button></Space>}
            >
                <Table<NotasSAPFormData>
                    columns={columns}
                    dataSource={notas?.data ?? []}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar Nota' : 'Nova Nota'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                <NotasSapForm
                    initialValues={controller.editingItem ?? undefined}
                    onSubmit={handleSubmit}
                    loading={controller.loading}
                    centroTrabalhoOptions={centros?.data ?? []}
                    equipamentoOptions={equipamentos?.data ?? []}
                    kpiOptions={kpis?.data ?? []}
                    regionalOptions={regionais?.data ?? []}
                />
            </Modal>

            <Modal
                title="Cadastro de Notas PMA em Lote"
                open={isLoteOpen}
                onCancel={() => setIsLoteOpen(false)}
                footer={null}
                width={1000}
                destroyOnClose
            >
                <NotasPmaLoteForm />
            </Modal>
        </>
    );
}