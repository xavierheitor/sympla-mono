"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import {
  checklisrPerguntaRelationFormSchema,
  checklistPerguntaFormSchema,
} from "./schema";

export const createChecklistPergunta = createPrismaCreateAction(
  checklistPerguntaFormSchema,
  async (data) => {
    return await prisma.checklistPergunta.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "CHECKLIST_PERGUNTA"
);

export const deleteChecklistPergunta = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.checklistPergunta.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.checklistPergunta,
      modelName: "ChecklistPergunta",
    },
    entityName: "CHECKLIST_PERGUNTA",
  }
);

export const updateChecklistPergunta = createPrismaUpdateAction(
  checklistPerguntaFormSchema,
  async (data) => {
    return await prisma.checklistPergunta.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "CHECKLIST_PERGUNTA"
);

export const getAllChecklistPerguntas = createPrismaGetAllAction(async () => {
  return await prisma.checklistPergunta.findMany({
    where: { deletedAt: null },
    orderBy: { pergunta: "asc" },
  });
}, "CHECKLIST_PERGUNTA");

export const getAllChecklistPerguntasWithIncludes = createPrismaGetAllAction(
  async () => {
    return await prisma.checklistPergunta.findMany({
      where: { deletedAt: null },
      orderBy: { pergunta: "asc" },
    });
  },
  "CHECKLIST_PERGUNTA"
);

export const createChecklisrPerguntaRelation = createPrismaCreateAction(
  checklisrPerguntaRelationFormSchema,
  async (data) => {
    return await prisma.checklisrPerguntaRelation.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "CHECKLIST_PERGUNTA_RELATION"
);

export const updateChecklisrPerguntaRelation = createPrismaUpdateAction(
  checklisrPerguntaRelationFormSchema,
  async (data) => {
    return await prisma.checklisrPerguntaRelation.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "CHECKLIST_PERGUNTA_RELATION"
);

export const deleteChecklisrPerguntaRelation = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.checklisrPerguntaRelation.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.checklisrPerguntaRelation,
      modelName: "ChecklisrPerguntaRelation",
    },
    entityName: "CHECKLIST_PERGUNTA_RELATION",
  }
);

export const getAllChecklisrPerguntaRelations = createPrismaGetAllAction(
  async () => {
    return await prisma.checklisrPerguntaRelation.findMany({
      where: { deletedAt: null },
      orderBy: { ordem: "asc" },
    });
  },
  "CHECKLIST_PERGUNTA_RELATION"
);

export const getAllChecklisrPerguntaWithIncludes = createPrismaGetAllAction(
  async () => {
    return await prisma.checklisrPerguntaRelation.findMany({
      where: { deletedAt: null },
      orderBy: { ordem: "asc" },
      include: {
        pergunta: true,
        modelo: true,
      },
    });
  },
  "CHECKLIST_PERGUNTA_RELATION"
);
