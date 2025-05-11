
import { z } from 'zod';
import { Atividade, NotasSAP, StatusAtividade, TipoAtividade } from '@sympla/prisma';

const dateField = z
  .union([z.string(), z.date()])
  .nullable()
  .transform((val) => (typeof val === 'string' ? new Date(val) : val));

export const atividadeFormSchema = z.object({
  id: z.string().optional(),
  descricao: z.string().nullable(),
  notaId: z.string().min(1, 'Nota é obrigatória'),
  tipoAtividadeId: z.string().min(1, 'Tipo de Atividade é obrigatório'),
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
