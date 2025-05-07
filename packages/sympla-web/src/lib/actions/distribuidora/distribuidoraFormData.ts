import { Distribuidora } from '@sympla/prisma';
import { z } from 'zod';

// Zod schema usado só para validação do formulário
export const distribuidoraFormSchema = z.object({
    id: z.string().optional(),
    nome: z.string().min(1, 'Nome é obrigatório'),
    descricao: z.string().min(1, 'Descrição é obrigatória').nullable(),
    codigoSap: z.string().min(1, 'Código SAP é obrigatório').nullable(),
});

// Tipo inferido para uso no form
type BaseFields = Required<Pick<Distribuidora, 'nome' | 'descricao' | 'codigoSap'>>;
export type DistribuidoraFormData = Partial<Pick<Distribuidora, 'id'>> & BaseFields;