
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllChecklistPerguntasWithIncludes = async () => {
    return await prisma.checklistPergunta.findMany({
        where: { deletedAt: null },
        orderBy: { pergunta: 'asc' },
        // include: {
        //     relacaoExemplo: true,
        // },
    });
};
