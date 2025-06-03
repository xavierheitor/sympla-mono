import { z } from 'zod';
import { ChecklisrPerguntaRelation, ChecklistModelo, ChecklistPergunta } from '@sympla/prisma';

export const checklisrPerguntaRelationFormSchema = z.object({
  id: z.string().optional(),
  perguntaId: z.string().min(1, 'perguntaId é obrigatório'),
  modeloId: z.string().min(1, 'modeloId é obrigatório'),
  ordem: z.number().min(0, 'ordem é obrigatório'),
});

type BaseFields = Required<Pick<ChecklisrPerguntaRelation, 'perguntaId' | 'modeloId' | 'ordem'>>;
export type ChecklisrPerguntaRelationFormData = Partial<Pick<ChecklisrPerguntaRelation, 'id'>> & BaseFields;

export type ChecklisrPerguntaRelationWithIncludes = ChecklisrPerguntaRelation & {
  pergunta: ChecklistPergunta;
  modelo: ChecklistModelo;
};
