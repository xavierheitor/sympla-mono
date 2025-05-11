// src/lib/actions/checklisrPerguntaRelation/getAll.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllChecklisrPerguntaRelations = createPrismaGetAllAction(async () => {
    return await prisma.checklisrPerguntaRelation.findMany({
        where: { deletedAt: null },
        orderBy: { ordem: 'asc' },
        include: {
            pergunta: true,
            modelo: true,
        },
    });
}, 'CHECKLIST_PERGUNTA_RELATION');