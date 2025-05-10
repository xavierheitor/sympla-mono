
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllTipoAtividades = createPrismaGetAllAction(async () => {
    return await prisma.tipoAtividade.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
    });
});
