
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllAprModelosWithIncludes = async () => {
    return await prisma.aprModelo.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
        include: {
            tipoAtividade: true,
        },
    });
};
