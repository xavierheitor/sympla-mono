'use client';

import { Button, Card, Modal, Table } from 'antd';
import { Distribuidora } from '@sympla/prisma';
import DistribuidoraForm from './form';

import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import { DistribuidoraFormData } from '@/lib/actions/distribuidora/schema';
import { createDistribuidora, deleteDistribuidora, getAllDistribuidoras, updateDistribuidora } from '@/lib/actions/distribuidora/actionsDistribuidora';

const MUTATE_KEY = 'distribuidoras';

export default function DistribuidoraPage() {
    const {
        isOpen,
        editingItem,
        open,
        close,
        exec,
        loading,
    } = useCrudController<Distribuidora>(MUTATE_KEY);

    const { data, error, isLoading } = useServerData(MUTATE_KEY, getAllDistribuidoras);

    const handleSubmit = (values: DistribuidoraFormData) => {
        if (editingItem?.id) {
            return exec(() => updateDistribuidora({ ...values, id: editingItem.id }), 'Distribuidora atualizada com sucesso!');
        }
        return exec(() => createDistribuidora(values), 'Distribuidora criada com sucesso!');
    };

    const handleDelete = (record: Distribuidora) => {
        return exec(() => deleteDistribuidora(record.id), 'Distribuidora excluída com sucesso!');
    };

    const columns = useTableColumnsWithActions<Distribuidora>(
        [
            { title: 'Nome', dataIndex: 'nome', key: 'nome' },
            { title: 'Descrição', dataIndex: 'descricao', key: 'descricao' },
            { title: 'Código SAP', dataIndex: 'codigoSap', key: 'codigoSap' },
        ],
        open,
        handleDelete
    );

    if (error) return <p style={{ color: 'red' }}>Erro ao carregar distribuidoras.</p>;

    return (
        <>
            <Card
                title="Distribuidoras"
                extra={<Button type="primary" onClick={() => open()}>Adicionar</Button>}
            >
                <Table<Distribuidora>
                    columns={columns}
                    dataSource={data?.data ?? []}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

            <Modal
                title={editingItem ? 'Editar Distribuidora' : 'Nova Distribuidora'}
                open={isOpen}
                onCancel={close}
                footer={null}
                destroyOnClose
            >
                <DistribuidoraForm
                    initialValues={editingItem ?? undefined}
                    onSubmit={handleSubmit}
                    loading={loading}
                />
            </Modal>
        </>
    );
}