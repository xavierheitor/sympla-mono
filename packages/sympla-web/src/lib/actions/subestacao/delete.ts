'use server'

import { prisma } from '@/lib/db/prisma';
import { createPrismaDeleteAction } from '@/lib/server-action/actionFactory';

export const deleteSubestacao = createPrismaDeleteAction(async (id, session) => {
    return await prisma.subestacao.update({
        where: { id },
        data: {
            deletedAt: new Date(),
            deletedBy: session.user.id.toString(),
        },
    });
}, {
    defaultCheck: {
        prismaModel: prisma.subestacao,
        modelName: 'Subestacao',
    },
});
