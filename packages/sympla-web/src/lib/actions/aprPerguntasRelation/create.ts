
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { aprPerguntasRelationFormSchema } from './aprPerguntasRelationFormSchema';

export const createAprPerguntasRelation = createPrismaCreateAction(aprPerguntasRelationFormSchema, async (data) => {
    return await prisma.aprPerguntasRelation.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
}, 'APR_PERGUNTAS_RELATION');
