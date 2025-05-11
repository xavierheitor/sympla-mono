'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllTipoManutencaosWithIncludes = createPrismaGetAllAction(
    async () => {
        return await prisma.tipoManutencao.findMany({
            where: { deletedAt: null },
            orderBy: { nome: 'asc' },
            // include: {
            //     relacaoExemplo: true,
            // },
        });
    },
    'TIPO_MANUTENCAO'
);