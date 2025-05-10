
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { tecnicoFormSchema } from './tecnicoFormSchema';

export const updateTecnico = createPrismaUpdateAction(tecnicoFormSchema, async (data) => {
    return await prisma.tecnico.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
});
