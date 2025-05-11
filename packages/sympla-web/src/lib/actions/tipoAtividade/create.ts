
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { tipoAtividadeFormSchema } from './tipoAtividadeFormSchema';

export const createTipoAtividade = createPrismaCreateAction(tipoAtividadeFormSchema, async (data) => {
    return await prisma.tipoAtividade.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
}, 'TIPO_ATIVIDADE');
