
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { equipamentoFormSchema } from './equipamentoFormSchema';

export const updateEquipamento = createPrismaUpdateAction(equipamentoFormSchema, async (data) => {
    return await prisma.equipamento.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
});
