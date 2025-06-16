"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaGetAllWithIncludesAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { equipamentoFormSchema, EquipamentoWithRelations } from "./schema";

// CREATE
export const createEquipamento = createPrismaCreateAction(
  equipamentoFormSchema,
  async (data) => {
    return prisma.equipamento.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "EQUIPAMENTO"
);

// UPDATE
export const updateEquipamento = createPrismaUpdateAction(
  equipamentoFormSchema,
  async (data) => {
    return prisma.equipamento.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "EQUIPAMENTO"
);

// DELETE
export const deleteEquipamento = createPrismaDeleteAction(
  async (id, session) => {
    return prisma.equipamento.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.equipamento,
      modelName: "Equipamento",
    },
    entityName: "EQUIPAMENTO",
  }
);

// GET ALL paginado simples
export const getAllEquipamentos = createPrismaGetAllAction(
  prisma.equipamento,
  "EQUIPAMENTO",
  ["nome", "descricao"]
);

// GET ALL paginado com includes e filtros avançados
export const getAllEquipamentosWithIncludes = createPrismaGetAllWithIncludesAction<EquipamentoWithRelations>(
  async (params) => {
    const {
      where = {},
      orderBy = "nome",
      orderDir = "asc",
      filters = {}
    } = params;

    const finalWhere = {
      ...where,
      deletedAt: null,
      ...(filters.nome && { nome: { contains: filters.nome[0], mode: "insensitive" } }),
      ...(filters.subestacaoId && { subestacaoId: { in: filters.subestacaoId } }),
      ...(filters.grupoDefeitoCodigo && { grupoDefeitoCodigo: { in: filters.grupoDefeitoCodigo } }),
    };

    const prismaOrderBy = { [orderBy]: orderDir };

    return prisma.equipamento.findMany({
      where: finalWhere,
      orderBy: prismaOrderBy,
      include: {
        subestacao: {
          include: { regional: true }
        }
      }
    });
  },
  "EQUIPAMENTO"
);