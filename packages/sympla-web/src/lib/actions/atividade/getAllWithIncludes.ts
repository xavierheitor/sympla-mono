
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllAtividadesWithIncludes = async () => {
    return await prisma.atividade.findMany({
        where: { deletedAt: null },
        orderBy: { id: 'asc' },
        include: {
            tipoAtividade: true,
            nota: true,

        },
    });
};
