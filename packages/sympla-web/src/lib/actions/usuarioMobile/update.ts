'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { usuarioMobileFormSchema } from './usuarioMobileFormSchema';
import bcrypt from 'bcrypt';

export const updateUsuarioMobile = createPrismaUpdateAction(usuarioMobileFormSchema, async (data) => {
    const updateData = {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || '',
    };

    if (data.senha) {
        updateData.senha = await bcrypt.hash(data.senha, 10);
    }

    return await prisma.usuarioMobile.update({
        where: { id: data.id },
        data: updateData,
    });
}, 'USUARIO_MOBILE');