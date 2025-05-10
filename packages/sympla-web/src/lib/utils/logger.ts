/* eslint-disable @typescript-eslint/no-explicit-any */
// src/lib/utils/logger.ts
import fs from 'fs';
import { Session } from 'next-auth';
import path from 'path';

// Diretório onde os logs serão salvos
const LOG_DIR = path.resolve(process.cwd(), 'logs');
const LOG_FILE = path.join(LOG_DIR, 'app.log');

// Garante que o diretório existe
if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR);
}

export type LogLevel = 'info' | 'warn' | 'error' | 'action' | 'access';

interface LogPayload {
    level?: LogLevel;
    message: string;
    context?: Record<string, any>;
}

function formatLog({ level = 'info', message, context }: LogPayload): string {
    const timestamp = new Date().toISOString();
    const ctx = context ? ` | ${JSON.stringify(context)}` : '';
    return `[${timestamp}] [${level.toUpperCase()}] ${message}${ctx}`;
}

function writeLog(line: string) {
    fs.appendFile(LOG_FILE, line + '\n', (err) => {
        if (err) console.error('Erro ao escrever log:', err);
    });
}

export const logger = {
    log(payload: LogPayload) {
        const line = formatLog(payload);
        writeLog(line);
    },
    info(message: string, context?: Record<string, any>) {
        logger.log({ level: 'info', message, context });
    },
    warn(message: string, context?: Record<string, any>) {
        logger.log({ level: 'warn', message, context });
    },
    error(message: string, context?: Record<string, any>) {
        logger.log({ level: 'error', message, context });
    },
    action(message: string, context?: Record<string, any>) {
        logger.log({ level: 'action', message, context });
    },
    access(message: string, context?: Record<string, any>) {
        logger.log({ level: 'access', message, context });
    },
};


// lib/utils/logger.ts
export async function withLogging<T>(
    session: Session,
    actionType: 'create' | 'update' | 'delete' | 'get' | 'list',
    entity: string,
    input: unknown,
    logic: () => Promise<T>
): Promise<T> {
    try {
        const result = await logic();
        await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/log`, {
            method: 'POST',
            body: JSON.stringify({
                userId: session.user.id,
                entity,
                action: actionType,
                input,
                timestamp: new Date().toISOString(),
                success: true,
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        return result;
    } catch (error) {
        await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/log`, {
            method: 'POST',
            body: JSON.stringify({
                userId: session.user.id,
                entity,
                action: actionType,
                input,
                timestamp: new Date().toISOString(),
                success: false,
                error: error instanceof Error ? error.message : String(error),
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        throw error;
    }
}