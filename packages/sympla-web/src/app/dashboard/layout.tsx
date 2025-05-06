'use client'

import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{ background: '#001529' }} // padrão do Ant Design dark
            >
                <div
                    style={{
                        height: 64,
                        margin: 16,
                        background: 'rgba(255, 255, 255, 0.3)',
                        borderRadius: 6,
                    }}
                />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Usuários',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Monitoramento',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'Uploads',
                        },
                    ]}
                />
            </Sider>

            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: 16,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: 18,
                        }}
                    />
                </Header>

                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        flex: 1,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default AppLayout;