// src/lib/actions/grupoDefeitoEquipamento/getAll.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllGrupoDefeitoEquipamentosWithIncludes = createPrismaGetAllAction(async (filter) => {
    return await prisma.grupoDefeitoEquipamento.findMany({
        where: filter,
        orderBy: { nome: 'asc' },
        // include: {
        //     relacaoExemplo: true,
        // },
    });
}, 'GRUPO_DEFEITO_EQUIPAMENTO');