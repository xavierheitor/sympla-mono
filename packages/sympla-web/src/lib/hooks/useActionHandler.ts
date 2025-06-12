// src/lib/hooks/useActionHandler.ts

'use client';

import { App } from 'antd';
import { mutate } from 'swr';
import { ActionResult } from '../types/ActionTypes';

interface HandleActionParams<T> {
    action: (payload: T) => Promise<ActionResult>;
    payload?: T;
    onSuccessMessage?: string;
    onErrorMessage?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutateKey?: string | any[]; // 🔥 Aqui a correção definitiva
    onSuccess?: () => void;
}

export function useActionHandler() {
    const { message } = App.useApp();

    async function handleAction<T>({
        action,
        payload,
        onSuccessMessage = "Operação realizada com sucesso!",
        onErrorMessage = "Erro ao executar ação.",
        mutateKey,
        onSuccess,
    }: HandleActionParams<T>) {
        try {
            const result = await action(payload ?? {} as T);

            if (result.success) {
                message.success(onSuccessMessage);
                if (mutateKey) mutate(mutateKey);
                if (onSuccess) onSuccess();
            } else {
                message.error(result.error || onErrorMessage);
            }
        } catch (error) {
            console.error(error);
            message.error(onErrorMessage);
        }
    }

    return { handleAction };
}