
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllTipoManutencaosWithIncludes = async () => {
    return await prisma.tipoManutencao.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
        // include: {
        //     relacaoExemplo: true,
        // },
    });
};
