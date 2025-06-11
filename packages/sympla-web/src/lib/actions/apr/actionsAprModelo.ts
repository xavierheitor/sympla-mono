"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
  createPrismaGetByIdAction,
  createPrismaSetManyRelationAction,
} from "@/lib/server-action/actionFactory";
import {
  aprModeloFormSchema,
  inputSchema,
} from "./schema";

// CRUD do AprModelo
export const createAprModelo = createPrismaCreateAction(
  aprModeloFormSchema,
  async (data) => prisma.aprModelo.create({ data: { ...data, createdBy: data.createdBy?.toString?.() || "" } }),
  "APR_MODELO"
);

export const updateAprModelo = createPrismaUpdateAction(
  aprModeloFormSchema,
  async (data) => prisma.aprModelo.update({
    where: { id: data.id },
    data: { ...data, updatedBy: data.updatedBy?.toString?.() || "" },
  }),
  "APR_MODELO"
);

export const deleteAprModelo = createPrismaDeleteAction(
  async (id, session) => prisma.aprModelo.update({
    where: { id },
    data: { deletedAt: new Date(), deletedBy: session.user.id.toString() },
  }),
  {
    defaultCheck: { prismaModel: prisma.aprModelo, modelName: "AprModelo" },
    entityName: "APR_MODELO",
  }
);

export const getAllAprModelos = createPrismaGetAllAction(prisma.aprModelo, "APR_MODELO");

export const getAprModeloById = createPrismaGetByIdAction(
  async (id) => prisma.aprModelo.findUniqueOrThrow({ where: { id } }),
  "APR_MODELO"
);

// Relação AprModelo <-> TipoAtividade (multi relation factory)
export const setTipoAtividadesDoModelo = createPrismaSetManyRelationAction(
  inputSchema,
  {
    entityName: "APR_MODELO_TIPO_ATIVIDADE_RELATION",
    deleteFn: async (modeloId, userId, now) => {
      await prisma.aprModeloTipoAtividadeRelation.updateMany({
        where: { modeloId },
        data: { deletedAt: now, deletedBy: userId },
      });
    },
    createFn: async (modeloId, tipoAtividadeIds, userId) => {
      await prisma.aprModeloTipoAtividadeRelation.createMany({
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

export const getAllAprModeloTipoAtividadeRelation = createPrismaGetAllAction(
  prisma.aprModeloTipoAtividadeRelation,
  "APR_MODELO_TIPO_ATIVIDADE_RELATION"
);