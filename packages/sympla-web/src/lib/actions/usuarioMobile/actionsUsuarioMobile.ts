'use server';

import { prisma } from '@/lib/db/prisma';
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from '@/lib/server-action/actionFactory';
import { usuarioMobileFormSchema } from './schema';
import bcrypt from 'bcrypt';

// ========== CREATE ==========
export const createUsuarioMobile = createPrismaCreateAction(
  usuarioMobileFormSchema,
  async (data) => {
    const hashedPassword = await bcrypt.hash(data.senha, 10);

    return prisma.usuarioMobile.create({
      data: {
        ...data,
        senha: hashedPassword,
        createdBy: data.createdBy?.toString?.() || '',
      },
    });
  },
  'USUARIO_MOBILE',
);

// ========== UPDATE ==========
export const updateUsuarioMobile = createPrismaUpdateAction(
  usuarioMobileFormSchema,
  async (data) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateData: any = {
      ...data,
      updatedBy: data.updatedBy?.toString?.() || '',
    };

    if (data.senha) {
      updateData.senha = await bcrypt.hash(data.senha, 10);
    }

    return prisma.usuarioMobile.update({
      where: { id: data.id },
      data: updateData,
    });
  },
  'USUARIO_MOBILE',
);

// ========== DELETE ==========
export const deleteUsuarioMobile = createPrismaDeleteAction(
  async (id, session) => {
    return prisma.usuarioMobile.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.usuarioMobile,
      modelName: 'UsuarioMobile',
    },
    entityName: 'USUARIO_MOBILE',
  },
);

// ========== GET ALL ==========
export const getAllUsuarioMobiles = createPrismaGetAllAction(
  prisma.usuarioMobile,
  'USUARIO_MOBILE',
  ['nome', 'email'], // ✅ campos habilitados pro search
);

// ========== GET ALL WITH INCLUDES ==========
export const getAllUsuarioMobilesWithIncludes = createPrismaGetAllAction(
  prisma.usuarioMobile,
  'USUARIO_MOBILE',
  ['nome', 'email'],
);
