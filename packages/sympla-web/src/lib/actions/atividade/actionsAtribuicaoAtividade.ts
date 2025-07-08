// === actionsAtribuicaoAtividade.ts ===
"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllWithIncludesAction,
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

export const getAllAtividadeAtribuicaosWithIncludes = createPrismaGetAllWithIncludesAction(
  async ({ where = {}, orderBy = "dataInicio", orderDir = "desc", skip, take }) => {
    const [data, total] = await prisma.$transaction([
      prisma.atividadeAtribuicao.findMany({
        where: { ...where, deletedAt: null },
        orderBy: { [orderBy]: orderDir },
        skip,
        take,
        include: {
          atividade: true,
          usuarioMobile: true,
        },
      }),
      prisma.atividadeAtribuicao.count({
        where: { ...where, deletedAt: null },
      }),
    ]);

    return {
      data,
      total,
      totalPages: take ? Math.ceil(total / take) : 1,
    };
  },
  "ATIVIDADE_ATRIBUICAO"
);