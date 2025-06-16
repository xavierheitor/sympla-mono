"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaUpdateAction,
  createPrismaGetAllWithIncludesAction,
} from "@/lib/server-action/actionFactory";
import { subgrupoDefeitoEquipamentoFormSchema, SubgrupoDefeitoEquipamentoWithRelations } from "./schema";

// ===== CREATE =====

export const createSubgrupoDefeitoEquipamento = createPrismaCreateAction(
  subgrupoDefeitoEquipamentoFormSchema,
  async (data) =>
    prisma.subgrupoDefeitoEquipamento.create({
      data: { ...data, createdBy: data.createdBy?.toString?.() || "" },
    }),
  "SUBGRUPO_DEFEITO_EQUIPAMENTO"
);

// ===== UPDATE =====

export const updateSubgrupoDefeitoEquipamento = createPrismaUpdateAction(
  subgrupoDefeitoEquipamentoFormSchema,
  async (data) =>
    prisma.subgrupoDefeitoEquipamento.update({
      where: { id: data.id },
      data: { ...data, updatedBy: data.updatedBy?.toString?.() || "" },
    }),
  "SUBGRUPO_DEFEITO_EQUIPAMENTO"
);

// ===== DELETE =====

export const deleteSubgrupoDefeitoEquipamento = createPrismaDeleteAction(
  async (id, session) =>
    prisma.subgrupoDefeitoEquipamento.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy: session.user.id.toString() },
    }),
  {
    defaultCheck: {
      prismaModel: prisma.subgrupoDefeitoEquipamento,
      modelName: "SubgrupoDefeitoEquipamento",
    },
    entityName: "SUBGRUPO_DEFEITO_EQUIPAMENTO",
  }
);

// ===== GET ALL PAGINATED COM INCLUDES E FILTROS =====

export const getAllSubgrupoDefeitoEquipamentosWithIncludes = createPrismaGetAllWithIncludesAction<SubgrupoDefeitoEquipamentoWithRelations>(
  async (params) => {
    const {
      where = {},
      orderBy = 'nome',
      orderDir = 'asc',
      filters = {},
    } = params;

    const finalWhere = {
      ...where,
      deletedAt: null,
      ...(filters.nome && { nome: { contains: filters.nome[0], mode: "insensitive" } }),
      ...(filters.grupoId && { grupoId: { in: filters.grupoId } }),
    };

    const prismaOrderBy = { [orderBy]: orderDir };

    return prisma.subgrupoDefeitoEquipamento.findMany({
      where: finalWhere,
      orderBy: prismaOrderBy,
      include: { grupo: true },
    });
  },
  "SUBGRUPO_DEFEITO_EQUIPAMENTO"
);