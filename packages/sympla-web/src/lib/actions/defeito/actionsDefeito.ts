"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
  createPrismaGetAllWithIncludesAction,
} from "@/lib/server-action/actionFactory";
import { createManyDefeitoSchema, defeitoFormSchema } from "./schema";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth.config";
import { z } from "zod";

// ===== CRUD Defeito =====

export const createDefeito = createPrismaCreateAction(
  defeitoFormSchema,
  async (data) =>
    prisma.defeito.create({
      data: { ...data, createdBy: data.createdBy?.toString?.() || "" },
    }),
  "DEFEITO"
);

export const updateDefeito = createPrismaUpdateAction(
  defeitoFormSchema,
  async (data) =>
    prisma.defeito.update({
      where: { id: data.id },
      data: { ...data, updatedBy: data.updatedBy?.toString?.() || "" },
    }),
  "DEFEITO"
);

export const deleteDefeito = createPrismaDeleteAction(
  async (id, session) =>
    prisma.defeito.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy: session.user.id.toString() },
    }),
  {
    defaultCheck: { prismaModel: prisma.defeito, modelName: "Defeito" },
    entityName: "DEFEITO",
  }
);

export const getAllDefeitos = createPrismaGetAllAction(
  prisma.defeito,
  "DEFEITO"
);

// ===== GET ALL WITH INCLUDES =====

export const getAllDefeitosWithIncludes = createPrismaGetAllWithIncludesAction(
  async () =>
    prisma.defeito.findMany({
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
    }),
  "DEFEITO"
);

// ===== MULTI INSERT =====

export async function createManyDefeitos(
  input: z.infer<typeof createManyDefeitoSchema>
): Promise<{ success: true }> {
  const data = createManyDefeitoSchema.parse(input);
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) throw new Error("Usuário não autenticado.");

  await prisma.defeito.createMany({
    data: data.map((d) => ({
      ...d,
      createdBy: userId.toString(),
    })),
  });

  return { success: true };
}