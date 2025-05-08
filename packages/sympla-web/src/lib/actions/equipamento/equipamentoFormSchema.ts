import { z } from 'zod';
import { Equipamento, GrupoDefeitoCodigo, GrupoDefeitoEquipamento, Subestacao, SubgrupoDefeitoEquipamento } from '@sympla/prisma';

export const equipamentoFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, 'nome é obrigatório'),
  descricao: z.string().optional(),
  subestacaoId: z.string().min(1, 'subestacao é obrigatório'),
  grupoId: z.string().min(1, 'grupo é obrigatório'),
  subgrupoId: z.string().nullable(),
  grupoDefeitoCodigoId: z.string().min(1, 'grupoDefeitoCodigo é obrigatório'),
});

type BaseFields = Required<Pick<Equipamento, 'nome' | 'subestacaoId' | 'grupoId' | 'subgrupoId' | 'grupoDefeitoCodigoId'>>;
export type EquipamentoFormData = Partial<Pick<Equipamento, 'id'>> & BaseFields;

export type EquipamentoWithRelations = Equipamento & {
  subestacao: Subestacao;
  grupo: GrupoDefeitoEquipamento;
  subgrupo: SubgrupoDefeitoEquipamento | null;
  grupoDefeitoCodigo: GrupoDefeitoCodigo;
};