import { z } from "zod";
import {
  TipoAtividade,
  TipoAtividadeKpi,
  TipoAtividadeMobile,
  Kpi,
} from "@sympla/prisma";

// SCHEMA FORM PRINCIPAL

export const tipoAtividadeFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "nome é obrigatório"),
  tipoAtividadeMobile: z.nativeEnum(TipoAtividadeMobile),
});

export type TipoAtividadeFormData = z.infer<typeof tipoAtividadeFormSchema>;

// SCHEMA PARA VINCULAR KPI

export const tipoAtividadeKpiRelationSchema = z.object({
  tipoAtividadeId: z.string().min(1),
  kpiIds: z.array(z.string().min(1)),
});

export type TipoAtividadeKpiRelationInput = z.infer<typeof tipoAtividadeKpiRelationSchema>;

// TYPES DE RELACIONAMENTO COM INCLUDES (para page, actions etc)

export type TipoAtividadeWithKpi = TipoAtividade & {
  tipoAtividadeKpi: TipoAtividadeKpi[];
};

export type TipoAtividadeKpiWithIncludes = TipoAtividadeKpi & {
  tipoAtividade: TipoAtividade;
  kpi: Kpi;
};