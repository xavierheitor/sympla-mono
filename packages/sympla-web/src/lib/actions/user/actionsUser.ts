"use server";

import { prisma } from "@/lib/db/prisma";
import {
  createPrismaCreateAction,
  createPrismaDeleteAction,
  createPrismaGetAllAction,
  createPrismaUpdateAction,
} from "@/lib/server-action/actionFactory";
import { userFormSchema } from "./schema";

export const createUser = createPrismaCreateAction(
  userFormSchema,
  async (data) => {
    return await prisma.user.create({
      data: {
        ...data,
        createdBy: data.createdBy?.toString?.() || "",
      },
    });
  },
  "USER"
);

export const updateUser = createPrismaUpdateAction(
  userFormSchema,
  async (data) => {
    return await prisma.user.update({
      where: { id: data.id },
      data: {
        ...data,
        updatedBy: data.updatedBy?.toString?.() || "",
      },
    });
  },
  "USER"
);

export const deleteUser = createPrismaDeleteAction(
  async (id, session) => {
    return await prisma.user.update({
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

export const getAllUsers = createPrismaGetAllAction(async () => {
  return await prisma.user.findMany({
    where: { deletedAt: null },
    orderBy: { name: "asc" },
  });
}, "USER");

export const getAllUsersWithIncludes = createPrismaGetAllAction(async () => {
  return await prisma.user.findMany({
    where: { deletedAt: null },
    orderBy: { name: "asc" },
    // include: {
    //     relacaoExemplo: true,
    // },
  });
}, "USER");
