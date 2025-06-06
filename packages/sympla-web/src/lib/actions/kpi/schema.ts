import { z } from 'zod';
import { Kpi, TipoManutencao } from '@sympla/prisma';

export const kpiFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, 'nome é obrigatório'),
  descricao: z.string().min(1, 'descricao é obrigatório'),
  tipoManutencaoId: z.string().min(1, 'tipoManutencao é obrigatório'),
});

type BaseFields = Required<Pick<Kpi, 'nome' | 'descricao' | 'tipoManutencaoId'>>;
export type KpiFormData = Partial<Pick<Kpi, 'id'>> & BaseFields;

export type KpiWithRelations = Kpi & {
  tipoManutencao: TipoManutencao;
};
