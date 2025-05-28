"use server";

import { prisma } from "@/lib/db/prisma";
import { createPrismaDeleteAction } from "@/lib/server-action/actionFactory";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth.config";

export const deleteDistribuidora = createPrismaDeleteAction(
  async (id) => {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      throw new Error("Usuário não autenticado.");
    }

    return await prisma.distribuidora.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id,
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.distribuidora,
      modelName: "Distribuidora",
    },
    entityName: "DISTRIBUIDORA",
  }
);
