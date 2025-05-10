'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    DashboardOutlined,
    VideoCameraOutlined,
    FormOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Typography, } from 'antd';
import { signOut } from 'next-auth/react';

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
                    key: '/dashboard/atividadeAtribuicao',
                    label: <Link href="/dashboard/atividadeAtribuicao">Atribuição de Atividade</Link>,
                },
                {
                    key: '/dashboard/tecnico',
                    label: <Link href="/dashboard/tecnico">Técnico</Link>,
                },
                {
                    key: '/dashboard/aprPergunta',
                    label: <Link href="/dashboard/aprPergunta">Perguntas</Link>,
                },
                {
                    key: '/dashboard/aprModelo',
                    label: <Link href="/dashboard/aprModelo">Modelo</Link>,
                },
                {
                    key: '/dashboard/aprPerguntasRelation',
                    label: <Link href="/dashboard/aprPerguntasRelation">Relação de Perguntas</Link>,
                },
                {
                    key: '/dashboard/checklistPergunta',
                    label: <Link href="/dashboard/checklistPergunta">Perguntas</Link>,
                },
                {
                    key: '/dashboard/checklistModelo',
                    label: <Link href="/dashboard/checklistModelo">Modelo</Link>,
                },
                {
                    key: '/dashboard/checklistPerguntaRelation',
                    label: <Link href="/dashboard/checklistPerguntaRelation">Relação de Perguntas</Link>,
                },
                {
                    key: '/dashboard/usuarioMobile',
                    label: <Link href="/dashboard/usuarioMobile">Usuários Mobile</Link>,
                },
            ],
        },
        {
            key: '/monitoramento',
            icon: <VideoCameraOutlined />,
            label: <Link href="/monitoramento">Monitoramento</Link>,
        },
        {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: (
                <span onClick={() => signOut({ callbackUrl: '/' })}>
                    Sair
                </span>
            ),
        },
    ];

    return (
        <Sider
            trigger={null}
            collapsible
            width={250}
            collapsed={collapsed}
            onCollapse={onCollapseChange}

            style={{
                height: '100vh',
                overflowY: 'auto',
                position: 'sticky',
                top: 0,
            }}
        >
            <Title
                level={3}
                style={{
                    color: '#F1FAEE', // cor clara para bom contraste
                    textAlign: 'center',
                    margin: '16px 0',
                }}
            >
                SYMPLA
            </Title>

            <Menu
                mode="inline"
                theme="dark"
                selectedKeys={[pathname]}
                defaultOpenKeys={[pathname.split('/').slice(0, 2).join('/')]}
                items={items}
                style={{
                    background: 'transparent',
                }}
            />
        </Sider>
    );
};

export default SidebarMenu;