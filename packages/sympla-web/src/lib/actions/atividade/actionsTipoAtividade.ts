"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { tipoAtividadeFormSchema } from "./schema";
import { TipoAtividadeMobile } from "@sympla/prisma";
import { logger } from "@/lib/utils/logger";

export const createTipoAtividade = createPrismaCreateAction(
  tipoAtividadeFormSchema,
  async (data) => {
    return await prisma.tipoAtividade.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "TIPO_ATIVIDADE"
);

export const deleteTipoAtividade = createPrismaDeleteAction(
  async (id, session) => {
    const now = new Date();
    const userId = session.user.id.toString();

    // 🔁 Marca os relacionamentos como deletados (soft delete)
    await prisma.tipoAtividadeKpi.updateMany({
      where: { tipoAtividadeId: id },
      data: {
        deletedAt: now,
        deletedBy: userId,
      },
    });

    // 🗑 Marca o tipo de atividade como deletado (soft delete)
    return await prisma.tipoAtividade.update({
      where: { id },
      data: {
        deletedAt: now,
        deletedBy: userId,
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.tipoAtividade,
      modelName: "TipoAtividade",
    },
    entityName: "TIPO_ATIVIDADE",
  }
);

export const getAllTipoAtividades = createPrismaGetAllAction(async () => {
  return await prisma.tipoAtividade.findMany({
    where: { deletedAt: null },
    orderBy: { nome: "asc" },
  });
}, "TIPO_ATIVIDADE");

export const updateTipoAtividade = createPrismaUpdateAction(
  tipoAtividadeFormSchema,
  async (data) => {
    return await prisma.tipoAtividade.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "TIPO_ATIVIDADE"
);

export const getAllTipoAtividadesWithIncludes = createPrismaGetAllAction(
  async () => {
    return await prisma.tipoAtividade.findMany({
      where: { deletedAt: null },
      orderBy: { nome: "asc" },
      include: {
        // kpis: true,
      },
    });
  },
  "TIPO_ATIVIDADE"
);

function enumToOptions<T extends object>(enumObj: T) {
  return Object.entries(enumObj).map(([key, value]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1), // Mantém camelCase com a primeira letra maiúscula
    value,
  }));
}

export async function getAllTipoAtividadeEnums() {
  const result = enumToOptions(TipoAtividadeMobile);

  logger.action("[LIST] TIPO_ATIVIDADE_MOBILE_ENUM", {
    input: {},
    success: true,
  });

  return result;
}
