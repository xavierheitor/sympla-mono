"use server";

import { prisma } from "@/lib/db/prisma";

export interface EquipamentoPaginatedParams {
  page: number;
  pageSize: number;
  search?: string;
  subestacaoId?: string;
  grupoDefeitoCodigo?: string;
}

export const getEquipamentosPaginated = async (
  params: EquipamentoPaginatedParams
) => {
  const { page, pageSize, search, subestacaoId, grupoDefeitoCodigo } = params;

  const where = {
    deletedAt: null,
    ...(search
      ? {
          nome: {
            contains: search,
            mode: "insensitive",
          },
        }
      : {}),
    ...(subestacaoId ? { subestacaoId } : {}),
    ...(grupoDefeitoCodigo ? { grupoDefeitoCodigo } : {}),
  };

  const [total, data] = await Promise.all([
    prisma.equipamento.count({ where }),
    prisma.equipamento.findMany({
      where,
      orderBy: { nome: "asc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: {
        subestacao: {
          include: { regional: true },
        },
      },
    }),
  ]);

  return {
    data,
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
  };
};
