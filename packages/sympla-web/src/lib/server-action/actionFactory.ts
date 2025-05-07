// apps/sympla-web/lib/server-action/actionFactory.ts
import { ZodSchema } from 'zod';
import { handleServerAction } from './actionHandler';

export function createPrismaCreateAction<TInput>(
    schema: ZodSchema<TInput>,
    createFn: (input: TInput) => Promise<unknown>
) {
    return () =>
        handleServerAction(schema, async (input, _session) => {
            return await createFn(input);
        });
}