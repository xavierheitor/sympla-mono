
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllKpisWithIncludes = async () => {
    return await prisma.kpi.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
        include: {
            tipoManutencao: true,
        },
    });
};
