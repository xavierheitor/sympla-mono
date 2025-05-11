
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllTecnicos = createPrismaGetAllAction(async () => {
    return await prisma.tecnico.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
    });
}, 'TECNICO');
