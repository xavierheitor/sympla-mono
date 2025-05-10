
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllAtividadeAtribuicaosWithIncludes = async () => {
    return await prisma.atividadeAtribuicao.findMany({
        where: { deletedAt: null },
        orderBy: { dataInicio: 'desc' },
        include: {
            atividade: true,
            usuarioMobile: true,
        },
    });
};
