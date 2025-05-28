"use server";

import { prisma } from "@/lib/db/prisma";
import { createPrismaCreateAction } from "@/lib/server-action/actionFactory";
import { distribuidoraFormSchema } from "./distribuidoraFormData";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth.config"; // <-- seu arquivo de configuração do NextAuth

export const createDistribuidora = createPrismaCreateAction(
  distribuidoraFormSchema,
  async (data) => {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      throw new Error("Usuário não autenticado.");
    }

    return await prisma.distribuidora.create({
      data: {
        ...data,
        createdBy: session.user.id, // 🔥 Aqui usa o id da sessão
      },
    });
  },
  "DISTRIBUIDORA"
);
