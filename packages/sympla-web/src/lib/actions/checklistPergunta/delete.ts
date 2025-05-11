
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaDeleteAction } from '@/lib/server-action/actionFactory';

export const deleteChecklistPergunta = createPrismaDeleteAction(async (id, session) => {
    return await prisma.checklistPergunta.update({
        where: { id },
        data: {
            deletedAt: new Date(),
            deletedBy: session.user.id.toString(),
        },
    });
}, {
    defaultCheck: {
        prismaModel: prisma.checklistPergunta,
        modelName: 'ChecklistPergunta',
    },
    entityName: 'CHECKLIST_PERGUNTA',
});
