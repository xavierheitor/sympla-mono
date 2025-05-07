import { ZodSchema, z } from 'zod';
import { handleServerAction } from './actionHandler';
import { ActionResult } from '@/lib/actions/common/types';
import { Session } from 'next-auth';
// Criação
export function createPrismaCreateAction<TInput, TOutput>(
    schema: ZodSchema<TInput>,
    createFn: (input: TInput & { createdBy: number }) => Promise<TOutput>
): (input: TInput) => Promise<ActionResult<TOutput>> {
    return (input) =>
        handleServerAction(schema, async (_input, session) => {
            return await createFn({ ..._input, createdBy: Number(session.user.id) });
        }, input);
}

// Atualização
export function createPrismaUpdateAction<TInput, TOutput>(
    schema: ZodSchema<TInput>,
    updateFn: (input: TInput & { updatedBy: number }) => Promise<TOutput>
): (input: TInput) => Promise<ActionResult<TOutput>> {
    return (input) =>
        handleServerAction(schema, async (_input, session) => {
            return await updateFn({ ..._input, updatedBy: Number(session.user.id) });
        }, input);
}

// Exclusão
// Exclusão com verificação automática se o registro existe e não está soft deleted
export function createPrismaDeleteAction<TOutput>(
    deleteFn: (id: string, session: Session) => Promise<TOutput>,
    options?: {
        checkIfExists?: (id: string) => Promise<boolean>;
        defaultCheck?: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            prismaModel: any; // ex: prisma.distribuidora
            modelName: string; // ex: 'Distribuidora'
        };
    }
): (id: string) => Promise<ActionResult<TOutput>> {
    return async (id: string) => {
        return await handleServerAction(z.any(), async (_input, session) => {
            let exists = true;

            // Se passou função personalizada
            if (options?.checkIfExists) {
                exists = await options.checkIfExists(id);
            }

            // Se passou modelo Prisma, faz checagem genérica
            else if (options?.defaultCheck) {
                const record = await options.defaultCheck.prismaModel.findUnique({
                    where: { id },
                    select: { deletedAt: true },
                });
                exists = !!record && !record.deletedAt;
            }

            if (!exists) throw new Error('Registro não encontrado ou já excluído');

            return await deleteFn(id, session);
        });
    };
}

// Busca por ID
export function createPrismaGetByIdAction<TOutput>(
    getFn: (id: number) => Promise<TOutput>
): (id: number) => Promise<ActionResult<TOutput>> {
    return (id) =>
        handleServerAction(z.any(), async () => {
            return await getFn(id);
        });
}


// Listagem com suporte a soft delete (deletedAt: null)
export function createPrismaGetAllAction<TOutput>(
    getAllFn: (filter: { deletedAt: null }) => Promise<TOutput[]>
): () => Promise<ActionResult<TOutput[]>> {
    return () =>
        handleServerAction(z.any(), async () => {
            return await getAllFn({ deletedAt: null });
        });
}