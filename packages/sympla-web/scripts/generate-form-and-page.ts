/* eslint-disable @typescript-eslint/no-explicit-any */
// scripts/generate-form-and-page.ts
import fs from 'fs';
import path from 'path';
import { camelCase, pascalCase } from 'change-case-all';

const model = process.argv[2];
if (!model) throw new Error('Informe o nome do modelo, ex: centroTrabalho');

const configPath = path.join(__dirname, `../configs/${model}.json`);
if (!fs.existsSync(configPath)) throw new Error(`Arquivo de config não encontrado: ${configPath}`);

const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

const baseName = camelCase(model);
const className = pascalCase(model);
const formPath = path.join(__dirname, `../src/app/dashboard/${baseName}/form.tsx`);
const pagePath = path.join(__dirname, `../src/app/dashboard/${baseName}/page.tsx`);

const fields = Array.isArray(config) ? config : config.fields;
if (!Array.isArray(fields)) throw new Error('Formato do arquivo de configuração inválido.');

const enumFields = fields.filter((f: any) => f.type === 'enum');
const relationFields = fields.filter((f: any) => f.type === 'relation');
const stringFields = fields.filter((f: any) => f.type === 'string');

const formContent = `
'use client';

import { useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { ${className}FormData } from '@/lib/actions/${baseName}/${baseName}FormSchema';
${relationFields.length ? `import { ${relationFields.map((r: any) => pascalCase(r.model)).join(', ')} } from '@sympla/prisma';` : ''}

interface EnumOption {
  label: string;
  value: string;
}

interface ${className}FormProps {
  onSubmit: (values: ${className}FormData) => void;
  initialValues?: Partial<${className}FormData>;
  loading?: boolean;
${enumFields.map((e: any) => `  ${e.name}Options: EnumOption[];`).join('\n')}
${relationFields.map((r: any) => `  ${r.name}Options: ${pascalCase(r.model)}[];`).join('\n')}
}

export default function ${className}Form({
  onSubmit,
  initialValues,
  loading = false,
${enumFields.map((e: any) => `  ${e.name}Options,`).join('\n')}
${relationFields.map((r: any) => `  ${r.name}Options,`).join('\n')}
}: ${className}FormProps) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) form.setFieldsValue(initialValues);
    else form.resetFields();
  }, [initialValues, form]);

  return (
    <Form form={form} layout="vertical" initialValues={initialValues} onFinish={onSubmit}>
${stringFields.map((f: any) => `      <Form.Item name="${f.name}" label="${f.label}" rules={[{ required: true }]}>
        <Input />
      </Form.Item>`).join('\n')}
${enumFields.map((f: any) => `      <Form.Item name="${f.name}" label="${f.label}" rules={[{ required: true }]}>
        <Select options={${f.name}Options} placeholder="Selecione..." />
      </Form.Item>`).join('\n')}
${relationFields.map((f: any) => `      <Form.Item name="${f.name}" label="${f.label}" rules={[{ required: true }]}>
        <Select options={${f.name}Options.map(item => ({ label: item.nome, value: item.id }))} placeholder="Selecione..." />
      </Form.Item>`).join('\n')}

      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={loading}>Salvar</Button>
      </Form.Item>
    </Form>
  );
}
`;

const pageContent = `
'use client';

import React from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useCrudController } from '@/lib/hooks/useCrudController';
import { useServerData } from '@/lib/hooks/useServerData';
import { useTableColumnsWithActions } from '@/lib/hooks/useTableColumnsWithActions';

import { getAll${className}s } from '@/lib/actions/${baseName}/getAll';
import { create${className} } from '@/lib/actions/${baseName}/create';
import { update${className} } from '@/lib/actions/${baseName}/update';
import { delete${className} } from '@/lib/actions/${baseName}/delete';
import ${className}Form from './form';
import { ${className}FormData } from '@/lib/actions/${baseName}/${baseName}FormSchema';

export default function ${className}Page() {
  const controller = useCrudController('${baseName}');
  const { data, isLoading, error } = useServerData('${baseName}', getAll${className}s);

  const columns = useTableColumnsWithActions(
    [
${fields.filter((f: any) => ['string', 'enum'].includes(f.type)).map((f: any) => `      { title: '${f.label}', dataIndex: '${f.name}', key: '${f.name}' },`).join('\n')}
    ],
    controller.open,
    (item) => controller.exec(() => delete${className}(item.id), '${className} excluída com sucesso!')
  );

  const handleSubmit = (values: ${className}FormData) => {
    const action = controller.editingItem?.id
      ? () => update${className}({ ...values, id: controller.editingItem!.id })
      : () => create${className}(values);

    controller.exec(action, '${className} salvo com sucesso!');
  };

  if (error) return <p style={{ color: 'red' }}>Erro ao carregar.</p>;

  return (
    <>
      <Card title="${className}s" extra={<Button type="primary" onClick={() => controller.open()}>Adicionar</Button>}>
        <Table
          columns={columns}
          dataSource={data?.data ?? []}
          loading={isLoading}
          rowKey="id"
        />
      </Card>

      <Modal
        title={controller.editingItem ? 'Editar' : 'Novo'}
        open={controller.isOpen}
        onCancel={controller.close}
        footer={null}
        destroyOnClose
      >
        <${className}Form
          initialValues={controller.editingItem ?? undefined}
          onSubmit={handleSubmit}
          loading={controller.loading}
        />
      </Modal>
    </>
  );
}
`;

fs.mkdirSync(path.dirname(formPath), { recursive: true });
fs.writeFileSync(formPath, formContent);
fs.writeFileSync(pagePath, pageContent);

console.log(`✅ Form gerado em: ${formPath}`);
console.log(`✅ Page gerada em: ${pagePath}`);
