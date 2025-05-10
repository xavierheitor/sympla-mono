import { z } from 'zod';
import { AprModelo, TipoAtividade } from '@sympla/prisma';

export const aprModeloFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, 'nome é obrigatório'),
  descricao: z.string().nullable(),
  tipoAtividadeId: z.string().min(1, 'tipoAtividadeId é obrigatório'),
});

type BaseFields = Required<Pick<AprModelo, 'nome' | 'descricao' | 'tipoAtividadeId'>>;
export type AprModeloFormData = Partial<Pick<AprModelo, 'id'>> & BaseFields;

export type AprModeloWithIncludes = AprModelo & {
  tipoAtividade: TipoAtividade;
};
