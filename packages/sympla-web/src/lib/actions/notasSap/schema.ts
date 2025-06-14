import { z } from 'zod';
import {
  NotasSAP,
  OrigemNota,
  PrioridadeDefeito,
  StatusNota,
  TipoNota,
} from "@sympla/prisma";

export const notasSapFormSchema = z.object({
  id: z.string().optional(),
  descricao: z.string().nullable(),
  notificador: z.string().nullable(),
  numeroNota: z.string().nullable(),
  localInstalacao: z.string().nullable(),
  tipoNota: z.nativeEnum(TipoNota, {
    required_error: "tipoNota é obrigatório",
  }),
  dataNota: z.string().min(1, "dataNota é obrigatório"),
  dataInicioPlan: z.string().nullable(),
  dataFiPlan: z.string().nullable(),
  dataInicioReal: z.string().nullable(),
  dataFiReal: z.string().nullable(),
  centroTrabalhoId: z.string().nullable(),
  equipamentoId: z.string().nullable(),
  kpiId: z.string().nullable(),
  regionalId: z.string().min(1, "regionalId é obrigatório"),
  prioridade: z.nativeEnum(PrioridadeDefeito, {
    required_error: "prioridade é obrigatório",
  }),
  status: z.nativeEnum(StatusNota, {
    required_error: "status é obrigatório",
  }),
  origemNota: z.nativeEnum(OrigemNota, {
    required_error: "origemNota é obrigatório",
  }),
  ordemServicoExecucao: z.string().nullable(),
});

type BaseFields = Required<
  Pick<
    NotasSAP,
    | "descricao"
    | "notificador"
    | "localInstalacao"
    | "tipoNota"
    | "dataNota"
    | "centroTrabalhoId"
    | "regionalId"
    | "status"
    | "origemNota"
  >
> &
  Partial<
    Pick<
      NotasSAP,
      | "numeroNota"
      | "dataInicioPlan"
      | "dataFiPlan"
      | "dataInicioReal"
      | "dataFiReal"
      | "equipamentoId"
      | "kpiId"
      | "prioridade"
      | "ordemServicoExecucao"
    >
  >;

export type NotasSAPFormData = Partial<Pick<NotasSAP, "id">> & BaseFields;

export const notaPmaLoteSchema = z.array(
  z.object({
    numeroNota: z.string().optional(),
    equipamento: z.string().min(1),
    mes: z.string().min(1),
    centroTrabalho: z.string().min(1),
    kpi: z.string().min(1),
    regional: z.string().min(1),
  })
);
