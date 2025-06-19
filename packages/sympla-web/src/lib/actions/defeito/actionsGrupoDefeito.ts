// === Correções aplicadas para createManyGrupoDefeitos ===

"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllWithIncludesAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import {
  createManyGrupoDefeitosSchema,
  grupoDefeitoEquipamentoFormSchema,
  GrupoDefeitoEquipamentoWithRelations,
} from "./schema";

// ===== CREATE =====

export const createGrupoDefeitoEquipamento = createPrismaCreateAction(
  grupoDefeitoEquipamentoFormSchema,
  async (data) =>
    prisma.grupoDefeitoEquipamento.create({
      data: { ...data, createdBy: data.createdBy?.toString?.() || "" },
    }),
  "GRUPO_DEFEITO_EQUIPAMENTO"
);

// ===== UPDATE =====

export const updateGrupoDefeitoEquipamento = createPrismaUpdateAction(
  grupoDefeitoEquipamentoFormSchema,
  async (data) =>
    prisma.grupoDefeitoEquipamento.update({
      where: { id: data.id },
      data: { ...data, updatedBy: data.updatedBy?.toString?.() || "" },
    }),
  "GRUPO_DEFEITO_EQUIPAMENTO"
);

// ===== DELETE =====

export const deleteGrupoDefeitoEquipamento = createPrismaDeleteAction(
  async (id, session) =>
    prisma.grupoDefeitoEquipamento.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy: session.user.id.toString() },
    }),
  {
    defaultCheck: {
      prismaModel: prisma.grupoDefeitoEquipamento,
      modelName: "GrupoDefeitoEquipamento",
    },
    entityName: "GRUPO_DEFEITO_EQUIPAMENTO",
  }
);

// ===== GET ALL com paginação e filtros =====

export const getAllGrupoDefeitoEquipamentos = createPrismaGetAllWithIncludesAction<GrupoDefeitoEquipamentoWithRelations>(
  async (params) => {
    const {
      where = {},
      orderBy = "nome",
      orderDir = "asc",
      filters = {},
    } = params;

    const finalWhere = {
      ...where,
      deletedAt: null,
      ...(filters.nome && {
        nome: { contains: filters.nome[0], mode: "insensitive" },
      }),
      ...(filters.codigo && {
        codigo: { contains: filters.codigo[0], mode: "insensitive" },
      }),
    };

    const prismaOrderBy = { [orderBy]: orderDir };

    return prisma.grupoDefeitoEquipamento.findMany({
      where: finalWhere,
      orderBy: prismaOrderBy,
      include: {
        subgrupos: true,
      },
    });
  },
  "GRUPO_DEFEITO_EQUIPAMENTO"
);

// ===== CREATE MANY corrigido =====

export const createManyGrupoDefeitos = async (rawInput: unknown) => {
  const parsed = createManyGrupoDefeitosSchema.parse(rawInput);

  const nome = parsed.map((item) => item.nome);
  const codigo = parsed.map((item) => item.codigo);

  const existentes = await prisma.grupoDefeitoEquipamento.findMany({
    where: { nome: { in: nome }, codigo: { in: codigo } },
  });

  const existentesSet = new Set(existentes.map((e) => `${e.nome}-${e.codigo}`));

  const novos = parsed.filter((item) => !existentesSet.has(`${item.nome}-${item.codigo}`));

  if (novos.length === 0) {
    console.log("🚫 Nenhum grupo de defeito novo para cadastrar.");
    return;
  }

  await prisma.grupoDefeitoEquipamento.createMany({
    data: novos.map((item) => ({
      nome: item.nome,
      codigo: item.codigo,
      createdBy: "system",
    })),
    skipDuplicates: true,
  });

};