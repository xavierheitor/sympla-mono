
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllEquipamentosWithIncludes = async () => {
    return await prisma.equipamento.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
        include: {
            subestacao: true,
            grupo: true,
            subgrupo: true,
            grupoDefeitoCodigo: true,
        },
    });
};
