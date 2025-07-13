import { TipoAtividadeMobile, TipoAtividade, TipoAtividadeKpi, Kpi, StatusAtividade, Atividade, StatusAtribuicao, AtividadeAtribuicao, UsuarioMobile, NotaPMA } from "@sympla/prisma";
import { z } from "zod";

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
  descricao: z.string().optional().nullable(),
  notaPmaId: z.string().optional().nullable(), // notaPmaId, conforme novo schema
  tipoAtividadeId: z.string().min(1, 'Tipo de Atividade é obrigatório'),
  ordemServico: z.string().optional().nullable(),
  status: z.nativeEnum(StatusAtividade),
  dataInicioPlan: z.preprocess((val) => val ? new Date(val as string) : null, z.date().nullable()) as z.ZodType<Date | null>,
  dataFimPlan: z.preprocess((val) => val ? new Date(val as string) : null, z.date().nullable()) as z.ZodType<Date | null>,
  dataExecucaoInicio: z.preprocess((val) => val ? new Date(val as string) : null, z.date().nullable()) as z.ZodType<Date | null>,
  dataExecucaoFim: z.preprocess((val) => val ? new Date(val as string) : null, z.date().nullable()) as z.ZodType<Date | null>,
});
export type AtividadeFormData = z.infer<typeof atividadeFormSchema>;

export type AtividadeWithIncludes = Atividade & {
  tipoAtividade: TipoAtividade | null;
  notaPma: NotaPMA | null;
};


//* ATIVIDADE ATRIBUICAO

// 📌 Schema para formulário
export const atividadeAtribuicaoFormSchema = z.object({
  id: z.string().optional(),
  atividadeId: z.string().min(1, "Atividade é obrigatória"),
  usuarioMobileId: z.string().min(1, "Técnico é obrigatório"),
  status: z.nativeEnum(StatusAtribuicao, {
    required_error: "Status é obrigatório",
  }),
  dataInicio: z.preprocess(
    (val) => (val ? new Date(val as string) : null),
    z.date().nullable()
  ) as z.ZodType<Date | null>,
  dataFim: z.preprocess(
    (val) => (val ? new Date(val as string) : null),
    z.date().nullable()
  ) as z.ZodType<Date | null>,
});
export type AtividadeAtribuicaoFormData = z.infer<typeof atividadeAtribuicaoFormSchema>;

// 📌 Tipo com includes (para useServerData, page.tsx, etc.)
export type AtividadeAtribuicaoWithIncludes = AtividadeAtribuicao & {
  atividade: Atividade;
  usuarioMobile: UsuarioMobile;
};