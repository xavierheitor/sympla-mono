"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { grupoDefeitoEquipamentoFormSchema } from "./schema";

export const createGrupoDefeitoEquipamento = createPrismaCreateAction(
  grupoDefeitoEquipamentoFormSchema,
  async (data) => {
    return await prisma.grupoDefeitoEquipamento.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "GRUPO_DEFEITO_EQUIPAMENTO"
);

export const deleteGrupoDefeitoEquipamento = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.grupoDefeitoEquipamento.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.grupoDefeitoEquipamento,
      modelName: "GrupoDefeitoEquipamento",
    },
    entityName: "GRUPO_DEFEITO_EQUIPAMENTO",
  }
);

export const updateGrupoDefeitoEquipamento = createPrismaUpdateAction(
  grupoDefeitoEquipamentoFormSchema,
  async (data) => {
    return await prisma.grupoDefeitoEquipamento.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "GRUPO_DEFEITO_EQUIPAMENTO"
);

export const getAllGrupoDefeitoEquipamentos = createPrismaGetAllAction(
  async () => {
    return await prisma.grupoDefeitoEquipamento.findMany({
      where: { deletedAt: null },
      orderBy: { nome: "asc" },
    });
  },
  "GRUPO_DEFEITO_EQUIPAMENTO"
);

export const createGrupoDefeitoEquipamentoWithIncludes =
  createPrismaCreateAction(
    grupoDefeitoEquipamentoFormSchema,
    async (data) => {
      return await prisma.grupoDefeitoEquipamento.create({
        data: {
          ...data,
          createdBy: data.createdBy?.toString?.() || "",
        },
      });
    },
    "GRUPO_DEFEITO_EQUIPAMENTO"
  );
