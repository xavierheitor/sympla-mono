
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { checklisrPerguntaRelationFormSchema } from './checklisrPerguntaRelationFormSchema';

export const createChecklisrPerguntaRelation = createPrismaCreateAction(checklisrPerguntaRelationFormSchema, async (data) => {
    return await prisma.checklisrPerguntaRelation.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
});
