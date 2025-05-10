
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { tipoAtividadeFormSchema } from './tipoAtividadeFormSchema';

export const updateTipoAtividade = createPrismaUpdateAction(tipoAtividadeFormSchema, async (data) => {
    return await prisma.tipoAtividade.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
});
