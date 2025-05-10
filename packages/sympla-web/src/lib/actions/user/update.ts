
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaUpdateAction } from '@/lib/server-action/actionFactory';
import { userFormSchema } from './userFormSchema';

export const updateUser = createPrismaUpdateAction(userFormSchema, async (data) => {
    return await prisma.user.update({
        where: { id: data.id },
        data: {
            ...data,
            updatedBy: data.updatedBy?.toString?.() || '',
        },
    });
});
