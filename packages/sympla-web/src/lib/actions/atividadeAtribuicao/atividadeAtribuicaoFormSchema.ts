import { z } from 'zod';
import { Atividade, AtividadeAtribuicao, StatusAtribuicao, UsuarioMobile } from '@sympla/prisma';

export const atividadeAtribuicaoFormSchema = z.object({
  id: z.string().optional(),
  atividadeId: z.string().min(1, 'atividadeId é obrigatório'),
  usuarioMobileId: z.string().min(1, 'usuarioMobileId é obrigatório'),
  dataInicio: z.date().nullable(),
  dataFim: z.date().nullable(),
  status: z.nativeEnum(StatusAtribuicao),
});

type BaseFields = Required<Pick<AtividadeAtribuicao, 'atividadeId' | 'usuarioMobileId' | 'dataInicio' | 'dataFim' | 'status'>>;
export type AtividadeAtribuicaoFormData = Partial<Pick<AtividadeAtribuicao, 'id'>> & BaseFields;

export type AtividadeAtribuicaoWithIncludes = AtividadeAtribuicao & {
  atividade: Atividade;
  usuarioMobile: UsuarioMobile;
};
