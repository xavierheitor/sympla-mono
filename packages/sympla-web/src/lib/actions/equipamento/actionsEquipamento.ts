"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
  createPrismaGetAllWithIncludesAction,
} from "@/lib/server-action/actionFactory";
import { equipamentoFormSchema } from "./schema";

// ===== CREATE =====

export const createEquipamento = createPrismaCreateAction(
  equipamentoFormSchema,
  async (data) => {
    return await prisma.equipamento.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString() || "",
      },
    });
  },
  "EQUIPAMENTO"
);

// ===== UPDATE =====

export const updateEquipamento = createPrismaUpdateAction(
  equipamentoFormSchema,
  async (data) => {
    return await prisma.equipamento.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString() || "",
      },
    });
  },
  "EQUIPAMENTO"
);

// ===== DELETE =====

export const deleteEquipamento = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.equipamento.update({
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

// ===== GET ALL com paginação e search =====

export const getAllEquipamentos = createPrismaGetAllAction(
  prisma.equipamento,
  "EQUIPAMENTO",
  ["nome", "descricao"]
);

// ===== GET ALL WITH INCLUDES (para grids com relações carregadas) =====

export const getAllEquipamentosWithIncludes = createPrismaGetAllWithIncludesAction(
  async (params) => {
    const {
      where = {},
      orderBy = { nome: "asc" },
      include = {
        subestacao: {
          include: {
            regional: true,
          },
        },
      },
    } = params;

    return await prisma.equipamento.findMany({
      where: { ...where, deletedAt: null },
      orderBy,
      include,
    });
  },
  "EQUIPAMENTO"
);

// ===== CREATE MANY FROM EXCEL (lógica especial permanece) =====

const detectGrupoDefeito = (nome: string) => {
  const nomeUpper = nome.toUpperCase();
  if (nomeUpper.includes("BC") || nomeUpper.includes("BANCAP")) return "SEBE";
  if (nomeUpper.includes("TR") && !nomeUpper.includes("TP") && !nomeUpper.includes("TC"))
    return "SETR";
  if (nomeUpper.includes("AUX") || nomeUpper.includes("TSA")) return "SESA";
  if (nomeUpper.includes("TP") || nomeUpper.includes("TC")) return "SETP";
  if (
    nomeUpper.match(/\d{3,4}/)?.some(
      (code) => code.endsWith("13") || code.endsWith("14") || code.endsWith("24")
    )
  )
    return "SEDJ";
  return "SECV";
};

const extractSiglaSubestacao = (nome: string) => {
  const match = nome.match(/^[A-Z]{2,3}/);
  return match ? match[0] : null;
};

export const createManyEquipamentosFromExcel = async (data: { nome?: string }[]) => {
  const subestacoes = await prisma.subestacao.findMany();
  const subestacaoMap = new Map(subestacoes.map((s) => [s.sigla.toUpperCase(), s.id]));

  const equipamentos = data.map((row, index) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const nomeOriginal = row.nome ?? (row as any)["EQUIPAMENTOS"] ?? "";
    const nome = nomeOriginal.trim();

    if (!nome) {
      console.warn(`⚠️ Linha ${index + 2}: Nome está vazio, ignorado.`);
      return null;
    }

    const sigla = extractSiglaSubestacao(nome)?.toUpperCase();
    const subestacaoId = subestacaoMap.get(sigla ?? "");

    if (!subestacaoId) {
      console.warn(
        `⚠️ Linha ${index + 2}: Subestação não encontrada para sigla "${sigla}", ignorado.`
      );
      return null;
    }

    return {
      nome,
      descricao: nome,
      subestacaoId,
      grupoDefeitoCodigo: detectGrupoDefeito(nome),
    };
  });

  const validEquipamentos = equipamentos.filter((e): e is NonNullable<typeof e> => !!e);

  if (validEquipamentos.length === 0) {
    return {
      success: false,
      created: 0,
      message: "🚫 Nenhum equipamento válido encontrado no arquivo.",
    };
  }

  await prisma.equipamento.createMany({
    data: validEquipamentos.map((e) => ({
      nome: e.nome,
      descricao: e.descricao,
      subestacaoId: e.subestacaoId,
      grupoDefeitoCodigo: e.grupoDefeitoCodigo,
      createdBy: "system",
    })),
    skipDuplicates: true,
  });

  return {
    success: true,
    created: validEquipamentos.length,
    message: `✅ ${validEquipamentos.length} equipamentos cadastrados com sucesso.`,
  };
};