// src/lib/actions/regional/create.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { regionalFormSchema } from './regionalFormSchema';

export const createRegional = createPrismaCreateAction(regionalFormSchema, async (data) => {
    return await prisma.regional.create({
        data: {
            nome: data.nome,
            descricao: data.descricao,
            codigoSap: data.codigoSap,
            distribuidoraId: data.distribuidoraId,
            createdBy: data.createdBy.toString(),
        },
    });
});
