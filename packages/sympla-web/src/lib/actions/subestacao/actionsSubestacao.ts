"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaGetAllWithIncludesAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { subestacaoFormSchema, subestacaoLoteSchema, SubestacaoWithRegional } from "./schema";
import {
  CategoriaSubestacao,
  PropriedadeSubestacao,
  TensaoSubestacao,
} from "@sympla/prisma";
import { logger } from "@/lib/utils/logger";
import { buildPrismaOrderBy } from "@/lib/server-action/prismaOrderHelper";

// ===== CRUD principal (factory padrão) =====

export const createSubestacao = createPrismaCreateAction(
  subestacaoFormSchema,
  async (data) => {
    return prisma.subestacao.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "SUBESTACAO"
);

export const updateSubestacao = createPrismaUpdateAction(
  subestacaoFormSchema,
  async (data) => {
    return prisma.subestacao.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "SUBESTACAO"
);

export const deleteSubestacao = createPrismaDeleteAction(
  async (id, session) => {
    return prisma.subestacao.update({
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

// ===== Get all (sem includes) =====
export const getAllSubestacoes = createPrismaGetAllAction(
  prisma.subestacao,
  "SUBESTACAO"
);

// ===== Get all (com includes de regionais) =====
export const getAllSubestacoesWithRegionais = createPrismaGetAllWithIncludesAction<SubestacaoWithRegional>(
  async (params) => {
    const {
      where = {},
      orderBy = 'nome',
      orderDir = 'asc',

      filters = {}
    } = params;

    const finalWhere = {
      ...where,
      deletedAt: null,
      ...(filters.nome && { nome: { contains: filters.nome[0], mode: "insensitive" } }),
      ...(filters.sigla && { sigla: { contains: filters.sigla[0], mode: "insensitive" } }),
      ...(filters.codigoSap && { codigoSap: { contains: filters.codigoSap[0], mode: "insensitive" } }),
      ...(filters.propriedade && { propriedade: { in: filters.propriedade } }),
      ...(filters.categoria && { categoria: { in: filters.categoria } }),
      ...(filters.tensao && { tensao: { in: filters.tensao } }),
      ...(filters.regionalId && { regionalId: { in: filters.regionalId } }),
    };

    const prismaOrderBy = buildPrismaOrderBy(orderBy, orderDir);

    return prisma.subestacao.findMany({
      where: finalWhere,
      orderBy: prismaOrderBy,
      include: { regional: true },
    });
  },
  "SUBESTACAO"
);

// ===== Cadastro em lote (mantido manual) =====
export const createManySubestacoes = async (data: unknown) => {
  const parsed = subestacaoLoteSchema.parse(data);

  const siglas = parsed.map((item) => item.sigla);
  const regionais = parsed.map((item) => item.regionalId);

  const existentes = await prisma.subestacao.findMany({
    where: { sigla: { in: siglas }, regionalId: { in: regionais } },
    select: { sigla: true, regionalId: true },
  });

  const existentesSet = new Set(
    existentes.map((e) => `${e.sigla}-${e.regionalId}`)
  );

  const novos = parsed.filter(
    (item) => !existentesSet.has(`${item.sigla}-${item.regionalId}`)
  );

  if (novos.length === 0) {
    console.log("🚫 Nenhuma subestação nova para cadastrar.");
    return;
  }

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
      createdBy: "system",
    })),
  });

  console.log(`✅ ${novos.length} subestações cadastradas com sucesso.`);
};

// ===== Enums =====

function enumToOptions<T extends object>(enumObj: T) {
  return Object.entries(enumObj).map(([key, value]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1).toLowerCase(),
    value,
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
    input: {},
  });

  return data;
}