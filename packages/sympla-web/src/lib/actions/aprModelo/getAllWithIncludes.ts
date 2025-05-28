
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllAprModelosWithIncludes = createPrismaGetAllAction(async () => {
    return await prisma.aprModelo.findMany({
      where: { deletedAt: null },
      orderBy: { nome: "asc" },
      include: {
        // tipoAtividade: true,
      },
    });
}, 'APR_MODELO');