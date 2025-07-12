import { z } from "zod";
import { CentroTrabalho, Equipamento, Kpi, NotaPMA, StatusNota } from "@sympla/prisma";
export const notaPmaFormSchema = z.object({
    id: z.string().optional(),

    numeroNota: z.string().optional().nullable().transform((val) => val?.trim() || null),
    localInstalacao: z.string().optional().nullable().transform((val) => val?.trim() || null),

    dataInicioPlan: z.preprocess(
        (val) => new Date(val as string),
        z.date({ required_error: "Data de início planejado é obrigatória" })
    ),

    dataFiPlan: z.preprocess(
        (val) => new Date(val as string),
        z.date({ required_error: "Data de fim planejado é obrigatória" })
    ),

    dataInicioReal: z.preprocess(
        (val) => val ? new Date(val as string) : null,
        z.date().optional().nullable()
    ),

    dataFiReal: z.preprocess(
        (val) => val ? new Date(val as string) : null,
        z.date().optional().nullable()
    ),

    centroTrabalhoId: z
        .string()
        .optional()
        .nullable()
        .transform((val) => (val?.trim() ? val : null))
        .or(z.literal(null)),

    equipamentoId: z
        .string()
        .optional()
        .nullable()
        .transform((val) => (val?.trim() ? val : null))
        .or(z.literal(null)),

    kpiId: z
        .string()
        .optional()
        .nullable()
        .transform((val) => (val?.trim() ? val : null))
        .or(z.literal(null)),

    status: z.nativeEnum(StatusNota).default("PENDENTE"),
});
// Tipagem de apoio
export type NotaPMAFormData = z.infer<typeof notaPmaFormSchema>;

export type NotaPMAWithRelations = NotaPMA & {
    centroTrabalho?: CentroTrabalho | null;
    equipamento?: Equipamento | null;
    kpi?: Kpi | null;
};



//CADASTRO EM LOTE
const meses = [
    "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO",
    "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO",
] as const;

const mesEnum = z.enum(meses);

export const notaPmaLoteSchema = z.object({
    numeroNota: z.string().min(1, "Nota é obrigatória"),
    centroTrabalhoNome: z.string().min(1, "Centro de trabalho é obrigatório"),
    localInstalacao: z.string().min(1, "Local de instalação é obrigatório"),
    kpiNome: z.string().min(1, "KPI é obrigatório"),
    statusTexto: z.string().min(1, "Status é obrigatório"),
    mesTexto: mesEnum
});

export type NotaPMALoteInput = z.infer<typeof notaPmaLoteSchema>;