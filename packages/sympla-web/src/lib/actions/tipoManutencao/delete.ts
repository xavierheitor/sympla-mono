
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaDeleteAction } from '@/lib/server-action/actionFactory';

export const deleteTipoManutencao = createPrismaDeleteAction(async (id, session) => {
    return await prisma.tipoManutencao.update({
        where: { id },
        data: {
            deletedAt: new Date(),
            deletedBy: session.user.id.toString(),
        },
    });
}, {
    defaultCheck: {
        prismaModel: prisma.tipoManutencao,
        modelName: 'TipoManutencao',
    },
});
