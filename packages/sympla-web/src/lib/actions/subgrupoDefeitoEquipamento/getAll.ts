
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllSubgrupoDefeitoEquipamentos = createPrismaGetAllAction(async () => {
    return await prisma.subgrupoDefeitoEquipamento.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
    });
});
