import { Kpi, TipoAtividade, TipoAtividadeKpi } from "@sympla/prisma";
import { z } from "zod";

export const tipoAtividadeKpiFormSchema = z.object({
  id: z.string().optional(),
  tipoAtividadeId: z.string().min(1),
  kpiId: z.string().min(1),
});

type BaseFields = Required<Pick<TipoAtividadeKpi, "tipoAtividadeId" | "kpiId">>;
export type TipoAtividadeKpiFormData = Partial<Pick<TipoAtividadeKpi, "id">> &
  BaseFields;

export type TipoAtividadeKpiWithIncludes = TipoAtividadeKpi & {
  tipoAtividade: TipoAtividade;
  kpi: Kpi;
};
