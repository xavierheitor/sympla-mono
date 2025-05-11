
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaDeleteAction } from '@/lib/server-action/actionFactory';

export const deleteCentroTrabalho = createPrismaDeleteAction(async (id, session) => {
    return await prisma.centroTrabalho.update({
        where: { id },
        data: {
            deletedAt: new Date(),
            deletedBy: session.user.id.toString(),
        },
    });
}, {
    defaultCheck: {
        prismaModel: prisma.centroTrabalho,
        modelName: 'CentroTrabalho',
    },
    entityName: 'CENTRO_TRABALHO',
});
