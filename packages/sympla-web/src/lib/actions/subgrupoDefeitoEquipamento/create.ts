
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { subgrupoDefeitoEquipamentoFormSchema } from './subgrupoDefeitoEquipamentoFormSchema';

export const createSubgrupoDefeitoEquipamento = createPrismaCreateAction(subgrupoDefeitoEquipamentoFormSchema, async (data) => {
    return await prisma.subgrupoDefeitoEquipamento.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
}, 'SUBGRUPO_DEFEITO_EQUIPAMENTO');
