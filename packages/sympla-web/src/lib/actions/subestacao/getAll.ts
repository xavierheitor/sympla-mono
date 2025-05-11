// src/lib/actions/subestacao/getAll.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaGetAllAction } from '@/lib/server-action/actionFactory';

// Lista simples
export const getAllSubestacoes = createPrismaGetAllAction(async (filter) => {
    return await prisma.subestacao.findMany({
        where: filter,
        orderBy: { nome: 'asc' },
    });
}, 'SUBESTACAO');

// Lista com includes
export const getAllSubestacoesWithRegionais = createPrismaGetAllAction(async (filter) => {
    return await prisma.subestacao.findMany({
        where: filter,
        orderBy: { nome: 'asc' },
        include: { regional: true },
    });
}, 'SUBESTACAO');