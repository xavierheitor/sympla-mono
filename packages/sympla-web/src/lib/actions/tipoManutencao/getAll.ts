
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllTipoManutencaos = createPrismaGetAllAction(async () => {
    return await prisma.tipoManutencao.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
    });
}, 'TIPO_MANUTENCAO');
