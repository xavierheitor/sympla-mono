'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { subestacaoFormSchema } from './subestacaoFormSchema';


export const updateSubestacao = createPrismaUpdateAction(subestacaoFormSchema, async (data) => {
    return await prisma.subestacao.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy.toString(),
        },
    });
});
