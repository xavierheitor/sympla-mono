
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { notasSapFormSchema } from './notasSapFormSchema';

export const createNotasSap = createPrismaCreateAction(notasSapFormSchema, async (data) => {
    return await prisma.notasSAP.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
}, 'NOTAS_SAP');
