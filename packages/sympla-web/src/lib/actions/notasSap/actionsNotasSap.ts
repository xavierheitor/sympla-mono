"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaUpdateAction,
  createPrismaGetAllWithIncludesAction,
} from "@/lib/server-action/actionFactory";
import { notasSapFormSchema, NotasSAPWithRelations } from "./schema";
import { TipoNota } from "@sympla/prisma";

// CRUD principal

export const createNotasSap = createPrismaCreateAction(
  notasSapFormSchema,
  async (data) =>
    prisma.notasSAP.create({
      data: { ...data, createdBy: data.createdBy?.toString() || "" },
    }),
  "NOTAS_SAP"
);

export const updateNotasSap = createPrismaUpdateAction(
  notasSapFormSchema,
  async (data) =>
    prisma.notasSAP.update({
      where: { id: data.id },
      data: { ...data, updatedBy: data.updatedBy?.toString() || "" },
    }),
  "NOTAS_SAP"
);

export const deleteNotasSap = createPrismaDeleteAction(
  async (id, session) =>
    prisma.notasSAP.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy: session.user.id.toString() },
    }),
  {
    defaultCheck: { prismaModel: prisma.notasSAP, modelName: "NotasSAP" },
    entityName: "NOTAS_SAP",
  }
);

// Novo getAllNotasSapPMA no padrão
export const getAllNotasSapPMA = createPrismaGetAllWithIncludesAction<NotasSAPWithRelations>(
  async (params) => {
    const {
      where = {},
      orderBy = 'dataInicioPlan',
      orderDir = 'asc',
      filters = {}
    } = params;

    const finalWhere = {
      ...where,
      deletedAt: null,
      tipoNota: TipoNota.TS,
      ...(filters.numeroNota && { numeroNota: { contains: filters.numeroNota[0], mode: "insensitive" } }),
      ...(filters.descricao && { descricao: { contains: filters.descricao[0], mode: "insensitive" } }),
      ...(filters.status && { status: { in: filters.status } }),
      ...(filters.regionalId && { regionalId: { in: filters.regionalId } }),
      ...(filters.equipamentoId && { equipamentoId: { in: filters.equipamentoId } }),
      ...(filters.kpiId && { kpiId: { in: filters.kpiId } }),
    };

    const prismaOrderBy = { [orderBy]: orderDir };

    return prisma.notasSAP.findMany({
      where: finalWhere,
      orderBy: prismaOrderBy,
      include: {
        equipamento: true,
        centroTrabalho: true,
        kpi: { include: { tipoManutencao: true } },
        regional: true,
      },
    });
  },
  "NOTAS_SAP_PMA"
);