import { z } from 'zod';
import { ChecklistModelo } from "@sympla/prisma";

export const checklistModeloFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "nome é obrigatório"),
  descricao: z.string().nullable(),
  tipoAtividadeIds: z.array(z.string().min(1)).optional(),
});

type BaseFields = Required<Pick<ChecklistModelo, "nome" | "descricao">>;
export type ChecklistModeloFormData = Partial<Pick<ChecklistModelo, "id">> &
  BaseFields;

export type ChecklistModeloWithIncludes = ChecklistModelo & {};
