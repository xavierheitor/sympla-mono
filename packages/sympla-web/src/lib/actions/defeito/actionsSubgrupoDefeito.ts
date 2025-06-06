"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { subgrupoDefeitoEquipamentoFormSchema } from "./schema";

export const createSubgrupoDefeitoEquipamento = createPrismaCreateAction(
  subgrupoDefeitoEquipamentoFormSchema,
  async (data) => {
    return await prisma.subgrupoDefeitoEquipamento.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "SUBGRUPO_DEFEITO_EQUIPAMENTO"
);

export const updateSubgrupoDefeitoEquipamento = createPrismaUpdateAction(
  subgrupoDefeitoEquipamentoFormSchema,
  async (data) => {
    return await prisma.subgrupoDefeitoEquipamento.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "SUBGRUPO_DEFEITO_EQUIPAMENTO"
);

export const deleteSubgrupoDefeitoEquipamento = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.subgrupoDefeitoEquipamento.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.subgrupoDefeitoEquipamento,
      modelName: "SubgrupoDefeitoEquipamento",
    },
    entityName: "SUBGRUPO_DEFEITO_EQUIPAMENTO",
  }
);

export const getAllSubgrupoDefeitoEquipamentos = createPrismaGetAllAction(
  async () => {
    return await prisma.subgrupoDefeitoEquipamento.findMany({
      where: { deletedAt: null },
      orderBy: { nome: "asc" },
    });
  },
  "SUBGRUPO_DEFEITO_EQUIPAMENTO"
);

export const getAllSubgrupoDefeitoEquipamentosWithIncludes =
  createPrismaGetAllAction(async () => {
    return await prisma.subgrupoDefeitoEquipamento.findMany({
      where: { deletedAt: null },
      orderBy: { nome: "asc" },
      include: {
        grupo: true,
      },
    });
  }, "SUBGRUPO_DEFEITO_EQUIPAMENTO");
