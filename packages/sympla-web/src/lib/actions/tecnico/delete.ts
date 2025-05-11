
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaDeleteAction } from '@/lib/server-action/actionFactory';

export const deleteTecnico = createPrismaDeleteAction(async (id, session) => {
    return await prisma.tecnico.update({
        where: { id },
        data: {
            deletedAt: new Date(),
            deletedBy: session.user.id.toString(),
        },
    });
}, {
    defaultCheck: {
        prismaModel: prisma.tecnico,
        modelName: 'Tecnico',
    },
    entityName: 'TECNICO',
});
