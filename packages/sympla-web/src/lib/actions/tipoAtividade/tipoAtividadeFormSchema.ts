import { z } from 'zod';
import { Kpi, TipoAtividade, TipoAtividadeMobile } from '@sympla/prisma';

export const tipoAtividadeFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, 'nome é obrigatório'),
  kpiId: z.string().nullable(),
  tipoAtividadeMobile: z.nativeEnum(TipoAtividadeMobile),
});

type BaseFields = Required<Pick<TipoAtividade, 'nome' | 'kpiId' | 'tipoAtividadeMobile'>>;
export type TipoAtividadeFormData = Partial<Pick<TipoAtividade, 'id'>> & BaseFields;

export type TipoAtividadeWithKpi = TipoAtividade & {
  kpi: Kpi | null;
};
