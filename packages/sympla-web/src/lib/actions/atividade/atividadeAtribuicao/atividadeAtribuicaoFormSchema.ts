import { z } from 'zod';
import { Atividade, AtividadeAtribuicao, StatusAtribuicao, UsuarioMobile } from '@sympla/prisma';

const dateField = z
  .union([z.string(), z.date()])
  .nullable()
  .transform((val) => (typeof val === 'string' ? new Date(val) : val));

export const atividadeAtribuicaoFormSchema = z.object({
  id: z.string().optional(),
  atividadeId: z.string().min(1, 'atividadeId é obrigatório'),
  usuarioMobileId: z.string().min(1, 'usuarioMobileId é obrigatório'),
  dataInicio: dateField,
  dataFim: dateField,
  status: z.nativeEnum(StatusAtribuicao),
});

type BaseFields = Required<Pick<AtividadeAtribuicao, 'atividadeId' | 'usuarioMobileId' | 'dataInicio' | 'dataFim' | 'status'>>;
export type AtividadeAtribuicaoFormData = Partial<Pick<AtividadeAtribuicao, 'id'>> & BaseFields;

export type AtividadeAtribuicaoWithIncludes = AtividadeAtribuicao & {
  atividade: Atividade;
  usuarioMobile: UsuarioMobile;
};
