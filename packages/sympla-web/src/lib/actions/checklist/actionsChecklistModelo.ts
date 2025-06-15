"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
  createPrismaSetManyRelationAction,
} from "@/lib/server-action/actionFactory";
import {
  checklistModeloFormSchema,
  inputSchema,
  inputPerguntaSchema,
} from "./schema";

// CRUD ChecklistModelo
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
      data: { deletedAt: new Date(), deletedBy: session.user.id.toString() },
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

// Relations TipoAtividade

export const getAllChecklistModeloTipoAtividadeRelation = createPrismaGetAllAction(
  prisma.checklistModeloTipoAtividadeRelation,
  "CHECKLIST_MODELO_TIPO_ATIVIDADE_RELATION"
);

export const getAllChecklistModeloPerguntaRelation = createPrismaGetAllAction(
  prisma.checklisrPerguntaRelation,
  "CHECKLIST_MODELO_PERGUNTAS_RELATION"
);

// SET: TipoAtividade

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

// SET: Perguntas

export const setPerguntasDoModelo = createPrismaSetManyRelationAction(
  inputPerguntaSchema,
  {
    entityName: "CHECKLIST_MODELO_PERGUNTAS_RELATION",
    deleteFn: async (modeloId, userId, now) => {
      await prisma.checklisrPerguntaRelation.updateMany({
        where: { modeloId },
        data: { deletedAt: now, deletedBy: userId },
      });
    },
    createFn: async (modeloId, perguntaIds, userId) => {
      await prisma.checklisrPerguntaRelation.createMany({
        data: perguntaIds.map((perguntaId) => ({
          modeloId,
          perguntaId,
          ordem: 0,
          createdBy: userId,
        })),
      });
    },
    getParentId: (input) => input.modeloId,
    getChildIds: (input) => input.perguntaIds,
  }
);