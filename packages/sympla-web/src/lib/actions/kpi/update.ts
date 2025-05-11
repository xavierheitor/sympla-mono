
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { kpiFormSchema } from './kpiFormSchema';

export const updateKpi = createPrismaUpdateAction(kpiFormSchema, async (data) => {
    return await prisma.kpi.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
}, 'KPI');
