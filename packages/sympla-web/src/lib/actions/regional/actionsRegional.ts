// src/lib/actions/regional/create.ts
"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { regionalFormSchema } from "./schema";

export const createRegional = createPrismaCreateAction(
  regionalFormSchema,
  async (data) => {
    return await prisma.regional.create({
      data: {
        ...data,
        createdBy: data.createdBy.toString(),
      },
    });
  },
  "REGIONAL"
);

export const deleteRegional = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.regional.update({
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
      modelName: "Regional",
    },
    entityName: "REGIONAL", // ✅ aqui, não como 3º argumento
  }
);

export const updateRegional = createPrismaUpdateAction(
  regionalFormSchema,
  async (data) => {
    return await prisma.regional.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy.toString(),
      },
    });
  },
  "REGIONAL"
);

export const getAllRegionais = createPrismaGetAllAction(async () => {
  return prisma.regional.findMany({
    where: { deletedAt: null },
    orderBy: { nome: "asc" },
  });
}, "REGIONAL");
