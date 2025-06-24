import { z } from 'zod';
import {
  CentroTrabalho,
  Equipamento,
  Kpi,
  NotasSAP,
  OrigemNota,
  PrioridadeDefeito,
  Regional,
  StatusNota,
  TipoManutencao,
  TipoNota,
} from "@sympla/prisma";

// Formulário principal
export const notasSapFormSchema = z.object({
  id: z.string().optional(),
  descricao: z.string().nullable().optional(),
  notificador: z.string().nullable().optional(),
  numeroNota: z.string().nullable().optional(),
  localInstalacao: z.string().nullable().optional(),
  tipoNota: z.nativeEnum(TipoNota, {
    required_error: "tipoNota é obrigatório",
  }),
  dataNota: z.date(), // <-- 🔥 Ajuste aqui para Date direto
  dataInicioPlan: z.date().nullable().optional(),
  dataFiPlan: z.date().nullable().optional(),
  dataInicioReal: z.date().nullable().optional(),
  dataFiReal: z.date().nullable().optional(),
  centroTrabalhoId: z.string().nullable().optional(),
  equipamentoId: z.string().nullable().optional(),
  kpiId: z.string().nullable().optional(),
  regionalId: z.string().min(1, "regionalId é obrigatório"),
  prioridade: z.nativeEnum(PrioridadeDefeito).optional(),
  status: z.nativeEnum(StatusNota, {
    required_error: "status é obrigatório",
  }),
  origemNota: z.nativeEnum(OrigemNota, {
    required_error: "origemNota é obrigatório",
  }),
  ordemServicoExecucao: z.string().nullable().optional(),
});

// Typescript type derivado automaticamente
export type NotasSAPFormData = z.infer<typeof notasSapFormSchema>;

export const notaPmaLoteSchema = z.array(
  z.object({
    numeroNota: z.string().nullable().optional(),
    equipamento: z.string().min(1),
    mes: z.string().min(1),
    centroTrabalho: z.string().min(1),
    kpi: z.string().min(1),
    regional: z.string().min(1),
  })
);

export type NotasSAPWithRelations = NotasSAP & {
  centroTrabalho: CentroTrabalho | null;
  equipamento: Equipamento | null;
  kpi: (Kpi & { tipoManutencao: TipoManutencao }) | null;
  regional: Regional;
};

export const createManyNotasSapPMASchema = z.array(
  notasSapFormSchema.omit({
    id: true, // não vamos importar id no lote
    notificador: true, // campos irrelevantes no lote
    localInstalacao: true,
    dataInicioReal: true,
    dataFiReal: true,
    ordemServicoExecucao: true,
  }).extend({
    numeroNota: z.string().min(1),
    descricao: z.string().min(1),
    equipamentoId: z.string().min(1),
    centroTrabalhoId: z.string().min(1),
    kpiId: z.string().min(1),
    regionalId: z.string().min(1),
    dataNota: z.coerce.date(),
    dataInicioPlan: z.coerce.date().optional(),
    dataFiPlan: z.coerce.date().optional(),
  })
);