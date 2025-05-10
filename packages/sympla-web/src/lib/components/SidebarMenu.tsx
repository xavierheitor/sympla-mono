'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    DashboardOutlined,
    UploadOutlined,
    VideoCameraOutlined,
    FormOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Typography } from 'antd';

const { Sider } = Layout;
const { Title } = Typography;

interface SidebarMenuProps {
    collapsed: boolean;
    onCollapseChange: (collapsed: boolean) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ collapsed, onCollapseChange }) => {
    const pathname = usePathname();

    const items = [
        {
            key: '/dashboard',
            icon: <DashboardOutlined />,
            label: <Link href="/dashboard">Dashboard</Link>,
        },

        {
            key: 'cadastro',
            icon: <FormOutlined />,
            label: 'Cadastro',
            children: [
                {
                    key: '/dashboard/distribuidora',
                    label: <Link href="/dashboard/distribuidora">Distribuidora</Link>,
                },
                {
                    key: '/dashboard/regional',
                    label: <Link href="/dashboard/regional">Regional</Link>,
                },
                {
                    key: '/dashboard/centroTrabalho',
                    label: <Link href="/dashboard/centroTrabalho">Centro de Trabalho</Link>,
                },
                {
                    key: '/dashboard/subestacao',
                    label: <Link href="/dashboard/subestacao">Subestação</Link>,
                },
                {
                    key: '/dashboard/equipamento',
                    label: <Link href="/dashboard/equipamento">Equipamento</Link>,
                },
                {
                    key: '/dashboard/grupoDefeitoEquipamento',
                    label: <Link href="/dashboard/grupoDefeitoEquipamento">Grupo de Defeito do Equipamento</Link>,
                },
                {
                    key: '/dashboard/subgrupoDefeitoEquipamento',
                    label: <Link href="/dashboard/subgrupoDefeitoEquipamento">Subgrupo de Defeito do Equipamento</Link>,
                },
                {
                    key: '/dashboard/grupoDefeitoCodigo',
                    label: <Link href="/dashboard/grupoDefeitoCodigo">Grupo de Defeito do Código</Link>,
                },
                {
                    key: '/dashboard/defeito',
                    label: <Link href="/dashboard/defeito">Defeito</Link>,
                },
                {
                    key: '/dashboard/tipoManutencao',
                    label: <Link href="/dashboard/tipoManutencao">Tipo de Manutenção</Link>,
                },
                {
                    key: '/dashboard/kpi',
                    label: <Link href="/dashboard/kpi">KPI</Link>,
                },
                {
                    key: '/dashboard/notasSAP',
                    label: <Link href="/dashboard/notasSAP">Notas SAP</Link>,
                },
                {
                    key: '/dashboard/tipoAtividade',
                    label: <Link href="/dashboard/tipoAtividade">Tipo de Atividade</Link>,
                },
                {
                    key: '/dashboard/atividade',
                    label: <Link href="/dashboard/atividade">Atividade</Link>,
                },
                {
                    key: '/dashboard/tecnico',
                    label: <Link href="/dashboard/tecnico">Técnico</Link>,
                },

            ],
        },
        {
            key: '/monitoramento',
            icon: <VideoCameraOutlined />,
            label: <Link href="/monitoramento">Monitoramento</Link>,
        },
        {
            key: '/uploads',
            icon: <UploadOutlined />,
            label: <Link href="/uploads">Uploads</Link>,
        },
    ];

    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapseChange}
            style={{
                background: '#001529',
                height: '100vh',
                overflowY: 'auto',
                position: 'sticky',
                top: 0,
            }}
        >
            <Title
                level={3}
                style={{
                    color: 'white',
                    textAlign: 'center',
                    margin: '16px 0',
                }}
            >
                SYMPLA
            </Title>

            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={[pathname]}
                defaultOpenKeys={[pathname.split('/').slice(0, 2).join('/')]} // mantém submenu aberto
                items={items}
            />
        </Sider>
    );
};

export default SidebarMenu;