import { z } from "zod";
import {
  Atividade,
  AtividadeAtribuicao,
  Kpi,
  NotasSAP,
  StatusAtividade,
  StatusAtribuicao,
  TipoAtividade,
  TipoAtividadeKpi,
  TipoAtividadeMobile,
  UsuarioMobile,
} from "@sympla/prisma";

const dateField = z
  .union([z.string(), z.date()])
  .nullable()
  .transform((val) => (typeof val === "string" ? new Date(val) : val));

export const atividadeAtribuicaoFormSchema = z.object({
  id: z.string().optional(),
  atividadeId: z.string().min(1, "atividadeId é obrigatório"),
  usuarioMobileId: z.string().min(1, "usuarioMobileId é obrigatório"),
  dataInicio: dateField,
  dataFim: dateField,
  status: z.nativeEnum(StatusAtribuicao),
});

type AtividadeAtribuicaoBaseFields = Required<
  Pick<
    AtividadeAtribuicao,
    "atividadeId" | "usuarioMobileId" | "dataInicio" | "dataFim" | "status"
  >
>;
export type AtividadeAtribuicaoFormData = Partial<
  Pick<AtividadeAtribuicao, "id">
> &
  AtividadeAtribuicaoBaseFields;

export type AtividadeAtribuicaoWithIncludes = AtividadeAtribuicao & {
  atividade: Atividade;
  usuarioMobile: UsuarioMobile;
};

export const atividadeFormSchema = z.object({
  id: z.string().optional(),
  descricao: z.string().nullable(),
  notaId: z.string().min(1, "Nota é obrigatória"),
  tipoAtividadeId: z.string().min(1, "Tipo de Atividade é obrigatório"),
  ordemServico: z.string().nullable(),
  status: z.nativeEnum(StatusAtividade),
  prazoLimite: dateField,
  dataProgramacao: dateField,
  dataExecucaoInicio: dateField,
  dataExecucaoFim: dateField,
});

export type AtividadeFormData = z.infer<typeof atividadeFormSchema>;

export type AtividadeWithIncludes = Atividade & {
  tipoAtividade: TipoAtividade;
  nota: NotasSAP;
};

export const tipoAtividadeFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "nome é obrigatório"),
  tipoAtividadeMobile: z.nativeEnum(TipoAtividadeMobile),
});

type BaseFields = Required<Pick<TipoAtividade, "nome" | "tipoAtividadeMobile">>;
export type TipoAtividadeFormData = Partial<Pick<TipoAtividade, "id">> &
  BaseFields;

export type TipoAtividadeWithKpi = TipoAtividade & {
  kpis: Kpi[];
};

export const tipoAtividadeKpiFormSchema = z.object({
  id: z.string().optional(),
  tipoAtividadeId: z.string().min(1),
  kpiId: z.string().min(1),
});

type TipoAtividadeKpiBaseFields = Required<
  Pick<TipoAtividadeKpi, "tipoAtividadeId" | "kpiId">
>;
export type TipoAtividadeKpiFormData = Partial<Pick<TipoAtividadeKpi, "id">> &
  TipoAtividadeKpiBaseFields;

export type TipoAtividadeKpiWithIncludes = TipoAtividadeKpi & {
  tipoAtividade: TipoAtividade;
  kpi: Kpi;
};
