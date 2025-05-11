// src/lib/actions/subgrupoDefeitoEquipamento/getAllWithIncludes.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllSubgrupoDefeitoEquipamentosWithIncludes = createPrismaGetAllAction(
    async () => {
        return await prisma.subgrupoDefeitoEquipamento.findMany({
            where: { deletedAt: null },
            orderBy: { nome: 'asc' },
            include: {
                grupo: true,
            },
        });
    },
    'SUBGRUPO_DEFEITO_EQUIPAMENTO'
);