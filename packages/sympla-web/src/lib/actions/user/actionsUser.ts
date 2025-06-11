"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { userFormSchema } from "./schema";

// ========== CREATE ==========
export const createUser = createPrismaCreateAction(
  userFormSchema,
  async (data) => {
    return prisma.user.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "USER"
);

// ========== UPDATE ==========
export const updateUser = createPrismaUpdateAction(
  userFormSchema,
  async (data) => {
    return prisma.user.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "USER"
);

// ========== DELETE (soft delete) ==========
export const deleteUser = createPrismaDeleteAction(
  async (id, session) => {
    return prisma.user.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: session.user.id.toString(),
      },
    });
  },
  {
    defaultCheck: {
      prismaModel: prisma.user,
      modelName: "User",
    },
    entityName: "USER",
  }
);

// ========== GET ALL ==========
export const getAllUsers = createPrismaGetAllAction(
  prisma.user,
  "USER",
  ["name", "email"] // ✅ adicionei aqui campos úteis para buscas por search genérico
);

// ========== GET ALL WITH INCLUDES ==========
export const getAllUsersWithIncludes = createPrismaGetAllAction(
  prisma.user,
  "USER",
  ["name", "email"]
);