
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { grupoDefeitoEquipamentoFormSchema } from './grupoDefeitoEquipamentoFormSchema';

export const createGrupoDefeitoEquipamento = createPrismaCreateAction(grupoDefeitoEquipamentoFormSchema, async (data) => {
    return await prisma.grupoDefeitoEquipamento.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
});
