'use server';

import { prisma } from '@/lib/db/prisma';
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from '@/lib/server-action/actionFactory';
import { regionalFormSchema } from './schema';

// ===== CREATE =====
export const createRegional = createPrismaCreateAction(
  regionalFormSchema,
  async (data) => {
    return prisma.regional.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || '',
      },
    });
  },
  'REGIONAL',
);

// ===== UPDATE =====
export const updateRegional = createPrismaUpdateAction(
  regionalFormSchema,
  async (data) => {
    return prisma.regional.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || '',
      },
    });
  },
  'REGIONAL',
);

// ===== DELETE =====
export const deleteRegional = createPrismaDeleteAction(
  async (id, session) => {
    return prisma.regional.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.regional,
      modelName: 'Regional',
    },
    entityName: 'REGIONAL',
  },
);

// ===== GET ALL =====
export const getAllRegionais = createPrismaGetAllAction(prisma.regional, 'REGIONAL');
