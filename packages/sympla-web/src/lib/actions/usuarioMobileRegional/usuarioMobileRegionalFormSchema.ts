import { z } from 'zod';
import { Regional, UsuarioMobile, UsuarioMobileRegional } from '@sympla/prisma';

export const usuarioMobileRegionalFormSchema = z.object({
  id: z.string().optional(),
  usuarioMobileId: z.string().min(1, 'usuarioMobileId é obrigatório'),
  regionalId: z.string().min(1, 'regionalId é obrigatório'),
});

type BaseFields = Required<Pick<UsuarioMobileRegional, 'usuarioMobileId' | 'regionalId'>>;
export type UsuarioMobileRegionalFormData = Partial<Pick<UsuarioMobileRegional, 'id'>> & BaseFields;

export type UsuarioMobileRegionalWithIncludes = UsuarioMobileRegional & {
  usuarioMobile: UsuarioMobile;
  regional: Regional;
};
