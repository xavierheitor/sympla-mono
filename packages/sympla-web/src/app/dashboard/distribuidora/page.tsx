'use client';

import React, { useEffect, useState } from 'react';
import fetchDistribuidoras from "@/lib/actions/distribuidora/fetch";
import { Button, Card, Modal, Space, Table, TableColumnsType, TableProps } from "antd";
import useSWR from "swr";
import DistribuidoraForm from "./form";

interface DataType {
    key: React.Key;
    id: string;
    nome: string;
    descricao: string;
    codigoSap: string;
}

export default function DistribuidoraPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [editingDistribuidora, setEditingDistribuidora] = useState<DataType | null>(null);

    useEffect(() => {
        const onCreated = () => setModalOpen(false);
        window.addEventListener("distribuidoraCreated", onCreated);
        return () => window.removeEventListener("distribuidoraCreated", onCreated);
    }, []);

    const {
        data: distribuidoras,
        isLoading,
        error,
    } = useSWR('/api/distribuidoras', fetchDistribuidoras);

    const handleEdit = (record: DataType) => {
        setEditingDistribuidora(record);
        setModalOpen(true);
    };

    const handleDelete = (record: DataType) => {
        // TODO: implementar exclusão
        console.log('Excluir distribuidora', record);
    };

    const handleAdd = () => {
        setEditingDistribuidora(null);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Nome',
            dataIndex: 'nome',
            key: 'nome',
        },
        {
            title: 'Descrição',
            dataIndex: 'descricao',
            key: 'descricao',
        },
        {
            title: 'Código SAP',
            dataIndex: 'codigoSap',
            key: 'codigoSap',
        },
        {
            title: 'Ações',
            key: 'actions',
            render: (_, record) => (
                <Space>
                    <Button type="link" onClick={() => handleEdit(record)}>Editar</Button>
                    <Button type="link" danger onClick={() => handleDelete(record)}>Excluir</Button>
                </Space>
            ),
        },
    ];

    const rowSelection: TableProps<DataType>['rowSelection'] = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log('selectedRowKeys:', selectedRowKeys, 'selectedRows:', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.nome === 'Disabled User',
            name: record.nome,
        }),
    };

    if (error) return <p style={{ color: 'red' }}>Erro ao carregar as distribuidoras.</p>;

    return (
        <>
            <Card
                title="Distribuidoras"
                extra={<Button type="primary" onClick={handleAdd}>Adicionar</Button>}
                style={{ width: '100%' }}
            >
                <Table<DataType>
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={distribuidoras}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

            <Modal
                title={editingDistribuidora ? 'Editar Distribuidora' : 'Nova Distribuidora'}
                open={modalOpen}
                footer={null}
                onCancel={handleCloseModal}
                destroyOnClose
            >
                <DistribuidoraForm distribuidora={editingDistribuidora} onClose={handleCloseModal} />
            </Modal>
        </>
    );
}
