
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllUsuarioMobilesWithIncludes = async () => {
    return await prisma.usuarioMobile.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
        // include: {
        //     relacaoExemplo: true,
        // },
    });
};
