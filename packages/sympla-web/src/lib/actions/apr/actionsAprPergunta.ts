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
import {
  aprPerguntasFormSchema,
  aprPerguntasRelationFormSchema,
  aprPerguntasRelationSetSchema,
} from "./schema";

// CRUD Perguntas
export const createAprPerguntas = createPrismaCreateAction(
  aprPerguntasFormSchema,
  async (data) => prisma.aprPerguntas.create({ data: { ...data, createdBy: data.createdBy?.toString?.() || "" } }),
  "APR_PERGUNTAS"
);

export const updateAprPerguntas = createPrismaUpdateAction(
  aprPerguntasFormSchema,
  async (data) => prisma.aprPerguntas.update({
    where: { id: data.id },
    data: { ...data, updatedBy: data.updatedBy?.toString?.() || "" },
  }),
  "APR_PERGUNTAS"
);

export const deleteAprPerguntas = createPrismaDeleteAction(
  async (id, session) => prisma.aprPerguntas.update({
    where: { id },
    data: { deletedAt: new Date(), deletedBy: session.user.id.toString() },
  }),
  {
    defaultCheck: { prismaModel: prisma.aprPerguntas, modelName: "AprPerguntas" },
    entityName: "APR_PERGUNTAS",
  }
);

export const getAllAprPerguntas = createPrismaGetAllAction(
  prisma.aprPerguntas,
  "APR_PERGUNTAS"
);

// CRUD PerguntasRelation
export const createAprPerguntasRelation = createPrismaCreateAction(
  aprPerguntasRelationFormSchema,
  async (data) => prisma.aprPerguntasRelation.create({ data: { ...data, createdBy: data.createdBy?.toString?.() || "" } }),
  "APR_PERGUNTAS_RELATION"
);

export const updateAprPerguntasRelation = createPrismaUpdateAction(
  aprPerguntasRelationFormSchema,
  async (data) => prisma.aprPerguntasRelation.update({
    where: { id: data.id },
    data: { ...data, updatedBy: data.updatedBy?.toString?.() || "" },
  }),
  "APR_PERGUNTAS_RELATION"
);

export const deleteAprPerguntasRelation = createPrismaDeleteAction(
  async (id, session) => prisma.aprPerguntasRelation.update({
    where: { id },
    data: { deletedAt: new Date(), deletedBy: session.user.id.toString() },
  }),
  {
    defaultCheck: { prismaModel: prisma.aprPerguntasRelation, modelName: "AprPerguntasRelation" },
    entityName: "APR_PERGUNTAS_RELATION",
  }
);

export const getAllAprPerguntasRelations = createPrismaGetAllAction(
  prisma.aprPerguntasRelation,
  "APR_PERGUNTAS_RELATION"
);

// Incluindo relações (modelo + pergunta)
export const getAllAprPerguntasRelationsWithIncludes = createPrismaGetAllWithIncludesAction(
  async () => {
    return await prisma.aprPerguntasRelation.findMany({
      where: { deletedAt: null },
      orderBy: { ordem: "asc" },
      include: {
        pergunta: true,
        modelo: true,
      },
    });
  },
  "APR_PERGUNTAS_RELATION"
);

// SET RELATIONS Pergunta -> Modelo
export const setAprPerguntasRelations = createPrismaSetManyRelationAction(
  aprPerguntasRelationSetSchema,
  {
    entityName: "APR_PERGUNTAS_RELATION",
    deleteFn: async (perguntaId, userId, now) => {
      await prisma.aprPerguntasRelation.updateMany({
        where: { perguntaId },
        data: { deletedAt: now, deletedBy: userId },
      });
    },
    createFn: async (perguntaId, modeloIds, userId) => {
      await prisma.aprPerguntasRelation.createMany({
        data: modeloIds.map((modeloId) => ({
          perguntaId,
          modeloId,
          ordem: 0, // aqui você pode customizar a ordem, ex: sempre iniciar com 0
          createdBy: userId,
        })),
      });
    },
    getParentId: (input) => input.perguntaId,
    getChildIds: (input) => input.modeloIds,
  }
);