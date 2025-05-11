// src/lib/actions/checklistPergunta/getAll.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllChecklistPerguntas = createPrismaGetAllAction(async () => {
    return await prisma.checklistPergunta.findMany({
        where: { deletedAt: null },
        orderBy: { pergunta: 'asc' },
    });
}, 'CHECKLIST_PERGUNTA');