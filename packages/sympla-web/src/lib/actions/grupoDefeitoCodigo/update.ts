
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { grupoDefeitoCodigoFormSchema } from './grupoDefeitoCodigoFormSchema';

export const updateGrupoDefeitoCodigo = createPrismaUpdateAction(grupoDefeitoCodigoFormSchema, async (data) => {
    return await prisma.grupoDefeitoCodigo.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
}, 'GRUPO_DEFEITO_CODIGO');
