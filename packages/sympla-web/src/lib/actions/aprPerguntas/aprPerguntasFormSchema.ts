import { z } from 'zod';
import { AprPerguntas } from '@sympla/prisma';

export const aprPerguntasFormSchema = z.object({
  id: z.string().optional(),
  pergunta: z.string().min(1, 'pergunta é obrigatório'),
});

type BaseFields = Required<Pick<AprPerguntas, 'pergunta'>>;
export type AprPerguntasFormData = Partial<Pick<AprPerguntas, 'id'>> & BaseFields;
