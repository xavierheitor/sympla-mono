
'use server';

import { prisma } from '@/lib/db/prisma';
import { createPrismaCreateAction } from '@/lib/server-action/actionFactory';
import { userFormSchema } from './userFormSchema';

export const createUser = createPrismaCreateAction(userFormSchema, async (data) => {
    return await prisma.user.create({
        data: {
            ...data,
            createdBy: data.createdBy?.toString?.() || '',
        },
    });
});
