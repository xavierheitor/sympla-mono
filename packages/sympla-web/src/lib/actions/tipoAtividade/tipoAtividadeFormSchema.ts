import { z } from 'zod';
import { TipoAtividade } from '@sympla/prisma';

export const tipoAtividadeFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, 'nome é obrigatório'),
  kpiId: z.string().nullable(),
});

type BaseFields = Required<Pick<TipoAtividade, 'nome' | 'kpiId'>>;
export type TipoAtividadeFormData = Partial<Pick<TipoAtividade, 'id'>> & BaseFields;
