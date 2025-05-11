
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { usuarioMobileFormSchema } from './usuarioMobileFormSchema';

export const createUsuarioMobile = createPrismaCreateAction(usuarioMobileFormSchema, async (data) => {
    return await prisma.usuarioMobile.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
}, 'USUARIO_MOBILE');
