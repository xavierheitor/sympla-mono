
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllChecklistModelos = createPrismaGetAllAction(async () => {
    return await prisma.checklistModelo.findMany({
        where: { deletedAt: null },
        orderBy: { id: 'asc' },
    });
}, 'CHECKLIST_MODELO');
