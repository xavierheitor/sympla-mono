'use server';

import { prisma } from '@/lib/db/prisma';
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from '@/lib/server-action/actionFactory';
import { tipoManutencaoFormSchema } from './schema';

// ========== CREATE ==========
export const createTipoManutencao = createPrismaCreateAction(
  tipoManutencaoFormSchema,
  async (data) => {
    return prisma.tipoManutencao.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || '',
      },
    });
  },
  'TIPO_MANUTENCAO',
);

// ========== UPDATE ==========
export const updateTipoManutencao = createPrismaUpdateAction(
  tipoManutencaoFormSchema,
  async (data) => {
    return prisma.tipoManutencao.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || '',
      },
    });
  },
  'TIPO_MANUTENCAO',
);

// ========== DELETE (soft delete) ==========
export const deleteTipoManutencao = createPrismaDeleteAction(
  async (id, session) => {
    return prisma.tipoManutencao.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.tipoManutencao,
      modelName: 'TipoManutencao',
    },
    entityName: 'TIPO_MANUTENCAO',
  },
);

// ========== GET ALL ==========
export const getAllTipoManutencaos = createPrismaGetAllAction(
  prisma.tipoManutencao,
  'TIPO_MANUTENCAO',
  ['nome'],
);

// ========== GET ALL WITH INCLUDES ==========
export const getAllTipoManutencaosWithIncludes = createPrismaGetAllAction(
  prisma.tipoManutencao,
  'TIPO_MANUTENCAO',
  ['nome'],
);
