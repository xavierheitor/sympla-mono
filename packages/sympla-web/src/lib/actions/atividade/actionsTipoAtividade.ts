'use server';

import { prisma } from '@/lib/db/prisma';
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaGetAllWithIncludesAction,
  createPrismaSetManyRelationAction,
  createPrismaUpdateAction,
} from '@/lib/server-action/actionFactory';
import { tipoAtividadeFormSchema, tipoAtividadeKpiRelationSchema } from './schema';
import { TipoAtividadeMobile } from '@sympla/prisma';
import { logger } from '@/lib/utils/logger';

// CREATE
export const createTipoAtividade = createPrismaCreateAction(
  tipoAtividadeFormSchema,
  async (data) => {
    return prisma.tipoAtividade.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString() || '',
      },
    });
  },
  'TIPO_ATIVIDADE',
);

// UPDATE
export const updateTipoAtividade = createPrismaUpdateAction(
  tipoAtividadeFormSchema,
  async (data) => {
    return prisma.tipoAtividade.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString() || '',
      },
    });
  },
  'TIPO_ATIVIDADE',
);

// DELETE
export const deleteTipoAtividade = createPrismaDeleteAction(
  async (id, session) => {
    const now = new Date();
    const userId = session.user.id.toString();

    await prisma.tipoAtividadeKpi.updateMany({
      where: { tipoAtividadeId: id },
      data: { deletedAt: now, deletedBy: userId },
    });

    return prisma.tipoAtividade.update({
      where: { id },
      data: { deletedAt: now, deletedBy: userId },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.tipoAtividade,
      modelName: 'TipoAtividade',
    },
    entityName: 'TIPO_ATIVIDADE',
  },
);

// GET ALL
export const getAllTipoAtividades = createPrismaGetAllAction(
  prisma.tipoAtividade,
  'TIPO_ATIVIDADE',
);

// GET ALL WITH INCLUDES
export const getAllTipoAtividadesWithIncludes = createPrismaGetAllWithIncludesAction(
  async (params) => {
    const { where = {}, orderBy = 'nome', orderDir = 'asc' } = params;

    return prisma.tipoAtividade.findMany({
      where: { ...where, deletedAt: null },
      orderBy: { [orderBy]: orderDir },
      include: {
        tipoAtividadeKpi: {
          where: {
            deletedAt: null, // <-- ESSA LINHA FAZ O FILTRO
          },
          include: {
            kpi: true,
          },
        },
      },
    });
  },
  'TIPO_ATIVIDADE',
);

// ENUMS
function enumToOptions<T extends object>(enumObj: T) {
  return Object.entries(enumObj).map(([key, value]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1),
    value,
  }));
}

export async function getAllTipoAtividadeEnums() {
  const result = enumToOptions(TipoAtividadeMobile);

  logger.action('[LIST] TIPO_ATIVIDADE_MOBILE_ENUM', {
    input: {},
    success: true,
  });

  return result;
}

export const setTipoAtividadeKpi = createPrismaSetManyRelationAction(
  tipoAtividadeKpiRelationSchema,
  {
    entityName: 'TIPO_ATIVIDADE_KPI',
    deleteFn: async (tipoAtividadeId, userId, now) => {
      await prisma.tipoAtividadeKpi.updateMany({
        where: { tipoAtividadeId },
        data: {
          deletedAt: now,
          deletedBy: userId,
        },
      });
    },
    createFn: async (tipoAtividadeId, kpiIds, userId) => {
      await prisma.tipoAtividadeKpi.createMany({
        data: kpiIds.map((kpiId) => ({
          tipoAtividadeId,
          kpiId,
          createdBy: userId,
        })),
      });
    },
    getParentId: (input) => input.tipoAtividadeId,
    getChildIds: (input) => input.kpiIds,
  },
);
