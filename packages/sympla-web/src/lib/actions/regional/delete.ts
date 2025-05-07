
// src/lib/actions/regional/delete.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaDeleteAction } from '@/lib/server-action/actionFactory';

export const deleteRegional = createPrismaDeleteAction(
    async (id, session) => {
        return await prisma.regional.update({
            where: { id },
            data: {
                deletedAt: new Date(),
                deletedBy: session.user.id.toString(),
            },
        });
    },
    async (id) => {
        const exists = await prisma.regional.findUnique({
            where: { id },
            select: { deletedAt: true },
        });
        return !!exists && !exists.deletedAt;
    }
);