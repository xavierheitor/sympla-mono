
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { grupoDefeitoEquipamentoFormSchema } from './grupoDefeitoEquipamentoFormSchema';

export const updateGrupoDefeitoEquipamento = createPrismaUpdateAction(grupoDefeitoEquipamentoFormSchema, async (data) => {
    return await prisma.grupoDefeitoEquipamento.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
}, 'GRUPO_DEFEITO_EQUIPAMENTO');
