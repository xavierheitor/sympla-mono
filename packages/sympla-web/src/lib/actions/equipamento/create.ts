
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { equipamentoFormSchema } from './equipamentoFormSchema';

export const createEquipamento = createPrismaCreateAction(equipamentoFormSchema, async (data) => {
    return await prisma.equipamento.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
});
