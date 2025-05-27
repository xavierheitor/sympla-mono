"use server";

import { prisma } from "@/lib/db/prisma";
import { createPrismaGetAllAction } from "@/lib/server-action/actionFactory";
import { TipoNota } from "@sympla/prisma";

export const getAllNotasSaps = createPrismaGetAllAction(async () => {
  return await prisma.notasSAP.findMany({
    where: { deletedAt: null },
    orderBy: { descricao: "asc" },
  });
}, "NOTAS_SAP");

export const getAllNotasSapAnomalias = createPrismaGetAllAction(async () => {
  return await prisma.notasSAP.findMany({
    where: { deletedAt: null, tipoNota: TipoNota.AA },
    orderBy: { descricao: "asc" },
  });
}, "NOTAS_SAP_ANOMALIAS");

export const getAllNotasSapPMA = createPrismaGetAllAction(async () => {
  return await prisma.notasSAP.findMany({
    where: { deletedAt: null, tipoNota: TipoNota.TS },
    orderBy: { descricao: "asc" },
    include: {
      equipamento: true,
      centroTrabalho: true,
      kpi: {
        include: {
          tipoManutencao: true,
        },
      },
      regional: true,
    },
  });
}, "NOTAS_SAP_PMA");
