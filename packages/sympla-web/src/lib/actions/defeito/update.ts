
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { defeitoFormSchema } from './defeitoFormSchema';

export const updateDefeito = createPrismaUpdateAction(defeitoFormSchema, async (data) => {
    return await prisma.defeito.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
}, 'DEFEITO');
