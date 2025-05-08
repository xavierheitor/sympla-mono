import { z } from 'zod';
import { Defeito } from '@sympla/prisma';

export const defeitoFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, 'nome é obrigatório'),
});

type BaseFields = Required<Pick<Defeito, 'nome'>>;
export type DefeitoFormData = Partial<Pick<Defeito, 'id'>> & BaseFields;
