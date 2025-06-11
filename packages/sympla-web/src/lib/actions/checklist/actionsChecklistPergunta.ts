"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
  createPrismaGetAllWithIncludesAction,
} from "@/lib/server-action/actionFactory";
import {
  checklistPerguntaFormSchema,
  checklistPerguntaRelationFormSchema,
} from "./schema";

// ==================== CRUD ChecklistPergunta ====================

export const createChecklistPergunta = createPrismaCreateAction(
  checklistPerguntaFormSchema,
  async (data) =>
    prisma.checklistPergunta.create({
      data: { ...data, createdBy: data.createdBy?.toString?.() || "" },
    }),
  "CHECKLIST_PERGUNTA"
);

export const updateChecklistPergunta = createPrismaUpdateAction(
  checklistPerguntaFormSchema,
  async (data) =>
    prisma.checklistPergunta.update({
      where: { id: data.id },
      data: { ...data, updatedBy: data.updatedBy?.toString?.() || "" },
    }),
  "CHECKLIST_PERGUNTA"
);

export const deleteChecklistPergunta = createPrismaDeleteAction(
  async (id, session) =>
    prisma.checklistPergunta.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy: session.user.id.toString() },
    }),
  {
    defaultCheck: { prismaModel: prisma.checklistPergunta, modelName: "ChecklistPergunta" },
    entityName: "CHECKLIST_PERGUNTA",
  }
);

export const getAllChecklistPerguntas = createPrismaGetAllAction(
  prisma.checklistPergunta,
  "CHECKLIST_PERGUNTA"
);

// ==================== CRUD ChecklistPerguntaRelation ====================

export const createChecklistPerguntaRelation = createPrismaCreateAction(
  checklistPerguntaRelationFormSchema,
  async (data) =>
    prisma.checklisrPerguntaRelation.create({
      data: { ...data, createdBy: data.createdBy?.toString?.() || "" },
    }),
  "CHECKLIST_PERGUNTA_RELATION"
);

export const updateChecklistPerguntaRelation = createPrismaUpdateAction(
  checklistPerguntaRelationFormSchema,
  async (data) =>
    prisma.checklisrPerguntaRelation.update({
      where: { id: data.id },
      data: { ...data, updatedBy: data.updatedBy?.toString?.() || "" },
    }),
  "CHECKLIST_PERGUNTA_RELATION"
);

export const deleteChecklistPerguntaRelation = createPrismaDeleteAction(
  async (id, session) =>
    prisma.checklisrPerguntaRelation.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy: session.user.id.toString() },
    }),
  {
    defaultCheck: { prismaModel: prisma.checklisrPerguntaRelation, modelName: "ChecklistPerguntaRelation" },
    entityName: "CHECKLIST_PERGUNTA_RELATION",
  }
);

export const getAllChecklistPerguntaRelations = createPrismaGetAllAction(
  prisma.checklisrPerguntaRelation,
  "CHECKLIST_PERGUNTA_RELATION"
);

// ==================== With Includes ====================

export const getAllChecklistPerguntaRelationsWithIncludes = createPrismaGetAllWithIncludesAction(
  async () =>
    prisma.checklisrPerguntaRelation.findMany({
      where: { deletedAt: null },
      orderBy: { ordem: "asc" },
      include: {
        pergunta: true,
        modelo: true,
      },
    }),
  "CHECKLIST_PERGUNTA_RELATION"
);