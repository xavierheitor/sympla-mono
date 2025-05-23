
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllGrupoDefeitoEquipamentos = createPrismaGetAllAction(async () => {
    return await prisma.grupoDefeitoEquipamento.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
    });
}, 'GRUPO_DEFEITO_EQUIPAMENTO');
