"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { centroTrabalhoFormSchema } from "./schema";

export const createCentroTrabalho = createPrismaCreateAction(
  centroTrabalhoFormSchema,
  async (data) => {
    return await prisma.centroTrabalho.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "CENTRO_TRABALHO"
);

export const updateCentroTrabalho = createPrismaUpdateAction(
  centroTrabalhoFormSchema,
  async (data) => {
    return await prisma.centroTrabalho.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "CENTRO_TRABALHO"
);

export const deleteCentroTrabalho = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.centroTrabalho.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.centroTrabalho,
      modelName: "CentroTrabalho",
    },
    entityName: "CENTRO_TRABALHO",
  }
);

export const getAllCentroTrabalhos = createPrismaGetAllAction(async () => {
  return await prisma.centroTrabalho.findMany({
    where: { deletedAt: null },
    orderBy: { id: "asc" },
  });
}, "CENTRO_TRABALHO");

export const getAllCentroTrabalhosWithIncludes = createPrismaGetAllAction(
  async () => {
    return await prisma.centroTrabalho.findMany({
      where: { deletedAt: null },
      orderBy: { id: "asc" },
      include: { regional: true },
    });
  },
  "CENTRO_TRABALHO"
);
