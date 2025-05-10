
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { aprPerguntasFormSchema } from './aprPerguntasFormSchema';

export const updateAprPerguntas = createPrismaUpdateAction(aprPerguntasFormSchema, async (data) => {
    return await prisma.aprPerguntas.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
});
