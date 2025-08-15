import { z } from 'zod';
import {
  ChecklistModelo,
  ChecklistModeloTipoAtividadeRelation,
  ChecklistPergunta,
  ChecklistPerguntaRelation,
  TipoAtividade,
} from '@sympla/prisma';

// ===== Formulário principal do modelo =====

export const checklistModeloFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, 'nome é obrigatório'),
  descricao: z.string().nullable(),
});

type ChecklistModeloBaseFields = Required<Pick<ChecklistModelo, 'nome' | 'descricao'>>;

export type ChecklistModeloFormData = Partial<Pick<ChecklistModelo, 'id'>> &
  ChecklistModeloBaseFields;

export type ChecklistModeloWithIncludes = ChecklistModelo & {
  tipoAtividades: TipoAtividade[];
};

// ===== Relation TipoAtividade =====

export const checklistModeloTipoAtividadeRelationFormSchema = z.object({
  id: z.string(),
  modeloId: z.string(),
  tipoAtividadeId: z.string(),
});

type ChecklistModeloTipoAtividadeRelationBaseFields = Required<
  Pick<ChecklistModeloTipoAtividadeRelation, 'modeloId' | 'tipoAtividadeId'>
>;

export type ChecklistModeloTipoAtividadeRelationFormData = Partial<
  Pick<ChecklistModeloTipoAtividadeRelation, 'id'>
> &
  ChecklistModeloTipoAtividadeRelationBaseFields;

export type ChecklistModeloTipoAtividadeRelationWithIncludes =
  ChecklistModeloTipoAtividadeRelation & {
    modelo: ChecklistModelo;
    tipoAtividade: TipoAtividade;
  };

// ===== Formulário de Perguntas =====

export const checklistPerguntaFormSchema = z.object({
  id: z.string().optional(),
  pergunta: z.string().min(1, 'pergunta é obrigatório'),
});

type ChecklistPerguntaBaseFields = Required<Pick<ChecklistPergunta, 'pergunta'>>;
export type ChecklistPerguntaFormData = Partial<Pick<ChecklistPergunta, 'id'>> &
  ChecklistPerguntaBaseFields;

// ===== Relation Pergunta -> Modelo =====

export const checklistPerguntaRelationFormSchema = z.object({
  id: z.string().optional(),
  perguntaId: z.string().min(1, 'perguntaId é obrigatório'),
  modeloId: z.string().min(1, 'modeloId é obrigatório'),
  ordem: z.number().min(0, 'ordem é obrigatório'),
});

type ChecklistPerguntaRelationBaseFields = Required<
  Pick<ChecklistPerguntaRelation, 'perguntaId' | 'modeloId' | 'ordem'>
>;
export type ChecklistPerguntaRelationFormData = Partial<Pick<ChecklistPerguntaRelation, 'id'>> &
  ChecklistPerguntaRelationBaseFields;

export type ChecklistPerguntaRelationWithIncludes = ChecklistPerguntaRelation & {
  pergunta: ChecklistPergunta;
  modelo: ChecklistModelo;
};

// ===== Agora os dois inputs para SetRelations (MULTI-RELATION FACTORY) =====

export const inputSchema = z.object({
  modeloId: z.string().min(1),
  tipoAtividadeIds: z.array(z.string().min(1)),
});

export const inputPerguntaSchema = z.object({
  modeloId: z.string().min(1),
  perguntaIds: z.array(z.string().min(1)),
});
