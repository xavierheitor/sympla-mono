import { z } from "zod";
import {
  AprModelo,
  AprModeloTipoAtividadeRelation,
  AprPerguntas,
  TipoAtividade,
} from "@sympla/prisma";

export const aprModeloFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "nome é obrigatório"),
  descricao: z.string().nullable(),
});

type AprModeloBaseFields = Required<Pick<AprModelo, "nome" | "descricao">>;
export type AprModeloFormData = Partial<Pick<AprModelo, "id">> & AprModeloBaseFields;

export type AprModeloWithIncludes = AprModelo & {
  tipoAtividades: TipoAtividade[];
};

export const aprModeloTipoAtividadeRelationFormSchema = z.object({
  id: z.string(),
  modeloId: z.string(),
  tipoAtividadeId: z.string(),
});

type AprModeloTipoAtividadeRelationBaseFields = Required<
  Pick<AprModeloTipoAtividadeRelation, "modeloId" | "tipoAtividadeId">
>;
export type AprModeloTipoAtividadeRelationFormData = Partial<
  Pick<AprModeloTipoAtividadeRelation, "id">
  > & AprModeloTipoAtividadeRelationBaseFields;

export type AprModeloTipoAtividadeRelationWithIncludes =
  AprModeloTipoAtividadeRelation & {
    modelo: AprModelo;
    tipoAtividade: TipoAtividade;
  };

// Agora temos dois input schemas para set relations
export const inputSchema = z.object({
  modeloId: z.string().min(1),
  tipoAtividadeIds: z.array(z.string().min(1)),
});

export const inputPerguntaSchema = z.object({
  modeloId: z.string().min(1),
  perguntaIds: z.array(z.string().min(1)),
});

export const aprPerguntasFormSchema = z.object({
  id: z.string().optional(),
  pergunta: z.string().min(1, "pergunta é obrigatório"),
});

type AprPerguntasBaseFields = Required<Pick<AprPerguntas, "pergunta">>;
export type AprPerguntasFormData = Partial<Pick<AprPerguntas, "id">> & AprPerguntasBaseFields;