"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaGetAllWithIncludesAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { atividadeFormSchema } from "./schema";

// ========== CRIAÇÃO ==========
export const createAtividade = createPrismaCreateAction(
  atividadeFormSchema,
  async (data) => {
    return await prisma.atividade.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "ATIVIDADE"
);

// ========== ATUALIZAÇÃO ==========
export const updateAtividade = createPrismaUpdateAction(
  atividadeFormSchema,
  async (data) => {
    return await prisma.atividade.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "ATIVIDADE"
);

// ========== REMOÇÃO LÓGICA ==========
export const deleteAtividade = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.atividade.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.atividade,
      modelName: "Atividade",
    },
    entityName: "ATIVIDADE",
  }
);

// ========== LISTAGEM SIMPLES ==========
export const getAllAtividades = createPrismaGetAllAction(
  prisma.atividade,
  "ATIVIDADE"
);

// ========== LISTAGEM COM RELACIONAMENTOS ==========
export const getAllAtividadesWithIncludes = createPrismaGetAllWithIncludesAction(
  async () => {
    return await prisma.atividade.findMany({
      where: { deletedAt: null },
      orderBy: { id: "asc" },
      include: {
        tipoAtividade: true,
        nota: true,
      },
    });
  },
  "ATIVIDADE"
);