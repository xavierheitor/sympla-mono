// scripts/generate-actions.ts
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { pascalCase, camelCase } from 'change-case-all';
import path from 'path';

const model = process.argv[2];
if (!model) throw new Error('Informe o nome do modelo Prisma, ex: centroTrabalho');

const baseName = camelCase(model);
const className = pascalCase(model);
const formSchemaImport = `import { ${baseName}FormSchema } from './${baseName}FormSchema';`;

const actionsPath = path.resolve(__dirname, `../src/lib/actions/${baseName}`);
if (!existsSync(actionsPath)) mkdirSync(actionsPath, { recursive: true });

const createContent = `
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
${formSchemaImport}

export const create${className} = createPrismaCreateAction(${baseName}FormSchema, async (data) => {
    return await prisma.${baseName}.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
});
`;

const updateContent = `
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
${formSchemaImport}

export const update${className} = createPrismaUpdateAction(${baseName}FormSchema, async (data) => {
    return await prisma.${baseName}.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
});
`;

const deleteContent = `
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaDeleteAction } from '@/lib/server-action/actionFactory';

export const delete${className} = createPrismaDeleteAction(async (id, session) => {
    return await prisma.${baseName}.update({
        where: { id },
        data: {
            deletedAt: new Date(),
            deletedBy: session.user.id.toString(),
        },
    });
}, {
    defaultCheck: {
        prismaModel: prisma.${baseName},
        modelName: '${className}',
    },
});
`;

const getAllContent = `
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAll${className}s = createPrismaGetAllAction(async () => {
    return await prisma.${baseName}.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
    });
});
`;

const getAllWithIncludesContent = `
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAll${className}sWithIncludes = async () => {
    return await prisma.${baseName}.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
        // include: {
        //     relacaoExemplo: true,
        // },
    });
};
`;

writeFileSync(`${actionsPath}/create.ts`, createContent);
writeFileSync(`${actionsPath}/update.ts`, updateContent);
writeFileSync(`${actionsPath}/delete.ts`, deleteContent);
writeFileSync(`${actionsPath}/getAll.ts`, getAllContent);
writeFileSync(`${actionsPath}/getAllWithIncludes.ts`, getAllWithIncludesContent);

console.log(`\u2705 Actions geradas para o modelo ${className}`);