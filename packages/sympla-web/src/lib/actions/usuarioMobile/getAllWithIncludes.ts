'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllUsuarioMobilesWithIncludes = createPrismaGetAllAction(
    async () => {
        return await prisma.usuarioMobile.findMany({
            where: { deletedAt: null },
            orderBy: { nome: 'asc' },
            // include: {
            //     relacaoExemplo: true,
            // },
        });
    },
    'USUARIO_MOBILE'
);