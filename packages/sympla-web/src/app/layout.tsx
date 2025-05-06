import type { Metadata } from "next";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import '@ant-design/v5-patch-for-react-19'; // <-- IMPORTANTE: antes de qualquer uso de Ant Design
import { App as AntdApp } from 'antd';



export const metadata: Metadata = {
  title: "Sympla",
  description: "Sistema de Gerenciamento de Atividades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <AntdRegistry>
          <AntdApp>{children}</AntdApp>
        </AntdRegistry>
      </body>
    </html>
  );
}
