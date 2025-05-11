
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { atividadeFormSchema } from './atividadeFormSchema';

export const updateAtividade = createPrismaUpdateAction(atividadeFormSchema, async (data) => {
    return await prisma.atividade.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
}, 'ATIVIDADE');
