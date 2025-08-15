'use server';

import { prisma } from '@/lib/db/prisma';
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
  createPrismaGetAllWithIncludesAction,
} from '@/lib/server-action/actionFactory';
import { kpiFormSchema, KpiWithRelations } from './schema';

// ===== CREATE

export const createKpi = createPrismaCreateAction(
  kpiFormSchema,
  async (data) => {
    return await prisma.kpi.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString() || '',
      },
    });
  },
  'KPI',
);

// ===== UPDATE

export const updateKpi = createPrismaUpdateAction(
  kpiFormSchema,
  async (data) => {
    return await prisma.kpi.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString() || '',
      },
    });
  },
  'KPI',
);

// ===== DELETE

export const deleteKpi = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.kpi.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.kpi,
      modelName: 'Kpi',
    },
    entityName: 'KPI',
  },
);

// ===== GET ALL (com paginação e busca nativa)

export const getAllKpis = createPrismaGetAllAction(prisma.kpi, 'KPI', ['nome', 'descricao']);

// ===== GET ALL WITH INCLUDES

export const getAllKpisWithIncludes = createPrismaGetAllWithIncludesAction<KpiWithRelations>(
  async (params) => {
    const {
      where = {},
      include = {
        tipoManutencao: true,
      },
    } = params;

    return await prisma.kpi.findMany({
      where: { ...where, deletedAt: null },
      include,
    });
  },
  'KPI',
);
