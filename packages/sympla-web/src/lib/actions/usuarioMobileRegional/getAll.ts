
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllUsuarioMobileRegionals = createPrismaGetAllAction(async () => {
    return await prisma.usuarioMobileRegional.findMany({
        where: { deletedAt: null },
        orderBy: { createdAt: 'asc' },
    });
}, 'USUARIO_MOBILE_REGIONAL');
