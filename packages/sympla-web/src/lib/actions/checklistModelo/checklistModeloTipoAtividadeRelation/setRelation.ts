"use server";

import { authOptions } from "@/lib/utils/auth.config";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { prisma } from "@/lib/db/prisma";

const inputSchema = z.object({
  modeloId: z.string().min(1),
  tipoAtividadeIds: z.array(z.string().min(1)),
});

export const setTipoAtividadesDoModelo = async (input: unknown) => {
  const { modeloId, tipoAtividadeIds } = inputSchema.parse(input);
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    throw new Error("Usuário não autenticado.");
  }

  // Remove vínculos antigos
  await prisma.checklistModeloTipoAtividadeRelation.deleteMany({
    where: { modeloId },
  });

  // Cria novos vínculos
  if (tipoAtividadeIds.length > 0) {
    await prisma.checklistModeloTipoAtividadeRelation.createMany({
      data: tipoAtividadeIds.map((tipoAtividadeId) => ({
        modeloId,
        tipoAtividadeId,
        createdBy: session.user.id,
      })),
    });
  }

  return { success: true };
};
