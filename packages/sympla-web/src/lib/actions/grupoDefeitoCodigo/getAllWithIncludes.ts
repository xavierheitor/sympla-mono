
'use server';

import { prisma } from '@/lib/db/prisma';

export const getAllGrupoDefeitoCodigosWithIncludes = async () => {
    return await prisma.grupoDefeitoCodigo.findMany({
        where: { deletedAt: null },
        orderBy: { sigla: 'asc' },
        include: {
            grupo: true,
        },
    });
};
