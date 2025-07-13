// ✅ actionsAtribuicaoAtividade.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import {
    createPrismaCreateAction,
    createPrismaDeleteAction,
    createPrismaUpdateAction,
    createPrismaGetAllAction,
    createPrismaGetAllWithIncludesAction,
} from '@/lib/server-action/actionFactory';

import { atividadeAtribuicaoFormSchema } from './schema';

export const createAtividadeAtribuicao = createPrismaCreateAction(
    atividadeAtribuicaoFormSchema,
    async (data) =>
        prisma.atividadeAtribuicao.create({
            data: {
                ...data,
                createdBy: data.createdBy?.toString?.() ?? '',
            },
        }),
    'ATIVIDADE_ATRIBUICAO'
);

export const updateAtividadeAtribuicao = createPrismaUpdateAction(
    atividadeAtribuicaoFormSchema,
    async (data) =>
        prisma.atividadeAtribuicao.update({
            where: { id: data.id },
            data: {
                ...data,
                updatedBy: data.updatedBy?.toString?.() ?? '',
            },
        }),
    'ATIVIDADE_ATRIBUICAO'
);

export const deleteAtividadeAtribuicao = createPrismaDeleteAction(
    async (id, session) =>
        prisma.atividadeAtribuicao.update({
            where: { id },
            data: {
                deletedAt: new Date(),
                deletedBy: session.user.id.toString(),
            },
        }),
    {
        defaultCheck: {
            prismaModel: prisma.atividadeAtribuicao,
            modelName: 'AtividadeAtribuicao',
        },
        entityName: 'ATIVIDADE_ATRIBUICAO',
    }
);

export const getAllAtividadeAtribuicaos = createPrismaGetAllAction(
    prisma.atividadeAtribuicao,
    'ATIVIDADE_ATRIBUICAO'
);

export const getAllAtividadeAtribuicaosWithIncludes = createPrismaGetAllWithIncludesAction(
    async (params) => {
        const {
            where = {},
            orderBy = 'createdAt',
            orderDir = 'desc',
            skip = 0,
            take = 10,
        } = params;

        const [data, total] = await Promise.all([
            prisma.atividadeAtribuicao.findMany({
                where: { ...where, deletedAt: null },
                orderBy: { [orderBy]: orderDir },
                skip,
                take,
                include: {
                    atividade: true,
                    usuarioMobile: true,
                },
            }),
            prisma.atividadeAtribuicao.count({
                where: { ...where, deletedAt: null },
            }),
        ]);

        const totalPages = Math.ceil(total / take);

        return {
            data,
            total,
            totalPages,
        };
    },
    'ATIVIDADE_ATRIBUICAO'
);