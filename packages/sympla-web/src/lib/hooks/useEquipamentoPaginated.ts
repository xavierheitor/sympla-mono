"use client";

import useSWR from "swr";
import {
  getEquipamentosPaginated,
  EquipamentoPaginatedParams,
} from "@/lib/actions/equipamento/getPaginated";
import { Equipamento, Subestacao } from "@sympla/prisma";

export interface EquipamentoWithRelations extends Equipamento {
  subestacao: Subestacao | null;
}

export const useEquipamentoPaginated = (params: EquipamentoPaginatedParams) => {
  const { page, pageSize, search, subestacaoId, grupoDefeitoCodigo } = params;

  const { data, isLoading, error, mutate } = useSWR(
    [
      "equipamentos-paginated",
      page,
      pageSize,
      search,
      subestacaoId,
      grupoDefeitoCodigo,
    ],
    async () => await getEquipamentosPaginated(params)
  );

  return {
    data: data?.data || [],
    total: data?.total || 0,
    totalPages: data?.totalPages || 0,
    isLoading,
    error,
    mutate,
  };
};
