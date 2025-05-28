"use server";

import { prisma } from "@/lib/db/prisma";
import { createPrismaUpdateAction } from "@/lib/server-action/actionFactory";
import { aprModeloTipoAtividadeRelationFormSchema } from "./aprModeloTipoAtividadeRelationFormSchema";

export const updateAprModeloTipoAtividadeRelation = createPrismaUpdateAction(
  aprModeloTipoAtividadeRelationFormSchema,
  async (data) => {
    return await prisma.aprModeloTipoAtividadeRelation.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "APR_MODELO_TIPO_ATIVIDADE_RELATION"
);
