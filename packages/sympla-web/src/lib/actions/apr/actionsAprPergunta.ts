"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import {
  aprPerguntasFormSchema,
  aprPerguntasRelationFormSchema,
} from "./schema";

export const createAprPerguntas = createPrismaCreateAction(
  aprPerguntasFormSchema,
  async (data) => {
    return await prisma.aprPerguntas.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "APR_PERGUNTAS"
);

export const deleteAprPerguntas = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.aprPerguntas.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.aprPerguntas,
      modelName: "AprPerguntas",
    },
    entityName: "APR_PERGUNTAS",
  }
);

export const getAllAprPerguntas = createPrismaGetAllAction(async () => {
  return await prisma.aprPerguntas.findMany({
    where: { deletedAt: null },
    orderBy: { pergunta: "asc" },
    // include: {
    //     relacaoExemplo: true,
    // },
  });
}, "APR_PERGUNTAS");

export const getAllAprPerguntass = createPrismaGetAllAction(async () => {
  return await prisma.aprPerguntas.findMany({
    where: { deletedAt: null },
    orderBy: { pergunta: "asc" },
  });
}, "APR_PERGUNTAS");

export const updateAprPerguntas = createPrismaUpdateAction(
  aprPerguntasFormSchema,
  async (data) => {
    return await prisma.aprPerguntas.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "APR_PERGUNTAS"
);

export const createAprPerguntasRelation = createPrismaCreateAction(
  aprPerguntasRelationFormSchema,
  async (data) => {
    return await prisma.aprPerguntasRelation.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "APR_PERGUNTAS_RELATION"
);

export const updateAprPerguntasRelation = createPrismaUpdateAction(
  aprPerguntasRelationFormSchema,
  async (data) => {
    return await prisma.aprPerguntasRelation.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "APR_PERGUNTAS_RELATION"
);

export const getAllAprPerguntasWithIncludes = createPrismaGetAllAction(
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

export const getAllAprPerguntasRelations = createPrismaGetAllAction(
  async () => {
    return await prisma.aprPerguntasRelation.findMany({
      where: { deletedAt: null },
      orderBy: { ordem: "asc" },
    });
  },
  "APR_PERGUNTAS_RELATION"
);

export const deleteAprPerguntasRelation = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.aprPerguntasRelation.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.aprPerguntasRelation,
      modelName: "AprPerguntasRelation",
    },
    entityName: "APR_PERGUNTAS_RELATION",
  }
);
