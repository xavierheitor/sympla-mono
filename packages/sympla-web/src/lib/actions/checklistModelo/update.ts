
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { checklistModeloFormSchema } from './checklistModeloFormSchema';

export const updateChecklistModelo = createPrismaUpdateAction(checklistModeloFormSchema, async (data) => {
    return await prisma.checklistModelo.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
}, 'CHECKLIST_MODELO');
