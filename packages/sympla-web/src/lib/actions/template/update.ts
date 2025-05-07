'use server';

import { prisma } from '@/lib/db/prisma';
import { z } from 'zod';
import { ActionResult } from '../common/types';

const schema = z.object({
    id: z.string().min(1, 'ID é obrigatório'),
    nome: z.string().min(1, 'Nome é obrigatório'),
    descricao: z.string().optional(),
    codigoSap: z.string().optional(),
});

export default async function updateItem(data: unknown): Promise<ActionResult> {
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
        console.error('Erro de validação:', parsed.error.flatten());
        return { success: false, error: 'Dados inválidos' };
    }

    const { id, ...rest } = parsed.data;

    try {
        const atualizado = await prisma.distribuidora.update({
            where: { id },
            data: {
                ...rest,
                updatedBy: '1',
            },
        });

        return { success: true, data: atualizado };
    } catch (error) {
        console.error('Erro ao atualizar item:', error);
        return { success: false, error: 'Erro ao atualizar item' };
    }
}