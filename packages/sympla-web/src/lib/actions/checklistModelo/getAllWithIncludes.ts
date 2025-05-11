// src/lib/actions/checklistModelo/getAll.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllChecklistModelosWithIncludes = createPrismaGetAllAction(async () => {
    return await prisma.checklistModelo.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
        include: {
            tipoAtividade: true,
        },
    });
}, 'CHECKLIST_MODELO');