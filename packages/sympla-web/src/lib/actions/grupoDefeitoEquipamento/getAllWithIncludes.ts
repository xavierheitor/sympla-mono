
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllGrupoDefeitoEquipamentosWithIncludes = async () => {
    return await prisma.grupoDefeitoEquipamento.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
        // include: {
        //     relacaoExemplo: true,
        // },
    });
};
