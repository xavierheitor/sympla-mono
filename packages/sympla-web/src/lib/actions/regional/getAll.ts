// src/lib/actions/regional/getAll.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllRegionais = createPrismaGetAllAction(async () => {
    return prisma.regional.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
    });
});