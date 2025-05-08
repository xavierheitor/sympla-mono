import { z } from 'zod';
import { GrupoDefeitoCodigo } from '@sympla/prisma';

export const grupoDefeitoCodigoFormSchema = z.object({
  id: z.string().optional(),
  sigla: z.string().min(1, 'sigla é obrigatório'),
  codigo: z.string().min(1, 'codigo é obrigatório'),
  grupoId: z.string().min(1, 'grupo é obrigatório'),
});

type BaseFields = Required<Pick<GrupoDefeitoCodigo, 'sigla' | 'codigo' | 'grupoId'>>;
export type GrupoDefeitoCodigoFormData = Partial<Pick<GrupoDefeitoCodigo, 'id'>> & BaseFields;
