// src/lib/actions/distribuidora/update.ts
"use server";

import { prisma } from "@/lib/db/prisma";
import { z } from "zod";

const schema = z.object({
  id: z.string().min(1, "ID é obrigatório"),
  nome: z.string().min(1, "Nome é obrigatório"),
  descricao: z.string().optional(),
  codigoSap: z.string().optional(),
});

export default async function updateDistribuidora(data: unknown) {
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    console.error("Erro de validação:", parsed.error.flatten());
    return {
      success: false,
      error: "Dados inválidos",
    };
  }

  const { id, nome, descricao, codigoSap } = parsed.data;

  try {
    const atualizada = await prisma.distribuidora.update({
      where: { id },
      data: {
        nome,
        descricao,
        codigoSap,
        updatedBy: "1", // ajuste conforme seu controle de sessão/autenticação
      },
    });
    return { success: true, data: atualizada };
  } catch (error) {
    console.error("Erro ao atualizar distribuidora:", error);
    return {
      success: false,
      error: "Erro ao atualizar distribuidora",
    };
  }
}
