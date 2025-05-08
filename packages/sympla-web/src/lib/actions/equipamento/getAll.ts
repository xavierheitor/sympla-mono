
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllEquipamentos = createPrismaGetAllAction(async () => {
    return await prisma.equipamento.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
    });
});
