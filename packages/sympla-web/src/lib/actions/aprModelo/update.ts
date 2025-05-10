
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { aprModeloFormSchema } from './aprModeloFormSchema';

export const updateAprModelo = createPrismaUpdateAction(aprModeloFormSchema, async (data) => {
    return await prisma.aprModelo.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
});
