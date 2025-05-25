import { z } from 'zod';
import { GrupoDefeitoEquipamento } from '@sympla/prisma';

export const grupoDefeitoEquipamentoFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "nome é obrigatório"),
  codigo: z.string().nullable(),
});

type BaseFields = Required<Pick<GrupoDefeitoEquipamento, "nome" | "codigo">>;
export type GrupoDefeitoEquipamentoFormData = Partial<Pick<GrupoDefeitoEquipamento, 'id'>> & BaseFields;
