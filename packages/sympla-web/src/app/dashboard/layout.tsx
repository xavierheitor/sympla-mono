'use client';

import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, theme, Spin } from 'antd';
import { useHydrated } from '@/lib/hooks/useHydrated';
import ThemeToggle from '@/lib/components/ThemeToggler';
import SidebarMenu from '@/lib/components/SidebarMenu';

const { Header, Content } = Layout;

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const hydrated = useHydrated();

    const { token } = theme.useToken();

    if (!hydrated) {
        return (
            <div
                style={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: token.colorBgLayout,
                }}
            >
                <Spin size="large" />
            </div>
        );
    }

    return (
        <Layout style={{ minHeight: '100vh', background: token.colorBgLayout }}>
            <SidebarMenu collapsed={collapsed} onCollapseChange={setCollapsed} />

            <Layout>
                <Header
                    style={{
                        padding: `0 ${token.padding}px`,
                        background: token.colorBgContainer,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: token.fontSizeLG,
                            color: token.colorText,
                            marginRight: 16,
                        }}
                    />

                    {/* Espaço entre o botão e o tema */}
                    <div style={{ marginLeft: 'auto' }}>
                        <ThemeToggle />
                    </div>
                </Header>

                <Content
                    style={{
                        margin: `${token.margin}px`,
                        padding: token.padding,
                        flex: 1,
                        background: token.colorBgContainer,
                        borderRadius: token.borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default AppLayout;