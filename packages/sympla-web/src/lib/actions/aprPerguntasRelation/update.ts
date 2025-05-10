
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { aprPerguntasRelationFormSchema } from './aprPerguntasRelationFormSchema';

export const updateAprPerguntasRelation = createPrismaUpdateAction(aprPerguntasRelationFormSchema, async (data) => {
    return await prisma.aprPerguntasRelation.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
});
