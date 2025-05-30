import { ZodSchema } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth.config";
import { Session } from "next-auth";
import { logger, withLogging } from "../utils/logger";
import { ActionResult } from "../types/ActionResult";

type ActionType = "create" | "update" | "delete" | "get" | "list";

/**
 * Handle a server action with validation, session and automatic audit fields.
 */
export async function handleServerAction<TInput, TOutput>(
  schema: ZodSchema<TInput>,
  logic: (input: TInput, session: Session) => Promise<TOutput>,
  rawInput: unknown = {},
  options?: {
    actionType?: ActionType;
    entityName?: string;
  }
): Promise<ActionResult<TOutput>> {
  try {
    const session = await getServerSession(authOptions);
    if (!session)
      return {
        success: false,
        error: "Não autenticado",
        redirectToLogin: true,
      };

    const input = schema.parse(rawInput);

    const entityName = options?.entityName || "UNKNOWN_ENTITY";
    const actionType = options?.actionType || "unknown";

    // 🎯 Adiciona os campos de auditoria automaticamente
    const userId = session.user.id;
    const now = new Date();

    const auditFields =
      actionType === "create"
        ? { createdBy: userId, createdAt: now }
        : actionType === "update"
          ? { updatedBy: userId, updatedAt: now }
          : actionType === "delete"
            ? { deletedBy: userId, deletedAt: now }
            : {};

    const finalInput = { ...input, ...auditFields };

    const result = await withLogging(
      session,
      actionType as ActionType,
      entityName,
      input,
      () => logic(finalInput, session)
    );

    return { success: true, data: result };
  } catch (err: unknown) {
    logger.error(`[ServerActionError] ${err}`);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Erro interno",
    };
  }
}
