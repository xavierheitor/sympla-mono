"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
  createPrismaGetAllWithIncludesAction,
} from "@/lib/server-action/actionFactory";
import { createManyDefeitoSchema, defeitoFormSchema, DefeitoWithRelations } from "./schema";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth.config";
import { z } from "zod";

// ===== CREATE =====

export const createDefeito = createPrismaCreateAction(
  defeitoFormSchema,
  async (data) =>
    prisma.defeito.create({
      data: { ...data, createdBy: data.createdBy?.toString?.() || "" },
    }),
  "DEFEITO"
);

// ===== UPDATE =====

export const updateDefeito = createPrismaUpdateAction(
  defeitoFormSchema,
  async (data) =>
    prisma.defeito.update({
      where: { id: data.id },
      data: { ...data, updatedBy: data.updatedBy?.toString?.() || "" },
    }),
  "DEFEITO"
);

// ===== DELETE =====

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

// ===== GET ALL (sem includes) =====

export const getAllDefeitos = createPrismaGetAllAction(
  prisma.defeito,
  "DEFEITO"
);

// ===== GET ALL WITH INCLUDES =====

export const getAllDefeitosWithIncludes = createPrismaGetAllWithIncludesAction<DefeitoWithRelations>(
  async (params) => {
    const {
      where = {},
      orderBy = 'codigoSap',
      orderDir = 'asc',
      filters = {},
    } = params;

    const finalWhere = {
      ...where,
      deletedAt: null,
      ...(filters.codigoSap && { codigoSap: { contains: filters.codigoSap[0], mode: "insensitive" } }),
      ...(filters.descricao && { descricao: { contains: filters.descricao[0], mode: "insensitive" } }),
      ...(filters.grupoId && { grupoId: { in: filters.grupoId } }),
      ...(filters.subgrupoId && { subgrupoId: { in: filters.subgrupoId } }),
    };

    const prismaOrderBy = { [orderBy]: orderDir };

    return prisma.defeito.findMany({
      where: finalWhere,
      orderBy: prismaOrderBy,
      include: {
        grupo: true,
        subgrupo: { include: { grupo: true } }
      },
    });
  },
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