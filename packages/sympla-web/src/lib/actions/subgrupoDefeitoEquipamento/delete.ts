
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaDeleteAction } from '@/lib/server-action/actionFactory';

export const deleteSubgrupoDefeitoEquipamento = createPrismaDeleteAction(async (id, session) => {
    return await prisma.subgrupoDefeitoEquipamento.update({
        where: { id },
        data: {
            deletedAt: new Date(),
            deletedBy: session.user.id.toString(),
        },
    });
}, {
    defaultCheck: {
        prismaModel: prisma.subgrupoDefeitoEquipamento,
        modelName: 'SubgrupoDefeitoEquipamento',
    },
    entityName: 'SUBGRUPO_DEFEITO_EQUIPAMENTO',
});
