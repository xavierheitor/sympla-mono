import { z } from 'zod';
import { CentroTrabalho } from '@sympla/prisma';

export const centroTrabalhoFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, 'nome é obrigatório'),
});

type BaseFields = Required<Pick<CentroTrabalho, 'nome'>>;
export type CentroTrabalhoFormData = Partial<Pick<CentroTrabalho, 'id'>> & BaseFields;
