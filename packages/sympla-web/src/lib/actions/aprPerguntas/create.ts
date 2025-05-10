
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { aprPerguntasFormSchema } from './aprPerguntasFormSchema';

export const createAprPerguntas = createPrismaCreateAction(aprPerguntasFormSchema, async (data) => {
    return await prisma.aprPerguntas.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
});
