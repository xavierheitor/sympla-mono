import { z } from 'zod';
import { ChecklistModelo, TipoAtividade } from '@sympla/prisma';

export const checklistModeloFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, 'nome é obrigatório'),
  descricao: z.string().nullable(),
  tipoAtividadeId: z.string().min(1, 'tipoAtividadeId é obrigatório'),
});

type BaseFields = Required<Pick<ChecklistModelo, 'nome' | 'descricao' | 'tipoAtividadeId'>>;
export type ChecklistModeloFormData = Partial<Pick<ChecklistModelo, 'id'>> & BaseFields;

export type ChecklistModeloWithIncludes = ChecklistModelo & {
  tipoAtividade: TipoAtividade;
};
