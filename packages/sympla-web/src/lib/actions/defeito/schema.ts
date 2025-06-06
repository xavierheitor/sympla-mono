import { z } from "zod";
import {
  Defeito,
  GrupoDefeitoEquipamento,
  SubgrupoDefeitoEquipamento,
} from "@sympla/prisma";

export const defeitoFormSchema = z.object({
  id: z.string().optional(),
  codigoSap: z.string().min(1, "codigoSap é obrigatório"),
  descricao: z.string().min(1, "descricao é obrigatório"),
  grupoId: z.string().min(1, "grupo é obrigatório"),
  subgrupoId: z.string().min(1, "subgrupo é obrigatório"),
});

type BaseFields = Required<
  Pick<Defeito, "codigoSap" | "descricao" | "grupoId" | "subgrupoId">
>;
export type DefeitoFormData = Partial<Pick<Defeito, "id">> & BaseFields;

export type DefeitoWithRelations = Defeito & {
  grupo: GrupoDefeitoEquipamento;
  subgrupo: SubgrupoDefeitoEquipamento & {
    grupo: GrupoDefeitoEquipamento;
  };
};

export const createManyDefeitoSchema = z.array(
  z.object({
    codigoSap: z.string().min(1),
    descricao: z.string().min(1),
    grupoId: z.string().min(1),
    subgrupoId: z.string().min(1),
    prioridade: z.string().optional(),
    acaoRecomendada: z.string().optional(),
    custeioOuInvestimento: z.string().optional(),
    equipe: z.string().optional(),
  })
);

export const grupoDefeitoEquipamentoFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "nome é obrigatório"),
  codigo: z.string().min(1, "codigo é obrigatório"),
});

type GrupoDefeitoBaseBaseFields = Required<
  Pick<GrupoDefeitoEquipamento, "nome" | "codigo">
>;
export type GrupoDefeitoEquipamentoFormData = Partial<
  Pick<GrupoDefeitoEquipamento, "id">
> &
  GrupoDefeitoBaseBaseFields;

export const subgrupoDefeitoEquipamentoFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "nome é obrigatório"),
  grupoId: z.string().min(1, "grupo é obrigatório"),
});

export type SubgrupoDefeitoEquipamentoFormData = z.infer<
  typeof subgrupoDefeitoEquipamentoFormSchema
>;

export type SubgrupoDefeitoEquipamentoWithRelations =
  SubgrupoDefeitoEquipamento & {
    grupo: GrupoDefeitoEquipamento;
  };
