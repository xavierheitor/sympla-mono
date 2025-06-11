"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaGetAllWithIncludesAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { atividadeAtribuicaoFormSchema } from "./schema";

// ========== CRIAÇÃO ==========
export const createAtividadeAtribuicao = createPrismaCreateAction(
  atividadeAtribuicaoFormSchema,
  async (data) => {
    return await prisma.atividadeAtribuicao.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "ATIVIDADE_ATRIBUICAO"
);

// ========== ATUALIZAÇÃO ==========
export const updateAtividadeAtribuicao = createPrismaUpdateAction(
  atividadeAtribuicaoFormSchema,
  async (data) => {
    return await prisma.atividadeAtribuicao.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "ATIVIDADE_ATRIBUICAO"
);

// ========== REMOÇÃO LÓGICA ==========
export const deleteAtividadeAtribuicao = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.atividadeAtribuicao.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.atividadeAtribuicao,
      modelName: "AtividadeAtribuicao",
    },
    entityName: "ATIVIDADE_ATRIBUICAO",
  }
);

// ========== LISTAGEM SIMPLES ==========
export const getAllAtividadeAtribuicaos = createPrismaGetAllAction(
  prisma.atividadeAtribuicao,
  "ATIVIDADE_ATRIBUICAO"
);

// ========== LISTAGEM COM RELACIONAMENTOS ==========
export const getAllAtividadeAtribuicaosWithIncludes = createPrismaGetAllWithIncludesAction(
  async () => {
    return await prisma.atividadeAtribuicao.findMany({
      where: { deletedAt: null },
      orderBy: { dataInicio: "desc" },
      include: {
        atividade: true,
        usuarioMobile: true,
      },
    });
  },
  "ATIVIDADE_ATRIBUICAO"
);