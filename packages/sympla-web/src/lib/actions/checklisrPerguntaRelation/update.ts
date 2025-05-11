
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { checklisrPerguntaRelationFormSchema } from './checklisrPerguntaRelationFormSchema';

export const updateChecklisrPerguntaRelation = createPrismaUpdateAction(checklisrPerguntaRelationFormSchema, async (data) => {
    return await prisma.checklisrPerguntaRelation.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
}, 'CHECKLIST_PERGUNTA_RELATION');
