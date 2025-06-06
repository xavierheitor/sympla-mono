'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';
import UsuarioMobileRegionalForm from './form';
import { UsuarioMobileRegionalFormData, UsuarioMobileRegionalWithIncludes } from '@/lib/actions/usuarioMobile/schema';
import { createUsuarioMobileRegional, deleteUsuarioMobileRegional, getAllUsuarioMobileRegionalsWithIncludes, updateUsuarioMobileRegional } from '@/lib/actions/usuarioMobile/actionsUsuarioMobileRegional';
import { getAllUsuarioMobiles } from '@/lib/actions/usuarioMobile/actionsUsuarioMobile';
import { getAllRegionais } from '@/lib/actions/regional/actionsRegional';


export default function UsuarioMobileRegionalPage() {
    const controller = useCrudController<UsuarioMobileRegionalWithIncludes>('usuarioMobileRegional');

    const { data: atribuicoes, isLoading, error } = useServerData(
        'usuarioMobileRegionais',
        getAllUsuarioMobileRegionalsWithIncludes
    );

    const { data: usuarios } = useServerData('usuariosMobile', getAllUsuarioMobiles);
    const { data: regionais } = useServerData('regionais', getAllRegionais);

    const columns = useTableColumnsWithActions<UsuarioMobileRegionalWithIncludes>(
        [
            { title: 'Usuário', dataIndex: ['usuarioMobile', 'nome'], key: 'usuarioMobile.nome' },
            { title: 'Regional', dataIndex: ['regional', 'nome'], key: 'regional.nome' },
        ],
        controller.open,
        (item) =>
            controller.exec(
                () => deleteUsuarioMobileRegional(item.id),
                'Relação excluída com sucesso!'
            )
    );

    const handleSubmit = (values: UsuarioMobileRegionalFormData) => {
        const action = controller.editingItem?.id
            ? () => updateUsuarioMobileRegional({ ...values, id: controller.editingItem!.id })
            : () => createUsuarioMobileRegional(values);

        controller.exec(action, 'Relação salva com sucesso!');
    };

    if (error) return <p style={{ color: 'red' }}>Erro ao carregar dados.</p>;

    return (
        <>
            <Card
                title="Relacionamento Usuário x Regional"
                extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}
            >
                <Table<UsuarioMobileRegionalWithIncludes>
                    columns={columns}
                    dataSource={atribuicoes ?? []}
                    loading={isLoading}
                    rowKey="id"
                />
            </Card>

            <Modal
                title={controller.editingItem ? 'Editar Relação' : 'Nova Relação'}
                open={controller.isOpen}
                onCancel={controller.close}
                footer={null}
                destroyOnClose
            >
                {usuarios && regionais && (
                    <UsuarioMobileRegionalForm
                        initialValues={controller.editingItem ?? undefined}
                        onSubmit={handleSubmit}
                        loading={controller.loading}
                        usuarioOptions={usuarios.data ?? []}
                        regionalOptions={regionais.data ?? []}
                    />
                )}
            </Modal>
        </>
    );
}