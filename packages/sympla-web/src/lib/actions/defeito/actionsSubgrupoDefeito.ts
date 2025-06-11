"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
  createPrismaGetAllWithIncludesAction,
} from "@/lib/server-action/actionFactory";
import { subgrupoDefeitoEquipamentoFormSchema } from "./schema";

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

// ===== GET ALL (SEM INCLUDES) =====

export const getAllSubgrupoDefeitoEquipamentos = createPrismaGetAllAction(
  prisma.subgrupoDefeitoEquipamento,
  "SUBGRUPO_DEFEITO_EQUIPAMENTO"
);

// ===== GET ALL WITH INCLUDES =====

export const getAllSubgrupoDefeitoEquipamentosWithIncludes = createPrismaGetAllWithIncludesAction(
  async () =>
    prisma.subgrupoDefeitoEquipamento.findMany({
      where: { deletedAt: null },
      orderBy: { nome: "asc" },
      include: { grupo: true },
    }),
  "SUBGRUPO_DEFEITO_EQUIPAMENTO"
);