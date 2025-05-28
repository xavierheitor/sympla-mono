/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import path from "path";
import { Session } from "next-auth";

const logPathFromEnv = process.env.LOG_PATH || "./logs";
const LOG_DIR = path.resolve(logPathFromEnv);
const LOG_FILE = path.join(LOG_DIR, "app.log");

// Garante que o diretório e arquivo existem
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}
if (!fs.existsSync(LOG_FILE)) {
  fs.writeFileSync(LOG_FILE, "", "utf8");
}

export type LogLevel = "info" | "warn" | "error" | "action" | "access";

interface LogPayload {
  level?: LogLevel;
  message: string;
  context?: Record<string, any>;
}

function formatLog({ level = "info", message, context }: LogPayload): string {
  const timestamp = new Date().toISOString();
  const ctx = context ? ` | ${JSON.stringify(context)}` : "";
  return `[${timestamp}] [${level.toUpperCase()}] ${message}${ctx}`;
}

function writeLog(line: string) {
  fs.appendFile(LOG_FILE, line + "\n", (err) => {
    if (err) console.error("Erro ao escrever log:", err);
  });
}

export const logger = {
  log(payload: LogPayload) {
    writeLog(formatLog(payload));
  },
  info: (message: string, context?: Record<string, any>) =>
    logger.log({ level: "info", message, context }),
  warn: (message: string, context?: Record<string, any>) =>
    logger.log({ level: "warn", message, context }),
  error: (message: string, context?: Record<string, any>) =>
    logger.log({ level: "error", message, context }),
  action: (message: string, context?: Record<string, any>) =>
    logger.log({ level: "action", message, context }),
  access: (message: string, context?: Record<string, any>) =>
    logger.log({ level: "access", message, context }),
};

export async function withLogging<T>(
  session: Session,
  actionType: "create" | "update" | "delete" | "get" | "list",
  entity: string,
  input: unknown,
  logic: () => Promise<T>
): Promise<T> {
  try {
    const result = await logic();

    logger.action(`[${actionType.toUpperCase()}] ${entity}`, {
      userId: session.user.id,
      input,
      output: result, // ← 🔥 Aqui adicionamos o resultado retornado
      success: true,
    });

    return result;
  } catch (error) {
    logger.error(`[${actionType.toUpperCase()}] ${entity} FAILED`, {
      userId: session.user.id,
      input,
      success: false,
      error: error instanceof Error ? error.message : String(error),
    });
    throw error;
  }
}
