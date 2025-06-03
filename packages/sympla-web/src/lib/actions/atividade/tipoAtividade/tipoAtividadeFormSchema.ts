import { z } from 'zod';
import { Kpi, TipoAtividade, TipoAtividadeMobile } from '@sympla/prisma';

export const tipoAtividadeFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "nome é obrigatório"),
  tipoAtividadeMobile: z.nativeEnum(TipoAtividadeMobile),
});

type BaseFields = Required<Pick<TipoAtividade, "nome" | "tipoAtividadeMobile">>;
export type TipoAtividadeFormData = Partial<Pick<TipoAtividade, "id">> &
  BaseFields;

export type TipoAtividadeWithKpi = TipoAtividade & {
  kpis: Kpi[];
};
