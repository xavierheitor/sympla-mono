"use server";

import { prisma } from "@/lib/db/prisma";
import { createPrismaGetAllAction } from "@/lib/server-action/actionFactory";

export const getAllTipoAtividadeKpi = createPrismaGetAllAction(async () => {
  return await prisma.tipoAtividadeKpi.findMany({
    where: { deletedAt: null },
    orderBy: { createdAt: "desc" },
  });
}, "TIPO_ATIVIDADE_KPI");

// src/lib/actions/tipoAtividadeKpi/getKpisByTipoAtividade.ts
export async function getKpisByTipoAtividade(tipoAtividadeId: string) {
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
