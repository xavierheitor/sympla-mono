"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaGetByIdAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { distribuidoraFormSchema } from "./schema";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth.config";

export const createDistribuidora = createPrismaCreateAction(
  distribuidoraFormSchema,
  async (data) => {
    return await prisma.distribuidora.create({
      data: {
        ...data,
        createdBy: data.createdBy.toString(), // 🔥 Aqui usa o id da sessão
      },
    });
  },
  "DISTRIBUIDORA"
);

export const updateDistribuidora = createPrismaUpdateAction(
  distribuidoraFormSchema,
  async (data) => {
    if (!data.id) {
      throw new Error("ID é obrigatório para atualização");
    }

    return await prisma.distribuidora.update({
      where: { id: data.id.toString() },
      data: {
        ...data,
        updatedBy: data.updatedBy.toString(), // � Aqui usa o id da sessão
      },
    });
  },
  "DISTRIBUIDORA"
);

export const deleteDistribuidora = createPrismaDeleteAction(
  async (id) => {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      throw new Error("Usuário não autenticado.");
    }

    return await prisma.distribuidora.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id,
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.distribuidora,
      modelName: "Distribuidora",
    },
    entityName: "DISTRIBUIDORA",
  }
);

export const getAllDistribuidoras = createPrismaGetAllAction(async (filter) => {
  return prisma.distribuidora.findMany({
    orderBy: { nome: "asc" },
    where: filter,
  });
}, "DISTRIBUIDORA");

export const getDistribuidoraById = createPrismaGetByIdAction(async (id) => {
  return await prisma.distribuidora.findUniqueOrThrow({
    where: {
      id: id.toString(),
      deletedAt: null,
    },
  });
}, "DISTRIBUIDORA");
