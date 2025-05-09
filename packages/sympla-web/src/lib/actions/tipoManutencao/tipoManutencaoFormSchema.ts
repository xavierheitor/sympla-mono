import { z } from 'zod';
import { TipoManutencao } from '@sympla/prisma';

export const tipoManutencaoFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, 'nome é obrigatório'),
});

type BaseFields = Required<Pick<TipoManutencao, 'nome'>>;
export type TipoManutencaoFormData = Partial<Pick<TipoManutencao, 'id'>> & BaseFields;
