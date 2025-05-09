
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { kpiFormSchema } from './kpiFormSchema';

export const createKpi = createPrismaCreateAction(kpiFormSchema, async (data) => {
    return await prisma.kpi.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
});
