import { z } from "zod";
import { Regional, UsuarioMobile, UsuarioMobileRegional } from "@sympla/prisma";

export const usuarioMobileFormSchema = z.object({
  id: z.string().optional(),
  matricula: z.string().min(1, "matricula é obrigatório"),
  nome: z.string().min(1, "nome é obrigatório"),
  email: z.string().email().nullable().optional(),
  senha: z.string().min(1, "senha é obrigatório"),
  funcao: z.string().min(1, "funcao é obrigatório"),
  ativo: z.boolean().optional(),
});

type BaseFields = Required<
  Pick<UsuarioMobile, "matricula" | "nome" | "funcao" | "senha">
> &
  Partial<Pick<UsuarioMobile, "email" | "ativo">>;

export type UsuarioMobileFormData = Partial<Pick<UsuarioMobile, "id">> &
  BaseFields;

export const usuarioMobileRegionalFormSchema = z.object({
  id: z.string().optional(),
  usuarioMobileId: z.string().min(1, "usuarioMobileId é obrigatório"),
  regionalId: z.string().min(1, "regionalId é obrigatório"),
});

type UsuarioMobileRegionalBaseFields = Required<
  Pick<UsuarioMobileRegional, "usuarioMobileId" | "regionalId">
>;
export type UsuarioMobileRegionalFormData = Partial<
  Pick<UsuarioMobileRegional, "id">
> &
  UsuarioMobileRegionalBaseFields;

export type UsuarioMobileRegionalWithIncludes = UsuarioMobileRegional & {
  usuarioMobile: UsuarioMobile;
  regional: Regional;
};
