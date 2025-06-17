'use client';

import React, { useState } from 'react';
import { Button, Card, Modal, Space, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useEntityData } from '@/lib/hooks/useEntityData';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import NotasSapForm from './form';
import NotasPmaLoteForm from './formLote';
import { NotasSAPFormData, NotasSAPWithRelations } from '@/lib/actions/notasSap/schema';
import { createNotasSap, deleteNotasSap, getAllNotasSapPMA, updateNotasSap } from '@/lib/actions/notasSap/actionsNotasSap';
import { getAllCentroTrabalhos } from '@/lib/actions/centroTrabalho/actionsCentroTrabalho';
import { getAllEquipamentos } from '@/lib/actions/equipamento/actionsEquipamento';
import { getAllKpis } from '@/lib/actions/kpi/actionsKpi';
import { getAllRegionais } from '@/lib/actions/regional/actionsRegional';
import { unwrapFetcher } from '@/lib/utils/fetcherUtils';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/pt-br';
dayjs.extend(utc);
dayjs.locale('pt-br');

export default function NotasSapPage() {
    const controller = useCrudController<NotasSAPWithRelations>('notasSap');
    const [isLoteOpen, setIsLoteOpen] = useState(false);

    const notas = useEntityData<NotasSAPWithRelations>({
        key: 'notasSap',
        fetcher: unwrapFetcher(getAllNotasSapPMA),
        paginationEnabled: true,
    });

    const { data: centros } = useServerData('centroTrabalho', unwrapFetcher(getAllCentroTrabalhos));
    const { data: equipamentos } = useServerData('equipamento', unwrapFetcher(getAllEquipamentos));
    const { data: kpis } = useServerData('kpi', unwrapFetcher(getAllKpis));
    const { data: regionais } = useServerData('regional', unwrapFetcher(getAllRegionais));

    const columns = useTableColumnsWithActions<NotasSAPWithRelations>(
        [
            {
                title: 'Nota',
                dataIndex: 'numeroNota',
                key: 'numeroNota',
                filteredValue: notas.params.filters?.numeroNota ?? null,
                onFilter: (value, record) => record.numeroNota?.includes(value as string) ?? false,
                sorter: true,
            },
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
                sorter: true,
            },
            {
                title: 'KPI',
                dataIndex: ['kpi', 'nome'],
                key: 'kpi.nome',
            },
            {
                title: 'Tipo',
                dataIndex: ['kpi', 'tipoManutencao', 'nome'],
                key: 'kpi.tipoManutencao.nome',
            },
            {
                title: 'Equipamento',
                dataIndex: ['equipamento', 'nome'],
                key: 'equipamento.nome',
            },
            {
                title: 'Mês',
                dataIndex: 'dataInicioPlan',
                key: 'dataInicioPlan',
                render: (text: string) => dayjs(text).utc().locale('pt-br').format('MMMM').toUpperCase(),
            },
            {
                title: 'Regional',
                dataIndex: ['regional', 'nome'],
                key: 'regional.nome',
            },
            {
                title: 'Centro de Trabalho',
                dataIndex: ['centroTrabalho', 'nome'],
                key: 'centroTrabalho.nome',
            },
        ],
        {
            onEdit: controller.open,
            onDelete: (item) =>
                controller.exec(() => deleteNotasSap(item.id ?? ''), 'Nota excluída com sucesso!')
                    .finally(() => notas.mutate()),
        }
    );
    const handleSubmit = (values: NotasSAPFormData) => {
        const action = controller.editingItem?.id
            ? () => updateNotasSap({ ...values, id: controller.editingItem!.id })
            : () => createNotasSap(values);

        controller.exec(action, 'Nota salva com sucesso!').finally(() => notas.mutate());
    };
    if (notas.error) return <p style={{ color: 'red' }}>Erro ao carregar as notas.</p>;

    return (
        <>
            <Card
                title="Notas SAP - PLANO DE MANUTENÇÃO"
                extra={
                    <Space>
                        <Button onClick={() => setIsLoteOpen(true)}>Adicionar em lote</Button>
                        <Button type="primary" onClick={() => controller.open()}>Adicionar</Button>
                    </Space>
                }
            >
                <Table<NotasSAPWithRelations>
                    columns={columns}
                    dataSource={notas.data}
                    loading={notas.isLoading}
                    rowKey="id"
                    pagination={notas.pagination}
                    onChange={notas.handleTableChange}
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
                    centroTrabalhoOptions={centros ?? []}
                    equipamentoOptions={equipamentos ?? []}
                    kpiOptions={kpis ?? []}
                    regionalOptions={regionais ?? []}
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