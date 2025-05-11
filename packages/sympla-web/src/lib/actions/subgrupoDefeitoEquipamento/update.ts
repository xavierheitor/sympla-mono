
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { subgrupoDefeitoEquipamentoFormSchema } from './subgrupoDefeitoEquipamentoFormSchema';

export const updateSubgrupoDefeitoEquipamento = createPrismaUpdateAction(subgrupoDefeitoEquipamentoFormSchema, async (data) => {
    return await prisma.subgrupoDefeitoEquipamento.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
}, 'SUBGRUPO_DEFEITO_EQUIPAMENTO');
