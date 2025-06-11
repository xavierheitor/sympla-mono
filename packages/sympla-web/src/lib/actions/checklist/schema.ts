import { z } from "zod";
import {
  ChecklisrPerguntaRelation,
  ChecklistModelo,
  ChecklistPergunta,
} from "@sympla/prisma";

export const checklistModeloFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "nome é obrigatório"),
  descricao: z.string().nullable(),
  tipoAtividadeIds: z.array(z.string().min(1)).optional(),
});

type ChecklistModeloBaseFields = Required<
  Pick<ChecklistModelo, "nome" | "descricao">
>;
export type ChecklistModeloFormData = Partial<Pick<ChecklistModelo, "id">> &
  ChecklistModeloBaseFields & { tipoAtividadeIds: string[] };

export type ChecklistModeloWithIncludes = ChecklistModelo & {};

export const checklisrPerguntaRelationFormSchema = z.object({
  id: z.string().optional(),
  perguntaId: z.string().min(1, "perguntaId é obrigatório"),
  modeloId: z.string().min(1, "modeloId é obrigatório"),
  ordem: z.number().min(0, "ordem é obrigatório"),
});

type ChecklistPerguntaRelationBaseFields = Required<
  Pick<ChecklisrPerguntaRelation, "perguntaId" | "modeloId" | "ordem">
>;
export type ChecklisrPerguntaRelationFormData = Partial<
  Pick<ChecklisrPerguntaRelation, "id">
> &
  ChecklistPerguntaRelationBaseFields;

export type ChecklisrPerguntaRelationWithIncludes =
  ChecklisrPerguntaRelation & {
    pergunta: ChecklistPergunta;
    modelo: ChecklistModelo;
  };

export const checklistPerguntaFormSchema = z.object({
  id: z.string().optional(),
  pergunta: z.string().min(1, "pergunta é obrigatório"),
});

export const checklistPerguntaRelationFormSchema = z.object({
  id: z.string().optional(),
  perguntaId: z.string().min(1, "perguntaId é obrigatório"),
  modeloId: z.string().min(1, "modeloId é obrigatório"),
  ordem: z.number().min(0, "ordem é obrigatório"),
});

type ChecklistPerguntaBaseFields = Required<
  Pick<ChecklistPergunta, "pergunta">
>;
export type ChecklistPerguntaFormData = Partial<Pick<ChecklistPergunta, "id">> &
  ChecklistPerguntaBaseFields;

export const inputSchema = z.object({
  modeloId: z.string().min(1),
  tipoAtividadeIds: z.array(z.string().min(1)),
});
