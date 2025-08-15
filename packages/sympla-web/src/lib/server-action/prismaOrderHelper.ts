// src/lib/server-action/prismaOrderHelper.ts

type OrderDir = 'asc' | 'desc';

/**
 * Gera um orderBy válido para o Prisma, com suporte a múltiplos campos.
 *
 * - Aceita string única: 'nome'
 * - Aceita array de strings: ['nome', 'sigla']
 * - Aceita undefined (ignora)
 *
 * Sempre retorna o formato:
 * [
 *    { nome: 'asc' },
 *    { sigla: 'asc' },
 * ]
 */
export function buildPrismaOrderBy(orderBy?: string | string[], orderDir: OrderDir = 'asc') {
  if (!orderBy) {
    return undefined;
  }

  const fields = Array.isArray(orderBy) ? orderBy : [orderBy];

  return fields.map((field) => ({
    [field]: orderDir,
  }));
}
