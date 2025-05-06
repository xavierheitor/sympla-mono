"use server";

import { prisma } from "@/lib/db/prisma";

export default async function fetchDistribuidoras() {
  try {
    const distribuidoras = await prisma.distribuidora.findMany();
    return distribuidoras;
  } catch (error) {
    console.error(error);
    return [];
  }
}
