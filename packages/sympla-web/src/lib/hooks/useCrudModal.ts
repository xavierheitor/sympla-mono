// src/hooks/useCrudModal.ts
import { useState } from "react";

export interface CrudModalState<T> {
    isOpen: boolean;
    editingItem: T | null;
    loading: boolean;
    open: (item?: T) => void;
    close: () => void;
    startLoading: () => void;
    stopLoading: () => void;
}

export function useCrudModal<T>(): CrudModalState<T> {
    const [isOpen, setIsOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);

    const open = (item?: T) => {
        setEditingItem(item ?? null);
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
    };

    return {
        isOpen,
        editingItem,
        loading,
        open,
        close,
        startLoading: () => setLoading(true),
        stopLoading: () => setLoading(false),
    };
}
