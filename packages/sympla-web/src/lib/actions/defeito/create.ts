
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { defeitoFormSchema } from './defeitoFormSchema';

export const createDefeito = createPrismaCreateAction(defeitoFormSchema, async (data) => {
    return await prisma.defeito.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
});
