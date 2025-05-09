
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { tipoManutencaoFormSchema } from './tipoManutencaoFormSchema';

export const createTipoManutencao = createPrismaCreateAction(tipoManutencaoFormSchema, async (data) => {
    return await prisma.tipoManutencao.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
});
