import { z } from 'zod';

export const subgrupoDefeitoEquipamentoFormSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, 'nome é obrigatório'),
  grupoId: z.string().min(1, 'grupo é obrigatório'),
});

export type SubgrupoDefeitoEquipamentoFormData = z.infer<typeof subgrupoDefeitoEquipamentoFormSchema>;