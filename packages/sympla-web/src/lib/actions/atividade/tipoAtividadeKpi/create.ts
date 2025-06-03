"use server";

import { prisma } from "@/lib/db/prisma";
import { createPrismaCreateAction } from "@/lib/server-action/actionFactory";
import { tipoAtividadeKpiFormSchema } from "./tipoAtividadeKpiFormSchema";

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
