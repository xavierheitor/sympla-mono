'use server';

import { prisma } from '@/lib/db/prisma';
import { ActionResult } from '../common/types';

export default async function deleteItem(data: { id: string }): Promise<ActionResult> {
    if (!data?.id) return { success: false, error: 'ID não informado' };

    try {
        await prisma.distribuidora.update({
            where: { id: data.id },
            data: {
                deletedAt: new Date(),
                deletedBy: '1',
            },
        });

        return { success: true };
    } catch (error) {
        console.error('Erro ao excluir item:', error);
        return { success: false, error: 'Erro ao excluir item' };
    }
}