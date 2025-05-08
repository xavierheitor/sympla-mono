
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllDefeitosWithIncludes = async () => {
    return await prisma.defeito.findMany({
        where: { deletedAt: null },
        orderBy: { codigoSap: 'asc' },
        include: {
            grupo: true,
            subgrupo: true,
            grupoDefeitoCodigo: true,
        },
    });
};
