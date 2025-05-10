
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { tecnicoFormSchema } from './tecnicoFormSchema';

export const createTecnico = createPrismaCreateAction(tecnicoFormSchema, async (data) => {
    return await prisma.tecnico.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
});
