"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaUpdateAction,
  createPrismaGetAllWithIncludesAction,
} from "@/lib/server-action/actionFactory";
import { createManyNotasSapPMASchema, notasSapFormSchema, NotasSAPWithRelations } from "./schema";
import { StatusNota, TipoNota } from "@sympla/prisma";
import { z } from "zod";


// CRUD principal

export const createNotasSap = createPrismaCreateAction(
  notasSapFormSchema,
  async (data) =>
    prisma.notasSAP.create({
      data: { ...data, createdBy: data.createdBy?.toString() || "" },
    }),
  "NOTAS_SAP"
);

export const updateNotasSap = createPrismaUpdateAction(
  notasSapFormSchema,
  async (data) =>
    prisma.notasSAP.update({
      where: { id: data.id },
      data: { ...data, updatedBy: data.updatedBy?.toString() || "" },
    }),
  "NOTAS_SAP"
);

export const deleteNotasSap = createPrismaDeleteAction(
  async (id, session) =>
    prisma.notasSAP.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy: session.user.id.toString() },
    }),
  {
    defaultCheck: { prismaModel: prisma.notasSAP, modelName: "NotasSAP" },
    entityName: "NOTAS_SAP",
  }
);

// Novo getAllNotasSapPMA no padrão
export const getAllNotasSapPMA = createPrismaGetAllWithIncludesAction<NotasSAPWithRelations>(
  async (params) => {
    const {
      where = {},
      orderBy = 'dataInicioPlan',
      orderDir = 'asc',
      filters = {}
    } = params;

    const finalWhere = {
      ...where,
      deletedAt: null,
      tipoNota: TipoNota.TS,
      ...(filters.numeroNota && { numeroNota: { contains: filters.numeroNota[0], mode: "insensitive" } }),
      ...(filters.descricao && { descricao: { contains: filters.descricao[0], mode: "insensitive" } }),
      ...(filters.status && { status: { in: filters.status } }),
      ...(filters.regionalId && { regionalId: { in: filters.regionalId } }),
      ...(filters.equipamentoId && { equipamentoId: { in: filters.equipamentoId } }),
      ...(filters.kpiId && { kpiId: { in: filters.kpiId } }),
    };

    const prismaOrderBy = { [orderBy]: orderDir };

    return prisma.notasSAP.findMany({
      where: finalWhere,
      orderBy: prismaOrderBy,
      include: {
        equipamento: true,
        centroTrabalho: true,
        kpi: { include: { tipoManutencao: true } },
        regional: true,
      },
    });
  },
  "NOTAS_SAP_PMA"
);

// ===== CREATE MANY (Lote) =====
export const createManyNotasPMASap = async (rawInput: unknown) => {
  const linhas = z.array(
    z.object({
      numeroNota: z.string().min(1),
      equipamento: z.string().min(1),
      mes: z.string().min(1),
      centroTrabalho: z.string().min(1),
      kpi: z.string().min(1),
      regional: z.string().min(1),
    })
  ).parse(rawInput);

  // 🔧 Função para normalizar strings
  const normalizar = (s: string) =>
    s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

  // 🔧 Mapeamento de mês por nome → número
  const mesMap: Record<string, number> = {
    janeiro: 0,
    fevereiro: 1,
    marco: 2,
    março: 2,
    abril: 3,
    maio: 4,
    junho: 5,
    julho: 6,
    agosto: 7,
    setembro: 8,
    outubro: 9,
    novembro: 10,
    dezembro: 11,
  };

  // 🔍 Buscar entidades do banco
  const [equipamentos, centros, kpis, regionais] = await Promise.all([
    prisma.equipamento.findMany(),
    prisma.centroTrabalho.findMany(),
    prisma.kpi.findMany(),
    prisma.regional.findMany(),
  ]);

  const enriched = linhas.map((linha) => {
    const equipamentoId = equipamentos.find(
      (e) => normalizar(e.nome) === normalizar(linha.equipamento)
    )?.id;

    const centroTrabalhoId = centros.find(
      (c) => normalizar(c.nome) === normalizar(linha.centroTrabalho)
    )?.id;

    const kpiId = kpis.find(
      (k) => normalizar(k.nome) === normalizar(linha.kpi)
    )?.id;

    const regionalId = regionais.find(
      (r) => normalizar(r.nome) === normalizar(linha.regional)
    )?.id;

    // 🔍 Logs úteis
    if (!equipamentoId) console.warn(`❌ Equipamento não encontrado: "${linha.equipamento}"`);
    if (!centroTrabalhoId) console.warn(`❌ Centro de Trabalho não encontrado: "${linha.centroTrabalho}"`);
    if (!kpiId) console.warn(`❌ KPI não encontrado: "${linha.kpi}"`);
    if (!regionalId) console.warn(`❌ Regional não encontrada: "${linha.regional}"`);

    if (!equipamentoId || !centroTrabalhoId || !kpiId || !regionalId) {
      throw new Error(`Erro ao encontrar IDs para a linha: ${JSON.stringify(linha)}`);
    }

    // 📆 Gerar dataInicioPlan: dia 1 do mês informado, no ano atual
    const mesNormalizado = normalizar(linha.mes);
    const mesNumero = mesMap[mesNormalizado];
    if (mesNumero === undefined) {
      throw new Error(`Mês inválido: "${linha.mes}"`);
    }

    const anoAtual = new Date().getFullYear();
    const dataInicioPlan = new Date(anoAtual, mesNumero, 1);

    return {
      numeroNota: linha.numeroNota,
      descricao: `Nota ${linha.numeroNota} - ${linha.equipamento}`,
      tipoNota: "TS",
      dataNota: new Date(), // data atual
      dataInicioPlan, // ✅ data do dia 1 do mês informado
      centroTrabalhoId,
      equipamentoId,
      kpiId,
      regionalId,
      status: StatusNota.PENDENTE,
      origemNota: "SISTEMA",
    };
  });

  const parsed = createManyNotasSapPMASchema.parse(enriched);

  const existentes = await prisma.notasSAP.findMany({
    where: {
      numeroNota: { in: parsed.map((n) => n.numeroNota) },
    },
  });

  const existentesSet = new Set(existentes.map((n) => n.numeroNota));
  const novos = parsed.filter((n) => !existentesSet.has(n.numeroNota));

  if (novos.length === 0) {
    console.log("🚫 Nenhuma nota nova para cadastrar.");
    return;
  }

  await prisma.notasSAP.createMany({
    data: novos.map((n) => ({
      ...n,
      createdBy: "system",
    })),
    skipDuplicates: true,
  });

  console.log(`✅ ${novos.length} notas SAP cadastradas com sucesso.`);
};