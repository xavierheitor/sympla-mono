"use server";

import { prisma } from "@/lib/db/prisma";
import { createPrismaGetAllAction } from "@/lib/server-action/actionFactory";

export const getAllAprModeloTipoAtividadeRelationWithIncludes =
  createPrismaGetAllAction(async () => {
    return await prisma.aprModeloTipoAtividadeRelation.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: "desc" },
      include: {
        modelo: true,
        tipoAtividade: true,
      },
    });
  }, "APR_MODELO_TIPO_ATIVIDADE_RELATION");
