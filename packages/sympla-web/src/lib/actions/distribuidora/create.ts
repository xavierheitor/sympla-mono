"use server";

import { prisma } from "@/lib/db/prisma";
import { createPrismaCreateAction } from "@/lib/server-action/actionFactory";
import { distribuidoraFormSchema } from "./distribuidoraFormData";

export const createDistribuidora = createPrismaCreateAction(
  distribuidoraFormSchema,
  async (data) => {
    return await prisma.distribuidora.create({
      data: {
        ...data,
        createdBy: data.createdBy.toString(), // 🔥 Aqui usa o id da sessão
      },
    });
  },
  "DISTRIBUIDORA"
);
