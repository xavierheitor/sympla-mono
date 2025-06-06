"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { kpiFormSchema } from "./schema";

export const createKpi = createPrismaCreateAction(
  kpiFormSchema,
  async (data) => {
    return await prisma.kpi.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "KPI"
);

export const updateKpi = createPrismaUpdateAction(
  kpiFormSchema,
  async (data) => {
    return await prisma.kpi.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "KPI"
);

export const deleteKpi = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.kpi.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.kpi,
      modelName: "Kpi",
    },
    entityName: "KPI",
  }
);

export const getAllKpisWithIncludes = createPrismaGetAllAction(
  async (filter) => {
    return await prisma.kpi.findMany({
      where: filter,
      orderBy: { nome: "asc" },
      include: {
        tipoManutencao: true,
      },
    });
  },
  "KPI"
);

export const getAllKpis = createPrismaGetAllAction(async () => {
  return await prisma.kpi.findMany({
    where: { deletedAt: null },
    orderBy: { nome: "asc" },
  });
}, "KPI");
