
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllUsersWithIncludes = async () => {
    return await prisma.user.findMany({
        where: { deletedAt: null },
        orderBy: { name: 'asc' },
        // include: {
        //     relacaoExemplo: true,
        // },
    });
};
