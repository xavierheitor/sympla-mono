// src/lib/actions/distribuidora/getAll.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllDistribuidoras = createPrismaGetAllAction(async (filter) => {
    return prisma.distribuidora.findMany({
        orderBy: { nome: 'asc' },
        where: filter,
    });
}, 'DISTRIBUIDORA');