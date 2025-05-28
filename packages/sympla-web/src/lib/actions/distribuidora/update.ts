"use server";

import { prisma } from "@/lib/db/prisma";
import { createPrismaUpdateAction } from "@/lib/server-action/actionFactory";
import { distribuidoraFormSchema } from "./distribuidoraFormData";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth.config";

export const updateDistribuidora = createPrismaUpdateAction(
  distribuidoraFormSchema,
  async (data) => {
    if (!data.id) {
      throw new Error("ID é obrigatório para atualização");
    }

    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      throw new Error("Usuário não autenticado.");
    }

    return await prisma.distribuidora.update({
      where: { id: data.id.toString() },
      data: {
        ...data,
        updatedBy: session.user.id, // 🔥 ID do usuário que atualizou
        updatedAt: new Date(), // 🔄 opcional, mas recomendado
      },
    });
  },
  "DISTRIBUIDORA"
);
