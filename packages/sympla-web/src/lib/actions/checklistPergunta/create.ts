
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { checklistPerguntaFormSchema } from './checklistPerguntaFormSchema';

export const createChecklistPergunta = createPrismaCreateAction(checklistPerguntaFormSchema, async (data) => {
    return await prisma.checklistPergunta.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
});
