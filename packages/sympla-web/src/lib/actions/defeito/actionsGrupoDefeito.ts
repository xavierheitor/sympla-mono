"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllWithIncludesAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { grupoDefeitoEquipamentoFormSchema, } from "./schema";
import { GrupoDefeitoEquipamento } from "@sympla/prisma";

// ===== CREATE =====

export const createGrupoDefeitoEquipamento = createPrismaCreateAction(
  grupoDefeitoEquipamentoFormSchema,
  async (data) =>
    prisma.grupoDefeitoEquipamento.create({
      data: { ...data, createdBy: data.createdBy?.toString?.() || "" },
    }),
  "GRUPO_DEFEITO_EQUIPAMENTO"
);

// ===== UPDATE =====

export const updateGrupoDefeitoEquipamento = createPrismaUpdateAction(
  grupoDefeitoEquipamentoFormSchema,
  async (data) =>
    prisma.grupoDefeitoEquipamento.update({
      where: { id: data.id },
      data: { ...data, updatedBy: data.updatedBy?.toString?.() || "" },
    }),
  "GRUPO_DEFEITO_EQUIPAMENTO"
);

// ===== DELETE =====

export const deleteGrupoDefeitoEquipamento = createPrismaDeleteAction(
  async (id, session) =>
    prisma.grupoDefeitoEquipamento.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy: session.user.id.toString() },
    }),
  {
    defaultCheck: {
      prismaModel: prisma.grupoDefeitoEquipamento,
      modelName: "GrupoDefeitoEquipamento",
    },
    entityName: "GRUPO_DEFEITO_EQUIPAMENTO",
  }
);

// ===== GET ALL com paginação e filtros =====

export const getAllGrupoDefeitoEquipamentos = createPrismaGetAllWithIncludesAction<GrupoDefeitoEquipamento>(
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
      ...(filters.codigo && { codigo: { contains: filters.codigo[0], mode: "insensitive" } }),
    };

    const prismaOrderBy = { [orderBy]: orderDir };

    return prisma.grupoDefeitoEquipamento.findMany({
      where: finalWhere,
      orderBy: prismaOrderBy,
    });
  },
  "GRUPO_DEFEITO_EQUIPAMENTO"
);