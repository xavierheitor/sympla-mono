import { z } from 'zod';
import { ChecklistPergunta } from '@sympla/prisma';

export const checklistPerguntaFormSchema = z.object({
  id: z.string().optional(),
  pergunta: z.string().min(1, 'pergunta é obrigatório'),
});

type BaseFields = Required<Pick<ChecklistPergunta, 'pergunta'>>;
export type ChecklistPerguntaFormData = Partial<Pick<ChecklistPergunta, 'id'>> & BaseFields;
