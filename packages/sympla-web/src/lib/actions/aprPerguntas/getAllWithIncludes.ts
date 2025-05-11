'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllAprPerguntas = createPrismaGetAllAction(async () => {
    return await prisma.aprPerguntas.findMany({
        where: { deletedAt: null },
        orderBy: { pergunta: 'asc' },
        // include: {
        //     relacaoExemplo: true,
        // },
    });
}, 'APR_PERGUNTAS');