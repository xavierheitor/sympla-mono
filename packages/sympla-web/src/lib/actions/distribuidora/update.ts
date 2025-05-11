'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { distribuidoraFormSchema } from './distribuidoraFormData';

export const updateDistribuidora = createPrismaUpdateAction(distribuidoraFormSchema, async (data) => {
    if (!data.id) {
        throw new Error('ID é obrigatório para atualização');
    }
    return await prisma.distribuidora.update({
        data: { ...data, updatedBy: data.updatedBy.toString() },
        where: { id: data.id.toString() },

    });
}, 'DISTRIBUIDORA');