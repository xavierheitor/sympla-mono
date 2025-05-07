// apps/sympla-web/lib/server-action/actionHandler.ts
import { ZodSchema } from 'zod';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/utils/auth.config';

type ActionResult<T> = { success: true; data: T } | { success: false; error: string };

export async function handleServerAction<TInput, TOutput>(
    schema: ZodSchema<TInput>,
    logic: (input: TInput, session: any) => Promise<TOutput>
): Promise<ActionResult<TOutput>> {
    try {
        const session = await getServerSession(authOptions);
        if (!session) return { success: false, error: 'Não autenticado' };

        const input = schema.parse(Object.fromEntries(await getFormData()));
        const result = await logic(input, session);
        return { success: true, data: result };
    } catch (err: unknown) {
        console.error('[ServerActionError]', err);
        return { success: false, error: err instanceof Error ? err.message : 'Erro interno' };
    }
}

async function getFormData(): Promise<FormData> {
    if (typeof window !== 'undefined') throw new Error('Apenas no servidor');
    const body = await import('next/headers').then((m) => m.headers());
    return new FormData(); // ajuste conforme fonte do input
}