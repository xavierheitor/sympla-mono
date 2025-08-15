'use client';

import { useState } from 'react';
import { useActionHandler } from './useActionHandler';
import { ActionResult } from '../types/ActionTypes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useCrudController<T>(mutateKey: string | any[]) {
  const [isOpen, setIsOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);

  const { handleAction } = useActionHandler();

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
    onSuccess?: () => void,
  ) => {
    setLoading(true);
    await handleAction({
      action: () => action(),
      onSuccessMessage: successMessage,
      mutateKey,
      onSuccess: () => {
        onSuccess?.();
        close();
      },
    });
    setLoading(false);
  };

  return { isOpen, editingItem, loading, open, close, exec };
}
