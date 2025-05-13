'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { usuarioMobileFormSchema } from './usuarioMobileFormSchema';
import bcrypt from 'bcrypt';

export const createUsuarioMobile = createPrismaCreateAction(usuarioMobileFormSchema, async (data) => {
    const hashedPassword = await bcrypt.hash(data.senha, 10);

    return await prisma.usuarioMobile.create({
        data: {
            ...data,
            senha: hashedPassword,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
}, 'USUARIO_MOBILE');