
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { atividadeAtribuicaoFormSchema } from './atividadeAtribuicaoFormSchema';

export const updateAtividadeAtribuicao = createPrismaUpdateAction(atividadeAtribuicaoFormSchema, async (data) => {
    return await prisma.atividadeAtribuicao.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
});
