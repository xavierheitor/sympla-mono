'use server';

import { prisma } from '@/lib/db/prisma';
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
  createPrismaSetManyRelationAction,
} from '@/lib/server-action/actionFactory';
import { usuarioMobileRegionalFormSchema, inputSchema } from './schema';

// ========== CREATE ==========
export const createUsuarioMobileRegional = createPrismaCreateAction(
  usuarioMobileRegionalFormSchema,
  async (data) => {
    return prisma.usuarioMobileRegional.create({
      data: {
        ...data,
        createdBy: 'seed',
      },
    });
  },
  'USUARIO_MOBILE_REGIONAL',
);

// ========== UPDATE ==========
export const updateUsuarioMobileRegional = createPrismaUpdateAction(
  usuarioMobileRegionalFormSchema,
  async (data) => {
    return prisma.usuarioMobileRegional.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: 'seed',
      },
    });
  },
  'USUARIO_MOBILE_REGIONAL',
);

// ========== DELETE ==========
export const deleteUsuarioMobileRegional = createPrismaDeleteAction(
  async (id) => {
    return prisma.usuarioMobileRegional.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: 'seed',
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.usuarioMobileRegional,
      modelName: 'UsuarioMobileRegional',
    },
    entityName: 'USUARIO_MOBILE_REGIONAL',
  },
);

// ========== GET ALL ==========
export const getAllUsuarioMobileRegionals = createPrismaGetAllAction(
  prisma.usuarioMobileRegional,
  'USUARIO_MOBILE_REGIONAL',
);

// ========== GET ALL WITH INCLUDES ==========
export const getAllUsuarioMobileRegionalsWithIncludes = createPrismaGetAllAction(
  prisma.usuarioMobileRegional,
  'USUARIO_MOBILE_REGIONAL',
);

// ========== SET MANY RELATIONS (TRANSFER) ==========
export const setRegionaisDoUsuarioMobile = createPrismaSetManyRelationAction(inputSchema, {
  entityName: 'USUARIO_MOBILE_REGIONAL',
  deleteFn: async (usuarioMobileId, userId, now) => {
    await prisma.usuarioMobileRegional.updateMany({
      where: { usuarioMobileId },
      data: {
        deletedAt: now,
        deletedBy: userId,
      },
    });
  },
  createFn: async (usuarioMobileId, regionalIds, userId) => {
    await prisma.usuarioMobileRegional.createMany({
      data: regionalIds.map((regionalId) => ({
        usuarioMobileId,
        regionalId,
        createdBy: userId,
      })),
    });
  },
  getParentId: (input) => input.usuarioMobileId,
  getChildIds: (input) => input.regionalIds,
});
