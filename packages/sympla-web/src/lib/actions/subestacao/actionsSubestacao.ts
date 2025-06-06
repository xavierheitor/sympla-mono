"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { subestacaoFormSchema, subestacaoLoteSchema } from "./schema";
import {
  CategoriaSubestacao,
  PropriedadeSubestacao,
  TensaoSubestacao,
} from "@sympla/prisma";
import { logger } from "@/lib/utils/logger";

export const createSubestacao = createPrismaCreateAction(
  subestacaoFormSchema,
  async (data) => {
    return await prisma.subestacao.create({
      data: {
        ...data,
        createdBy: data.createdBy.toString(),
      },
    });
  },
  "SUBESTACAO"
);

export const updateSubestacao = createPrismaUpdateAction(
  subestacaoFormSchema,
  async (data) => {
    return await prisma.subestacao.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy.toString(),
      },
    });
  },
  "SUBESTACAO"
);

export const deleteSubestacao = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.subestacao.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.subestacao,
      modelName: "Subestacao",
    },
    entityName: "SUBESTACAO",
  }
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

// Lista simples
export const getAllSubestacoes = createPrismaGetAllAction(async (filter) => {
  return await prisma.subestacao.findMany({
    where: filter,
    orderBy: { nome: "asc" },
  });
}, "SUBESTACAO");

// Lista com includes
export const getAllSubestacoesWithRegionais = createPrismaGetAllAction(
  async (filter) => {
    return await prisma.subestacao.findMany({
      where: filter,
      orderBy: { nome: "asc" },
      include: { regional: true },
    });
  },
  "SUBESTACAO"
);

function enumToOptions<T extends object>(enumObj: T) {
  return Object.entries(enumObj).map(([key, value]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1).toLowerCase(),
    value: value,
  }));
}

export async function getSubestacaoEnums() {
  const data = {
    propriedadeOptions: enumToOptions(PropriedadeSubestacao),
    categoriaOptions: enumToOptions(CategoriaSubestacao),
    tensaoOptions: enumToOptions(TensaoSubestacao),
  };

  logger.action("[GET] SUBESTACAO_ENUMS", {
    success: true,
    input: {}, // se quiser, pode incluir req ou session
  });

  return data;
}
