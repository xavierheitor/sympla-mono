
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaDeleteAction } from '@/lib/server-action/actionFactory';

export const deleteEquipamento = createPrismaDeleteAction(async (id, session) => {
    return await prisma.equipamento.update({
        where: { id },
        data: {
            deletedAt: new Date(),
            deletedBy: session.user.id.toString(),
        },
    });
}, {
    defaultCheck: {
        prismaModel: prisma.equipamento,
        modelName: 'Equipamento',
    },
    entityName: 'EQUIPAMENTO',
});
