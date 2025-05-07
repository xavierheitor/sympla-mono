"use server";

import { prisma } from "@/lib/db/prisma";
import { z } from "zod";

const schema = z.object({
  id: z.string().min(1, "ID é obrigatório"),
});

export default async function deleteDistribuidora(data: unknown) {
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    console.error("Erro de validação:", parsed.error.flatten());
    return {
      success: false,
      error: "Dados inválidos",
    };
  }

  const { id } = parsed.data;

  try {
    await prisma.distribuidora.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: "1", // opcional: ajuste com ID real do usuário
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Erro ao excluir distribuidora:", error);
    return {
      success: false,
      error: "Erro ao excluir distribuidora",
    };
  }
}
