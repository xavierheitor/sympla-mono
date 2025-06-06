"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { usuarioMobileFormSchema } from "./schema";
import bcrypt from "bcrypt";

export const createUsuarioMobile = createPrismaCreateAction(
  usuarioMobileFormSchema,
  async (data) => {
    const hashedPassword = await bcrypt.hash(data.senha, 10);

    return await prisma.usuarioMobile.create({
      data: {
        ...data,
        senha: hashedPassword,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "USUARIO_MOBILE"
);

export const updateUsuarioMobile = createPrismaUpdateAction(
  usuarioMobileFormSchema,
  async (data) => {
    const updateData = {
      ...data,
      updatedBy: data.updatedBy?.toString?.() || "",
    };

    if (data.senha) {
      updateData.senha = await bcrypt.hash(data.senha, 10);
    }

    return await prisma.usuarioMobile.update({
      where: { id: data.id },
      data: updateData,
    });
  },
  "USUARIO_MOBILE"
);

export const deleteUsuarioMobile = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.usuarioMobile.update({
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
      modelName: "UsuarioMobile",
    },
    entityName: "USUARIO_MOBILE",
  }
);

export const getAllUsuarioMobiles = createPrismaGetAllAction(async () => {
  return await prisma.usuarioMobile.findMany({
    where: { deletedAt: null },
    orderBy: { nome: "asc" },
  });
}, "USUARIO_MOBILE");

export const getAllUsuarioMobilesWithIncludes = createPrismaGetAllAction(
  async () => {
    return await prisma.usuarioMobile.findMany({
      where: { deletedAt: null },
      orderBy: { nome: "asc" },
      // include: {
      //     relacaoExemplo: true,
      // },
    });
  },
  "USUARIO_MOBILE"
);
