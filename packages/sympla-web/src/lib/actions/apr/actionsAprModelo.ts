"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import {
  aprModeloFormSchema,
  aprModeloTipoAtividadeRelationFormSchema,
  inputSchema,
} from "./schema";
import { authOptions } from "@/lib/utils/auth.config";
import { getServerSession } from "next-auth";

export const createAprModelo = createPrismaCreateAction(
  aprModeloFormSchema,
  async (data) => {
    return await prisma.aprModelo.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "APR_MODELO"
);

export const updateAprModelo = createPrismaUpdateAction(
  aprModeloFormSchema,
  async (data) => {
    return await prisma.aprModelo.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "APR_MODELO"
);

export const deleteAprModelo = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.aprModelo.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.aprModelo,
      modelName: "AprModelo",
    },
    entityName: "APR_MODELO",
  }
);

export const getAllAprModelos = createPrismaGetAllAction(async () => {
  return await prisma.aprModelo.findMany({
    where: { deletedAt: null },
    orderBy: { nome: "asc" },
  });
}, "APR_MODELO");

export const getAllAprModelosWithIncludes = createPrismaGetAllAction(
  async () => {
    return await prisma.aprModelo.findMany({
      where: { deletedAt: null },
      orderBy: { nome: "asc" },
      include: {},
    });
  },
  "APR_MODELO"
);

export const setTipoAtividadesDoModelo = async (input: unknown) => {
  const { modeloId, tipoAtividadeIds } = inputSchema.parse(input);
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    throw new Error("Usuário não autenticado.");
  }

  // Remove vínculos antigos
  await prisma.aprModeloTipoAtividadeRelation.deleteMany({
    where: { modeloId },
  });

  // Cria novos vínculos
  if (tipoAtividadeIds.length > 0) {
    await prisma.aprModeloTipoAtividadeRelation.createMany({
      data: tipoAtividadeIds.map((tipoAtividadeId) => ({
        modeloId,
        tipoAtividadeId,
        createdBy: session.user.id,
      })),
    });
  }

  return { success: true };
};

export const getAllAprModeloTipoAtividadeRelationWithIncludes =
  createPrismaGetAllAction(async () => {
    return await prisma.aprModeloTipoAtividadeRelation.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: "desc" },
      include: {
        modelo: true,
        tipoAtividade: true,
      },
    });
  }, "APR_MODELO_TIPO_ATIVIDADE_RELATION");

export const getAllAprModeloTipoAtividadeRelation = createPrismaGetAllAction(
  async () => {
    return await prisma.aprModeloTipoAtividadeRelation.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: "desc" },
    });
  },
  "APR_MODELO_TIPO_ATIVIDADE_RELATION"
);

export async function getAllTipoAtividadesByAprModelo(modeloId: string) {
  const registros = await prisma.aprModeloTipoAtividadeRelation.findMany({
    where: {
      modeloId,
      deletedAt: null,
    },
    select: {
      tipoAtividadeId: true,
    },
  });

  return registros.map((r) => r.tipoAtividadeId);
}

export const createAprModeloTipoAtividadeRelation = createPrismaCreateAction(
  aprModeloTipoAtividadeRelationFormSchema,
  async (data) => {
    return await prisma.aprModeloTipoAtividadeRelation.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "APR_MODELO_TIPO_ATIVIDADE_RELATION"
);
