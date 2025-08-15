import { z } from 'zod';
import { CentroTrabalho, Regional } from '@sympla/prisma';

export const centroTrabalhoFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, 'nome é obrigatório'),
  regionalId: z.string().min(1, 'regional é obrigatório'),
});

type BaseFields = Required<Pick<CentroTrabalho, 'nome' | 'regionalId'>>;
export type CentroTrabalhoFormData = Partial<Pick<CentroTrabalho, 'id'>> & BaseFields;

export type CentroTrabalhoWithRelations = CentroTrabalho & {
  regional: Regional;
};
