"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
  createPrismaGetAllWithIncludesAction,
  createPrismaSetManyRelationAction,
} from "@/lib/server-action/actionFactory";

import { checklistModeloFormSchema, inputSchema } from "./schema";

// ===== CRUD ChecklistModelo =====

export const createChecklistModelo = createPrismaCreateAction(
  checklistModeloFormSchema,
  async (data) =>
    prisma.checklistModelo.create({
      data: { ...data, createdBy: data.createdBy?.toString?.() || "" },
    }),
  "CHECKLIST_MODELO"
);

export const updateChecklistModelo = createPrismaUpdateAction(
  checklistModeloFormSchema,
  async (data) =>
    prisma.checklistModelo.update({
      where: { id: data.id },
      data: { ...data, updatedBy: data.updatedBy?.toString?.() || "" },
    }),
  "CHECKLIST_MODELO"
);

export const deleteChecklistModelo = createPrismaDeleteAction(
  async (id, session) =>
    prisma.checklistModelo.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    }),
  {
    defaultCheck: { prismaModel: prisma.checklistModelo, modelName: "ChecklistModelo" },
    entityName: "CHECKLIST_MODELO",
  }
);

export const getAllChecklistModelos = createPrismaGetAllAction(
  prisma.checklistModelo,
  "CHECKLIST_MODELO"
);

export const getAllChecklistModelosWithIncludes = createPrismaGetAllWithIncludesAction(
  async () =>
    prisma.checklistModelo.findMany({
      where: { deletedAt: null },
      orderBy: { nome: "asc" },
      include: {},
    }),
  "CHECKLIST_MODELO"
);

// ===== SET de relação múltipla com factory (tipoAtividades)

export const setTipoAtividadesDoModelo = createPrismaSetManyRelationAction(
  inputSchema,
  {
    entityName: "CHECKLIST_MODELO_TIPO_ATIVIDADE_RELATION",
    deleteFn: async (modeloId, userId, now) => {
      await prisma.checklistModeloTipoAtividadeRelation.updateMany({
        where: { modeloId },
        data: { deletedAt: now, deletedBy: userId },
      });
    },
    createFn: async (modeloId, tipoAtividadeIds, userId) => {
      await prisma.checklistModeloTipoAtividadeRelation.createMany({
        data: tipoAtividadeIds.map((tipoAtividadeId) => ({
          modeloId,
          tipoAtividadeId,
          createdBy: userId,
        })),
      });
    },
    getParentId: (input) => input.modeloId,
    getChildIds: (input) => input.tipoAtividadeIds,
  }
);

// ===== Busca somente os IDs (usado no formulário)

export async function getAllTipoAtividadesByChecklistModelo(modeloId: string): Promise<string[]> {
  const registros = await prisma.checklistModeloTipoAtividadeRelation.findMany({
    where: { modeloId, deletedAt: null },
    select: { tipoAtividadeId: true },
  });

  return registros.map((r) => r.tipoAtividadeId);
}