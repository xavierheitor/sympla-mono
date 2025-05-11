
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaDeleteAction } from '@/lib/server-action/actionFactory';

export const deleteAprPerguntasRelation = createPrismaDeleteAction(async (id, session) => {
    return await prisma.aprPerguntasRelation.update({
        where: { id },
        data: {
            deletedAt: new Date(),
            deletedBy: session.user.id.toString(),
        },
    });
}, {
    defaultCheck: {
        prismaModel: prisma.aprPerguntasRelation,
        modelName: 'AprPerguntasRelation',
    },
    entityName: 'APR_PERGUNTAS_RELATION',
});
