"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaUpdateAction,
  createPrismaGetAllWithIncludesAction,
} from "@/lib/server-action/actionFactory";
import { atividadeFormSchema, AtividadeWithIncludes } from "./schema";

// CREATE
export const createAtividade = createPrismaCreateAction(
  atividadeFormSchema,
  async (data) =>
    prisma.atividade.create({
      data: { ...data, createdBy: data.createdBy?.toString() || "" },
    }),
  "ATIVIDADE"
);

// UPDATE
export const updateAtividade = createPrismaUpdateAction(
  atividadeFormSchema,
  async (data) =>
    prisma.atividade.update({
      where: { id: data.id },
      data: { ...data, updatedBy: data.updatedBy?.toString() || "" },
    }),
  "ATIVIDADE"
);

// DELETE
export const deleteAtividade = createPrismaDeleteAction(
  async (id, session) =>
    prisma.atividade.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy: session.user.id.toString() },
    }),
  {
    defaultCheck: {
      prismaModel: prisma.atividade,
      modelName: "Atividade",
    },
    entityName: "ATIVIDADE",
  }
);

// GET ALL WITH INCLUDES
export const getAllAtividadesWithIncludes = createPrismaGetAllWithIncludesAction<AtividadeWithIncludes>(
  async (params) => {
    const { where = {}, orderBy = "prazoLimite", orderDir = "asc", filters = {} } = params;

    const finalWhere = {
      ...where,
      deletedAt: null,
      ...(filters.descricao && {
        descricao: { contains: filters.descricao[0], mode: "insensitive" },
      }),
      ...(filters.status && { status: { in: filters.status } }),
    };

    const prismaOrderBy = { [orderBy]: orderDir };

    return prisma.atividade.findMany({
      where: finalWhere,
      orderBy: prismaOrderBy,
      include: {
        tipoAtividade: true,
        nota: true,
      },
    });
  },
  "ATIVIDADE"
);