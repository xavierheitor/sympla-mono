
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { checklistModeloFormSchema } from './checklistModeloFormSchema';

export const createChecklistModelo = createPrismaCreateAction(checklistModeloFormSchema, async (data) => {
    return await prisma.checklistModelo.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
}, 'CHECKLIST_MODELO');
