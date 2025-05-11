
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { usuarioMobileRegionalFormSchema } from './usuarioMobileRegionalFormSchema';

export const createUsuarioMobileRegional = createPrismaCreateAction(usuarioMobileRegionalFormSchema, async (data) => {
    return await prisma.usuarioMobileRegional.create({
        data: {
            ...data,
            createdBy: 'seed',
        },
    });
}, 'USUARIO_MOBILE_REGIONAL');
