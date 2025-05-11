// src/lib/actions/regional/update.ts
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { regionalFormSchema } from './regionalFormSchema';
import { z } from 'zod';

const schema = regionalFormSchema.extend({
    id: z.string(),
});

export const updateRegional = createPrismaUpdateAction(schema, async (data) => {
    return await prisma.regional.update({
        where: { id: data.id },
        data: {
            nome: data.nome,
            descricao: data.descricao,
            codigoSap: data.codigoSap,
            distribuidoraId: data.distribuidoraId,
            updatedBy: data.updatedBy.toString(),
        },
    });
}, 'REGIONAL');
