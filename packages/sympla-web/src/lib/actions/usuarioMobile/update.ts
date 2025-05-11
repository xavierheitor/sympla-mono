
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { usuarioMobileFormSchema } from './usuarioMobileFormSchema';

export const updateUsuarioMobile = createPrismaUpdateAction(usuarioMobileFormSchema, async (data) => {
    console.log(data);
    return await prisma.usuarioMobile.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
}, 'USUARIO_MOBILE');
