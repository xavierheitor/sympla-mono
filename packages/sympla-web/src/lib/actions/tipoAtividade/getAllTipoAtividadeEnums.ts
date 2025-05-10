// src/lib/actions/tipoAtividade/getTipoAtividadeMobileOptions.ts
'use server';

import { TipoAtividadeMobile } from '@sympla/prisma';

function enumToOptions<T extends object>(enumObj: T) {
    return Object.entries(enumObj).map(([key, value]) => ({
        label: key.charAt(0).toUpperCase() + key.slice(1), // Mantém camelCase, mas com primeira letra maiúscula
        value,
    }));
}

export async function getAllTipoAtividadeEnums() {
    return enumToOptions(TipoAtividadeMobile);
}