'use server';

import { prisma } from '@/lib/db/prisma';
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from '@/lib/server-action/actionFactory';
import { tecnicoFormSchema } from './schema';

// ========== CREATE ==========
export const createTecnico = createPrismaCreateAction(
  tecnicoFormSchema,
  async (data) => {
    return prisma.tecnico.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || '',
      },
    });
  },
  'TECNICO',
);

// ========== UPDATE ==========
export const updateTecnico = createPrismaUpdateAction(
  tecnicoFormSchema,
  async (data) => {
    return prisma.tecnico.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || '',
      },
    });
  },
  'TECNICO',
);

// ========== DELETE (soft delete) ==========
export const deleteTecnico = createPrismaDeleteAction(
  async (id, session) => {
    return prisma.tecnico.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.tecnico,
      modelName: 'Tecnico',
    },
    entityName: 'TECNICO',
  },
);

// ========== GET ALL ==========
export const getAllTecnicos = createPrismaGetAllAction(
  prisma.tecnico,
  'TECNICO',
  ['nome'], // campos pesquisáveis no search
);

// ========== GET ALL WITH INCLUDES ==========
export const getAllTecnicosWithIncludes = createPrismaGetAllAction(prisma.tecnico, 'TECNICO', [
  'nome',
]);
