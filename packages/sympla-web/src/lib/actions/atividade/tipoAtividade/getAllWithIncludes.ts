'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllTipoAtividadesWithIncludes = createPrismaGetAllAction(
    async () => {
        return await prisma.tipoAtividade.findMany({
          where: { deletedAt: null },
          orderBy: { nome: "asc" },
          include: {
            // kpis: true,
          },
        });
    },
    'TIPO_ATIVIDADE'
);