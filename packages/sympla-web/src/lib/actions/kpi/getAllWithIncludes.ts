// src/lib/actions/kpi/getAll.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllKpisWithIncludes = createPrismaGetAllAction(async (filter) => {
    return await prisma.kpi.findMany({
        where: filter,
        orderBy: { nome: 'asc' },
        include: {
            tipoManutencao: true,
        },
    });
}, 'KPI');