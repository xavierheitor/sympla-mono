import {
  CategoriaSubestacao,
  PropriedadeSubestacao,
  Regional,
  Subestacao,
  TensaoSubestacao,
} from "@sympla/prisma";
import { z } from "zod";

export const subestacaoFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "Nome é obrigatório"),
  sigla: z.string().min(1, "Sigla é obrigatório"),
  localInstalacao: z.string().nullable().optional(),
  codigoSap: z.string().min(1, "Código SAP é obrigatório"),
  propriedade: z.nativeEnum(PropriedadeSubestacao),
  categoria: z.nativeEnum(CategoriaSubestacao),
  tensao: z.nativeEnum(TensaoSubestacao),
  regionalId: z.string().min(1, "Regional é obrigatório"),
});

export type SubestacaoFormData = {
  id?: string;
} & Required<
  Pick<
    Subestacao,
    | "nome"
    | "sigla"
    | "localInstalacao"
    | "codigoSap"
    | "propriedade"
    | "categoria"
    | "tensao"
    | "regionalId"
  >
>;

export type SubestacaoWithRegional = Subestacao & {
  regional: Regional;
};
