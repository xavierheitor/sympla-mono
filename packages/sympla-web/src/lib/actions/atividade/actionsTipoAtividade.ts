"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaGetAllWithIncludesAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { tipoAtividadeFormSchema } from "./schema";
import { TipoAtividadeMobile } from "@sympla/prisma";
import { logger } from "@/lib/utils/logger";

// ========== CRIAÇÃO ==========
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

// ========== ATUALIZAÇÃO ==========
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

// ========== REMOÇÃO LÓGICA ==========
export const deleteTipoAtividade = createPrismaDeleteAction(
  async (id, session) => {
    const now = new Date();
    const userId = session.user.id.toString();

    // 🔁 Marca os relacionamentos com KPI como deletados
    await prisma.tipoAtividadeKpi.updateMany({
      where: { tipoAtividadeId: id },
      data: {
        deletedAt: now,
        deletedBy: userId,
      },
    });

    // 🗑 Marca o tipo de atividade como deletado
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

// ========== LISTAGEM SIMPLES ==========
export const getAllTipoAtividades = createPrismaGetAllAction(
  prisma.tipoAtividade,
  "TIPO_ATIVIDADE"
);

// ========== LISTAGEM COM RELACIONAMENTOS ==========
export const getAllTipoAtividadesWithIncludes = createPrismaGetAllWithIncludesAction(
  async () => {
    return await prisma.tipoAtividade.findMany({
      where: { deletedAt: null },
      orderBy: { nome: "asc" },
      include: {
        //includes aqui
      },
    });
  },
  "TIPO_ATIVIDADE"
);

// ========== ENUM PARA SELECT ==========
function enumToOptions<T extends object>(enumObj: T) {
  return Object.entries(enumObj).map(([key, value]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1),
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