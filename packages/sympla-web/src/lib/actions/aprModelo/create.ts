"use server";

import { prisma } from "@/lib/db/prisma";
import { createPrismaCreateAction } from "@/lib/server-action/actionFactory";
import { aprModeloFormSchema } from "./aprModeloFormSchema";

export const createAprModelo = createPrismaCreateAction(
  aprModeloFormSchema,
  async (data) => {
    return await prisma.aprModelo.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "APR_MODELO"
);
