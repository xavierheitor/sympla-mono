'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { distribuidoraFormSchema } from './distribuidoraFormData';

export const createDistribuidora = createPrismaCreateAction(distribuidoraFormSchema, async (data) => {
    return await prisma.distribuidora.create({
        data: {
            nome: data.nome,
            descricao: data.descricao,
            codigoSap: data.codigoSap,
            createdBy: data.createdBy.toString(),
        },
    });
}, 'DISTRIBUIDORA');