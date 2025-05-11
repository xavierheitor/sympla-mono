'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import { createNotasSap } from '@/lib/actions/notasSap/create';
import { updateNotasSap } from '@/lib/actions/notasSap/update';
import { deleteNotasSap } from '@/lib/actions/notasSap/delete';
import { getAllNotasSapsWithIncludes } from '@/lib/actions/notasSap/getAllWithIncludes';
import { getAllCentroTrabalhos } from '@/lib/actions/centroTrabalho/getAll';
import { getAllEquipamentos } from '@/lib/actions/equipamento/getAll';
import { getAllKpis } from '@/lib/actions/kpi/getAll';
import { getAllRegionais } from '@/lib/actions/regional/getAll';

import NotasSapForm from './form';
import { NotasSAPFormData } from '@/lib/actions/notasSap/notasSapFormSchema';
import dayjs from 'dayjs';

export default function NotasSapPage() {
    const controller = useCrudController<NotasSAPFormData>('notasSap');

    const { data: notas, isLoading, error } = useServerData('notasSap', getAllNotasSapsWithIncludes);
    const { data: centros } = useServerData('centroTrabalho', getAllCentroTrabalhos);
    const { data: equipamentos } = useServerData('equipamento', getAllEquipamentos);
    const { data: kpis } = useServerData('kpi', getAllKpis);
    const { data: regionais } = useServerData('regional', getAllRegionais);

    const columns = useTableColumnsWithActions<NotasSAPFormData>(
        [
            { title: 'Descrição', dataIndex: 'descricao', key: 'descricao' },
            { title: 'Local', dataIndex: 'localInstalacao', key: 'localInstalacao' },
            { title: 'Status', dataIndex: 'status', key: 'status' },
            { title: 'Tipo', dataIndex: 'tipoNota', key: 'tipoNota' },
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
            dataNota: values.dataNota ? dayjs(values.dataNota).toISOString() : new Date().toISOString(), // obrigatório
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
                title="Notas SAP"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
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
        </>
    );
}