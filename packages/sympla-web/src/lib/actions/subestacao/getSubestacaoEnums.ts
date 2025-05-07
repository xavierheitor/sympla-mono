// src/lib/actions/subestacao/getSubestacaoEnums.ts
'use server';

import { SubestacaoCapital, PropriedadeSubestacao, CategoriaSubestacao, TensaoSubestacao } from '@sympla/prisma';

function enumToOptions<T extends object>(enumObj: T) {
    return Object.entries(enumObj).map(([key, value]) => ({
        label: key.charAt(0).toUpperCase() + key.slice(1).toLowerCase(),
        value: value,
    }));
}

export async function getSubestacaoEnums() {
    return {
        capitalOptions: enumToOptions(SubestacaoCapital),
        propriedadeOptions: enumToOptions(PropriedadeSubestacao),
        categoriaOptions: enumToOptions(CategoriaSubestacao),
        tensaoOptions: enumToOptions(TensaoSubestacao),
    };
}