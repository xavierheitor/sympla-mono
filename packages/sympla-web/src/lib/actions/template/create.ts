'use server';

import { prisma } from '@/lib/db/prisma';
import { z } from 'zod';
import { ActionResult } from '../common/types';

const schema = z.object({
    nome: z.string().min(1, 'Nome é obrigatório'),
    descricao: z.string().optional(),
    codigoSap: z.string().optional(),
});

export default async function createItem(data: unknown): Promise<ActionResult> {
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
        console.error('Erro de validação:', parsed.error.flatten());
        return { success: false, error: 'Dados inválidos' };
    }

    try {
        const novo = await prisma.distribuidora.create({
            data: {
                ...parsed.data,
                createdBy: '1', // ajustar conforme controle de sessão
            },
        });

        return { success: true, data: novo };
    } catch (error) {
        console.error('Erro ao criar item:', error);
        return { success: false, error: 'Erro ao salvar item' };
    }
}