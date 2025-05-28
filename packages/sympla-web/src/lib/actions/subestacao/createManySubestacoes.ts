"use server";

import { prisma } from "@/lib/db/prisma";
import {
  CategoriaSubestacao,
  PropriedadeSubestacao,
  TensaoSubestacao,
} from "@sympla/prisma";
import { z } from "zod";

const subestacaoLoteSchema = z.array(
  z.object({
    nome: z.string().min(1),
    sigla: z.string().min(1),
    codigoSap: z.string().min(1),
    localInstalacao: z.string().min(1),
    propriedade: z.nativeEnum(PropriedadeSubestacao),
    categoria: z.nativeEnum(CategoriaSubestacao),
    tensao: z.nativeEnum(TensaoSubestacao),
    regionalId: z.string().min(1),
  })
);

export const createManySubestacoes = async (data: unknown) => {
  const parsed = subestacaoLoteSchema.parse(data);

  // 🔍 Busca todas as combinações existentes de (sigla + regionalId)
  const siglas = parsed.map((item) => item.sigla);
  const regionais = parsed.map((item) => item.regionalId);

  const existentes = await prisma.subestacao.findMany({
    where: {
      sigla: { in: siglas },
      regionalId: { in: regionais },
    },
    select: {
      sigla: true,
      regionalId: true,
    },
  });

  // 🔥 Cria um Set com chaves compostas sigla|regionalId dos que já existem
  const existentesSet = new Set(
    existentes.map((e) => `${e.sigla}-${e.regionalId}`)
  );

  // 🏗️ Filtra para inserir apenas os que não existem ainda
  const novos = parsed.filter(
    (item) => !existentesSet.has(`${item.sigla}-${item.regionalId}`)
  );

  if (novos.length === 0) {
    console.log("🚫 Nenhuma subestação nova para cadastrar.");
    return;
  }

  // 💾 Cria os que não existem
  await prisma.subestacao.createMany({
    data: novos.map((item) => ({
      nome: item.nome,
      sigla: item.sigla,
      codigoSap: item.codigoSap,
      localInstalacao: item.localInstalacao,
      propriedade: item.propriedade,
      categoria: item.categoria,
      tensao: item.tensao,
      regionalId: item.regionalId,
      createdBy: "system", // ou quem estiver logado
    })),
  });

  console.log(`✅ ${novos.length} subestações cadastradas com sucesso.`);
};
