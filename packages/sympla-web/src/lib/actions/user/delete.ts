
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaDeleteAction } from '@/lib/server-action/actionFactory';

export const deleteUser = createPrismaDeleteAction(async (id, session) => {
    return await prisma.user.update({
        where: { id },
        data: {
            deletedAt: new Date(),
            deletedBy: session.user.id.toString(),
        },
    });
}, {
    defaultCheck: {
        prismaModel: prisma.user,
        modelName: 'User',
    },
    entityName: 'USER',
});
