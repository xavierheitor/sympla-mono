
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllGrupoDefeitoCodigos = createPrismaGetAllAction(async () => {
    return await prisma.grupoDefeitoCodigo.findMany({
        where: { deletedAt: null },
        orderBy: { sigla: 'asc' },
    });
}, 'GRUPO_DEFEITO_CODIGO');
