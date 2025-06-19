'use client';

import { useState } from 'react';
import { Upload, Button, message, Card, Progress, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import * as XLSX from 'xlsx';

const { Text } = Typography;

interface EquipamentoLoteFormProps {
    onSuccess: () => void;
}

export default function EquipamentoLoteForm({ onSuccess }: EquipamentoLoteFormProps) {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleUpload = async (file: File) => {
        setLoading(true);
        setProgress(5);

        try {
            const data = await file.arrayBuffer();
            setProgress(20);

            const workbook = XLSX.read(data);
            setProgress(40);

            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            setProgress(60);

            const json = JSON.parse(
                JSON.stringify(XLSX.utils.sheet_to_json(sheet))
            );

            console.log('🚀 Dados lidos do Excel:');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            json.forEach((linha: any, index: number) => {
                console.log(`🔸 Linha ${index + 1}:`, linha);
            });

            setProgress(80);

            const result = await createManyEquipamentosFromExcel(json);

            setProgress(100);

            if (result.success) {
                message.success(result.message);
                onSuccess();
            } else {
                message.warning(result.message);
            }
        } catch (error) {
            console.error(error);
            message.error('❌ Erro ao processar arquivo');
        } finally {
            setLoading(false);
            setTimeout(() => setProgress(0), 500);
        }

        return false;
    };

    return (
        <Card
            title="Cadastro de Equipamentos em Lote"
            extra={
                loading && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Text type="secondary">Processando...</Text>
                        <Progress percent={progress} size="small" />
                    </div>
                )
            }
        >
            <Upload beforeUpload={handleUpload} showUploadList={false} disabled={loading}>
                <Button icon={<UploadOutlined />} loading={loading}>
                    Upload Arquivo Excel
                </Button>
            </Upload>
        </Card>
    );
}