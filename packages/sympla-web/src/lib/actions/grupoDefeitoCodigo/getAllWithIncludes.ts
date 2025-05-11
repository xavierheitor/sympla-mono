// src/lib/actions/grupoDefeitoCodigo/getAll.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllGrupoDefeitoCodigosWithIncludes = createPrismaGetAllAction(async (filter) => {
    return await prisma.grupoDefeitoCodigo.findMany({
        where: filter,
        orderBy: { sigla: 'asc' },
        include: {
            grupo: true,
        },
    });
}, 'GRUPO_DEFEITO_CODIGO');