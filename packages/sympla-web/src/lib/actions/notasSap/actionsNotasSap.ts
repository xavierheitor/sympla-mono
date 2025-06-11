"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
  createPrismaGetAllWithIncludesAction,
} from "@/lib/server-action/actionFactory";
import { notaPmaLoteSchema, notasSapFormSchema } from "./schema";
import { TipoNota } from "@sympla/prisma";
import { mesesMap } from "@/lib/utils/mesesMap";

// ========== CRUD PRINCIPAL ==========

export const createNotasSap = createPrismaCreateAction(
  notasSapFormSchema,
  async (data) => prisma.notasSAP.create({ data: { ...data, createdBy: data.createdBy?.toString() || "" } }),
  "NOTAS_SAP"
);

export const updateNotasSap = createPrismaUpdateAction(
  notasSapFormSchema,
  async (data) => prisma.notasSAP.update({
    where: { id: data.id },
    data: { ...data, updatedBy: data.updatedBy?.toString() || "" },
  }),
  "NOTAS_SAP"
);

export const deleteNotasSap = createPrismaDeleteAction(
  async (id, session) => prisma.notasSAP.update({
    where: { id },
    data: { deletedAt: new Date(), deletedBy: session.user.id.toString() },
  }),
  {
    defaultCheck: { prismaModel: prisma.notasSAP, modelName: "NotasSAP" },
    entityName: "NOTAS_SAP",
  }
);

// ========== GET ALL PADRÃO COM PAGINAÇÃO NATIVA ==========
export const getAllNotasSaps = createPrismaGetAllAction(
  prisma.notasSAP,
  "NOTAS_SAP",
  ["descricao", "numeroNota", "localInstalacao"]
);

// ========== GET ALL PARA ANOMALIAS ==========
export const getAllNotasSapAnomalias = createPrismaGetAllAction(
  prisma.notasSAP,
  "NOTAS_SAP_ANOMALIAS",
  ["descricao", "numeroNota"],
  { where: { tipoNota: TipoNota.AA } }
);

// ========== GET ALL PARA PMA (COM INCLUDES ESPECÍFICOS) ==========
export const getAllNotasSapPMA = createPrismaGetAllWithIncludesAction(
  async (params) => {
    const {
      where = {},
      orderBy = { descricao: "asc" },
      include = {
        equipamento: true,
        centroTrabalho: true,
        kpi: { include: { tipoManutencao: true } },
        regional: true,
      },
    } = params;

    return prisma.notasSAP.findMany({
      where: { ...where, deletedAt: null, tipoNota: TipoNota.TS },
      orderBy,
      include,
    });
  },
  "NOTAS_SAP_PMA"
);

// ========== GET ALL COM INCLUDES (DEFAULT) ==========
export const getAllNotasSapsWithIncludes = createPrismaGetAllWithIncludesAction(
  async (params) => {
    const {
      where = {},
      orderBy = { descricao: "asc" },
      include = {
        centroTrabalho: true,
        equipamento: true,
        kpi: true,
        regional: true,
      },
    } = params;

    return prisma.notasSAP.findMany({
      where: { ...where, deletedAt: null },
      orderBy,
      include,
    });
  },
  "NOTAS_SAP"
);

// ========== PROCESSAMENTO DE LOTE PMA ==========
export const createManyNotasPMA = async (data: unknown) => {
  const parsed = notaPmaLoteSchema.parse(data);
  const anoAtual = new Date().getFullYear();

  let ignoradas = 0;
  let criadas = 0;

  for (const item of parsed) {
    if (item.numeroNota) {
      const jaExiste = await prisma.notasSAP.findFirst({ where: { numeroNota: item.numeroNota } });
      if (jaExiste) {
        console.log(`⚠️ Nota ${item.numeroNota} já existe. Ignorada.`);
        ignoradas++;
        continue;
      }
    }

    let equipamento = await prisma.equipamento.findFirst({ where: { nome: item.equipamento } });
    if (!equipamento) {
      const prefixo = item.equipamento.split("-")[0];
      equipamento = await prisma.equipamento.findFirst({
        where: { nome: { startsWith: prefixo } },
      });
    }

    const centroTrabalho = await prisma.centroTrabalho.findFirst({ where: { nome: item.centroTrabalho } });
    const kpi = await prisma.kpi.findFirst({ where: { nome: item.kpi } });
    const regional = await prisma.regional.findFirst({ where: { nome: item.regional } });

    if (!equipamento || !centroTrabalho || !kpi || !regional) {
      throw new Error(`Erro de validação: Dados não encontrados → ${JSON.stringify(item)}`);
    }

    const datas = mesesMap[item.mes.toUpperCase()];
    if (!datas) {
      throw new Error(`Mês inválido: ${item.mes}`);
    }

    await prisma.notasSAP.create({
      data: {
        numeroNota: item.numeroNota || undefined,
        descricao: "Nota cadastrada via lote",
        localInstalacao: equipamento.nome,
        tipoNota: "TS",
        status: "PENDENTE",
        origemNota: "SAP",
        dataNota: new Date(),
        dataInicioPlan: new Date(`${anoAtual}${datas.start}`),
        dataFiPlan: new Date(`${anoAtual}${datas.end}`),
        equipamentoId: equipamento.id,
        centroTrabalhoId: centroTrabalho.id,
        kpiId: kpi.id,
        regionalId: regional.id,
        createdBy: "system",
      },
    });

    criadas++;
  }

  console.log(`✅ Notas cadastradas com sucesso: ${criadas}. ⚠️ Ignoradas (já existiam): ${ignoradas}.`);
};