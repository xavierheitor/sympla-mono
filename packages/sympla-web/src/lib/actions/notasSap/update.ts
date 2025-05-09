
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { notasSapFormSchema } from './notasSapFormSchema';

export const updateNotasSap = createPrismaUpdateAction(notasSapFormSchema, async (data) => {
    return await prisma.notasSAP.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
});
