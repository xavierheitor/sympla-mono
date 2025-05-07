// apps/sympla-web/actions/distribuidora/create.ts
'use server';

import { z } from 'zod';
import { prisma } from '@/lib/db/prisma';

import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';

const schema = z.object({
    nome: z.string().min(1),
});

export const createDistribuidora = createPrismaCreateAction(schema, (data) =>
    prisma.distribuidora.create({ data: { ...data, createdBy: '1' } })
);