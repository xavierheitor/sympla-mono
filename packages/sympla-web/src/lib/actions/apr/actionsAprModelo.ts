'use server';

import { prisma } from '@/lib/db/prisma';
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
  createPrismaSetManyRelationAction,
} from '@/lib/server-action/actionFactory';
import { aprModeloFormSchema, inputSchema, inputPerguntaSchema } from './schema';

// CRUD AprModelo
export const createAprModelo = createPrismaCreateAction(
  aprModeloFormSchema,
  async (data) =>
    prisma.aprModelo.create({
      data: { ...data, createdBy: data.createdBy?.toString?.() || '' },
    }),
  'APR_MODELO',
);

export const updateAprModelo = createPrismaUpdateAction(
  aprModeloFormSchema,
  async (data) =>
    prisma.aprModelo.update({
      where: { id: data.id },
      data: { ...data, updatedBy: data.updatedBy?.toString?.() || '' },
    }),
  'APR_MODELO',
);

export const deleteAprModelo = createPrismaDeleteAction(
  async (id, session) =>
    prisma.aprModelo.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy: session.user.id.toString() },
    }),
  {
    defaultCheck: { prismaModel: prisma.aprModelo, modelName: 'AprModelo' },
    entityName: 'APR_MODELO',
  },
);

export const getAllAprModelos = createPrismaGetAllAction(prisma.aprModelo, 'APR_MODELO');

export const getAllAprModeloTipoAtividadeRelation = createPrismaGetAllAction(
  prisma.aprModeloTipoAtividadeRelation,
  'APR_MODELO_TIPO_ATIVIDADE_RELATION',
);

export const getAllAprModeloPerguntaRelation = createPrismaGetAllAction(
  prisma.aprPerguntasRelation,
  'APR_MODELO_PERGUNTAS_RELATION',
);

// SET: TipoAtividade
export const setTipoAtividadesDoModelo = createPrismaSetManyRelationAction(inputSchema, {
  entityName: 'APR_MODELO_TIPO_ATIVIDADE_RELATION',
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
});

// SET: Perguntas
export const setPerguntasDoModelo = createPrismaSetManyRelationAction(inputPerguntaSchema, {
  entityName: 'APR_MODELO_PERGUNTAS_RELATION',
  deleteFn: async (modeloId, userId, now) => {
    await prisma.aprPerguntasRelation.updateMany({
      where: { modeloId },
      data: { deletedAt: now, deletedBy: userId },
    });
  },
  createFn: async (modeloId, perguntaIds, userId) => {
    await prisma.aprPerguntasRelation.createMany({
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
});
