// src/lib/actions/notasSap/getAll.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllNotasSapsWithIncludes = createPrismaGetAllAction(async (filter) => {
    return await prisma.notasSAP.findMany({
        where: filter,
        orderBy: { descricao: 'asc' },
        include: {
            centroTrabalho: true,
            equipamento: true,
            kpi: true,
            regional: true,
        },
    });
}, 'NOTAS_SAP');