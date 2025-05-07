
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { centroTrabalhoFormSchema } from './centroTrabalhoFormSchema';

export const createCentroTrabalho = createPrismaCreateAction(centroTrabalhoFormSchema, async (data) => {
    return await prisma.centroTrabalho.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
});
