import { z } from "zod";
import {
  Defeito as PrismaDefeito,
  GrupoDefeitoEquipamento as PrismaGrupoDefeitoEquipamento,
  SubgrupoDefeitoEquipamento as PrismaSubgrupoDefeitoEquipamento,
} from "@sympla/prisma";

// Reexports dos tipos Prisma (padronização global)
export type Defeito = PrismaDefeito;
export type GrupoDefeitoEquipamento = PrismaGrupoDefeitoEquipamento;
export type SubgrupoDefeitoEquipamento = PrismaSubgrupoDefeitoEquipamento;

// ========== DEFEITO ==========

export const defeitoFormSchema = z.object({
  id: z.string().optional(),
  codigoSap: z.string().min(1, "codigoSap é obrigatório"),
  descricao: z.string().min(1, "descricao é obrigatório"),
  grupoId: z.string().min(1, "grupo é obrigatório"),
  subgrupoId: z.string().min(1, "subgrupo é obrigatório"),
});

type DefeitoBaseFields = Required<
  Pick<Defeito, "codigoSap" | "descricao" | "grupoId" | "subgrupoId">
>;
export type DefeitoFormData = Partial<Pick<Defeito, "id">> & DefeitoBaseFields;

export type DefeitoWithRelations = Defeito & {
  grupo: GrupoDefeitoEquipamento;
  subgrupo: SubgrupoDefeitoEquipamento & { grupo: GrupoDefeitoEquipamento };
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

// ========== GRUPO DEFEITO ==========

export const grupoDefeitoEquipamentoFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "nome é obrigatório"),
  codigo: z.string().min(1, "codigo é obrigatório"),
});

type GrupoDefeitoBaseFields = Required<
  Pick<GrupoDefeitoEquipamento, "nome" | "codigo">
>;
export type GrupoDefeitoEquipamentoFormData = Partial<
  Pick<GrupoDefeitoEquipamento, "id">
> & GrupoDefeitoBaseFields;

export type GrupoDefeitoEquipamentoWithRelations = GrupoDefeitoEquipamento & {
  subgrupos: SubgrupoDefeitoEquipamento[];
};
// export const createManyGrupoDefeitosSchema = z.array(
//   z.object({
//     nome: z.string().min(1),
//     codigo: z.string().min(1),
//   })
// ).describe('GrupoDefeitoEquipamento');

export const createManyGrupoDefeitosSchema = z.array(
  z.object({
    nome: z.string().min(1),
    codigo: z.string().min(1),
  })
);

export const subgrupoDefeitoEquipamentoFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "nome é obrigatório"),
  grupoId: z.string().min(1, "grupo é obrigatório"),
});

type SubgrupoBaseFields = Required<
  Pick<SubgrupoDefeitoEquipamento, "nome" | "grupoId">
>;
export type SubgrupoDefeitoEquipamentoFormData = Partial<
  Pick<SubgrupoDefeitoEquipamento, "id">
> & SubgrupoBaseFields;

export type SubgrupoDefeitoEquipamentoWithRelations =
  SubgrupoDefeitoEquipamento & {
    grupo: GrupoDefeitoEquipamento;
  };

export const createManySubgrupoDefeitosSchema = z
  .array(
    z.object({
      grupoCodigo: z.string().min(1),
      nome: z.string().min(1),
    })
  )
  .describe("SubgrupoDefeitoEquipamento");