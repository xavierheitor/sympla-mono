
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllAprPerguntasRelationsWithIncludes = async () => {
    return await prisma.aprPerguntasRelation.findMany({
        where: { deletedAt: null },
        orderBy: { ordem: 'asc' },
        include: {
            pergunta: true,
            modelo: true,
        },
    });
};
