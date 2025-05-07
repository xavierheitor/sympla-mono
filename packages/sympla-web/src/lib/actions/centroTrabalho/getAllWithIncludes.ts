
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllCentroTrabalhosWithIncludes = async () => {
    return await prisma.centroTrabalho.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
        // include: {
        //     relacaoExemplo: true,
        // },
    });
};
