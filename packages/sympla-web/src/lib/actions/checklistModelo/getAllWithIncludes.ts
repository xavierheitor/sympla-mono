
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllChecklistModelosWithIncludes = async () => {
    return await prisma.checklistModelo.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
        include: {
            tipoAtividade: true,
        },
    });
};
