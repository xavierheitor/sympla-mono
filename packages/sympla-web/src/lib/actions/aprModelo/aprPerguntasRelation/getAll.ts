
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllAprPerguntasRelations = createPrismaGetAllAction(async () => {
  return await prisma.aprPerguntasRelation.findMany({
    where: { deletedAt: null },
    orderBy: { ordem: "asc" },
  });
}, "APR_PERGUNTAS_RELATION");