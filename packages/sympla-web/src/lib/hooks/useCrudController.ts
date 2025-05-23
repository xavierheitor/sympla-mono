// src/hooks/useCrudController.ts
'use client';

import { useState } from 'react';
import { mutate } from 'swr';
import { useActionHandler } from './useActionHandler';
import { ActionResult } from '../types/ActionResult';

export function useCrudController<T>(mutateKey: string) {
    const [isOpen, setIsOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);

    const { handleAction } = useActionHandler(); // ✅ CORRETO

    const open = (item?: T) => {
        setEditingItem(item ?? null);
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
        setEditingItem(null);
    };

    const exec = async (
        action: () => Promise<ActionResult>,
        successMessage: string,
        onSuccess?: () => void
    ) => {
        setLoading(true);
        await handleAction({
            action: () => action(),
            onSuccessMessage: successMessage,
            mutateKey,
            onSuccess: () => {
                mutate(mutateKey);
                onSuccess?.();
                close();
            },
        });
        setLoading(false);
    };

    return {
        isOpen,
        editingItem,
        loading,
        open,
        close,
        exec,
    };
}