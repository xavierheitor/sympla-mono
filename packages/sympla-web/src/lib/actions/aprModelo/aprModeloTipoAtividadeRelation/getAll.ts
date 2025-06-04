"use server";

import { prisma } from "@/lib/db/prisma";
import { createPrismaGetAllAction } from "@/lib/server-action/actionFactory";

export const getAllAprModeloTipoAtividadeRelation = createPrismaGetAllAction(
  async () => {
    return await prisma.aprModeloTipoAtividadeRelation.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: "desc" },
    });
  },
  "APR_MODELO_TIPO_ATIVIDADE_RELATION"
);

export async function getAllTipoAtividadesByAprModelo(modeloId: string) {
  const registros = await prisma.aprModeloTipoAtividadeRelation.findMany({
    where: {
      modeloId,
      deletedAt: null,
    },
    select: {
      tipoAtividadeId: true,
    },
  });

  return registros.map((r) => r.tipoAtividadeId);
}
