// src/lib/actions/defeito/getAll.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllDefeitosWithIncludes = createPrismaGetAllAction(async () => {
    return await prisma.defeito.findMany({
      where: { deletedAt: null },
      orderBy: { codigoSap: "asc" },
      include: {
        grupo: true,
        subgrupo: true,
      },
    });
}, 'DEFEITO');