// src/lib/actions/equipamento/getAll.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllEquipamentosWithIncludes = createPrismaGetAllAction(async (filter) => {
    return await prisma.equipamento.findMany({
        where: filter,
        orderBy: { nome: 'asc' },
        include: {
            subestacao: true,
            grupo: true,
            subgrupo: true,
            grupoDefeitoCodigo: true,
        },
    });
}, 'EQUIPAMENTO');