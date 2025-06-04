"use server";

import { prisma } from "@/lib/db/prisma";
import { createPrismaGetAllAction } from "@/lib/server-action/actionFactory";

export const getAllAprModelos = createPrismaGetAllAction(async () => {
  return await prisma.aprModelo.findMany({
    where: { deletedAt: null },
    orderBy: { nome: "asc" },
  });
}, "APR_MODELO");
