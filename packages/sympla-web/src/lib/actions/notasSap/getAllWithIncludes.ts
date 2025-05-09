
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllNotasSapsWithIncludes = async () => {
    return await prisma.notasSAP.findMany({
        where: { deletedAt: null },
        orderBy: { descricao: 'asc' },
        include: {
            centroTrabalho: true,
            equipamento: true,
            kpi: true,
            regional: true,
        },
    });
};
