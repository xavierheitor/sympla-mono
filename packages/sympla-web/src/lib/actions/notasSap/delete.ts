
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaDeleteAction } from '@/lib/server-action/actionFactory';

export const deleteNotasSap = createPrismaDeleteAction(async (id, session) => {
    return await prisma.notasSAP.update({
        where: { id },
        data: {
            deletedAt: new Date(),
            deletedBy: session.user.id.toString(),
        },
    });
}, {
    defaultCheck: {
        prismaModel: prisma.notasSAP,
        modelName: 'NotasSAP',
    },
    entityName: 'NOTAS_SAP',
});
