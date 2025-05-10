import { z } from 'zod';
import { UsuarioMobile } from '@sympla/prisma';

export const usuarioMobileFormSchema = z.object({
  id: z.string().optional(),
  matricula: z.string().min(1, 'matricula é obrigatório'),
  nome: z.string().min(1, 'nome é obrigatório'),
  email: z.string().email().nullable().optional(),
  senha: z.string().min(1, 'senha é obrigatório'),
  funcao: z.string().min(1, 'funcao é obrigatório'),
  ativo: z.boolean().optional(),
});

type BaseFields = Required<Pick<UsuarioMobile, 'matricula' | 'nome' | 'funcao' | 'senha'>> &
  Partial<Pick<UsuarioMobile, 'email' | 'ativo'>>;

export type UsuarioMobileFormData = Partial<Pick<UsuarioMobile, 'id'>> & BaseFields;