import {
  AprModelo,
  AprModeloTipoAtividadeRelation,
  TipoAtividade,
} from "@sympla/prisma";
import { z } from "zod";

export const aprModeloTipoAtividadeRelationFormSchema = z.object({
  id: z.string(),
  modeloId: z.string(),
  tipoAtividadeId: z.string(),
});

type BaseFields = Required<
  Pick<AprModeloTipoAtividadeRelation, "modeloId" | "tipoAtividadeId">
>;
export type AprModeloTipoAtividadeRelationFormData = Partial<
  Pick<AprModeloTipoAtividadeRelation, "id">
> &
  BaseFields;

export type AprModeloTipoAtividadeRelationWithIncludes =
  AprModeloTipoAtividadeRelation & {
    modelo: AprModelo;
    tipoAtividade: TipoAtividade;
  };
