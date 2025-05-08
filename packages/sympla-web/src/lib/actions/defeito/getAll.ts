
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllDefeitos = createPrismaGetAllAction(async () => {
    return await prisma.defeito.findMany({
        where: { deletedAt: null },
        orderBy: { codigoSap: 'asc' },
    });
});
