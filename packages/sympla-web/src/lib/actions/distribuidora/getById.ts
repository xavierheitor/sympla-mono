'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetByIdAction } from '@/lib/server-action/actionFactory';

export const getDistribuidoraById = createPrismaGetByIdAction(async (id) => {
    return await prisma.distribuidora.findUniqueOrThrow({
        where: {
            id: id.toString(),
            deletedAt: null,
        },
    });
}, 'DISTRIBUIDORA');