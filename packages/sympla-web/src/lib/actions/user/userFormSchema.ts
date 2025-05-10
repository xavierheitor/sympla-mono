import { z } from 'zod';
import { User } from '@sympla/prisma';

export const userFormSchema = z.object({
  id: z.string().optional(),
  username: z.string().min(1, 'username é obrigatório'),
  email: z.string().nullable(),
  password: z.string().min(1, 'password é obrigatório'),
  name: z.string().nullable(),
});

type BaseFields = Required<Pick<User, 'username' | 'email' | 'password' | 'name'>>;
export type UserFormData = Partial<Pick<User, 'id'>> & BaseFields;
