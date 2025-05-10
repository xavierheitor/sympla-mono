// packages/sympla-prisma/seed/seed.mjs
import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();
const systemUserId = 'seed';

async function main() {
  // ------------------
  // 1. Distribuidora / Regional
  // ------------------
  const distribuidora = await prisma.distribuidora.create({
    data: {
      nome: 'Energisa Exemplo',
      descricao: 'Distribuidora de teste',
      createdBy: systemUserId,
    },
  });

  const regionais = await prisma.regional.createMany({
    data: [
      { nome: 'Regional Norte', descricao: 'Cobertura Norte', distribuidoraId: distribuidora.id, createdBy: systemUserId },
      { nome: 'Regional Sul', descricao: 'Cobertura Sul', distribuidoraId: distribuidora.id, createdBy: systemUserId },
    ],
  });

  const regionaisCriadas = await prisma.regional.findMany();

  // ------------------
  // 2. Grupos, Subgrupos, Códigos e Defeitos
  // ------------------
  const grupoEletrico = await prisma.grupoDefeitoEquipamento.create({
    data: { nome: 'Elétrico', createdBy: systemUserId },
  });

  const subgrupos = await prisma.subgrupoDefeitoEquipamento.createMany({
    data: [
      { nome: 'Cabos', grupoId: grupoEletrico.id, createdBy: systemUserId },
      { nome: 'Conexões', grupoId: grupoEletrico.id, createdBy: systemUserId },
    ],
  });

  const subgruposCriados = await prisma.subgrupoDefeitoEquipamento.findMany();

  const codigo = await prisma.grupoDefeitoCodigo.create({
    data: { sigla: 'EL', codigo: 'EL001', grupoId: grupoEletrico.id, createdBy: systemUserId },
  });

  await prisma.defeito.createMany({
    data: [
      {
        codigoSap: 'D001',
        descricao: 'Isolamento danificado',
        grupoId: grupoEletrico.id,
        subgrupoId: subgruposCriados[0].id,
        grupoDefeitoCodigoId: codigo.id,
        createdBy: systemUserId,
      },
      {
        codigoSap: 'D002',
        descricao: 'Fio desencapado',
        grupoId: grupoEletrico.id,
        subgrupoId: subgruposCriados[1].id,
        grupoDefeitoCodigoId: codigo.id,
        createdBy: systemUserId,
      },
    ],
  });

  // ------------------
  // 3. Tipo de Manutenção / KPI / Tipo de Atividade
  // ------------------
  const tipoManutencao = await prisma.tipoManutencao.create({
    data: { nome: 'Corretiva', createdBy: systemUserId },
  });

  const kpi = await prisma.kpi.create({
    data: {
      nome: 'Tempo de Resposta',
      descricao: 'Avalia o tempo médio de atendimento',
      tipoManutencaoId: tipoManutencao.id,
      createdBy: systemUserId,
    },
  });

  const tipoAtividades = await prisma.tipoAtividade.createMany({
    data: [
      {
        nome: 'Inspeção Visual',
        tipoAtividadeMobile: 'ivItIu',
        kpiId: kpi.id,
        createdBy: systemUserId,
      },
      {
        nome: 'Teste de Disjuntor',
        tipoAtividadeMobile: 'mpdj',
        createdBy: systemUserId,
      },
    ],
  });

  const tiposCriados = await prisma.tipoAtividade.findMany();

  // ------------------
  // 4. APRs / Perguntas / Relacionamento
  // ------------------
  await prisma.aprPerguntas.createMany({
    data: [
      { pergunta: 'Uso de EPI está adequado?', createdBy: systemUserId },
      { pergunta: 'Há sinalização de risco visível?', createdBy: systemUserId },
    ],
  });

  await prisma.aprModelo.createMany({
    data: [
      {
        nome: 'APR Geral',
        descricao: 'Modelo para inspeção geral',
        tipoAtividadeId: tiposCriados[0].id,
        createdBy: systemUserId,
      },
    ],
  });

  const perguntas = await prisma.aprPerguntas.findMany();
  const modelos = await prisma.aprModelo.findMany();

  await prisma.aprPerguntasRelation.createMany({
    data: perguntas.map((p, i) => ({
      perguntaId: p.id,
      modeloId: modelos[0].id,
      ordem: i,
      createdBy: systemUserId,
    })),
  });

  // ------------------
  // 5. Checklist / Perguntas / Relacionamento
  // ------------------
  await prisma.checklistPergunta.createMany({
    data: [
      { pergunta: 'Sinais de superaquecimento?', createdBy: systemUserId },
      { pergunta: 'Componentes frouxos?', createdBy: systemUserId },
    ],
  });

  await prisma.checklistModelo.createMany({
    data: [
      {
        nome: 'Checklist Padrao',
        descricao: 'Checklist geral para equipamentos',
        tipoAtividadeId: tiposCriados[0].id,
        createdBy: systemUserId,
      },
    ],
  });

  const ckPergs = await prisma.checklistPergunta.findMany();
  const ckModelos = await prisma.checklistModelo.findMany();

  await prisma.checklisrPerguntaRelation.createMany({
    data: ckPergs.map((p, i) => ({
      perguntaId: p.id,
      modeloId: ckModelos[0].id,
      ordem: i,
      createdBy: systemUserId,
    })),
  });

  console.log('✅ Seeder completo executado com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seeder:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });