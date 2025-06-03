import { z } from 'zod';
import { AprModelo, AprPerguntas, AprPerguntasRelation } from '@sympla/prisma';

export const aprPerguntasRelationFormSchema = z.object({
  id: z.string().optional(),
  perguntaId: z.string().min(1, 'perguntaId é obrigatório'),
  modeloId: z.string().min(1, 'modeloId é obrigatório'),
  ordem: z.number().min(0, 'ordem é obrigatório'),
});

type BaseFields = Required<Pick<AprPerguntasRelation, 'perguntaId' | 'modeloId' | 'ordem'>>;
export type AprPerguntasRelationFormData = Partial<Pick<AprPerguntasRelation, 'id'>> & BaseFields;

export type AprPerguntasRelationWithIncludes = AprPerguntasRelation & {
  pergunta: AprPerguntas;
  modelo: AprModelo;
};
