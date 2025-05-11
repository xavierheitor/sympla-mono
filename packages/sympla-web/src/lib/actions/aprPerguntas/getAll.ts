
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllAprPerguntass = createPrismaGetAllAction(async () => {
    return await prisma.aprPerguntas.findMany({
        where: { deletedAt: null },
        orderBy: { pergunta: 'asc' },
    });
}, 'APR_PERGUNTAS');
