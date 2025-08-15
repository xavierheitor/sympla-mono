'use server';

import { prisma } from '@/lib/db/prisma';
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
  createPrismaGetAllWithIncludesAction,
} from '@/lib/server-action/actionFactory';
import { checklistPerguntaFormSchema } from './schema';

// CRUD Perguntas

export const createChecklistPergunta = createPrismaCreateAction(
  checklistPerguntaFormSchema,
  async (data) =>
    prisma.checklistPergunta.create({
      data: { ...data, createdBy: data.createdBy?.toString?.() || '' },
    }),
  'CHECKLIST_PERGUNTA',
);

export const updateChecklistPergunta = createPrismaUpdateAction(
  checklistPerguntaFormSchema,
  async (data) =>
    prisma.checklistPergunta.update({
      where: { id: data.id },
      data: { ...data, updatedBy: data.updatedBy?.toString?.() || '' },
    }),
  'CHECKLIST_PERGUNTA',
);

export const deleteChecklistPergunta = createPrismaDeleteAction(
  async (id, session) =>
    prisma.checklistPergunta.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy: session.user.id.toString() },
    }),
  {
    defaultCheck: {
      prismaModel: prisma.checklistPergunta,
      modelName: 'ChecklistPergunta',
    },
    entityName: 'CHECKLIST_PERGUNTA',
  },
);

export const getAllChecklistPerguntas = createPrismaGetAllAction(
  prisma.checklistPergunta,
  'CHECKLIST_PERGUNTA',
);

// Relations Perguntas

export const getAllChecklistPerguntaRelations = createPrismaGetAllAction(
  prisma.checklistPerguntaRelation,
  'CHECKLIST_PERGUNTA_RELATION',
);

// With Includes (perguntas+modelos)

export const getAllChecklistPerguntaRelationsWithIncludes = createPrismaGetAllWithIncludesAction(
  async () =>
    prisma.checklistPerguntaRelation.findMany({
      where: { deletedAt: null },
      orderBy: { ordem: 'asc' },
      include: {
        pergunta: true,
        modelo: true,
      },
    }),
  'CHECKLIST_PERGUNTA_RELATION',
);
