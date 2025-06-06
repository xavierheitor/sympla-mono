// src/lib/actions/tipoAtividadeKpi/setRelations.ts
"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaGetAllAction,
} from "@/lib/server-action/actionFactory";
import { authOptions } from "@/lib/utils/auth.config";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { tipoAtividadeKpiFormSchema } from "./schema";

const inputSchema = z.object({
  tipoAtividadeId: z.string().min(1),
  kpiIds: z.array(z.string().min(1)),
});

export const setTipoAtividadeKpi = async (input: unknown) => {
  const { tipoAtividadeId, kpiIds } = inputSchema.parse(input);

  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    throw new Error("Usuário não autenticado.");
  }

  await prisma.tipoAtividadeKpi.deleteMany({
    where: { tipoAtividadeId },
  });

  if (kpiIds.length > 0) {
    await prisma.tipoAtividadeKpi.createMany({
      data: kpiIds.map((kpiId) => ({
        tipoAtividadeId,
        kpiId,
        createdBy: session.user.id,
      })),
    });
  }

  return { success: true };
};

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
