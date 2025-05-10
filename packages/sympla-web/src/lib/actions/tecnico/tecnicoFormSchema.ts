import { z } from 'zod';
import { Tecnico } from '@sympla/prisma';

export const tecnicoFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, 'nome é obrigatório'),
  email: z.string().email('email inválido'),
  telefone: z.string().min(1, 'telefone é obrigatório'),
  cpf: z.string().min(1, 'cpf é obrigatório'),
  rg: z.string().min(1, 'rg é obrigatório'),
});

type BaseFields = Required<Pick<Tecnico, 'nome' | 'email' | 'telefone' | 'cpf' | 'rg'>>;
export type TecnicoFormData = Partial<Pick<Tecnico, 'id'>> & BaseFields;
