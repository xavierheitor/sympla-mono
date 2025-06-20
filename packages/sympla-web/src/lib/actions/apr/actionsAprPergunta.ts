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
  aprPerguntasFormSchema,
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
