import { Regional } from '@sympla/prisma';
import { z } from 'zod';

// Schema de validação para o formulário
export const regionalFormSchema = z.object({
    id: z.string().optional(),
    nome: z.string().min(1, 'Nome é obrigatório'),
    descricao: z.string().nullable(),
    codigoSap: z.string().nullable(),
    distribuidoraId: z.string().min(1, 'Distribuidora é obrigatória'),
});

// Tipo inferido a partir do schema + compatível com o modelo Prisma
type BaseFields = Required<Pick<Regional, 'nome' | 'codigoSap' | 'distribuidoraId'>> &
    Pick<Regional, 'descricao'>;

export type RegionalFormData = Partial<Pick<Regional, 'id'>> & BaseFields;