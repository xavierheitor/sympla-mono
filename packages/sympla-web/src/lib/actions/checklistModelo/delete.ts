
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaDeleteAction } from '@/lib/server-action/actionFactory';

export const deleteChecklistModelo = createPrismaDeleteAction(async (id, session) => {
    return await prisma.checklistModelo.update({
        where: { id },
        data: {
            deletedAt: new Date(),
            deletedBy: session.user.id.toString(),
        },
    });
}, {
    defaultCheck: {
        prismaModel: prisma.checklistModelo,
        modelName: 'ChecklistModelo',
    },
    entityName: 'CHECKLIST_MODELO',
});
