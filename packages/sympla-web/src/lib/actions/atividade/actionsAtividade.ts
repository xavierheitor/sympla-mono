'use server';

import { prisma } from '@/lib/db/prisma';
import {
  createPrismaCreateAction,
  createPrismaUpdateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaGetAllWithIncludesAction,
} from '@/lib/server-action/actionFactory';
import { atividadeFormSchema } from './schema';

export const createAtividade = createPrismaCreateAction(
  atividadeFormSchema,
  async (data) =>
    prisma.atividade.create({
      data: { ...data, createdBy: data.createdBy?.toString?.() ?? '' },
    }),
  'ATIVIDADE',
);

export const updateAtividade = createPrismaUpdateAction(
  atividadeFormSchema,
  async (data) =>
    prisma.atividade.update({
      where: { id: data.id },
      data: { ...data, updatedBy: data.updatedBy?.toString?.() ?? '' },
    }),
  'ATIVIDADE',
);

export const deleteAtividade = createPrismaDeleteAction(
  async (id, session) =>
    prisma.atividade.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy: session.user.id.toString() },
    }),
  {
    defaultCheck: { prismaModel: prisma.atividade, modelName: 'Atividade' },
    entityName: 'ATIVIDADE',
  },
);

export const getAllAtividades = createPrismaGetAllAction(prisma.atividade, 'ATIVIDADE');
export const getAllAtividadesWithIncludes = createPrismaGetAllWithIncludesAction(async (params) => {
  const { where = {}, orderBy = 'nome', orderDir = 'asc', skip = 0, take = 10 } = params;

  const [data, total] = await Promise.all([
    prisma.atividade.findMany({
      where: { ...where, deletedAt: null },
      orderBy: { [orderBy]: orderDir },
      skip,
      take,
      include: {
        notaPma: true,
        tipoAtividade: {
          include: {
            tipoAtividadeKpi: {
              where: { deletedAt: null },
              include: { kpi: true },
            },
          },
        },
      },
    }),
    prisma.atividade.count({
      where: { ...where, deletedAt: null },
    }),
  ]);

  const totalPages = Math.ceil(total / take);

  return {
    data,
    total,
    totalPages, // ✅ Adicionado aqui
  };
}, 'ATIVIDADE');
