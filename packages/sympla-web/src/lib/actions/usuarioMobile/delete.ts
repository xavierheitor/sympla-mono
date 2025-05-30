
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaDeleteAction } from '@/lib/server-action/actionFactory';

export const deleteUsuarioMobile = createPrismaDeleteAction(async (id, session) => {
    return await prisma.usuarioMobile.update({
        where: { id },
        data: {
            deletedAt: new Date(),
            deletedBy: session.user.id.toString(),
        },
    });
}, {
    defaultCheck: {
        prismaModel: prisma.usuarioMobile,
        modelName: 'UsuarioMobile',
    },
    entityName: 'USUARIO_MOBILE',
});
