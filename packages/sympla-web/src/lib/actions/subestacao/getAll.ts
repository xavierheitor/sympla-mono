'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

export const getAllSubestacoes = createPrismaGetAllAction(async () => {
    return await prisma.subestacao.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
    });
});


export const getAllSubestacoesWithRegionais = async () => {
    return await prisma.subestacao.findMany({
        where: { deletedAt: null },
        orderBy: { nome: 'asc' },
        include: { regional: true },
    });
};