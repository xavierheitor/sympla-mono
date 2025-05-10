
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllTecnicosWithIncludes = async () => {
    return await prisma.tecnico.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
        // include: {
        //     relacaoExemplo: true,
        // },
    });
};
