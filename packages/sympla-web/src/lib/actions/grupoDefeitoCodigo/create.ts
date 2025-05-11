
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { grupoDefeitoCodigoFormSchema } from './grupoDefeitoCodigoFormSchema';

export const createGrupoDefeitoCodigo = createPrismaCreateAction(grupoDefeitoCodigoFormSchema, async (data) => {
    return await prisma.grupoDefeitoCodigo.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
}, 'GRUPO_DEFEITO_CODIGO');
