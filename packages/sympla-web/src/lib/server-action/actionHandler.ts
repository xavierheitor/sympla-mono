// apps/sympla-web/lib/server-action/actionHandler.ts
import { ZodSchema } from 'zod';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/utils/auth.config';
import { Session } from 'next-auth';

export type ActionResult<T> =
    | { success: true; data: T }
    | { success: false; error: string };

/**
 * Handle a server action with validation and session.
 * @param schema Zod validation schema
 * @param logic Function that receives validated input and session
 * @param rawInput Input to validate (usually from form or client)
 */
export async function handleServerAction<TInput, TOutput>(
    schema: ZodSchema<TInput>,
    logic: (input: TInput, session: Session) => Promise<TOutput>,
    rawInput: unknown = {}
): Promise<ActionResult<TOutput>> {
    try {
        const session = await getServerSession(authOptions);
        if (!session) return { success: false, error: 'Não autenticado' };

        const input = schema.parse(rawInput);
        const result = await logic(input, session);

        return { success: true, data: result };
    } catch (err: unknown) {
        console.error('[ServerActionError]', err);
        return {
            success: false,
            error: err instanceof Error ? err.message : 'Erro interno',
        };
    }
}