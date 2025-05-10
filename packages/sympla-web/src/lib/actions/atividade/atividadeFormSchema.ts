
import { z } from 'zod';
import { Atividade, NotasSAP, StatusAtividade, TipoAtividade } from '@sympla/prisma';

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
