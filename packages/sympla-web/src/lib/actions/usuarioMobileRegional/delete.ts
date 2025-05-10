
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaDeleteAction } from '@/lib/server-action/actionFactory';

export const deleteUsuarioMobileRegional = createPrismaDeleteAction(async (id) => {
    return await prisma.usuarioMobileRegional.update({
        where: { id },
        data: {
            deletedAt: new Date(),
            deletedBy: 'seed',
        },
    });
}, {
    defaultCheck: {
        prismaModel: prisma.usuarioMobileRegional,
        modelName: 'UsuarioMobileRegional',
    },
});
