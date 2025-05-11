// src/lib/actions/tipoAtividade/getTipoAtividadeMobileOptions.ts
'use server';

import { TipoAtividadeMobile } from '@sympla/prisma';
import { logger } from '@/lib/utils/logger';

function enumToOptions<T extends object>(enumObj: T) {
    return Object.entries(enumObj).map(([key, value]) => ({
        label: key.charAt(0).toUpperCase() + key.slice(1), // Mantém camelCase com a primeira letra maiúscula
        value,
    }));
}

export async function getAllTipoAtividadeEnums() {
    const result = enumToOptions(TipoAtividadeMobile);

    logger.action('[LIST] TIPO_ATIVIDADE_MOBILE_ENUM', {
        input: {},
        success: true,
    });

    return result;
}