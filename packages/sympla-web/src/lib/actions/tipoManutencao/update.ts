
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { tipoManutencaoFormSchema } from './tipoManutencaoFormSchema';

export const updateTipoManutencao = createPrismaUpdateAction(tipoManutencaoFormSchema, async (data) => {
    return await prisma.tipoManutencao.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
}, 'TIPO_MANUTENCAO');
