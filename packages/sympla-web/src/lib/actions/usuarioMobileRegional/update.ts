
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { usuarioMobileRegionalFormSchema } from './usuarioMobileRegionalFormSchema';

export const updateUsuarioMobileRegional = createPrismaUpdateAction(usuarioMobileRegionalFormSchema, async (data) => {
    return await prisma.usuarioMobileRegional.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: 'seed',
        },
    });
}, 'USUARIO_MOBILE_REGIONAL');
