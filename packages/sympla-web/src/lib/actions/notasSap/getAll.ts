
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllNotasSaps = createPrismaGetAllAction(async () => {
    return await prisma.notasSAP.findMany({
        where: { deletedAt: null },
        orderBy: { descricao: 'asc' },
    });
}, 'NOTAS_SAP');
