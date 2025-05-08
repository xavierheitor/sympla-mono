
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaDeleteAction } from '@/lib/server-action/actionFactory';

export const deleteGrupoDefeitoCodigo = createPrismaDeleteAction(async (id, session) => {
    return await prisma.grupoDefeitoCodigo.update({
        where: { id },
        data: {
            deletedAt: new Date(),
            deletedBy: session.user.id.toString(),
        },
    });
}, {
    defaultCheck: {
        prismaModel: prisma.grupoDefeitoCodigo,
        modelName: 'GrupoDefeitoCodigo',
    },
});
