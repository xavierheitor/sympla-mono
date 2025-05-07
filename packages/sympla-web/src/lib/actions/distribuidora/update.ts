'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { distribuidoraFormSchema } from './distribuidoraFormData';

export const updateDistribuidora = createPrismaUpdateAction(distribuidoraFormSchema, async (data) => {
    if (!data.id) {
        throw new Error('ID é obrigatório para atualização');
    }
    return await prisma.distribuidora.update({
        where: { id: data.id.toString() },
        data: {
            nome: data.nome,
            descricao: data.descricao,
            codigoSap: data.codigoSap,
            updatedBy: data.updatedBy.toString(),
        },
    });
});