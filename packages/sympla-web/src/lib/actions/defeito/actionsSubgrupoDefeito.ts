'use server';

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllWithIncludesAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import {
  subgrupoDefeitoEquipamentoFormSchema,
  createManySubgrupoDefeitosSchema,
  SubgrupoDefeitoEquipamentoWithRelations,
} from "./schema";
import { SubgrupoDefeitoEquipamento } from "@sympla/prisma";

// ===== CREATE =====
export const createSubgrupoDefeitoEquipamento = createPrismaCreateAction(
  subgrupoDefeitoEquipamentoFormSchema,
  async (data) =>
    prisma.subgrupoDefeitoEquipamento.create({
      data: { ...data, createdBy: data.createdBy?.toString?.() || "" },
    }),
  "SUBGRUPO_DEFEITO_EQUIPAMENTO"
);

// ===== UPDATE =====
export const updateSubgrupoDefeitoEquipamento = createPrismaUpdateAction(
  subgrupoDefeitoEquipamentoFormSchema,
  async (data) =>
    prisma.subgrupoDefeitoEquipamento.update({
      where: { id: data.id },
      data: { ...data, updatedBy: data.updatedBy?.toString?.() || "" },
    }),
  "SUBGRUPO_DEFEITO_EQUIPAMENTO"
);

// ===== DELETE =====
export const deleteSubgrupoDefeitoEquipamento = createPrismaDeleteAction(
  async (id, session) =>
    prisma.subgrupoDefeitoEquipamento.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy: session.user.id.toString() },
    }),
  {
    defaultCheck: {
      prismaModel: prisma.subgrupoDefeitoEquipamento,
      modelName: "SubgrupoDefeitoEquipamento",
    },
    entityName: "SUBGRUPO_DEFEITO_EQUIPAMENTO",
  }
);

// ===== GET ALL =====
export const getAllSubgrupoDefeitoEquipamentos = createPrismaGetAllWithIncludesAction<SubgrupoDefeitoEquipamento>(
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
      ...(filters["grupo.nome"] && {
        grupo: {
          nome: {
            in: Array.isArray(filters["grupo.nome"])
              ? filters["grupo.nome"]
              : [filters["grupo.nome"]],
          },
        },
      }),
    };
    const prismaOrderBy = { [orderBy]: orderDir };

    return prisma.subgrupoDefeitoEquipamento.findMany({
      where: finalWhere,
      orderBy: prismaOrderBy,
      include: { grupo: true },
    });
  },
  "SUBGRUPO_DEFEITO_EQUIPAMENTO"
);

// ===== GET ALL WITH INCLUDES =====
export const getAllSubgrupoDefeitoEquipamentosWithIncludes = createPrismaGetAllWithIncludesAction<SubgrupoDefeitoEquipamentoWithRelations>(
  async (params) => {
    const { where = {}, orderBy = "nome", orderDir = "asc", filters = {} } = params;

    const finalWhere = {
      ...where,
      deletedAt: null,
      ...(filters.nome && {
        nome: { contains: filters.nome[0], mode: "insensitive" },
      }),
      ...(filters["grupo.nome"] && {
        grupo: {
          nome: {
            in: Array.isArray(filters["grupo.nome"])
              ? filters["grupo.nome"]
              : [filters["grupo.nome"]],
          },
        },
      }),
    };

    const prismaOrderBy = { [orderBy]: orderDir };


    return prisma.subgrupoDefeitoEquipamento.findMany({
      where: finalWhere,
      orderBy: prismaOrderBy,
      include: { grupo: true },
    });
  },
  "SUBGRUPO_DEFEITO_EQUIPAMENTO"
);


// ===== CREATE MANY (Lote) =====
export const createManySubgrupoDefeitos = async (rawInput: unknown) => {
  const parsed = createManySubgrupoDefeitosSchema.parse(rawInput);

  const codigosGrupo = [...new Set(parsed.map((item) => item.grupoCodigo))];

  const grupos = await prisma.grupoDefeitoEquipamento.findMany({
    where: { codigo: { in: codigosGrupo } },
  });

  const codigoToId = new Map(grupos.map((g) => [g.codigo, g.id]));

  const subgruposValidados = parsed
    .map((item) => {
      const grupoId = codigoToId.get(item.grupoCodigo);
      if (!grupoId) return null;
      return {
        nome: item.nome,
        grupoId,
      };
    })
    .filter(Boolean) as { nome: string; grupoId: string }[];

  const existentes = await prisma.subgrupoDefeitoEquipamento.findMany({
    where: {
      OR: subgruposValidados.map((item) => ({
        nome: item.nome,
        grupoId: item.grupoId,
      })),
    },
  });

  const existentesSet = new Set(
    existentes.map((e) => `${e.nome}-${e.grupoId}`)
  );

  const novos = subgruposValidados.filter(
    (item) => !existentesSet.has(`${item.nome}-${item.grupoId}`)
  );

  if (novos.length === 0) {
    console.log('🚫 Nenhum subgrupo novo para cadastrar.');
    return;
  }

  await prisma.subgrupoDefeitoEquipamento.createMany({
    data: novos.map((item) => ({
      nome: item.nome,
      grupoId: item.grupoId,
      createdBy: 'system',
    })),
    skipDuplicates: true,
  });
};