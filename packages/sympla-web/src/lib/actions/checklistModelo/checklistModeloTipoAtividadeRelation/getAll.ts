"use server";
import { prisma } from "@/lib/db/prisma";

export async function getAllTipoAtividadesByChecklistModelo(modeloId: string) {
  const registros = await prisma.checklistModeloTipoAtividadeRelation.findMany({
    where: {
      deletedAt: null,
      modeloId,
    },
    select: {
      tipoAtividadeId: true,
    },
  });

  return registros.map((r) => r.tipoAtividadeId);
}
