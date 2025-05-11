
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaDeleteAction } from '@/lib/server-action/actionFactory';

export const deleteDefeito = createPrismaDeleteAction(async (id, session) => {
    return await prisma.defeito.update({
        where: { id },
        data: {
            deletedAt: new Date(),
            deletedBy: session.user.id.toString(),
        },
    });
}, {
    defaultCheck: {
        prismaModel: prisma.defeito,
        modelName: 'Defeito',
    },
    entityName: 'DEFEITO',
});
