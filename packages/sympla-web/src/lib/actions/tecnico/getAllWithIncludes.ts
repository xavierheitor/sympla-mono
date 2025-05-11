// src/lib/actions/tecnico/getAllWithIncludes.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllTecnicosWithIncludes = createPrismaGetAllAction(
    async () => {
        return await prisma.tecnico.findMany({
            where: { deletedAt: null },
            orderBy: { nome: 'asc' },
            // include: {
            //     relacaoExemplo: true,
            // },
        });
    },
    'TECNICO'
);