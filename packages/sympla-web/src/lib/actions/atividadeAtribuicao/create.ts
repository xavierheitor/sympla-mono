
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { atividadeAtribuicaoFormSchema } from './atividadeAtribuicaoFormSchema';

export const createAtividadeAtribuicao = createPrismaCreateAction(atividadeAtribuicaoFormSchema, async (data) => {
    return await prisma.atividadeAtribuicao.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
});
