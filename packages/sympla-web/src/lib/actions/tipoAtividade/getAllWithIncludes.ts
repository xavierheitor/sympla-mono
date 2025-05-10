
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllTipoAtividadesWithIncludes = async () => {
    return await prisma.tipoAtividade.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
        // include: {
        //     relacaoExemplo: true,
        // },
    });
};
