
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { checklistPerguntaFormSchema } from './checklistPerguntaFormSchema';

export const updateChecklistPergunta = createPrismaUpdateAction(checklistPerguntaFormSchema, async (data) => {
    return await prisma.checklistPergunta.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
}, 'CHECKLIST_PERGUNTA');
