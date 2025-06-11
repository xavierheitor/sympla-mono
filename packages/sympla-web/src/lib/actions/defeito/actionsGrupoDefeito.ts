"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { grupoDefeitoEquipamentoFormSchema } from "./schema";

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

// ===== GET ALL =====

export const getAllGrupoDefeitoEquipamentos = createPrismaGetAllAction(
  prisma.grupoDefeitoEquipamento,
  "GRUPO_DEFEITO_EQUIPAMENTO"
);