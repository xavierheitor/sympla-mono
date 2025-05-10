
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { atividadeFormSchema } from './atividadeFormSchema';

export const createAtividade = createPrismaCreateAction(atividadeFormSchema, async (data) => {
    return await prisma.atividade.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
});
