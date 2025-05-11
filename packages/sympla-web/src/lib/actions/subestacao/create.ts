'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { subestacaoFormSchema } from './subestacaoFormSchema';


export const createSubestacao = createPrismaCreateAction(subestacaoFormSchema, async (data) => {
    return await prisma.subestacao.create({
        data: {
            ...data,
            createdBy: data.createdBy.toString(),
        },
    });
}, 'SUBESTACAO');