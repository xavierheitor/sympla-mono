"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaGetAllAction,
  createPrismaSetManyRelationAction,
} from "@/lib/server-action/actionFactory";
import { z } from "zod";
import { tipoAtividadeKpiFormSchema } from "./schema";

// ========== SCHEMA DE ENTRADA MULTI RELATION ==========
const inputSchema = z.object({
  tipoAtividadeId: z.string().min(1),
  kpiIds: z.array(z.string().min(1)),
});

// ========== CREATE (individual) ==========
export const createTipoAtividadeKpi = createPrismaCreateAction(
  tipoAtividadeKpiFormSchema,
  async (data) => {
    return await prisma.tipoAtividadeKpi.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "TIPO_ATIVIDADE_KPI"
);

// ========== GET ALL ==========
export const getAllTipoAtividadeKpi = createPrismaGetAllAction(
  prisma.tipoAtividadeKpi,
  "TIPO_ATIVIDADE_KPI"
);

// ========== GET ONLY KPI IDs ==========
export async function getKpisByTipoAtividade(tipoAtividadeId: string): Promise<string[]> {
  const registros = await prisma.tipoAtividadeKpi.findMany({
    where: {
      tipoAtividadeId,
      deletedAt: null,
    },
    select: {
      kpiId: true,
    },
  });

  return registros.map((r) => r.kpiId);
}

// ========== SET MULTIPLE RELATIONS COM FACTORY ==========
export const setTipoAtividadeKpi = createPrismaSetManyRelationAction(
  inputSchema,
  {
    entityName: "TIPO_ATIVIDADE_KPI",
    deleteFn: async (tipoAtividadeId, userId, now) => {
      await prisma.tipoAtividadeKpi.updateMany({
        where: { tipoAtividadeId },
        data: {
          deletedAt: now,
          deletedBy: userId,
        },
      });
    },
    createFn: async (tipoAtividadeId, kpiIds, userId) => {
      await prisma.tipoAtividadeKpi.createMany({
        data: kpiIds.map((kpiId) => ({
          tipoAtividadeId,
          kpiId,
          createdBy: userId,
        })),
      });
    },
    getParentId: (input) => input.tipoAtividadeId,
    getChildIds: (input) => input.kpiIds,
  }
);