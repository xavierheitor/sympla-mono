"use server";

import { prisma } from "@/lib/db/prisma";
import { createPrismaDeleteAction } from "@/lib/server-action/actionFactory";

export const deleteTipoAtividade = createPrismaDeleteAction(
  async (id, session) => {
    const now = new Date();
    const userId = session.user.id.toString();

    // 🔁 Marca os relacionamentos como deletados (soft delete)
    await prisma.tipoAtividadeKpi.updateMany({
      where: { tipoAtividadeId: id },
      data: {
        deletedAt: now,
        deletedBy: userId,
      },
    });

    // 🗑 Marca o tipo de atividade como deletado (soft delete)
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
