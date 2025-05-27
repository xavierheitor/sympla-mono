"use server";

import { prisma } from "@/lib/db/prisma";
import { mesesMap } from "@/lib/utils/mesesMap";
import { z } from "zod";

const notaPmaLoteSchema = z.array(
  z.object({
    numeroNota: z.string().optional(),
    equipamento: z.string().min(1),
    mes: z.string().min(1),
    centroTrabalho: z.string().min(1),
    kpi: z.string().min(1),
    regional: z.string().min(1),
  })
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
