import { z } from 'zod';
import { Defeito, GrupoDefeitoCodigo, GrupoDefeitoEquipamento, SubgrupoDefeitoEquipamento } from '@sympla/prisma';

export const defeitoFormSchema = z.object({
  id: z.string().optional(),
  codigoSap: z.string().min(1, 'codigoSap é obrigatório'),
  descricao: z.string().min(1, 'descricao é obrigatório'),
  grupoId: z.string().min(1, 'grupo é obrigatório'),
  subgrupoId: z.string().min(1, 'subgrupo é obrigatório'),
  grupoDefeitoCodigoId: z.string().min(1, 'grupoDefeitoCodigo é obrigatório'),
});

type BaseFields = Required<Pick<Defeito, 'codigoSap' | 'descricao' | 'grupoId' | 'subgrupoId' | 'grupoDefeitoCodigoId'>>;
export type DefeitoFormData = Partial<Pick<Defeito, 'id'>> & BaseFields;

export type DefeitoWithRelations = Defeito & {
  grupo: GrupoDefeitoEquipamento;
  subgrupo: SubgrupoDefeitoEquipamento;
  grupoDefeitoCodigo: GrupoDefeitoCodigo;
};