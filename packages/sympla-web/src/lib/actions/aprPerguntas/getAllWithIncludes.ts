
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllAprPerguntassWithIncludes = async () => {
    return await prisma.aprPerguntas.findMany({
        where: { deletedAt: null },
        orderBy: { pergunta: 'asc' },
        // include: {
        //     relacaoExemplo: true,
        // },
    });
};
