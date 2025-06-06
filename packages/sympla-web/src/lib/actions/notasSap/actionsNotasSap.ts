"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { notaPmaLoteSchema, notasSapFormSchema } from "./schema";
import { TipoNota } from "@sympla/prisma";
import { mesesMap } from "@/lib/utils/mesesMap";

export const createNotasSap = createPrismaCreateAction(
  notasSapFormSchema,
  async (data) => {
    return await prisma.notasSAP.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "NOTAS_SAP"
);

export const deleteNotasSap = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.notasSAP.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.notasSAP,
      modelName: "NotasSAP",
    },
    entityName: "NOTAS_SAP",
  }
);

export const updateNotasSap = createPrismaUpdateAction(
  notasSapFormSchema,
  async (data) => {
    return await prisma.notasSAP.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "NOTAS_SAP"
);

export const getAllNotasSaps = createPrismaGetAllAction(async () => {
  return await prisma.notasSAP.findMany({
    where: { deletedAt: null },
    orderBy: { descricao: "asc" },
  });
}, "NOTAS_SAP");

export const getAllNotasSapAnomalias = createPrismaGetAllAction(async () => {
  return await prisma.notasSAP.findMany({
    where: { deletedAt: null, tipoNota: TipoNota.AA },
    orderBy: { descricao: "asc" },
  });
}, "NOTAS_SAP_ANOMALIAS");

export const getAllNotasSapPMA = createPrismaGetAllAction(async () => {
  return await prisma.notasSAP.findMany({
    where: { deletedAt: null, tipoNota: TipoNota.TS },
    orderBy: { descricao: "asc" },
    include: {
      equipamento: true,
      centroTrabalho: true,
      kpi: {
        include: {
          tipoManutencao: true,
        },
      },
      regional: true,
    },
  });
}, "NOTAS_SAP_PMA");

export const getAllNotasSapsWithIncludes = createPrismaGetAllAction(
  async (filter) => {
    return await prisma.notasSAP.findMany({
      where: filter,
      orderBy: { descricao: "asc" },
      include: {
        centroTrabalho: true,
        equipamento: true,
        kpi: true,
        regional: true,
      },
    });
  },
  "NOTAS_SAP"
);

export const createManyNotasPMA = async (data: unknown) => {
  const parsed = notaPmaLoteSchema.parse(data);
  const anoAtual = new Date().getFullYear();

  let ignoradas = 0;
  let criadas = 0;

  for (const item of parsed) {
    // 🔍 Se veio numeroNota, verifica se já existe
    if (item.numeroNota) {
      const jaExiste = await prisma.notasSAP.findFirst({
        where: {
          numeroNota: item.numeroNota,
        },
      });

      if (jaExiste) {
        console.log(`⚠️ Nota ${item.numeroNota} já existe. Ignorada.`);
        ignoradas++;
        continue;
      }
    }

    // 🔥 Busca equipamento exato
    let equipamento = await prisma.equipamento.findFirst({
      where: { nome: item.equipamento },
    });

    // 🔥 Se não encontrar, busca pelo prefixo (até primeiro hífen)
    if (!equipamento) {
      const prefixo = item.equipamento.split("-")[0]; // pega 'ABU' de 'ABU-S-AUX'
      equipamento = await prisma.equipamento.findFirst({
        where: {
          nome: {
            startsWith: prefixo,
          },
        },
      });
    }

    const centroTrabalho = await prisma.centroTrabalho.findFirst({
      where: { nome: item.centroTrabalho },
    });

    const kpi = await prisma.kpi.findFirst({
      where: { nome: item.kpi },
    });

    const regional = await prisma.regional.findFirst({
      where: { nome: item.regional },
    });

    if (!equipamento || !centroTrabalho || !kpi || !regional) {
      throw new Error(
        `Erro de validação: Dados não encontrados → ${JSON.stringify(item)}`
      );
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

  console.log(
    `✅ Notas cadastradas com sucesso: ${criadas}. ⚠️ Ignoradas (já existiam): ${ignoradas}.`
  );
};
