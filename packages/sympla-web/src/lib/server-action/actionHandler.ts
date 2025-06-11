import { ZodSchema } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth.config";
import { Session } from "next-auth";
import { logger, withLogging } from "../utils/logger";
import { ActionResult } from "../types/ActionTypes";

type ActionType = "create" | "update" | "delete" | "get" | "list";

type ActionOptions = {
  actionType?: ActionType;
  entityName?: string;
};

/**
 * Handle a server action with validation, session and automatic audit fields.
 */
export async function handleServerAction<TInput, TOutput>(
  schema: ZodSchema<TInput>,
  logic: (input: TInput, session: Session) => Promise<TOutput>,
  rawInput: unknown = {},
  options?: ActionOptions
): Promise<ActionResult<TOutput>> {

  try {
    //obtem a sessão do usuário
    const session = await getServerSession(authOptions);
    //se não houver sessão, retorna um erro
    if (!session)
      return {
        success: false,
        error: "Não autenticado",
        redirectToLogin: true,
      };

    //valida o input
    const parseResult = schema.safeParse(rawInput);
    //se não for válido, retorna um erro
    if (!parseResult.success) {
      return {
        success: false,
        error: parseResult.error.message,
      };
    }

    //obtem o input validado
    const input = parseResult.data;

    //obtem o nome da entidade e o tipo de ação
    const entityName = options?.entityName || schema.description || "UNKNOWN_ENTITY";
    const actionType = options?.actionType || "unknown";

    // 🎯 Adiciona os campos de auditoria automaticamente
    const userId = session.user.id;
    const now = new Date();

    // 🎯 Adiciona os campos de auditoria automaticamente
    const auditFields =
      actionType === "create"
        ? { createdBy: userId, createdAt: now }
        : actionType === "update"
          ? { updatedBy: userId, updatedAt: now }
          : actionType === "delete"
            ? { deletedBy: userId, deletedAt: now }
            : {};

    // 🎯 Adiciona os campos de auditoria automaticamente
    const finalInput = { ...input, ...auditFields };

    // 🎯 Adiciona os campos de auditoria automaticamente
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
