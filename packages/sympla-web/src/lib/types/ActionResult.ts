// src/lib/types/ActionResult.ts
export interface ActionResult<T = unknown> {
    success: boolean;
    data?: T;
    error?: string;
}
