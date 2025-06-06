"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { checklistModeloFormSchema, inputSchema } from "./schema";
import { authOptions } from "@/lib/utils/auth.config";
import { getServerSession } from "next-auth";

export const createChecklistModelo = createPrismaCreateAction(
  checklistModeloFormSchema,
  async (data) => {
    return await prisma.checklistModelo.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "CHECKLIST_MODELO"
);

export const deleteChecklistModelo = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.checklistModelo.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.checklistModelo,
      modelName: "ChecklistModelo",
    },
    entityName: "CHECKLIST_MODELO",
  }
);

export const updateChecklistModelo = createPrismaUpdateAction(
  checklistModeloFormSchema,
  async (data) => {
    return await prisma.checklistModelo.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "CHECKLIST_MODELO"
);

export const getAllChecklistModelos = createPrismaGetAllAction(async () => {
  return await prisma.checklistModelo.findMany({
    where: { deletedAt: null },
    orderBy: { id: "asc" },
  });
}, "CHECKLIST_MODELO");

export const getAllChecklistModelosWithIncludes = createPrismaGetAllAction(
  async () => {
    return await prisma.checklistModelo.findMany({
      where: { deletedAt: null },
      orderBy: { nome: "asc" },
      include: {},
    });
  },
  "CHECKLIST_MODELO"
);

export const setTipoAtividadesDoModelo = async (input: unknown) => {
  const { modeloId, tipoAtividadeIds } = inputSchema.parse(input);
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    throw new Error("Usuário não autenticado.");
  }

  // Remove vínculos antigos
  await prisma.checklistModeloTipoAtividadeRelation.deleteMany({
    where: { modeloId },
  });

  // Cria novos vínculos
  if (tipoAtividadeIds.length > 0) {
    await prisma.checklistModeloTipoAtividadeRelation.createMany({
      data: tipoAtividadeIds.map((tipoAtividadeId) => ({
        modeloId,
        tipoAtividadeId,
        createdBy: session.user.id,
      })),
    });
  }

  return { success: true };
};

export async function getAllTipoAtividadesByChecklistModelo(modeloId: string) {
  const registros = await prisma.checklistModeloTipoAtividadeRelation.findMany({
    where: {
      deletedAt: null,
      modeloId,
    },
    select: {
      tipoAtividadeId: true,
    },
  });

  return registros.map((r) => r.tipoAtividadeId);
}
