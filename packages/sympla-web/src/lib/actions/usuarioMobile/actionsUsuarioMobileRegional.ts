"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { usuarioMobileRegionalFormSchema } from "./schema";

export const createUsuarioMobileRegional = createPrismaCreateAction(
  usuarioMobileRegionalFormSchema,
  async (data) => {
    return await prisma.usuarioMobileRegional.create({
      data: {
        ...data,
        createdBy: "seed",
      },
    });
  },
  "USUARIO_MOBILE_REGIONAL"
);

export const deleteUsuarioMobileRegional = createPrismaDeleteAction(
  async (id) => {
    return await prisma.usuarioMobileRegional.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: "seed",
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.usuarioMobileRegional,
      modelName: "UsuarioMobileRegional",
    },
    entityName: "USUARIO_MOBILE_REGIONAL",
  }
);

export const updateUsuarioMobileRegional = createPrismaUpdateAction(
  usuarioMobileRegionalFormSchema,
  async (data) => {
    return await prisma.usuarioMobileRegional.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: "seed",
      },
    });
  },
  "USUARIO_MOBILE_REGIONAL"
);

export const getAllUsuarioMobileRegionals = createPrismaGetAllAction(
  async () => {
    return await prisma.usuarioMobileRegional.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: "asc" },
    });
  },
  "USUARIO_MOBILE_REGIONAL"
);

export const getAllUsuarioMobileRegionalsWithIncludes =
  createPrismaGetAllAction(async () => {
    return await prisma.usuarioMobileRegional.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: "asc" },
      include: {
        usuarioMobile: true,
        regional: true,
      },
    });
  }, "USUARIO_MOBILE_REGIONAL");
