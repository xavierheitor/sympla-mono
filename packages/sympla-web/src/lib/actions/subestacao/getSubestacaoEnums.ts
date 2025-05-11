// src/lib/actions/subestacao/getSubestacaoEnums.ts
'use server';

import {
    SubestacaoCapital,
    PropriedadeSubestacao,
    CategoriaSubestacao,
    TensaoSubestacao,
} from '@sympla/prisma';
import { logger } from '@/lib/utils/logger';

function enumToOptions<T extends object>(enumObj: T) {
    return Object.entries(enumObj).map(([key, value]) => ({
        label: key.charAt(0).toUpperCase() + key.slice(1).toLowerCase(),
        value: value,
    }));
}

export async function getSubestacaoEnums() {
    const data = {
        capitalOptions: enumToOptions(SubestacaoCapital),
        propriedadeOptions: enumToOptions(PropriedadeSubestacao),
        categoriaOptions: enumToOptions(CategoriaSubestacao),
        tensaoOptions: enumToOptions(TensaoSubestacao),
    };

    logger.action('[GET] SUBESTACAO_ENUMS', {
        success: true,
        input: {}, // se quiser, pode incluir req ou session
    });

    return data;
}