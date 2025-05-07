"use server";

import { prisma } from "@/lib/db/prisma";

export default async function fetchDistribuidoras() {
  try {
    const distribuidoras = await prisma.distribuidora.findMany({
      orderBy: {
        nome: "asc",
      },
      where: {
        deletedAt: null,
      },
    });
    return distribuidoras;
  } catch (error) {
    console.error(error);
    return [];
  }
}
