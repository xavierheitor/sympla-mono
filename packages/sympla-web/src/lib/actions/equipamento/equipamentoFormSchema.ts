import { z } from "zod";
import { Equipamento, Subestacao } from "@sympla/prisma";

export const equipamentoFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "nome é obrigatório"),
  descricao: z.string().optional(),
  subestacaoId: z.string().min(1, "subestacao é obrigatório"),
  grupoDefeitoCodigo: z.string().min(1, "grupoDefeitoCodigo é obrigatório"),
});

type BaseFields = Required<
  Pick<Equipamento, "nome" | "subestacaoId" | "grupoDefeitoCodigo">
>;
export type EquipamentoFormData = Partial<Pick<Equipamento, "id">> & BaseFields;

export type EquipamentoWithRelations = Equipamento & {
  subestacao?: Subestacao;
};
