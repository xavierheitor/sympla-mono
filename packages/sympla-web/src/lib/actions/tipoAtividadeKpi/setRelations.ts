// src/lib/actions/tipoAtividadeKpi/setRelations.ts
"use server";

import { prisma } from "@/lib/db/prisma";
import { authOptions } from "@/lib/utils/auth.config";
import { getServerSession } from "next-auth";
import { z } from "zod";

const inputSchema = z.object({
  tipoAtividadeId: z.string().min(1),
  kpiIds: z.array(z.string().min(1)),
});

export const setTipoAtividadeKpi = async (input: unknown) => {
  const { tipoAtividadeId, kpiIds } = inputSchema.parse(input);

  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    throw new Error("Usuário não autenticado.");
  }

  await prisma.tipoAtividadeKpi.deleteMany({
    where: { tipoAtividadeId },
  });

  if (kpiIds.length > 0) {
    await prisma.tipoAtividadeKpi.createMany({
      data: kpiIds.map((kpiId) => ({
        tipoAtividadeId,
        kpiId,
        createdBy: session.user.id,
      })),
    });
  }

  return { success: true };
};
