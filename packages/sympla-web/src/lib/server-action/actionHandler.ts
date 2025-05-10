/* eslint-disable @typescript-eslint/no-explicit-any */
import { ZodSchema } from 'zod';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/utils/auth.config';
import { Session } from 'next-auth';
import { withLogging } from '../utils/logger';

export type ActionResult<T> =
    | { success: true; data: T }
    | { success: false; error: string };

function getEntityNameFromSchema(schema: ZodSchema<unknown>): string {
    return (schema as any)?._def?.typeName === 'ZodObject'
        ? (schema as any)?._def?.description || 'UNKNOWN_ENTITY'
        : 'UNKNOWN_ENTITY';
}

/**
 * Handle a server action with validation and session.
 * @param schema Zod validation schema
 * @param logic Function that receives validated input and session
 * @param rawInput Input to validate (usually from form or client)
 * @param options Optional metadata for logging
 */
export async function handleServerAction<TInput, TOutput>(
    schema: ZodSchema<TInput>,
    logic: (input: TInput, session: Session) => Promise<TOutput>,
    rawInput: unknown = {},
    options?: {
        actionType?: 'create' | 'update' | 'delete' | 'get' | 'list';
        entityName?: string;
    }
): Promise<ActionResult<TOutput>> {
    try {
        const session = await getServerSession(authOptions);
        if (!session) return { success: false, error: 'Não autenticado' };

        const input = schema.parse(rawInput);

        const entityName = options?.entityName ?? getEntityNameFromSchema(schema);

        const result = options?.actionType
            ? await withLogging(session, options.actionType, entityName, input, () => logic(input, session))
            : await logic(input, session);

        return { success: true, data: result };
    } catch (err: unknown) {
        console.error('[ServerActionError]', err);
        return {
            success: false,
            error: err instanceof Error ? err.message : 'Erro interno',
        };
    }
}