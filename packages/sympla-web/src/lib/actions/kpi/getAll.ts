
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllKpis = createPrismaGetAllAction(async () => {
    return await prisma.kpi.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
    });
}, 'KPI');
