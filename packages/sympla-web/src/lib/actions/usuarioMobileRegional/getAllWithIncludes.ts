
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllUsuarioMobileRegionalsWithIncludes = async () => {
    return await prisma.usuarioMobileRegional.findMany({
        where: { deletedAt: null },
        orderBy: { createdAt: 'asc' },
        include: {
            usuarioMobile: true,
            regional: true,
        },
    });
};
