"use server";

import { prisma } from "@/lib/db/prisma";
import { z } from "zod";

const createManyDefeitoSchema = z.array(
  z.object({
    codigoSap: z.string().min(1),
    descricao: z.string().min(1),
    grupoId: z.string().min(1),
    subgrupoId: z.string().min(1),
    prioridade: z.string().optional(),
    acaoRecomendada: z.string().optional(),
    custeioOuInvestimento: z.string().optional(),
    equipe: z.string().optional(),
  })
);

export async function createManyDefeitos(
  input: z.infer<typeof createManyDefeitoSchema>
) {
  const data = createManyDefeitoSchema.parse(input);

  await prisma.defeito.createMany({
    data: data.map((d) => ({
      ...d,
      createdBy: "user", // opcional: ajuste conforme seu contexto de sessão
    })),
  });
}
