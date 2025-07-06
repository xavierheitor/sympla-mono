import { z } from "zod";
import {
  TipoAtividade,
  TipoAtividadeKpi,
  TipoAtividadeMobile,
  Kpi,
  StatusAtividade,
  Atividade,
  NotasSAP,
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


// SCHEMA PARA VINCULAR ATIVIDADE

export const atividadeFormSchema = z.object({
  id: z.string().optional(),
  descricao: z.string().nullable(),
  notaId: z.string().min(1, 'Nota é obrigatória'),
  tipoAtividadeId: z.string().min(1, 'Tipo de Atividade é obrigatório'),
  ordemServico: z.string().nullable(),
  status: z.nativeEnum(StatusAtividade),
  prazoLimite: z.date().nullable(),
  dataProgramacao: z.date().nullable(),
  dataExecucaoInicio: z.date().nullable(),
  dataExecucaoFim: z.date().nullable(),
});

export type AtividadeFormData = z.infer<typeof atividadeFormSchema>;

export type AtividadeWithIncludes = Atividade & {
  tipoAtividade: TipoAtividade;
  nota: NotasSAP;
};