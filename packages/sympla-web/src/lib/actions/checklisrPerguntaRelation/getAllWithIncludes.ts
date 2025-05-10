
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllChecklisrPerguntaRelationsWithIncludes = async () => {
    return await prisma.checklisrPerguntaRelation.findMany({
        where: { deletedAt: null },
        orderBy: { ordem: 'asc' },
        include: {
            pergunta: true,
            modelo: true,
        },
    });
};
