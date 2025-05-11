// src/lib/actions/centroTrabalho/getAll.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllCentroTrabalhos = createPrismaGetAllAction(async () => {
    return await prisma.centroTrabalho.findMany({
        where: { deletedAt: null },
        orderBy: { id: 'asc' },
        // include: { relacaoExemplo: true },
    });
}, 'CENTRO_TRABALHO');