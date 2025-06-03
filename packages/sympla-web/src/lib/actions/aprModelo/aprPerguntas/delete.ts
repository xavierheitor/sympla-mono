
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaDeleteAction } from '@/lib/server-action/actionFactory';

export const deleteAprPerguntas = createPrismaDeleteAction(async (id, session) => {
    return await prisma.aprPerguntas.update({
        where: { id },
        data: {
            deletedAt: new Date(),
            deletedBy: session.user.id.toString(),
        },
    });
}, {
    defaultCheck: {
        prismaModel: prisma.aprPerguntas,
        modelName: 'AprPerguntas',
    },
    entityName: 'APR_PERGUNTAS',
});
