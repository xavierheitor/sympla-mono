'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllUsuarioMobileRegionalsWithIncludes = createPrismaGetAllAction(
    async () => {
        return await prisma.usuarioMobileRegional.findMany({
            where: { deletedAt: null },
            orderBy: { createdAt: 'asc' },
            include: {
                usuarioMobile: true,
                regional: true,
            },
        });
    },
    'USUARIO_MOBILE_REGIONAL'
);