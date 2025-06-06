"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { atividadeAtribuicaoFormSchema } from "./schema";

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

export const getAllAtividadeAtribuicaos = createPrismaGetAllAction(async () => {
  return await prisma.atividadeAtribuicao.findMany({
    where: { deletedAt: null },
    orderBy: { id: "asc" },
  });
}, "ATIVIDADE_ATRIBUICAO");

export const getAllAtividadeAtribuicaosWithIncludes = createPrismaGetAllAction(
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
