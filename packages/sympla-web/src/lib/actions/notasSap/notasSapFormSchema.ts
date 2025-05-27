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
  localInstalacao: z.string().min(1, "localInstalacao é obrigatório"),
  tipoNota: z.nativeEnum(TipoNota, {
    required_error: "tipoNota é obrigatório",
  }),
  dataNota: z.string().min(1, "dataNota é obrigatório"),
  dataInicioPlan: z.string().nullable(),
  dataFiPlan: z.string().nullable(),
  dataInicioReal: z.string().nullable(),
  dataFiReal: z.string().nullable(),
  centroTrabalhoId: z.string().min(1, "centroTrabalhoId é obrigatório"),
  equipamentoId: z.string().nullable(),
  kpiId: z.string().nullable(),
  regionalId: z.string().min(1, "regionalId é obrigatório"),
  prioridade: z.nativeEnum(PrioridadeDefeito).nullable(),
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

export type NotasSAPFormData = Partial<Pick<NotasSAP, 'id'>> & BaseFields;