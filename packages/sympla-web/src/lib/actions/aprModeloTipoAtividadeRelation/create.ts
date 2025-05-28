"use server";

import { prisma } from "@/lib/db/prisma";
import { createPrismaCreateAction } from "@/lib/server-action/actionFactory";
import { aprModeloTipoAtividadeRelationFormSchema } from "./aprModeloTipoAtividadeRelationFormSchema";

export const createAprModeloTipoAtividadeRelation = createPrismaCreateAction(
  aprModeloTipoAtividadeRelationFormSchema,
  async (data) => {
    return await prisma.aprModeloTipoAtividadeRelation.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "APR_MODELO_TIPO_ATIVIDADE_RELATION"
);
