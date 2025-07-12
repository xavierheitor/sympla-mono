import { z } from "zod";
import { Equipamento, Subestacao, Regional } from "@sympla/prisma";

export const equipamentoFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "nome é obrigatório"),
  descricao: z.string().optional().nullable(),
  subestacaoId: z.string().min(1, "subestacao é obrigatório"),
  grupoDefeitoCodigo: z.string().optional().nullable(),
});

type BaseFields = Required<
  Pick<Equipamento, "nome" | "subestacaoId" | "descricao" | "grupoDefeitoCodigo">
>;
export type EquipamentoFormData = Partial<Pick<Equipamento, "id">> & BaseFields;

export type EquipamentoWithRelations = Equipamento & {
  subestacao: Subestacao & { regional: Regional };
};

export const linhaSchema = z.object({
  SE: z.string().min(1),
  EQUIPAMENTOS: z.string().min(1),
  'GRUPO DEFEITO CODE': z
    .union([z.coerce.string(), z.null(), z.undefined()])
    .transform((val) =>
      typeof val === 'string' && val.trim() === '' ? null : val
    )
    .optional()
    .nullable(),
});