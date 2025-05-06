// src/lib/actions/distribuidora/create.ts
"use server";

import { prisma } from "@/lib/db/prisma";
import { z } from "zod";

const schema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  descricao: z.string().optional(),
  codigoSap: z.string().optional(),
});

export default async function createDistribuidora(data: unknown) {
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    console.error("Erro de validação:", parsed.error.flatten());
    return {
      success: false,
      error: "Dados inválidos",
    };
  }

  const { nome, descricao, codigoSap } = parsed.data;

  try {
    const nova = await prisma.distribuidora.create({
      data: {
        nome,
        descricao,
        codigoSap,
        createdBy: "1",
      },
    });
    return { success: true, data: nova };
  } catch (error) {
    console.error("Erro ao criar distribuidora:", error);
    return {
      success: false,
      error: "Erro ao salvar distribuidora",
    };
  }
}
