// src/lib/actions/atividadeAtribuicao/getAll.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllAtividadeAtribuicaos = createPrismaGetAllAction(async () => {
    return await prisma.atividadeAtribuicao.findMany({
        where: { deletedAt: null },
        orderBy: { dataInicio: 'desc' },
        include: {
            atividade: true,
            usuarioMobile: true,
        },
    });
}, 'ATIVIDADE_ATRIBUICAO');