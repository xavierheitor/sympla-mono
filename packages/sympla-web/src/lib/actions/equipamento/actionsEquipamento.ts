'use server';

import { prisma } from "@/lib/db/prisma";
import { z } from "zod";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaGetAllWithIncludesAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { equipamentoFormSchema, EquipamentoWithRelations, linhaSchema } from "./schema";

// CREATE
export const createEquipamento = createPrismaCreateAction(
  equipamentoFormSchema,
  async (data) => {
    return prisma.equipamento.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "EQUIPAMENTO"
);

// UPDATE
export const updateEquipamento = createPrismaUpdateAction(
  equipamentoFormSchema,
  async (data) => {
    return prisma.equipamento.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "EQUIPAMENTO"
);

// DELETE
export const deleteEquipamento = createPrismaDeleteAction(
  async (id, session) => {
    return prisma.equipamento.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.equipamento,
      modelName: "Equipamento",
    },
    entityName: "EQUIPAMENTO",
  }
);

// GET ALL paginado simples
export const getAllEquipamentos = createPrismaGetAllAction(
  prisma.equipamento,
  "EQUIPAMENTO",
  ["nome", "descricao"]
);

// GET ALL paginado com includes e filtros avançados
export const getAllEquipamentosWithIncludes = createPrismaGetAllWithIncludesAction<EquipamentoWithRelations>(
  async (params) => {
    const {
      where = {},
      orderBy = "nome",
      orderDir = "asc",
      filters = {}
    } = params;

    console.log("🧪 [Equipamento] Filtros recebidos:", filters);

    const filtroNome = filters.nome?.[0];
    const filtroSubestacaoIds = Array.isArray(filters.subestacaoId)
      ? filters.subestacaoId.filter(Boolean)
      : [];
    const filtroGrupoIds = Array.isArray(filters.grupoDefeitoCodigo)
      ? filters.grupoDefeitoCodigo.filter(Boolean)
      : [];

    console.log("🧪 [Equipamento] Nome (filtro):", filtroNome);
    console.log("🧪 [Equipamento] SubestacaoId (filtrado):", filtroSubestacaoIds);
    console.log("🧪 [Equipamento] GrupoDefeitoCodigo (filtrado):", filtroGrupoIds);

    const finalWhere = {
      ...where,
      deletedAt: null,
      ...(filtroNome && {
        nome: { contains: filtroNome, mode: 'insensitive' },
      }),
      ...(filtroSubestacaoIds.length > 0 && {
        subestacaoId: { in: filtroSubestacaoIds },
      }),
      ...(filtroGrupoIds.length > 0 && {
        grupoDefeitoCodigo: { in: filtroGrupoIds },
      }),
    };

    console.log("🔍 [Equipamento] Filtro final aplicado ao Prisma:", finalWhere);

    const prismaOrderBy = { [orderBy]: orderDir };

    const result = await prisma.equipamento.findMany({
      where: finalWhere,
      orderBy: prismaOrderBy,
      include: {
        subestacao: {
          include: { regional: true }
        }
      }
    });

    console.log(`📦 [Equipamento] ${result.length} registros encontrados`);

    return result;
  },
  "EQUIPAMENTO"
);

// lib/actions/equipamento/createManyEquipamentosFromExcel.ts

export async function createManyEquipamentosFromExcel(rawData: unknown) {
  const linhas = z.array(linhaSchema).parse(rawData);

  const siglasUnicas = [...new Set(linhas.map((l) => l.SE.trim()))];

  const subestacoes = await prisma.subestacao.findMany({
    where: {
      sigla: { in: siglasUnicas },
    },
    select: {
      id: true,
      sigla: true,
    },
  });

  const siglaToId = Object.fromEntries(
    subestacoes.map((s) => [s.sigla.trim(), s.id])
  );

  const registrosValidos = linhas
    .map((linha, index) => {
      const sigla = linha.SE.trim();
      const subestacaoId = siglaToId[sigla];

      if (!subestacaoId) {
        console.warn(`⚠️ Linha ${index + 1}: Subestação "${sigla}" não encontrada`);
        return null;
      }

      const nome = linha.EQUIPAMENTOS.trim();
      const descricao = nome;
      const grupoDefeitoCodigo = linha['GRUPO DEFEITO CODE']?.trim() || null;

      return {
        nome,
        descricao,
        subestacaoId,
        grupoDefeitoCodigo,
        createdBy: 'system',
      };
    })
    .filter(Boolean) as {
      nome: string;
      descricao: string;
      subestacaoId: string;
      grupoDefeitoCodigo: string | null;
      createdBy: string;
    }[];

  if (registrosValidos.length === 0) {
    return {
      success: false,
      message: '❌ Nenhum equipamento válido encontrado no arquivo.',
    };
  }

  const existentes = await prisma.equipamento.findMany({
    where: {
      OR: registrosValidos.map((r) => ({
        nome: r.nome,
        subestacaoId: r.subestacaoId,
      })),
    },
    select: {
      nome: true,
      subestacaoId: true,
    },
  });

  const existentesSet = new Set(
    existentes.map((e) => `${e.nome}::${e.subestacaoId}`)
  );

  const novos = registrosValidos.filter(
    (r) => !existentesSet.has(`${r.nome}::${r.subestacaoId}`)
  );

  if (novos.length === 0) {
    return {
      success: false,
      message: '🚫 Todos os equipamentos já existem. Nenhum cadastrado.',
    };
  }

  await prisma.equipamento.createMany({
    data: novos,
    skipDuplicates: true,
  });

  return {
    success: true,
    message: `✅ ${novos.length} equipamentos cadastrados com sucesso.`,
  };
}