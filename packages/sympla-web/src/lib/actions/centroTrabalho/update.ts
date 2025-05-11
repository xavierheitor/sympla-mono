
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { centroTrabalhoFormSchema } from './centroTrabalhoFormSchema';

export const updateCentroTrabalho = createPrismaUpdateAction(centroTrabalhoFormSchema, async (data) => {
    return await prisma.centroTrabalho.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
}, 'CENTRO_TRABALHO');
