import fs from 'fs';
import path from 'path';
import { camelCase } from 'change-case-all';

// ⛳️ Pega o nome do modelo como argumento do terminal
const modelName = process.argv[2];
if (!modelName) throw new Error('Informe o nome do modelo Prisma, ex: centroTrabalho');

const baseName = camelCase(modelName);
const dir = path.join(__dirname, `../src/lib/actions/${baseName}`);
const filePath = path.join(dir, `${baseName}FormSchema.ts`);

// 👇 Altere aqui se quiser suportar mais campos automaticamente no futuro
const fields = [{ name: 'nome', type: 'string', required: true }];

const fileContent = `import { z } from 'zod';
import { ${modelName} } from '@sympla/prisma';

export const ${baseName}FormSchema = z.object({
  id: z.string().optional(),
  ${fields
    .map(
      (field) =>
        `${field.name}: z.${field.type}()${field.required ? `.min(1, '${field.name} é obrigatório')` : ''},`,
    )
    .join('\n  ')}
});

type BaseFields = Required<Pick<${modelName}, ${fields.map((f) => `'${f.name}'`).join(' | ')}>>;
export type ${modelName}FormData = Partial<Pick<${modelName}, 'id'>> & BaseFields;
`;

// Cria a pasta se não existir
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(filePath, fileContent);

console.log(`✅ Schema gerado em: ${filePath}`);
