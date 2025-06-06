"use server";

import { prisma } from "@/lib/db/prisma";
import { z } from "zod";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { createManyDefeitoSchema, defeitoFormSchema } from "./schema";

export const createDefeito = createPrismaCreateAction(
  defeitoFormSchema,
  async (data) => {
    return await prisma.defeito.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "DEFEITO"
);

export async function createManyDefeitos(
  input: z.infer<typeof createManyDefeitoSchema>
) {
  const data = createManyDefeitoSchema.parse(input);

  await prisma.defeito.createMany({
    data: data.map((d) => ({
      ...d,
      createdBy: "user", // opcional: ajuste conforme seu contexto de sessão
    })),
  });
}

export const deleteDefeito = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.defeito.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.defeito,
      modelName: "Defeito",
    },
    entityName: "DEFEITO",
  }
);

export const updateDefeito = createPrismaUpdateAction(
  defeitoFormSchema,
  async (data) => {
    return await prisma.defeito.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "DEFEITO"
);

export const getAllDefeitos = createPrismaGetAllAction(async () => {
  return await prisma.defeito.findMany({
    where: { deletedAt: null },
    orderBy: { codigoSap: "asc" },
  });
}, "DEFEITO");

export const getAllDefeitosWithIncludes = createPrismaGetAllAction(async () => {
  return await prisma.defeito.findMany({
    where: { deletedAt: null },
    orderBy: { codigoSap: "asc" },
    include: {
      grupo: true,
      subgrupo: {
        include: {
          grupo: true,
        },
      },
    },
  });
}, "DEFEITO");
