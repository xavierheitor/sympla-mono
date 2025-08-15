'use server';

import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaGetAllWithIncludesAction,
  createPrismaUpdateAction,
} from '@/lib/server-action/actionFactory';
import {
  notaPmaFormSchema,
  NotaPMALoteInput,
  notaPmaLoteSchema,
  NotaPMAWithRelations,
} from './schema';
import { prisma } from '@/lib/db/prisma';
import { handleServerAction } from '@/lib/server-action/actionHandler';
import { z } from 'zod';

//*CREATE
export const createNotaPMA = createPrismaCreateAction(
  notaPmaFormSchema,
  async (data) => {
    const { ...dataWithoutId } = data;
    return await prisma.notaPMA.create({
      data: {
        ...dataWithoutId,
        createdBy: data.createdBy?.toString() || '',
      } as Parameters<typeof prisma.notaPMA.create>[0]['data'],
    });
  },
  'NOTA_PMA',
);

//*UPDATE
export const updateNotaPMA = createPrismaUpdateAction(
  notaPmaFormSchema,
  async (data) => {
    return await prisma.notaPMA.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString() || '',
      } as Parameters<typeof prisma.notaPMA.update>[0]['data'],
    });
  },
  'NOTA_PMA',
);

//*DELETE
export const deleteNotaPMA = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.notaPMA.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      } as Parameters<typeof prisma.notaPMA.update>[0]['data'],
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.notaPMA,
      modelName: 'NotaPMA',
    },
    entityName: 'NOTA_PMA',
  },
);

//*GET ALL
export const getAllNotasPMA = createPrismaGetAllAction(prisma.notaPMA, 'NOTA_PMA', [
  'numeroNota',
  'localInstalacao',
  'dataInicioPlan',
  'dataFiPlan',
  'dataInicioReal',
  'dataFiReal',
  'centroTrabalhoId',
  'equipamentoId',
  'kpiId',
  'status',
]);

//*GET ALL WITH INCLUDES
export const getAllNotasPMAWithIncludes =
  createPrismaGetAllWithIncludesAction<NotaPMAWithRelations>(async (params) => {
    const { where = {}, orderBy = 'numeroNota', orderDir = 'asc', filters = {} } = params;

    const filtroNumeroNota = filters.numeroNota?.[0];
    const filtroLocalInstalacao = filters.localInstalacao?.[0];
    const filtroDataInicioPlan = filters.dataInicioPlan?.[0];
    const filtroDataFiPlan = filters.dataFiPlan?.[0];
    const filtroDataInicioReal = filters.dataInicioReal?.[0];
    const filtroDataFiReal = filters.dataFiReal?.[0];
    const filtroCentroTrabalhoId = filters.centroTrabalhoId?.[0];
    const filtroEquipamentoId = filters.equipamentoId?.[0];
    const filtroKpiId = filters.kpiId?.[0];
    const filtroStatus = filters.status?.[0];

    const finalWhere = {
      ...where,
      deletedAt: null,
      ...(filtroNumeroNota && { numeroNota: { contains: filtroNumeroNota } }),
      ...(filtroLocalInstalacao && {
        localInstalacao: { contains: filtroLocalInstalacao },
      }),
      ...(filtroDataInicioPlan && {
        dataInicioPlan: { gte: filtroDataInicioPlan },
      }),
      ...(filtroDataFiPlan && { dataFiPlan: { lte: filtroDataFiPlan } }),
      ...(filtroDataInicioReal && {
        dataInicioReal: { gte: filtroDataInicioReal },
      }),
      ...(filtroDataFiReal && { dataFiReal: { lte: filtroDataFiReal } }),
      ...(filtroCentroTrabalhoId && {
        centroTrabalhoId: { in: filtroCentroTrabalhoId },
      }),
      ...(filtroEquipamentoId && {
        equipamentoId: { in: filtroEquipamentoId },
      }),
      ...(filtroKpiId && { kpiId: { in: filtroKpiId } }),
      ...(filtroStatus && { status: { in: filtroStatus } }),
    };

    const prismaOrderBy = { [orderBy]: orderDir };

    return await prisma.notaPMA.findMany({
      where: finalWhere,
      orderBy: prismaOrderBy,
      include: {
        centroTrabalho: true,
        equipamento: true,
        kpi: true,
      },
    });
  }, 'NOTA_PMA');

//* CREATE MANY
const statusMap = {
  'BAIXADO NO SAP': 'BAIXADO_NO_SAP',
  PROGRAMADO: 'PROGRAMADO',
  EXECUTADO: 'EXECUTADO',
} as const;

const monthToRange = (month: string) => {
  const index = [
    'JANEIRO',
    'FEVEREIRO',
    'MARÇO',
    'ABRIL',
    'MAIO',
    'JUNHO',
    'JULHO',
    'AGOSTO',
    'SETEMBRO',
    'OUTUBRO',
    'NOVEMBRO',
    'DEZEMBRO',
  ].indexOf(month.toUpperCase());
  if (index === -1) throw new Error('Mês inválido');
  const first = new Date(Date.UTC(2025, index, 1));
  const last = new Date(Date.UTC(2025, index + 1, 0));
  return { first, last };
};

// Novo schema para handleServerAction
const createManyNotasPMASchema = z.object({
  input: z.array(notaPmaLoteSchema),
});

export const createManyNotasPMA = async (rawData: { input: NotaPMALoteInput[] }) => {
  return handleServerAction(
    createManyNotasPMASchema,
    async ({ input }, session) => {
      const centros = await prisma.centroTrabalho.findMany();
      const kpis = await prisma.kpi.findMany();
      const equipamentos = await prisma.equipamento.findMany();

      const centroMap = new Map(centros.map((ct) => [ct.nome, ct.id]));
      const kpiMap = new Map(kpis.map((k) => [k.nome, k.id]));
      const equipamentoMap = new Map(equipamentos.map((e) => [e.nome, e.id]));

      const mapped = input.map((d) => {
        const centroTrabalhoId = centroMap.get(d.centroTrabalhoNome);
        const kpiId = kpiMap.get(d.kpiNome);
        const equipamentoId = equipamentoMap.get(d.localInstalacao);
        const status = statusMap[d.statusTexto as keyof typeof statusMap];
        if (!centroTrabalhoId || !kpiId || !status) throw new Error('Valor inválido');

        const { first, last } = monthToRange(d.mesTexto);

        return {
          numeroNota: d.numeroNota,
          localInstalacao: d.localInstalacao,
          centroTrabalhoId,
          kpiId,
          status,
          equipamentoId,
          dataInicioPlan: first,
          dataFiPlan: last,
          createdBy: session.user.id,
        };
      });

      await prisma.notaPMA.createMany({
        data: mapped,
        skipDuplicates: true,
      });

      return { success: true, data: mapped };
    },
    rawData,
    { actionType: 'create', entityName: 'NOTAS_PMA_LOTE' },
  );
};
