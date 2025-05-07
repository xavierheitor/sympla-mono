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
    {
        defaultCheck: {
            prismaModel: prisma.regional,
            modelName: 'Regional',
        },
    }
);