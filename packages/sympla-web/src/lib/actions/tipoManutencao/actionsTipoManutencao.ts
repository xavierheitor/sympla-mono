"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { tipoManutencaoFormSchema } from "./schema";

export const createTipoManutencao = createPrismaCreateAction(
  tipoManutencaoFormSchema,
  async (data) => {
    return await prisma.tipoManutencao.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "TIPO_MANUTENCAO"
);

export const updateTipoManutencao = createPrismaUpdateAction(
  tipoManutencaoFormSchema,
  async (data) => {
    return await prisma.tipoManutencao.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "TIPO_MANUTENCAO"
);

export const deleteTipoManutencao = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.tipoManutencao.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.tipoManutencao,
      modelName: "TipoManutencao",
    },
    entityName: "TIPO_MANUTENCAO",
  }
);

export const getAllTipoManutencaos = createPrismaGetAllAction(async () => {
  return await prisma.tipoManutencao.findMany({
    where: { deletedAt: null },
    orderBy: { nome: "asc" },
  });
}, "TIPO_MANUTENCAO");

export const getAllTipoManutencaosWithIncludes = createPrismaGetAllAction(
  async () => {
    return await prisma.tipoManutencao.findMany({
      where: { deletedAt: null },
      orderBy: { nome: "asc" },
      // include: {
      //     relacaoExemplo: true,
      // },
    });
  },
  "TIPO_MANUTENCAO"
);
