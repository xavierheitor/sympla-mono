"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { tecnicoFormSchema } from "./schema";

export const createTecnico = createPrismaCreateAction(
  tecnicoFormSchema,
  async (data) => {
    return await prisma.tecnico.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "TECNICO"
);

export const updateTecnico = createPrismaUpdateAction(
  tecnicoFormSchema,
  async (data) => {
    return await prisma.tecnico.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "TECNICO"
);

export const deleteTecnico = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.tecnico.update({
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
      modelName: "Tecnico",
    },
    entityName: "TECNICO",
  }
);

export const getAllTecnicos = createPrismaGetAllAction(async () => {
  return await prisma.tecnico.findMany({
    where: { deletedAt: null },
    orderBy: { nome: "asc" },
  });
}, "TECNICO");

export const getAllTecnicosWithIncludes = createPrismaGetAllAction(async () => {
  return await prisma.tecnico.findMany({
    where: { deletedAt: null },
    orderBy: { nome: "asc" },
    // include: {
    //     relacaoExemplo: true,
    // },
  });
}, "TECNICO");
