"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaGetByIdAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { distribuidoraFormSchema } from "./schema";

// ===== CREATE =====

export const createDistribuidora = createPrismaCreateAction(
  distribuidoraFormSchema,
  async (data) =>
    prisma.distribuidora.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    }),
  "DISTRIBUIDORA"
);

// ===== UPDATE =====

export const updateDistribuidora = createPrismaUpdateAction(
  distribuidoraFormSchema,
  async (data) =>
    prisma.distribuidora.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    }),
  "DISTRIBUIDORA"
);

// ===== DELETE =====

export const deleteDistribuidora = createPrismaDeleteAction(
  async (id, session) =>
    prisma.distribuidora.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    }),
  {
    defaultCheck: {
      prismaModel: prisma.distribuidora,
      modelName: "Distribuidora",
    },
    entityName: "DISTRIBUIDORA",
  }
);

// ===== GET ALL =====

export const getAllDistribuidoras = createPrismaGetAllAction(
  prisma.distribuidora,
  "DISTRIBUIDORA"
);

// ===== GET BY ID =====

export const getDistribuidoraById = createPrismaGetByIdAction(
  async (id) =>
    prisma.distribuidora.findUniqueOrThrow({
      where: {
        id,
        deletedAt: null,
      },
    }),
  "DISTRIBUIDORA"
);