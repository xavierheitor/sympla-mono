"use server";

import { prisma } from "@/lib/db/prisma";

const detectGrupoDefeito = (nome: string) => {
  const nomeUpper = nome.toUpperCase();
  if (nomeUpper.includes("BC") || nomeUpper.includes("BANCAP")) return "SEBE";
  if (
    nomeUpper.includes("TR") &&
    !nomeUpper.includes("TP") &&
    !nomeUpper.includes("TC")
  )
    return "SETR";
  if (nomeUpper.includes("AUX") || nomeUpper.includes("TSA")) return "SESA";
  if (nomeUpper.includes("TP") || nomeUpper.includes("TC")) return "SETP";
  if (
    nomeUpper
      .match(/\d{3,4}/)
      ?.some(
        (code) =>
          code.endsWith("13") || code.endsWith("14") || code.endsWith("24")
      )
  )
    return "SEDJ";
  return "SECV";
};

const extractSiglaSubestacao = (nome: string) => {
  const match = nome.match(/^[A-Z]{2,3}/);
  return match ? match[0] : null;
};

export const createManyEquipamentosFromExcel = async (
  data: { nome?: string }[]
) => {
  const subestacoes = await prisma.subestacao.findMany();
  const subestacaoMap = new Map(
    subestacoes.map((s) => [s.sigla.toUpperCase(), s.id])
  );

  console.log(subestacaoMap);

  const equipamentos = data.map((row, index) => {
    const nomeOriginal = row.nome ?? row["EQUIPAMENTOS"] ?? "";
    const nome = nomeOriginal.trim();

    if (!nome) {
      console.warn(`⚠️ Linha ${index + 2}: Nome está vazio, ignorado.`);
      return null;
    }

    const sigla = extractSiglaSubestacao(nome)?.toUpperCase();
    const subestacaoId = subestacaoMap.get(sigla ?? "");

    if (!subestacaoId) {
      console.warn(
        `⚠️ Linha ${index + 2}: Subestação não encontrada para sigla "${sigla}", ignorado.`
      );
      return null;
    }

    console.log(
      `✅ Processando: ${nome} (Sigla: ${sigla}, SubestacaoID: ${subestacaoId})`
    );

    return {
      nome,
      descricao: nome, // 🔥 Descrição igual ao nome
      subestacaoId,
      grupoDefeitoCodigo: detectGrupoDefeito(nome),
    };
  });

  const validEquipamentos = equipamentos.filter(
    (e): e is NonNullable<typeof e> => !!e
  );

  if (validEquipamentos.length === 0) {
    return {
      success: false,
      created: 0,
      message: "🚫 Nenhum equipamento válido encontrado no arquivo.",
    };
  }

  await prisma.equipamento.createMany({
    data: validEquipamentos.map((e) => ({
      nome: e.nome,
      descricao: e.descricao,
      subestacaoId: e.subestacaoId,
      grupoDefeitoCodigo: e.grupoDefeitoCodigo,
      createdBy: "system",
    })),
    skipDuplicates: true,
  });

  return {
    success: true,
    created: validEquipamentos.length,
    message: `✅ ${validEquipamentos.length} equipamentos cadastrados com sucesso.`,
  };
};
