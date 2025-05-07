
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllSubgrupoDefeitoEquipamentosWithIncludes = async () => {
    return await prisma.subgrupoDefeitoEquipamento.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
        include: {
            grupo: true,
        },
    });
};
