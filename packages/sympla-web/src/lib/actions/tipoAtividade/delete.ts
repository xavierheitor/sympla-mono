
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaDeleteAction } from '@/lib/server-action/actionFactory';

export const deleteTipoAtividade = createPrismaDeleteAction(async (id, session) => {
    return await prisma.tipoAtividade.update({
        where: { id },
        data: {
            deletedAt: new Date(),
            deletedBy: session.user.id.toString(),
        },
    });
}, {
    defaultCheck: {
        prismaModel: prisma.tipoAtividade,
        modelName: 'TipoAtividade',
    },
    entityName: 'TIPO_ATIVIDADE',
});
