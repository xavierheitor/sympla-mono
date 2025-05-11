
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllUsers = createPrismaGetAllAction(async () => {
    return await prisma.user.findMany({
        where: { deletedAt: null },
        orderBy: { name: 'asc' },
    });
}, 'USER');
