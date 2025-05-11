// src/lib/actions/atividade/getAll.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllAtividades = createPrismaGetAllAction(async () => {
    return await prisma.atividade.findMany({
        where: { deletedAt: null },
        orderBy: { id: 'asc' },
        include: {
            tipoAtividade: true,
            nota: true,
        },
    });
}, 'ATIVIDADE');