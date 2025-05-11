import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

const userId = 'seed_user';

async function main() {
  const grupo_BANCO_DE_CAPACITORES = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "BANCO DE CAPACITORES" },
    update: {},
    create: {
      nome: "BANCO DE CAPACITORES",
      createdBy: userId,
    },
  });
  const grupo_BARRAMENTO = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "BARRAMENTO" },
    update: {},
    create: {
      nome: "BARRAMENTO",
      createdBy: userId,
    },
  });
  const grupo_CHAVE_FACA = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "CHAVE FACA" },
    update: {},
    create: {
      nome: "CHAVE FACA",
      createdBy: userId,
    },
  });
  const grupo_CHAVE_FUSIVEL = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "CHAVE FUSIVEL" },
    update: {},
    create: {
      nome: "CHAVE FUSIVEL",
      createdBy: userId,
    },
  });
  const grupo_CHAVE_TANDEM = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "CHAVE TANDEM" },
    update: {},
    create: {
      nome: "CHAVE TANDEM",
      createdBy: userId,
    },
  });
  const grupo_CHAVE_TRIPOLAR = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "CHAVE TRIPOLAR" },
    update: {},
    create: {
      nome: "CHAVE TRIPOLAR",
      createdBy: userId,
    },
  });
  const grupo_CIVIL = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "CIVIL" },
    update: {},
    create: {
      nome: "CIVIL",
      createdBy: userId,
    },
  });
  const grupo_CUBICULO = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "CUBICULO" },
    update: {},
    create: {
      nome: "CUBICULO",
      createdBy: userId,
    },
  });
  const grupo_DISJUNTOR = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "DISJUNTOR" },
    update: {},
    create: {
      nome: "DISJUNTOR",
      createdBy: userId,
    },
  });
  const grupo_ESTRUTURA_DE_CONCRETO = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "ESTRUTURA DE CONCRETO" },
    update: {},
    create: {
      nome: "ESTRUTURA DE CONCRETO",
      createdBy: userId,
    },
  });
  const grupo_ESTRUTURA_METALICA = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "ESTRUTURA METALICA" },
    update: {},
    create: {
      nome: "ESTRUTURA METALICA",
      createdBy: userId,
    },
  });
  const grupo_GRUPO_GERADOR_SE = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "GRUPO GERADOR SE" },
    update: {},
    create: {
      nome: "GRUPO GERADOR SE",
      createdBy: userId,
    },
  });
  const grupo_MALHA_DE_TERRA = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "MALHA DE TERRA" },
    update: {},
    create: {
      nome: "MALHA DE TERRA",
      createdBy: userId,
    },
  });
  const grupo_MEDIÇÃO_OPERACIONAL = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "MEDIÇÃO OPERACIONAL" },
    update: {},
    create: {
      nome: "MEDIÇÃO OPERACIONAL",
      createdBy: userId,
    },
  });
  const grupo_PAINEL_CA_E_CC = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "PAINEL CA E CC" },
    update: {},
    create: {
      nome: "PAINEL CA E CC",
      createdBy: userId,
    },
  });
  const grupo_PARA_RAIO = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "PARA RAIO" },
    update: {},
    create: {
      nome: "PARA RAIO",
      createdBy: userId,
    },
  });
  const grupo_RACK_TELECOM = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "RACK TELECOM" },
    update: {},
    create: {
      nome: "RACK TELECOM",
      createdBy: userId,
    },
  });
  const grupo_REATOR = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "REATOR" },
    update: {},
    create: {
      nome: "REATOR",
      createdBy: userId,
    },
  });
  const grupo_REGULADOR_DE_TENSAO = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "REGULADOR DE TENSAO" },
    update: {},
    create: {
      nome: "REGULADOR DE TENSAO",
      createdBy: userId,
    },
  });
  const grupo_RELIGADOR = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "RELIGADOR" },
    update: {},
    create: {
      nome: "RELIGADOR",
      createdBy: userId,
    },
  });
  const grupo_SISTEMA_CC_BATERIA = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "SISTEMA CC _ BATERIA" },
    update: {},
    create: {
      nome: "SISTEMA CC _ BATERIA",
      createdBy: userId,
    },
  });
  const grupo_SISTEMA_CC_NOBREAK = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "SISTEMA CC _ NOBREAK" },
    update: {},
    create: {
      nome: "SISTEMA CC _ NOBREAK",
      createdBy: userId,
    },
  });
  const grupo_SISTEMA_CC_RETIFICADOR = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "SISTEMA CC _ RETIFICADOR" },
    update: {},
    create: {
      nome: "SISTEMA CC _ RETIFICADOR",
      createdBy: userId,
    },
  });
  const grupo_TRANSFORMADOR_DE_CORRENTE = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "TRANSFORMADOR DE CORRENTE" },
    update: {},
    create: {
      nome: "TRANSFORMADOR DE CORRENTE",
      createdBy: userId,
    },
  });
  const grupo_TRANSFORMADOR_DE_FORCA = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "TRANSFORMADOR DE FORCA" },
    update: {},
    create: {
      nome: "TRANSFORMADOR DE FORCA",
      createdBy: userId,
    },
  });
  const grupo_TRANSFORMADOR_DE_POTENCIAL = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "TRANSFORMADOR DE POTENCIAL" },
    update: {},
    create: {
      nome: "TRANSFORMADOR DE POTENCIAL",
      createdBy: userId,
    },
  });
  const grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "TRANSFORMADOR DE SERVICO AUXILIAR" },
    update: {},
    create: {
      nome: "TRANSFORMADOR DE SERVICO AUXILIAR",
      createdBy: userId,
    },
  });
  const grupo_MUFLAS = await prisma.grupoDefeitoEquipamento.upsert({
    where: { nome: "MUFLAS" },
    update: {},
    create: {
      nome: "MUFLAS",
      createdBy: userId,
    },
  });
  const subgrupo_BASE_BANCO_DE_CAPACITORES = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BASE",
        grupoId: grupo_BANCO_DE_CAPACITORES.id,
      },
    },
    update: {},
    create: {
      nome: "BASE",
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      createdBy: userId,
    },
  });
  const subgrupo_CAIXA_DE_COMANDO_BANCO_DE_CAPACITORES = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CAIXA DE COMANDO",
        grupoId: grupo_BANCO_DE_CAPACITORES.id,
      },
    },
    update: {},
    create: {
      nome: "CAIXA DE COMANDO",
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      createdBy: userId,
    },
  });
  const subgrupo_CARTUCHOS_BANCO_DE_CAPACITORES = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CARTUCHOS",
        grupoId: grupo_BANCO_DE_CAPACITORES.id,
      },
    },
    update: {},
    create: {
      nome: "CARTUCHOS",
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      createdBy: userId,
    },
  });
  const subgrupo_CONEXÃO_BANCO_DE_CAPACITORES = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CONEXÃO",
        grupoId: grupo_BANCO_DE_CAPACITORES.id,
      },
    },
    update: {},
    create: {
      nome: "CONEXÃO",
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      createdBy: userId,
    },
  });
  const subgrupo_CÉLULAS_CAPACITORAS_BANCO_DE_CAPACITORES = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CÉLULAS CAPACITORAS",
        grupoId: grupo_BANCO_DE_CAPACITORES.id,
      },
    },
    update: {},
    create: {
      nome: "CÉLULAS CAPACITORAS",
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      createdBy: userId,
    },
  });
  const subgrupo_CHAVE_A_ÓLEO_BANCO_DE_CAPACITORES = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CHAVE A ÓLEO",
        grupoId: grupo_BANCO_DE_CAPACITORES.id,
      },
    },
    update: {},
    create: {
      nome: "CHAVE A ÓLEO",
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      createdBy: userId,
    },
  });
  const subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CHAVE A VÁCUO",
        grupoId: grupo_BANCO_DE_CAPACITORES.id,
      },
    },
    update: {},
    create: {
      nome: "CHAVE A VÁCUO",
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      createdBy: userId,
    },
  });
  const subgrupo_CHAVE_DE_ATERRAMENTO_TETRAPOLAR_BANCO_DE_CAPACITORES = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CHAVE DE ATERRAMENTO (TETRAPOLAR)",
        grupoId: grupo_BANCO_DE_CAPACITORES.id,
      },
    },
    update: {},
    create: {
      nome: "CHAVE DE ATERRAMENTO (TETRAPOLAR)",
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      createdBy: userId,
    },
  });
  const subgrupo_ESTRUTURA_SUPORTE_DOS_CAPACITORES_RACKS_BANCO_DE_CAPACITORES = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ESTRUTURA SUPORTE DOS CAPACITORES (RACKS)",
        grupoId: grupo_BANCO_DE_CAPACITORES.id,
      },
    },
    update: {},
    create: {
      nome: "ESTRUTURA SUPORTE DOS CAPACITORES (RACKS)",
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      createdBy: userId,
    },
  });
  const subgrupo_PLACA_DE_IDENTIFICAÇÃO_BANCO_DE_CAPACITORES = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "PLACA DE IDENTIFICAÇÃO",
        grupoId: grupo_BANCO_DE_CAPACITORES.id,
      },
    },
    update: {},
    create: {
      nome: "PLACA DE IDENTIFICAÇÃO",
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      createdBy: userId,
    },
  });
  const subgrupo_RELÉS_BANCO_DE_CAPACITORES = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RELÉS",
        grupoId: grupo_BANCO_DE_CAPACITORES.id,
      },
    },
    update: {},
    create: {
      nome: "RELÉS",
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      createdBy: userId,
    },
  });
  const subgrupo_TC_BANCO_DE_CAPACITORES = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TC",
        grupoId: grupo_BANCO_DE_CAPACITORES.id,
      },
    },
    update: {},
    create: {
      nome: "TC",
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      createdBy: userId,
    },
  });
  const subgrupo_B_C_BANCO_DE_CAPACITORES = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "B_C",
        grupoId: grupo_BANCO_DE_CAPACITORES.id,
      },
    },
    update: {},
    create: {
      nome: "B_C",
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      createdBy: userId,
    },
  });
  const subgrupo_CABOS_CONDUTORES_BARRAMENTO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CABOS CONDUTORES",
        grupoId: grupo_BARRAMENTO.id,
      },
    },
    update: {},
    create: {
      nome: "CABOS CONDUTORES",
      grupoId: grupo_BARRAMENTO.id,
      createdBy: userId,
    },
  });
  const subgrupo_CONECTORES_BARRAMENTO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CONECTORES",
        grupoId: grupo_BARRAMENTO.id,
      },
    },
    update: {},
    create: {
      nome: "CONECTORES",
      grupoId: grupo_BARRAMENTO.id,
      createdBy: userId,
    },
  });
  const subgrupo_ISOLADOR_POLIMÉRICO_BARRAMENTO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ISOLADOR POLIMÉRICO",
        grupoId: grupo_BARRAMENTO.id,
      },
    },
    update: {},
    create: {
      nome: "ISOLADOR POLIMÉRICO",
      grupoId: grupo_BARRAMENTO.id,
      createdBy: userId,
    },
  });
  const subgrupo_ISOLADOR_PORCELANA_BARRAMENTO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ISOLADOR PORCELANA",
        grupoId: grupo_BARRAMENTO.id,
      },
    },
    update: {},
    create: {
      nome: "ISOLADOR PORCELANA",
      grupoId: grupo_BARRAMENTO.id,
      createdBy: userId,
    },
  });
  const subgrupo_ISOLADOR_VIDRO_BARRAMENTO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ISOLADOR VIDRO",
        grupoId: grupo_BARRAMENTO.id,
      },
    },
    update: {},
    create: {
      nome: "ISOLADOR VIDRO",
      grupoId: grupo_BARRAMENTO.id,
      createdBy: userId,
    },
  });
  const subgrupo_VIGAS_BARRAMENTO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "VIGAS",
        grupoId: grupo_BARRAMENTO.id,
      },
    },
    update: {},
    create: {
      nome: "VIGAS",
      grupoId: grupo_BARRAMENTO.id,
      createdBy: userId,
    },
  });
  const subgrupo_ATERRAMENTO_CHAVE_FACA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ATERRAMENTO",
        grupoId: grupo_CHAVE_FACA.id,
      },
    },
    update: {},
    create: {
      nome: "ATERRAMENTO",
      grupoId: grupo_CHAVE_FACA.id,
      createdBy: userId,
    },
  });
  const subgrupo_BASE_CHAVE_FACA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BASE",
        grupoId: grupo_CHAVE_FACA.id,
      },
    },
    update: {},
    create: {
      nome: "BASE",
      grupoId: grupo_CHAVE_FACA.id,
      createdBy: userId,
    },
  });
  const subgrupo_CONEXÕES_AT_CHAVE_FACA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CONEXÕES AT",
        grupoId: grupo_CHAVE_FACA.id,
      },
    },
    update: {},
    create: {
      nome: "CONEXÕES AT",
      grupoId: grupo_CHAVE_FACA.id,
      createdBy: userId,
    },
  });
  const subgrupo_CORDOALHA_CHAVE_FACA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CORDOALHA",
        grupoId: grupo_CHAVE_FACA.id,
      },
    },
    update: {},
    create: {
      nome: "CORDOALHA",
      grupoId: grupo_CHAVE_FACA.id,
      createdBy: userId,
    },
  });
  const subgrupo_ISOLADOR_CHAVE_FACA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ISOLADOR",
        grupoId: grupo_CHAVE_FACA.id,
      },
    },
    update: {},
    create: {
      nome: "ISOLADOR",
      grupoId: grupo_CHAVE_FACA.id,
      createdBy: userId,
    },
  });
  const subgrupo_LÂMINA_FACA_CHAVE_FACA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "LÂMINA FACA",
        grupoId: grupo_CHAVE_FACA.id,
      },
    },
    update: {},
    create: {
      nome: "LÂMINA FACA",
      grupoId: grupo_CHAVE_FACA.id,
      createdBy: userId,
    },
  });
  const subgrupo_PLACA_DE_IDENTIFICAÇÃO_CHAVE_FACA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "PLACA DE IDENTIFICAÇÃO",
        grupoId: grupo_CHAVE_FACA.id,
      },
    },
    update: {},
    create: {
      nome: "PLACA DE IDENTIFICAÇÃO",
      grupoId: grupo_CHAVE_FACA.id,
      createdBy: userId,
    },
  });
  const subgrupo_CHAVE_FACA_CHAVE_FACA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CH_FA",
        grupoId: grupo_CHAVE_FACA.id,
      },
    },
    update: {},
    create: {
      nome: "CH_FA",
      grupoId: grupo_CHAVE_FACA.id,
      createdBy: userId,
    },
  });
  const subgrupo_BASE_CHAVE_FUSIVEL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BASE",
        grupoId: grupo_CHAVE_FUSIVEL.id,
      },
    },
    update: {},
    create: {
      nome: "BASE",
      grupoId: grupo_CHAVE_FUSIVEL.id,
      createdBy: userId,
    },
  });
  const subgrupo_BASTÃO_FUSÍVEL_CHAVE_FUSIVEL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BASTÃO FUSÍVEL",
        grupoId: grupo_CHAVE_FUSIVEL.id,
      },
    },
    update: {},
    create: {
      nome: "BASTÃO FUSÍVEL",
      grupoId: grupo_CHAVE_FUSIVEL.id,
      createdBy: userId,
    },
  });
  const subgrupo_CONEXÕES_AT_CHAVE_FUSIVEL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CONEXÕES AT",
        grupoId: grupo_CHAVE_FUSIVEL.id,
      },
    },
    update: {},
    create: {
      nome: "CONEXÕES AT",
      grupoId: grupo_CHAVE_FUSIVEL.id,
      createdBy: userId,
    },
  });
  const subgrupo_ISOLADOR_CHAVE_FUSIVEL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ISOLADOR",
        grupoId: grupo_CHAVE_FUSIVEL.id,
      },
    },
    update: {},
    create: {
      nome: "ISOLADOR",
      grupoId: grupo_CHAVE_FUSIVEL.id,
      createdBy: userId,
    },
  });
  const subgrupo_PLACA_DE_IDENTIFICAÇÃO_CHAVE_FUSIVEL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "PLACA DE IDENTIFICAÇÃO",
        grupoId: grupo_CHAVE_FUSIVEL.id,
      },
    },
    update: {},
    create: {
      nome: "PLACA DE IDENTIFICAÇÃO",
      grupoId: grupo_CHAVE_FUSIVEL.id,
      createdBy: userId,
    },
  });
  const subgrupo_CHAVE_FUSIVEL_CHAVE_FUSIVEL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CH_FU",
        grupoId: grupo_CHAVE_FUSIVEL.id,
      },
    },
    update: {},
    create: {
      nome: "CH_FU",
      grupoId: grupo_CHAVE_FUSIVEL.id,
      createdBy: userId,
    },
  });
  const subgrupo_BASE_CHAVE_TANDEM = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BASE",
        grupoId: grupo_CHAVE_TANDEM.id,
      },
    },
    update: {},
    create: {
      nome: "BASE",
      grupoId: grupo_CHAVE_TANDEM.id,
      createdBy: userId,
    },
  });
  const subgrupo_CONEXÕES_AT_CHAVE_TANDEM = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CONEXÕES AT",
        grupoId: grupo_CHAVE_TANDEM.id,
      },
    },
    update: {},
    create: {
      nome: "CONEXÕES AT",
      grupoId: grupo_CHAVE_TANDEM.id,
      createdBy: userId,
    },
  });
  const subgrupo_CORDOALHA_CHAVE_TANDEM = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CORDOALHA",
        grupoId: grupo_CHAVE_TANDEM.id,
      },
    },
    update: {},
    create: {
      nome: "CORDOALHA",
      grupoId: grupo_CHAVE_TANDEM.id,
      createdBy: userId,
    },
  });
  const subgrupo_ISOLADOR_CHAVE_TANDEM = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ISOLADOR",
        grupoId: grupo_CHAVE_TANDEM.id,
      },
    },
    update: {},
    create: {
      nome: "ISOLADOR",
      grupoId: grupo_CHAVE_TANDEM.id,
      createdBy: userId,
    },
  });
  const subgrupo_LÂMINA_FACA_CHAVE_TANDEM = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "LÂMINA FACA",
        grupoId: grupo_CHAVE_TANDEM.id,
      },
    },
    update: {},
    create: {
      nome: "LÂMINA FACA",
      grupoId: grupo_CHAVE_TANDEM.id,
      createdBy: userId,
    },
  });
  const subgrupo_PLACA_DE_IDENTIFICAÇÃO_CHAVE_TANDEM = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "PLACA DE IDENTIFICAÇÃO",
        grupoId: grupo_CHAVE_TANDEM.id,
      },
    },
    update: {},
    create: {
      nome: "PLACA DE IDENTIFICAÇÃO",
      grupoId: grupo_CHAVE_TANDEM.id,
      createdBy: userId,
    },
  });
  const subgrupo_CHAVE_TANDEM_CHAVE_TANDEM = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CH_TD",
        grupoId: grupo_CHAVE_TANDEM.id,
      },
    },
    update: {},
    create: {
      nome: "CH_TD",
      grupoId: grupo_CHAVE_TANDEM.id,
      createdBy: userId,
    },
  });
  const subgrupo_BASE_CHAVE_TRIPOLAR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BASE",
        grupoId: grupo_CHAVE_TRIPOLAR.id,
      },
    },
    update: {},
    create: {
      nome: "BASE",
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      createdBy: userId,
    },
  });
  const subgrupo_CONEXÕES_AT_CHAVE_TRIPOLAR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CONEXÕES AT",
        grupoId: grupo_CHAVE_TRIPOLAR.id,
      },
    },
    update: {},
    create: {
      nome: "CONEXÕES AT",
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      createdBy: userId,
    },
  });
  const subgrupo_CORDOALHA_CHAVE_TRIPOLAR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CORDOALHA",
        grupoId: grupo_CHAVE_TRIPOLAR.id,
      },
    },
    update: {},
    create: {
      nome: "CORDOALHA",
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      createdBy: userId,
    },
  });
  const subgrupo_ISOLADOR_CHAVE_TRIPOLAR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ISOLADOR",
        grupoId: grupo_CHAVE_TRIPOLAR.id,
      },
    },
    update: {},
    create: {
      nome: "ISOLADOR",
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      createdBy: userId,
    },
  });
  const subgrupo_LÂMINA_FACA_CHAVE_TRIPOLAR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "LÂMINA FACA",
        grupoId: grupo_CHAVE_TRIPOLAR.id,
      },
    },
    update: {},
    create: {
      nome: "LÂMINA FACA",
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      createdBy: userId,
    },
  });
  const subgrupo_PLACA_DE_IDENTIFICAÇÃO_CHAVE_TRIPOLAR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "PLACA DE IDENTIFICAÇÃO",
        grupoId: grupo_CHAVE_TRIPOLAR.id,
      },
    },
    update: {},
    create: {
      nome: "PLACA DE IDENTIFICAÇÃO",
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      createdBy: userId,
    },
  });
  const subgrupo_CHAVE_TRIPOLAR_CHAVE_TRIPOLAR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CH_TRI",
        grupoId: grupo_CHAVE_TRIPOLAR.id,
      },
    },
    update: {},
    create: {
      nome: "CH_TRI",
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      createdBy: userId,
    },
  });
  const subgrupo__ILUMINAÇÃO_CIVIL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: " ILUMINAÇÃO",
        grupoId: grupo_CIVIL.id,
      },
    },
    update: {},
    create: {
      nome: " ILUMINAÇÃO",
      grupoId: grupo_CIVIL.id,
      createdBy: userId,
    },
  });
  const subgrupo_CANALETA_CIVIL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CANALETA",
        grupoId: grupo_CIVIL.id,
      },
    },
    update: {},
    create: {
      nome: "CANALETA",
      grupoId: grupo_CIVIL.id,
      createdBy: userId,
    },
  });
  const subgrupo_CASA_DE_COMANDO_CIVIL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CASA DE COMANDO",
        grupoId: grupo_CIVIL.id,
      },
    },
    update: {},
    create: {
      nome: "CASA DE COMANDO",
      grupoId: grupo_CIVIL.id,
      createdBy: userId,
    },
  });
  const subgrupo_MURO_CIVIL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "MURO",
        grupoId: grupo_CIVIL.id,
      },
    },
    update: {},
    create: {
      nome: "MURO",
      grupoId: grupo_CIVIL.id,
      createdBy: userId,
    },
  });
  const subgrupo_PÁTIO_CIVIL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "PÁTIO",
        grupoId: grupo_CIVIL.id,
      },
    },
    update: {},
    create: {
      nome: "PÁTIO",
      grupoId: grupo_CIVIL.id,
      createdBy: userId,
    },
  });
  const subgrupo_PORTÃO_CIVIL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "PORTÃO",
        grupoId: grupo_CIVIL.id,
      },
    },
    update: {},
    create: {
      nome: "PORTÃO",
      grupoId: grupo_CIVIL.id,
      createdBy: userId,
    },
  });
  const subgrupo_ARMÁRIO_METÁLICO_CUBICULO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ARMÁRIO METÁLICO",
        grupoId: grupo_CUBICULO.id,
      },
    },
    update: {},
    create: {
      nome: "ARMÁRIO METÁLICO",
      grupoId: grupo_CUBICULO.id,
      createdBy: userId,
    },
  });
  const subgrupo_BARRAMENTOS_CUBICULO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BARRAMENTOS",
        grupoId: grupo_CUBICULO.id,
      },
    },
    update: {},
    create: {
      nome: "BARRAMENTOS",
      grupoId: grupo_CUBICULO.id,
      createdBy: userId,
    },
  });
  const subgrupo_BUCHAS_DE_PORCELANAS_CUBICULO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BUCHAS DE PORCELANAS",
        grupoId: grupo_CUBICULO.id,
      },
    },
    update: {},
    create: {
      nome: "BUCHAS DE PORCELANAS",
      grupoId: grupo_CUBICULO.id,
      createdBy: userId,
    },
  });
  const subgrupo_CONEXÕES_AT_CUBICULO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CONEXÕES AT",
        grupoId: grupo_CUBICULO.id,
      },
    },
    update: {},
    create: {
      nome: "CONEXÕES AT",
      grupoId: grupo_CUBICULO.id,
      createdBy: userId,
    },
  });
  const subgrupo_GALERIA_DE_CABOS_CUBICULO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "GALERIA DE CABOS",
        grupoId: grupo_CUBICULO.id,
      },
    },
    update: {},
    create: {
      nome: "GALERIA DE CABOS",
      grupoId: grupo_CUBICULO.id,
      createdBy: userId,
    },
  });
  const subgrupo_PLACA_DE_IDENTIFICAÇÃO_CUBICULO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "PLACA DE IDENTIFICAÇÃO",
        grupoId: grupo_CUBICULO.id,
      },
    },
    update: {},
    create: {
      nome: "PLACA DE IDENTIFICAÇÃO",
      grupoId: grupo_CUBICULO.id,
      createdBy: userId,
    },
  });
  const subgrupo_RELÉS_CUBICULO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RELÉS",
        grupoId: grupo_CUBICULO.id,
      },
    },
    update: {},
    create: {
      nome: "RELÉS",
      grupoId: grupo_CUBICULO.id,
      createdBy: userId,
    },
  });
  const subgrupo_CUBICULO_CUBICULO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CUBICULO",
        grupoId: grupo_CUBICULO.id,
      },
    },
    update: {},
    create: {
      nome: "CUBICULO",
      grupoId: grupo_CUBICULO.id,
      createdBy: userId,
    },
  });
  const subgrupo_ATERRAMENTO_DISJUNTOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ATERRAMENTO",
        grupoId: grupo_DISJUNTOR.id,
      },
    },
    update: {},
    create: {
      nome: "ATERRAMENTO",
      grupoId: grupo_DISJUNTOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_BASE_DE_FIXAÇÃO_DISJUNTOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BASE DE FIXAÇÃO",
        grupoId: grupo_DISJUNTOR.id,
      },
    },
    update: {},
    create: {
      nome: "BASE DE FIXAÇÃO",
      grupoId: grupo_DISJUNTOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_BUCHAS_DE_PORCELANAS_DISJUNTOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BUCHAS DE PORCELANAS",
        grupoId: grupo_DISJUNTOR.id,
      },
    },
    update: {},
    create: {
      nome: "BUCHAS DE PORCELANAS",
      grupoId: grupo_DISJUNTOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_CAIXA_DE_COMANDO_DISJUNTOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CAIXA DE COMANDO",
        grupoId: grupo_DISJUNTOR.id,
      },
    },
    update: {},
    create: {
      nome: "CAIXA DE COMANDO",
      grupoId: grupo_DISJUNTOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_CONEXÕES_AT_DISJUNTOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CONEXÕES AT",
        grupoId: grupo_DISJUNTOR.id,
      },
    },
    update: {},
    create: {
      nome: "CONEXÕES AT",
      grupoId: grupo_DISJUNTOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_MECANISMO_DISJUNTOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "MECANISMO",
        grupoId: grupo_DISJUNTOR.id,
      },
    },
    update: {},
    create: {
      nome: "MECANISMO",
      grupoId: grupo_DISJUNTOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_PLACA_DE_IDENTIFICAÇÃO_DISJUNTOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "PLACA DE IDENTIFICAÇÃO",
        grupoId: grupo_DISJUNTOR.id,
      },
    },
    update: {},
    create: {
      nome: "PLACA DE IDENTIFICAÇÃO",
      grupoId: grupo_DISJUNTOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_RELÉS_DISJUNTOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RELÉS",
        grupoId: grupo_DISJUNTOR.id,
      },
    },
    update: {},
    create: {
      nome: "RELÉS",
      grupoId: grupo_DISJUNTOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_RES_DE_CONTATO_DISJUNTOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RES_ DE CONTATO",
        grupoId: grupo_DISJUNTOR.id,
      },
    },
    update: {},
    create: {
      nome: "RES_ DE CONTATO",
      grupoId: grupo_DISJUNTOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_RES_ISOLAMENTO_DISJUNTOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RES_ ISOLAMENTO",
        grupoId: grupo_DISJUNTOR.id,
      },
    },
    update: {},
    create: {
      nome: "RES_ ISOLAMENTO",
      grupoId: grupo_DISJUNTOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_RIGIDEZ_DIELÉTRICA_DE_ÓLEO_DISJUNTOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RIGIDEZ DIELÉTRICA DE ÓLEO",
        grupoId: grupo_DISJUNTOR.id,
      },
    },
    update: {},
    create: {
      nome: "RIGIDEZ DIELÉTRICA DE ÓLEO",
      grupoId: grupo_DISJUNTOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_TANQUE_DISJUNTOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TANQUE",
        grupoId: grupo_DISJUNTOR.id,
      },
    },
    update: {},
    create: {
      nome: "TANQUE",
      grupoId: grupo_DISJUNTOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_TESTE_DE_CÂMARA_VÁCUO_DISJUNTOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TESTE DE CÂMARA VÁCUO",
        grupoId: grupo_DISJUNTOR.id,
      },
    },
    update: {},
    create: {
      nome: "TESTE DE CÂMARA VÁCUO",
      grupoId: grupo_DISJUNTOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_DJ_DISJUNTOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "DJ",
        grupoId: grupo_DISJUNTOR.id,
      },
    },
    update: {},
    create: {
      nome: "DJ",
      grupoId: grupo_DISJUNTOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_CABO_DE_ATERRAMENTO_ESTRUTURA_DE_CONCRETO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CABO DE ATERRAMENTO",
        grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      },
    },
    update: {},
    create: {
      nome: "CABO DE ATERRAMENTO",
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      createdBy: userId,
    },
  });
  const subgrupo_CABO_PARA_RAIOS_ESTRUTURA_DE_CONCRETO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CABO PARA_RAIOS",
        grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      },
    },
    update: {},
    create: {
      nome: "CABO PARA_RAIOS",
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      createdBy: userId,
    },
  });
  const subgrupo_ESTRUTURAS_ESTRUTURA_DE_CONCRETO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ESTRUTURAS",
        grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      },
    },
    update: {},
    create: {
      nome: "ESTRUTURAS",
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      createdBy: userId,
    },
  });
  const subgrupo_CABO_DE_ATERRAMENTO_ESTRUTURA_METALICA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CABO DE ATERRAMENTO",
        grupoId: grupo_ESTRUTURA_METALICA.id,
      },
    },
    update: {},
    create: {
      nome: "CABO DE ATERRAMENTO",
      grupoId: grupo_ESTRUTURA_METALICA.id,
      createdBy: userId,
    },
  });
  const subgrupo_ESTRUTURAS_ESTRUTURA_METALICA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ESTRUTURAS",
        grupoId: grupo_ESTRUTURA_METALICA.id,
      },
    },
    update: {},
    create: {
      nome: "ESTRUTURAS",
      grupoId: grupo_ESTRUTURA_METALICA.id,
      createdBy: userId,
    },
  });
  const subgrupo_BATERIA_GRUPO_GERADOR_SE = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BATERIA",
        grupoId: grupo_GRUPO_GERADOR_SE.id,
      },
    },
    update: {},
    create: {
      nome: "BATERIA",
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      createdBy: userId,
    },
  });
  const subgrupo_GERADOR_GRUPO_GERADOR_SE = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "GERADOR",
        grupoId: grupo_GRUPO_GERADOR_SE.id,
      },
    },
    update: {},
    create: {
      nome: "GERADOR",
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      createdBy: userId,
    },
  });
  const subgrupo_MOTOR_BLOCO_GRUPO_GERADOR_SE = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "MOTOR_BLOCO",
        grupoId: grupo_GRUPO_GERADOR_SE.id,
      },
    },
    update: {},
    create: {
      nome: "MOTOR_BLOCO",
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      createdBy: userId,
    },
  });
  const subgrupo_MOTOR_CABEÇOTE_GRUPO_GERADOR_SE = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "MOTOR_CABEÇOTE",
        grupoId: grupo_GRUPO_GERADOR_SE.id,
      },
    },
    update: {},
    create: {
      nome: "MOTOR_CABEÇOTE",
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      createdBy: userId,
    },
  });
  const subgrupo_MOTOR_CARTER_GRUPO_GERADOR_SE = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "MOTOR_CARTER",
        grupoId: grupo_GRUPO_GERADOR_SE.id,
      },
    },
    update: {},
    create: {
      nome: "MOTOR_CARTER",
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      createdBy: userId,
    },
  });
  const subgrupo_MOTOR_SISTEMA_DE_ALIMENTAÇÃO_GRUPO_GERADOR_SE = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "MOTOR_SISTEMA DE ALIMENTAÇÃO",
        grupoId: grupo_GRUPO_GERADOR_SE.id,
      },
    },
    update: {},
    create: {
      nome: "MOTOR_SISTEMA DE ALIMENTAÇÃO",
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      createdBy: userId,
    },
  });
  const subgrupo_MOTOR_SISTEMA_DE_ESCAPAMENTO_GRUPO_GERADOR_SE = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "MOTOR_SISTEMA DE ESCAPAMENTO",
        grupoId: grupo_GRUPO_GERADOR_SE.id,
      },
    },
    update: {},
    create: {
      nome: "MOTOR_SISTEMA DE ESCAPAMENTO",
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      createdBy: userId,
    },
  });
  const subgrupo_MOTOR_SISTEMA_DE_INJEÇÂO_GRUPO_GERADOR_SE = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "MOTOR_SISTEMA DE INJEÇÂO",
        grupoId: grupo_GRUPO_GERADOR_SE.id,
      },
    },
    update: {},
    create: {
      nome: "MOTOR_SISTEMA DE INJEÇÂO",
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      createdBy: userId,
    },
  });
  const subgrupo_MOTOR_SISTEMA_DE_REFRIGERAÇÃO_GRUPO_GERADOR_SE = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "MOTOR_SISTEMA DE REFRIGERAÇÃO",
        grupoId: grupo_GRUPO_GERADOR_SE.id,
      },
    },
    update: {},
    create: {
      nome: "MOTOR_SISTEMA DE REFRIGERAÇÃO",
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      createdBy: userId,
    },
  });
  const subgrupo_PAINEL_DE_CONTROLE_MEDIÇÃO_E_PROTEÇÃO_GRUPO_GERADOR_SE = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "PAINEL DE CONTROLE, MEDIÇÃO E PROTEÇÃO",
        grupoId: grupo_GRUPO_GERADOR_SE.id,
      },
    },
    update: {},
    create: {
      nome: "PAINEL DE CONTROLE, MEDIÇÃO E PROTEÇÃO",
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      createdBy: userId,
    },
  });
  const subgrupo_CAIXA_MALHA_DE_TERRA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CAIXA",
        grupoId: grupo_MALHA_DE_TERRA.id,
      },
    },
    update: {},
    create: {
      nome: "CAIXA",
      grupoId: grupo_MALHA_DE_TERRA.id,
      createdBy: userId,
    },
  });
  const subgrupo_CONEXÕES_MALHA_DE_TERRA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CONEXÕES",
        grupoId: grupo_MALHA_DE_TERRA.id,
      },
    },
    update: {},
    create: {
      nome: "CONEXÕES",
      grupoId: grupo_MALHA_DE_TERRA.id,
      createdBy: userId,
    },
  });
  const subgrupo_RESITÊNCIA_MALHA_DE_TERRA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RESITÊNCIA",
        grupoId: grupo_MALHA_DE_TERRA.id,
      },
    },
    update: {},
    create: {
      nome: "RESITÊNCIA",
      grupoId: grupo_MALHA_DE_TERRA.id,
      createdBy: userId,
    },
  });
  const subgrupo_MEDIDOR_MEDIÇÃO_OPERACIONAL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "MEDIDOR",
        grupoId: grupo_MEDIÇÃO_OPERACIONAL_id,
      },
    },
    update: {},
    create: {
      nome: "MEDIDOR",
      grupoId: grupo_MEDIÇÃO_OPERACIONAL_id,
      createdBy: userId,
    },
  });
  const subgrupo_AMPERÍMETRO_PAINEL_CA_E_CC = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "AMPERÍMETRO",
        grupoId: grupo_PAINEL_CA_E_CC.id,
      },
    },
    update: {},
    create: {
      nome: "AMPERÍMETRO",
      grupoId: grupo_PAINEL_CA_E_CC.id,
      createdBy: userId,
    },
  });
  const subgrupo_ARMÁRIO_PAINEL_CA_E_CC = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ARMÁRIO",
        grupoId: grupo_PAINEL_CA_E_CC.id,
      },
    },
    update: {},
    create: {
      nome: "ARMÁRIO",
      grupoId: grupo_PAINEL_CA_E_CC.id,
      createdBy: userId,
    },
  });
  const subgrupo_CONTATOR_PAINEL_CA_E_CC = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CONTATOR",
        grupoId: grupo_PAINEL_CA_E_CC.id,
      },
    },
    update: {},
    create: {
      nome: "CONTATOR",
      grupoId: grupo_PAINEL_CA_E_CC.id,
      createdBy: userId,
    },
  });
  const subgrupo_RELÉS_PAINEL_CA_E_CC = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RELÉS",
        grupoId: grupo_PAINEL_CA_E_CC.id,
      },
    },
    update: {},
    create: {
      nome: "RELÉS",
      grupoId: grupo_PAINEL_CA_E_CC.id,
      createdBy: userId,
    },
  });
  const subgrupo_UTR_PAINEL_CA_E_CC = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "UTR",
        grupoId: grupo_PAINEL_CA_E_CC.id,
      },
    },
    update: {},
    create: {
      nome: "UTR",
      grupoId: grupo_PAINEL_CA_E_CC.id,
      createdBy: userId,
    },
  });
  const subgrupo_VOLTÍMETRO_PAINEL_CA_E_CC = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "VOLTÍMETRO",
        grupoId: grupo_PAINEL_CA_E_CC.id,
      },
    },
    update: {},
    create: {
      nome: "VOLTÍMETRO",
      grupoId: grupo_PAINEL_CA_E_CC.id,
      createdBy: userId,
    },
  });
  const subgrupo_PARA_RAIO_PARA_RAIO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "PARA RAIO",
        grupoId: grupo_PARA_RAIO.id,
      },
    },
    update: {},
    create: {
      nome: "PARA RAIO",
      grupoId: grupo_PARA_RAIO.id,
      createdBy: userId,
    },
  });
  const subgrupo_PLACA_DE_IDENTIFICAÇÃO_PARA_RAIO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "PLACA DE IDENTIFICAÇÃO",
        grupoId: grupo_PARA_RAIO.id,
      },
    },
    update: {},
    create: {
      nome: "PLACA DE IDENTIFICAÇÃO",
      grupoId: grupo_PARA_RAIO.id,
      createdBy: userId,
    },
  });
  const subgrupo_RACK_TELECOM_RACK_TELECOM = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RACK TELECOM",
        grupoId: grupo_RACK_TELECOM.id,
      },
    },
    update: {},
    create: {
      nome: "RACK TELECOM",
      grupoId: grupo_RACK_TELECOM.id,
      createdBy: userId,
    },
  });
  const subgrupo_BASE_REATOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BASE",
        grupoId: grupo_REATOR.id,
      },
    },
    update: {},
    create: {
      nome: "BASE",
      grupoId: grupo_REATOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_CONEXÕES_AT_REATOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CONEXÕES AT",
        grupoId: grupo_REATOR.id,
      },
    },
    update: {},
    create: {
      nome: "CONEXÕES AT",
      grupoId: grupo_REATOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_CORPO_REATOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CORPO",
        grupoId: grupo_REATOR.id,
      },
    },
    update: {},
    create: {
      nome: "CORPO",
      grupoId: grupo_REATOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_ISOLADOR_REATOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ISOLADOR",
        grupoId: grupo_REATOR.id,
      },
    },
    update: {},
    create: {
      nome: "ISOLADOR",
      grupoId: grupo_REATOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_BUCHAS_REGULADOR_DE_TENSAO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BUCHAS",
        grupoId: grupo_REGULADOR_DE_TENSAO.id,
      },
    },
    update: {},
    create: {
      nome: "BUCHAS",
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      createdBy: userId,
    },
  });
  const subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CAIXA DE COMANDO",
        grupoId: grupo_REGULADOR_DE_TENSAO.id,
      },
    },
    update: {},
    create: {
      nome: "CAIXA DE COMANDO",
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      createdBy: userId,
    },
  });
  const subgrupo_COMUTADOR_COM_CARGA___LTC_REGULADOR_DE_TENSAO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "COMUTADOR COM CARGA _ LTC",
        grupoId: grupo_REGULADOR_DE_TENSAO.id,
      },
    },
    update: {},
    create: {
      nome: "COMUTADOR COM CARGA _ LTC",
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      createdBy: userId,
    },
  });
  const subgrupo_CONEXÕES_AT_REGULADOR_DE_TENSAO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CONEXÕES AT",
        grupoId: grupo_REGULADOR_DE_TENSAO.id,
      },
    },
    update: {},
    create: {
      nome: "CONEXÕES AT",
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      createdBy: userId,
    },
  });
  const subgrupo_ELETRO_VENTILADORES_REGULADOR_DE_TENSAO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ELETRO VENTILADORES",
        grupoId: grupo_REGULADOR_DE_TENSAO.id,
      },
    },
    update: {},
    create: {
      nome: "ELETRO VENTILADORES",
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      createdBy: userId,
    },
  });
  const subgrupo_PLACA_DE_IDENTIFICAÇÃO_REGULADOR_DE_TENSAO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "PLACA DE IDENTIFICAÇÃO",
        grupoId: grupo_REGULADOR_DE_TENSAO.id,
      },
    },
    update: {},
    create: {
      nome: "PLACA DE IDENTIFICAÇÃO",
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      createdBy: userId,
    },
  });
  const subgrupo_RADIADORES_REGULADOR_DE_TENSAO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RADIADORES",
        grupoId: grupo_REGULADOR_DE_TENSAO.id,
      },
    },
    update: {},
    create: {
      nome: "RADIADORES",
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      createdBy: userId,
    },
  });
  const subgrupo_RELÉ_DE_FLUXO_DE_ÓLEO_REGULADOR_DE_TENSAO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RELÉ DE FLUXO DE ÓLEO",
        grupoId: grupo_REGULADOR_DE_TENSAO.id,
      },
    },
    update: {},
    create: {
      nome: "RELÉ DE FLUXO DE ÓLEO",
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      createdBy: userId,
    },
  });
  const subgrupo_RELÉ_DE_GÁS_REGULADOR_DE_TENSAO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RELÉ DE GÁS",
        grupoId: grupo_REGULADOR_DE_TENSAO.id,
      },
    },
    update: {},
    create: {
      nome: "RELÉ DE GÁS",
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      createdBy: userId,
    },
  });
  const subgrupo_SECADOR_DE_AR_À_SILICA_GEL_REGULADOR_DE_TENSAO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "SECADOR DE AR À SILICA GEL",
        grupoId: grupo_REGULADOR_DE_TENSAO.id,
      },
    },
    update: {},
    create: {
      nome: "SECADOR DE AR À SILICA GEL",
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      createdBy: userId,
    },
  });
  const subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_REGULADOR_DE_TENSAO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TANQUE DE EXPANSÃO COMUTADOR",
        grupoId: grupo_REGULADOR_DE_TENSAO.id,
      },
    },
    update: {},
    create: {
      nome: "TANQUE DE EXPANSÃO COMUTADOR",
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      createdBy: userId,
    },
  });
  const subgrupo_TANQUE_DE_EXPANSÃO_R_T_REGULADOR_DE_TENSAO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TANQUE DE EXPANSÃO R_T",
        grupoId: grupo_REGULADOR_DE_TENSAO.id,
      },
    },
    update: {},
    create: {
      nome: "TANQUE DE EXPANSÃO R_T",
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      createdBy: userId,
    },
  });
  const subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TANQUE PRINCIPAL",
        grupoId: grupo_REGULADOR_DE_TENSAO.id,
      },
    },
    update: {},
    create: {
      nome: "TANQUE PRINCIPAL",
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      createdBy: userId,
    },
  });
  const subgrupo_TC_DE_BUCHA_REGULADOR_DE_TENSAO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TC DE BUCHA",
        grupoId: grupo_REGULADOR_DE_TENSAO.id,
      },
    },
    update: {},
    create: {
      nome: "TC DE BUCHA",
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      createdBy: userId,
    },
  });
  const subgrupo_TERMÔMETRO_DE_ENROLAMENTO_REGULADOR_DE_TENSAO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TERMÔMETRO DE ENROLAMENTO",
        grupoId: grupo_REGULADOR_DE_TENSAO.id,
      },
    },
    update: {},
    create: {
      nome: "TERMÔMETRO DE ENROLAMENTO",
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      createdBy: userId,
    },
  });
  const subgrupo_TERMÔMETRO_DE_ÓLEO_REGULADOR_DE_TENSAO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TERMÔMETRO DE ÓLEO",
        grupoId: grupo_REGULADOR_DE_TENSAO.id,
      },
    },
    update: {},
    create: {
      nome: "TERMÔMETRO DE ÓLEO",
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      createdBy: userId,
    },
  });
  const subgrupo_VÁLVULA_DE_ALIVIO_DE_PRESSÃO_REGULADOR_DE_TENSAO = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "VÁLVULA DE ALIVIO DE PRESSÃO",
        grupoId: grupo_REGULADOR_DE_TENSAO.id,
      },
    },
    update: {},
    create: {
      nome: "VÁLVULA DE ALIVIO DE PRESSÃO",
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      createdBy: userId,
    },
  });
  const subgrupo_ATERRAMENTO_RELIGADOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ATERRAMENTO",
        grupoId: grupo_RELIGADOR.id,
      },
    },
    update: {},
    create: {
      nome: "ATERRAMENTO",
      grupoId: grupo_RELIGADOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_BASE_DE_FIXAÇÃO_RELIGADOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BASE DE FIXAÇÃO",
        grupoId: grupo_RELIGADOR.id,
      },
    },
    update: {},
    create: {
      nome: "BASE DE FIXAÇÃO",
      grupoId: grupo_RELIGADOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_BUCHAS_DE_PORCELANAS_RELIGADOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BUCHAS DE PORCELANAS",
        grupoId: grupo_RELIGADOR.id,
      },
    },
    update: {},
    create: {
      nome: "BUCHAS DE PORCELANAS",
      grupoId: grupo_RELIGADOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_CAIXA_DE_COMANDO_RELIGADOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CAIXA DE COMANDO",
        grupoId: grupo_RELIGADOR.id,
      },
    },
    update: {},
    create: {
      nome: "CAIXA DE COMANDO",
      grupoId: grupo_RELIGADOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_CONEXÕES_AT_RELIGADOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CONEXÕES AT",
        grupoId: grupo_RELIGADOR.id,
      },
    },
    update: {},
    create: {
      nome: "CONEXÕES AT",
      grupoId: grupo_RELIGADOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_MECANISMO_RELIGADOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "MECANISMO",
        grupoId: grupo_RELIGADOR.id,
      },
    },
    update: {},
    create: {
      nome: "MECANISMO",
      grupoId: grupo_RELIGADOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_PLACA_DE_IDENTIFICAÇÃO_RELIGADOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "PLACA DE IDENTIFICAÇÃO",
        grupoId: grupo_RELIGADOR.id,
      },
    },
    update: {},
    create: {
      nome: "PLACA DE IDENTIFICAÇÃO",
      grupoId: grupo_RELIGADOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_RELÉS_RELIGADOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RELÉS",
        grupoId: grupo_RELIGADOR.id,
      },
    },
    update: {},
    create: {
      nome: "RELÉS",
      grupoId: grupo_RELIGADOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_RES__DE_CONTATO_RELIGADOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RES_ DE CONTATO",
        grupoId: grupo_RELIGADOR.id,
      },
    },
    update: {},
    create: {
      nome: "RES_ DE CONTATO",
      grupoId: grupo_RELIGADOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_RES__ISOLAMENTO_RELIGADOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RES_ ISOLAMENTO",
        grupoId: grupo_RELIGADOR.id,
      },
    },
    update: {},
    create: {
      nome: "RES_ ISOLAMENTO",
      grupoId: grupo_RELIGADOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_RIGIDEZ_DIELÉTRICA_DE_ÓLEO_RELIGADOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RIGIDEZ DIELÉTRICA DE ÓLEO",
        grupoId: grupo_RELIGADOR.id,
      },
    },
    update: {},
    create: {
      nome: "RIGIDEZ DIELÉTRICA DE ÓLEO",
      grupoId: grupo_RELIGADOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_TANQUE_RELIGADOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TANQUE",
        grupoId: grupo_RELIGADOR.id,
      },
    },
    update: {},
    create: {
      nome: "TANQUE",
      grupoId: grupo_RELIGADOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_TESTE_DE_CÂMARA_VÁCUO_RELIGADOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TESTE DE CÂMARA VÁCUO",
        grupoId: grupo_RELIGADOR.id,
      },
    },
    update: {},
    create: {
      nome: "TESTE DE CÂMARA VÁCUO",
      grupoId: grupo_RELIGADOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_REL_RELIGADOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "REL",
        grupoId: grupo_RELIGADOR.id,
      },
    },
    update: {},
    create: {
      nome: "REL",
      grupoId: grupo_RELIGADOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_BATERIA_SISTEMA_CC___BATERIA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BATERIA",
        grupoId: grupo_SISTEMA_CC___BATERIA.id,
      },
    },
    update: {},
    create: {
      nome: "BATERIA",
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      createdBy: userId,
    },
  });
  const subgrupo_ESTANTE_SISTEMA_CC___BATERIA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ESTANTE",
        grupoId: grupo_SISTEMA_CC___BATERIA.id,
      },
    },
    update: {},
    create: {
      nome: "ESTANTE",
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      createdBy: userId,
    },
  });
  const subgrupo_PLACAS_E_ELETRÓLITO_SISTEMA_CC___BATERIA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "PLACAS E ELETRÓLITO",
        grupoId: grupo_SISTEMA_CC___BATERIA.id,
      },
    },
    update: {},
    create: {
      nome: "PLACAS E ELETRÓLITO",
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      createdBy: userId,
    },
  });
  const subgrupo_PÓLOS_E_LIGAÇÕES_SISTEMA_CC___BATERIA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "PÓLOS E LIGAÇÕES",
        grupoId: grupo_SISTEMA_CC___BATERIA.id,
      },
    },
    update: {},
    create: {
      nome: "PÓLOS E LIGAÇÕES",
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      createdBy: userId,
    },
  });
  const subgrupo_RECIPIENTE_E_TAMPA_SISTEMA_CC___BATERIA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RECIPIENTE E TAMPA",
        grupoId: grupo_SISTEMA_CC___BATERIA.id,
      },
    },
    update: {},
    create: {
      nome: "RECIPIENTE E TAMPA",
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      createdBy: userId,
    },
  });
  const subgrupo_SALA_DE_BATERIAS_SISTEMA_CC___BATERIA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "SALA DE BATERIAS",
        grupoId: grupo_SISTEMA_CC___BATERIA.id,
      },
    },
    update: {},
    create: {
      nome: "SALA DE BATERIAS",
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      createdBy: userId,
    },
  });
  const subgrupo_NOBREAK_SISTEMA_CC___NOBREAK = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "NOBREAK",
        grupoId: grupo_SISTEMA_CC___NOBREAK.id,
      },
    },
    update: {},
    create: {
      nome: "NOBREAK",
      grupoId: grupo_SISTEMA_CC___NOBREAK.id,
      createdBy: userId,
    },
  });
  const subgrupo_RETIFICADOR_SISTEMA_CC___RETIFICADOR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RETIFICADOR",
        grupoId: grupo_SISTEMA_CC___RETIFICADOR.id,
      },
    },
    update: {},
    create: {
      nome: "RETIFICADOR",
      grupoId: grupo_SISTEMA_CC___RETIFICADOR.id,
      createdBy: userId,
    },
  });
  const subgrupo_ATERRAMENTO_TRANSFORMADOR_DE_CORRENTE = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ATERRAMENTO",
        grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      },
    },
    update: {},
    create: {
      nome: "ATERRAMENTO",
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      createdBy: userId,
    },
  });
  const subgrupo_BASE_DE_FIXAÇÃO_TRANSFORMADOR_DE_CORRENTE = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BASE DE FIXAÇÃO",
        grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      },
    },
    update: {},
    create: {
      nome: "BASE DE FIXAÇÃO",
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      createdBy: userId,
    },
  });
  const subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_CORRENTE = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BUCHAS DE PORCELANAS",
        grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      },
    },
    update: {},
    create: {
      nome: "BUCHAS DE PORCELANAS",
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      createdBy: userId,
    },
  });
  const subgrupo_CABEÇOTE_TRANSFORMADOR_DE_CORRENTE = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CABEÇOTE",
        grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      },
    },
    update: {},
    create: {
      nome: "CABEÇOTE",
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      createdBy: userId,
    },
  });
  const subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_CORRENTE = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CAIXAS DE CONEXÕES",
        grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      },
    },
    update: {},
    create: {
      nome: "CAIXAS DE CONEXÕES",
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      createdBy: userId,
    },
  });
  const subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_CORRENTE = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CONEXÕES AT",
        grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      },
    },
    update: {},
    create: {
      nome: "CONEXÕES AT",
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      createdBy: userId,
    },
  });
  const subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_CORRENTE = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "PLACA DE IDENTIFICAÇÃO",
        grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      },
    },
    update: {},
    create: {
      nome: "PLACA DE IDENTIFICAÇÃO",
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      createdBy: userId,
    },
  });
  const subgrupo_TANQUE_TRANSFORMADOR_DE_CORRENTE = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TANQUE",
        grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      },
    },
    update: {},
    create: {
      nome: "TANQUE",
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      createdBy: userId,
    },
  });
  const subgrupo_TC_TRANSFORMADOR_DE_CORRENTE = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TC",
        grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      },
    },
    update: {},
    create: {
      nome: "TC",
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      createdBy: userId,
    },
  });
  const subgrupo_BUCHAS_TRANSFORMADOR_DE_FORCA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BUCHAS",
        grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      },
    },
    update: {},
    create: {
      nome: "BUCHAS",
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      createdBy: userId,
    },
  });
  const subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CAIXA DE COMANDO",
        grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      },
    },
    update: {},
    create: {
      nome: "CAIXA DE COMANDO",
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      createdBy: userId,
    },
  });
  const subgrupo_COMUTADOR_COM_CARGA___LTC_TRANSFORMADOR_DE_FORCA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "COMUTADOR COM CARGA _ LTC",
        grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      },
    },
    update: {},
    create: {
      nome: "COMUTADOR COM CARGA _ LTC",
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      createdBy: userId,
    },
  });
  const subgrupo_COMUTADOR_SEM_CARGA_TRANSFORMADOR_DE_FORCA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "COMUTADOR SEM CARGA",
        grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      },
    },
    update: {},
    create: {
      nome: "COMUTADOR SEM CARGA",
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      createdBy: userId,
    },
  });
  const subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_FORCA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CONEXÕES AT",
        grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      },
    },
    update: {},
    create: {
      nome: "CONEXÕES AT",
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      createdBy: userId,
    },
  });
  const subgrupo_ELETRO_VENTILADORES_TRANSFORMADOR_DE_FORCA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ELETRO VENTILADORES",
        grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      },
    },
    update: {},
    create: {
      nome: "ELETRO VENTILADORES",
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      createdBy: userId,
    },
  });
  const subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_FORCA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "PLACA DE IDENTIFICAÇÃO",
        grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      },
    },
    update: {},
    create: {
      nome: "PLACA DE IDENTIFICAÇÃO",
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      createdBy: userId,
    },
  });
  const subgrupo_RADIADORES_TRANSFORMADOR_DE_FORCA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RADIADORES",
        grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      },
    },
    update: {},
    create: {
      nome: "RADIADORES",
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      createdBy: userId,
    },
  });
  const subgrupo_RELÉ_DE_FLUXO_DE_ÓLEO_TRANSFORMADOR_DE_FORCA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RELÉ DE FLUXO DE ÓLEO",
        grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      },
    },
    update: {},
    create: {
      nome: "RELÉ DE FLUXO DE ÓLEO",
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      createdBy: userId,
    },
  });
  const subgrupo_RELÉ_DE_GÁS_TRANSFORMADOR_DE_FORCA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "RELÉ DE GÁS",
        grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      },
    },
    update: {},
    create: {
      nome: "RELÉ DE GÁS",
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      createdBy: userId,
    },
  });
  const subgrupo_SECADOR_DE_AR_À_SILICA_GEL_TRANSFORMADOR_DE_FORCA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "SECADOR DE AR À SILICA GEL",
        grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      },
    },
    update: {},
    create: {
      nome: "SECADOR DE AR À SILICA GEL",
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      createdBy: userId,
    },
  });
  const subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_TRANSFORMADOR_DE_FORCA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TANQUE DE EXPANSÃO COMUTADOR",
        grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      },
    },
    update: {},
    create: {
      nome: "TANQUE DE EXPANSÃO COMUTADOR",
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      createdBy: userId,
    },
  });
  const subgrupo_TANQUE_DE_EXPANSÃO_T_F_TRANSFORMADOR_DE_FORCA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TANQUE DE EXPANSÃO T_F",
        grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      },
    },
    update: {},
    create: {
      nome: "TANQUE DE EXPANSÃO T_F",
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      createdBy: userId,
    },
  });
  const subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TANQUE PRINCIPAL",
        grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      },
    },
    update: {},
    create: {
      nome: "TANQUE PRINCIPAL",
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      createdBy: userId,
    },
  });
  const subgrupo_TC_DE_BUCHA_TRANSFORMADOR_DE_FORCA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TC DE BUCHA",
        grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      },
    },
    update: {},
    create: {
      nome: "TC DE BUCHA",
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      createdBy: userId,
    },
  });
  const subgrupo_TERMÔMETRO_DE_ENROLAMENTO_TRANSFORMADOR_DE_FORCA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TERMÔMETRO DE ENROLAMENTO",
        grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      },
    },
    update: {},
    create: {
      nome: "TERMÔMETRO DE ENROLAMENTO",
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      createdBy: userId,
    },
  });
  const subgrupo_TERMÔMETRO_DE_ÓLEO_TRANSFORMADOR_DE_FORCA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TERMÔMETRO DE ÓLEO",
        grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      },
    },
    update: {},
    create: {
      nome: "TERMÔMETRO DE ÓLEO",
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      createdBy: userId,
    },
  });
  const subgrupo_VÁLVULA_DE_ALIVIO_DE_PRESSÃO_TRANSFORMADOR_DE_FORCA = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "VÁLVULA DE ALIVIO DE PRESSÃO",
        grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      },
    },
    update: {},
    create: {
      nome: "VÁLVULA DE ALIVIO DE PRESSÃO",
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      createdBy: userId,
    },
  });
  const subgrupo_ATERRAMENTO_TRANSFORMADOR_DE_POTENCIAL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "ATERRAMENTO",
        grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      },
    },
    update: {},
    create: {
      nome: "ATERRAMENTO",
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      createdBy: userId,
    },
  });
  const subgrupo_BASE_DE_FIXAÇÃO_TRANSFORMADOR_DE_POTENCIAL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BASE DE FIXAÇÃO",
        grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      },
    },
    update: {},
    create: {
      nome: "BASE DE FIXAÇÃO",
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      createdBy: userId,
    },
  });
  const subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_POTENCIAL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BUCHAS DE PORCELANAS",
        grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      },
    },
    update: {},
    create: {
      nome: "BUCHAS DE PORCELANAS",
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      createdBy: userId,
    },
  });
  const subgrupo_CABEÇOTE_TRANSFORMADOR_DE_POTENCIAL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CABEÇOTE",
        grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      },
    },
    update: {},
    create: {
      nome: "CABEÇOTE",
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      createdBy: userId,
    },
  });
  const subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_POTENCIAL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CAIXAS DE CONEXÕES",
        grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      },
    },
    update: {},
    create: {
      nome: "CAIXAS DE CONEXÕES",
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      createdBy: userId,
    },
  });
  const subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_POTENCIAL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CONEXÕES AT",
        grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      },
    },
    update: {},
    create: {
      nome: "CONEXÕES AT",
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      createdBy: userId,
    },
  });
  const subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_POTENCIAL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "PLACA DE IDENTIFICAÇÃO",
        grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      },
    },
    update: {},
    create: {
      nome: "PLACA DE IDENTIFICAÇÃO",
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      createdBy: userId,
    },
  });
  const subgrupo_TANQUE_TRANSFORMADOR_DE_POTENCIAL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TANQUE",
        grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      },
    },
    update: {},
    create: {
      nome: "TANQUE",
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      createdBy: userId,
    },
  });
  const subgrupo_TP_TRANSFORMADOR_DE_POTENCIAL = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TP",
        grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      },
    },
    update: {},
    create: {
      nome: "TP",
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      createdBy: userId,
    },
  });
  const subgrupo_BASE_DE_APOIO_TRANSFORMADOR_DE_SERVICO_AUXILIAR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BASE DE APOIO",
        grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      },
    },
    update: {},
    create: {
      nome: "BASE DE APOIO",
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      createdBy: userId,
    },
  });
  const subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_SERVICO_AUXILIAR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "BUCHAS DE PORCELANAS",
        grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      },
    },
    update: {},
    create: {
      nome: "BUCHAS DE PORCELANAS",
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      createdBy: userId,
    },
  });
  const subgrupo_CONEXÕES_DE_AT_E_BT_TRANSFORMADOR_DE_SERVICO_AUXILIAR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CONEXÕES DE AT E BT",
        grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      },
    },
    update: {},
    create: {
      nome: "CONEXÕES DE AT E BT",
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      createdBy: userId,
    },
  });
  const subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_SERVICO_AUXILIAR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "PLACA DE IDENTIFICAÇÃO",
        grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      },
    },
    update: {},
    create: {
      nome: "PLACA DE IDENTIFICAÇÃO",
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      createdBy: userId,
    },
  });
  const subgrupo_TANQUE_TRANSFORMADOR_DE_SERVICO_AUXILIAR = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "TANQUE",
        grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      },
    },
    update: {},
    create: {
      nome: "TANQUE",
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      createdBy: userId,
    },
  });
  const subgrupo_MUFLAS_MUFLAS = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "MUFLAS",
        grupoId: grupo_MUFLAS.id,
      },
    },
    update: {},
    create: {
      nome: "MUFLAS",
      grupoId: grupo_MUFLAS.id,
      createdBy: userId,
    },
  });
  const subgrupo_CONEXÕES_DOS_TERMINAIS_MUFLAS = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CONEXÕES DOS TERMINAIS",
        grupoId: grupo_MUFLAS.id,
      },
    },
    update: {},
    create: {
      nome: "CONEXÕES DOS TERMINAIS",
      grupoId: grupo_MUFLAS.id,
      createdBy: userId,
    },
  });
  const subgrupo_CABOS_MUFLA_MUFLAS = await prisma.subgrupoDefeitoEquipamento.upsert({
    where: {
      nome_grupoId: {
        nome: "CABOS MUFLA",
        grupoId: grupo_MUFLAS.id,
      },
    },
    update: {},
    create: {
      nome: "CABOS MUFLA",
      grupoId: grupo_MUFLAS.id,
      createdBy: userId,
    },
  });
  const codigo_SEBC = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SEBC" },
    update: {},
    create: {
      codigo: "SEBC",
      sigla: "BC",
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      createdBy: userId,
    },
  });
  const codigo_SEBA = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SEBA" },
    update: {},
    create: {
      codigo: "SEBA",
      sigla: "BA",
      grupoId: grupo_BARRAMENTO.id,
      createdBy: userId,
    },
  });
  const codigo_SECH = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SECH" },
    update: {},
    create: {
      codigo: "SECH",
      sigla: "CH",
      grupoId: grupo_CHAVE_FACA.id,
      createdBy: userId,
    },
  });
  const codigo_SECF = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SECF" },
    update: {},
    create: {
      codigo: "SECF",
      sigla: "CF",
      grupoId: grupo_CHAVE_FUSIVEL.id,
      createdBy: userId,
    },
  });
  const codigo_SECT_1 = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SECT" },
    update: {},
    create: {
      codigo: "SECT",
      sigla: "CT",
      grupoId: grupo_CHAVE_TANDEM.id,
      createdBy: userId,
    },
  });
  const codigo_SECT_2 = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SECT" },
    update: {},
    create: {
      codigo: "SECT",
      sigla: "CT",
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      createdBy: userId,
    },
  });
  const codigo_SECV = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SECV" },
    update: {},
    create: {
      codigo: "SECV",
      sigla: "CV",
      grupoId: grupo_CIVIL.id,
      createdBy: userId,
    },
  });
  const codigo_SECU = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SECU" },
    update: {},
    create: {
      codigo: "SECU",
      sigla: "CU",
      grupoId: grupo_CUBICULO.id,
      createdBy: userId,
    },
  });
  const codigo_SEDJ = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SEDJ" },
    update: {},
    create: {
      codigo: "SEDJ",
      sigla: "DJ",
      grupoId: grupo_DISJUNTOR.id,
      createdBy: userId,
    },
  });
  const codigo_SEEC = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SEEC" },
    update: {},
    create: {
      codigo: "SEEC",
      sigla: "EC",
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      createdBy: userId,
    },
  });
  const codigo_SEEM = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SEEM" },
    update: {},
    create: {
      codigo: "SEEM",
      sigla: "EM",
      grupoId: grupo_ESTRUTURA_METALICA.id,
      createdBy: userId,
    },
  });
  const codigo_SEGG = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SEGG" },
    update: {},
    create: {
      codigo: "SEGG",
      sigla: "GG",
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      createdBy: userId,
    },
  });
  const codigo_SEMT = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SEMT" },
    update: {},
    create: {
      codigo: "SEMT",
      sigla: "MT",
      grupoId: grupo_MALHA_DE_TERRA.id,
      createdBy: userId,
    },
  });
  const codigo_SEMO = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SEMO" },
    update: {},
    create: {
      codigo: "SEMO",
      sigla: "MO",
      grupoId: grupo_MEDIÇÃO_OPERACIONAL_id,
      createdBy: userId,
    },
  });
  const codigo_SEPA = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SEPA" },
    update: {},
    create: {
      codigo: "SEPA",
      sigla: "PA",
      grupoId: grupo_PAINEL_CA_E_CC.id,
      createdBy: userId,
    },
  });
  const codigo_SEPR = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SEPR" },
    update: {},
    create: {
      codigo: "SEPR",
      sigla: "PR",
      grupoId: grupo_PARA_RAIO.id,
      createdBy: userId,
    },
  });
  const codigo_SERT = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SERT" },
    update: {},
    create: {
      codigo: "SERT",
      sigla: "RT",
      grupoId: grupo_RACK_TELECOM.id,
      createdBy: userId,
    },
  });
  const codigo_SERE = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SERE" },
    update: {},
    create: {
      codigo: "SERE",
      sigla: "RE",
      grupoId: grupo_REATOR.id,
      createdBy: userId,
    },
  });
  const codigo_SERG = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SERG" },
    update: {},
    create: {
      codigo: "SERG",
      sigla: "RG",
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      createdBy: userId,
    },
  });
  const codigo_SERL = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SERL" },
    update: {},
    create: {
      codigo: "SERL",
      sigla: "RL",
      grupoId: grupo_RELIGADOR.id,
      createdBy: userId,
    },
  });
  const codigo_SECC_3 = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SECC" },
    update: {},
    create: {
      codigo: "SECC",
      sigla: "CC",
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      createdBy: userId,
    },
  });
  const codigo_SECC_4 = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SECC" },
    update: {},
    create: {
      codigo: "SECC",
      sigla: "CC",
      grupoId: grupo_SISTEMA_CC___NOBREAK.id,
      createdBy: userId,
    },
  });
  const codigo_SECC = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SECC" },
    update: {},
    create: {
      codigo: "SECC",
      sigla: "CC",
      grupoId: grupo_SISTEMA_CC___RETIFICADOR.id,
      createdBy: userId,
    },
  });
  const codigo_SETC = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SETC" },
    update: {},
    create: {
      codigo: "SETC",
      sigla: "TC",
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      createdBy: userId,
    },
  });
  const codigo_SETF = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SETF" },
    update: {},
    create: {
      codigo: "SETF",
      sigla: "TF",
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      createdBy: userId,
    },
  });
  const codigo_SETP = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SETP" },
    update: {},
    create: {
      codigo: "SETP",
      sigla: "TP",
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      createdBy: userId,
    },
  });
  const codigo_SETS = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SETS" },
    update: {},
    create: {
      codigo: "SETS",
      sigla: "TS",
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      createdBy: userId,
    },
  });
  const codigo_SEMF = await prisma.grupoDefeitoCodigo.upsert({
    where: { codigo: "SEMF" },
    update: {},
    create: {
      codigo: "SEMF",
      sigla: "MF",
      grupoId: grupo_MUFLAS.id,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `OXIDADO F1/F2`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_BASE_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `OXIDADO F3`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_BASE_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `PINTAR E RECUPERAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `OXIDADO F4/F5`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_BASE_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `REALIZAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `C/ NINHO DE PÁSSARO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_BASE_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `RETIRAT NINHO DE PÁSSARO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PARAFUSOS OXIDAÇÃO F3`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `SUBSTITUIR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PARAFUSOS OXIDAÇÃO F1/F2`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `ACOMPANHAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `ATERRAMENTO INEXISTENTE`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `ATERRAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `OXIDADO F1/F2`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `OXIDADO F3`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `PINTAR E RECUPERAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `CASA DE MARIBONDO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `RETIRAR CASA DE MARIBONDO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `OXIDADO F4/F5`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `REALIZAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PINTURA DEFICIENTE`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PARAFUSOS OXIDAÇÃO F4/F5`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `SUBSTITUIR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `FIXAÇÃO ARMÁRIO DEFICIENTE`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `FIXAR ARMÁRIO ADEQUADAMENT`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `POSIÇÃO ELETRODUTOS INADEQUA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `ADEQUAR POSIÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `ENTRADA UMID_ PELO ELETRODUT`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `VEDAR ELETRODUTOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `FECHADURA QUEBRADA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `SUBSTITUIR FECHADURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `BORRACHA VEDAÇÃO DANIFICADA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `SUBSTITUIR BORRACHA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `LÂMP DE ILUMINAÇÃO_QUEIMADA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `SUBSTITUIR LÂMPADA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `CABOS S/ ANILHAS/DANIFIC`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `REPOR ANILHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `DOBRADIÇA QUEBRADA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `SUBSTITUIR DOBRADIÇA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PORTA EMPENADA S/TRAVA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `DESEMPENAR/COLOCAR TRANCA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `VEDAÇÃO INSUFICIENTE`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `VEDAR ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CARTUCHO" },
    update: {},
    create: {
      codigoSap: "CARTUCHO",
      descricao: `INEXISTÊNCIA DE BASTÕES`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CARTUCHOS_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CARTUCHOS_REPOR BASTÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CARTUCHO" },
    update: {},
    create: {
      codigoSap: "CARTUCHO",
      descricao: `QUEIMADURA NOS BASTÕES`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CARTUCHOS_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CARTUCHOS_SUBSTITUIR BASTÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CARTUCHO" },
    update: {},
    create: {
      codigoSap: "CARTUCHO",
      descricao: `MONTAGEM INADEQ ELO FUSÍVEL`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CARTUCHOS_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CARTUCHOS_ADEQUAR MONTAGEM DOS ELOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CARTUCHO" },
    update: {},
    create: {
      codigoSap: "CARTUCHO",
      descricao: `ELO FUSÍVEL ROMPIDO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CARTUCHOS_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `REPOR ELO FUSÍVEL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CARTUCHO" },
    update: {},
    create: {
      codigoSap: "CARTUCHO",
      descricao: `PONTO QUENTE 30°C<DT≤55°C`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CONEXÃO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA/EQP_ SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CARTUCHO" },
    update: {},
    create: {
      codigoSap: "CARTUCHO",
      descricao: `PONTO QUENTE DT > 55°C`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CONEXÃO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA/EQP_ SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CARTUCHO" },
    update: {},
    create: {
      codigoSap: "CARTUCHO",
      descricao: `PONTO QUENTE 25°C<DT≤30°C`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CONEXÃO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA/EQP_ SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CÉLULA CAP_" },
    update: {},
    create: {
      codigoSap: "CÉLULA CAP_",
      descricao: `CONEXÕES INADEQUADAS`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CÉLULAS_CAPACITORAS_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CÉLULAS CAPACITORAS_SUBSTITUIR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CÉLULA CAP_" },
    update: {},
    create: {
      codigoSap: "CÉLULA CAP_",
      descricao: `CONEXÕES FOLGADAS`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CÉLULAS_CAPACITORAS_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CÉLULAS CAPACITORAS_REAPERTAR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA/EQP_ SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CÉLULA CAP_" },
    update: {},
    create: {
      codigoSap: "CÉLULA CAP_",
      descricao: `POLUIÇ BUCHAS PORCELANA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CÉLULAS_CAPACITORAS_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CÉLULAS CAPACITORAS_LIMPAR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CÉLULA CAP_" },
    update: {},
    create: {
      codigoSap: "CÉLULA CAP_",
      descricao: `BUCHA TRICADA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CÉLULAS_CAPACITORAS_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CÉLULAS CAPACITORAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CÉLULA CAP_" },
    update: {},
    create: {
      codigoSap: "CÉLULA CAP_",
      descricao: `BUCHA TRICADA CRÍTICA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CÉLULAS_CAPACITORAS_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CÉLULA CAP_" },
    update: {},
    create: {
      codigoSap: "CÉLULA CAP_",
      descricao: `COM VAZAMENTO LÍQUIDO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CÉLULAS_CAPACITORAS_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CÉLULAS CAPACITORAS_RETIRAR VAZAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CÉLULA CAP_" },
    update: {},
    create: {
      codigoSap: "CÉLULA CAP_",
      descricao: `PONTO QUENTE 8°C<DT≤12°C`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CÉLULAS_CAPACITORAS_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA/EQP_ SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CÉLULA CAP_" },
    update: {},
    create: {
      codigoSap: "CÉLULA CAP_",
      descricao: `PONTO QUENTE DT > 12°C`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CÉLULAS_CAPACITORAS_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA/EQP_ SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CÉLULA CAP_" },
    update: {},
    create: {
      codigoSap: "CÉLULA CAP_",
      descricao: `PONTO QUENTE 3°C<DT≤8°C`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CÉLULAS_CAPACITORAS_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA/EQP_ SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_OL" },
    update: {},
    create: {
      codigoSap: "CH_OL",
      descricao: `TRINCAS NAS BUCHAS PORCELANA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_ÓLEO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CHAVE A ÓLEO_SUBSTITUIR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_OL" },
    update: {},
    create: {
      codigoSap: "CH_OL",
      descricao: ` EXISTÊNCIA VAZAMENTO ÓLEO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_ÓLEO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CHAVE A ÓLEO_REAPERTAR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_OL" },
    update: {},
    create: {
      codigoSap: "CH_OL",
      descricao: `CON_ ATER_ TANQUE INEXIST`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_ÓLEO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `INSTALAR ATERRAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_OL" },
    update: {},
    create: {
      codigoSap: "CH_OL",
      descricao: `POLUIÇÃO NAS BUCHAS PORCELANA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_ÓLEO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CHAVE A ÓLEO_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_OL" },
    update: {},
    create: {
      codigoSap: "CH_OL",
      descricao: `CONEXÃO BARRAMEN INADEQUADA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_ÓLEO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CHAVE A ÓLEO_SUBSTITUIR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_OL" },
    update: {},
    create: {
      codigoSap: "CH_OL",
      descricao: `CONEXÃO BARRAMEN FOLGADA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_ÓLEO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CHAVE A ÓLEO_REAPERTAR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_OL" },
    update: {},
    create: {
      codigoSap: "CH_OL",
      descricao: `CONEX_PONTO QUENTE 30°C<DT≤55C`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_ÓLEO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA/EQP_ SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_OL" },
    update: {},
    create: {
      codigoSap: "CH_OL",
      descricao: `CONEXÃO_PONTO QUENTE DT > 55°C`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_ÓLEO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA/EQP_ SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_OL" },
    update: {},
    create: {
      codigoSap: "CH_OL",
      descricao: `CONEX_PONTO QUENTE 25°C<DT≤30C`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_ÓLEO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA/EQP_ SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `BUCHA_OXID_ PART METÁLIC F1/F2`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `BUCHAS _RETIRAR CORROSÃO/OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `BUCHA_OXID_ PART METÁLIC F3`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `BUCHAS _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `BUCHA_OXID_ PART METÁLIC F4/F5`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `BUCHAS _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `BUCH_C/ VAZAM_FUGA DE CORRENTE`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `BUCHAS  _SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `BUCHAS _ MUITO POLUÍDAS`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `BUCHAS_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `BUCHAS _ C/ TRINCAS/RACHADURAS`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `BUCHAS _ CHAMUSCADA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `BUCHAS _ COM SAIAS QUEBRADAS`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `INFILTRAÇÃO PELAS BUCHAS`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `BUCHAS_CORRIGIR INFILTRAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `CONEXÕES AT  _ TIPO PINO/CABO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CONEXÕES DE AT_SUBSTITUIR POR PINO/CHAPA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `CONEX_AT _ FALTANDO PARAFUSOS`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CONEXÕES DE AT _REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `CONECTORES INADEQUADOS`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CONEXÕES DE AT _SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `CONEXÕES AT _ MUITO POLUÍDO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CONEXÕES AT_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `CONEXÕES AT_CONEXÕES FOLGADAS`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CONEXÕES AT_REAPERTAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `CONEX_AT_EXISTÊNC CENTELHAMENT`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CONEXÕES AT_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `CONEX_PONTO QUENTE 30°C<DT≤55C`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `CONEXÃO_PONTO QUENTE DT > 55°C`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `CONEX_PONTO QUENTE 25°C<DT≤30C`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `CONEXÕES AT _RUÍDOS ANORMAIS`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR RUÍDOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `CONEX_AT_FALTA PROTETOR BUCHA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CONEXÕES AT_COLOCAR CONE DE PROTEÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `REPROVADO_AMPOLA DANIFICADA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `SUBSTITUIR A CHAVE`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `PLACA DE IDENTIFICAÇÃO_OXIDADA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `PLACA IDENTIFICAÇÃO_ILEGÍVEL`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `SUBSTITUIR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `PLACA IDENTIF _ FIXAÇÃO INADEQ`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `FIXAR ADEQUADAMEN`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `PLACA IDENTIF _ INEXISTENTE`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `INSTALAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `PLACA IDENTIF _ CD_ OP_ ERRADO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `INSTALAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `IDENT_ POSIÇ Ñ FUNCIONA(ON/OFF`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CONSERTAR INDICADOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `RÉGUAS TERMINAIS OXIDAÇ_ F4/F5`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `SUBSTITUIR RÉGUAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `RÉGUAS TERMINAIS OXIDAÇÃO F3`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `SUBSTITUIR RÉGUAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `RÉGUAS TERMINAIS OXIDAÇ_ F1/F2`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `ACOMPANHAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `BOBINA QUEIMADA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `SUBSTITUIR BOBINA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `COMANDO MECÂNICO C/ DEFEITO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `REGULAR MECANISMO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_VA" },
    update: {},
    create: {
      codigoSap: "CH_VA",
      descricao: `FIAÇÃO ISOLAÇ DANIFICADO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_A_VÁCUO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `SUBSTITUIR FIAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_AT" },
    update: {},
    create: {
      codigoSap: "CH_AT",
      descricao: `POLUIÇÃO NOS ISOLADORES`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_DE_ATERRAMENTO_TETRAPOLAR_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CH ATERR (TETRAPOLAR)_LIMPAR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_AT" },
    update: {},
    create: {
      codigoSap: "CH_AT",
      descricao: `TRINCADO ISOLADOR`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_DE_ATERRAMENTO_TETRAPOLAR_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CH ATERR (TETRAPOLAR)_SUBSTIT ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_AT" },
    update: {},
    create: {
      codigoSap: "CH_AT",
      descricao: `CON_ DESALINHADO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_DE_ATERRAMENTO_TETRAPOLAR_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CH ATERR (TETRAPOLAR)_ALINHAR CONTATOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_AT" },
    update: {},
    create: {
      codigoSap: "CH_AT",
      descricao: `CONEXÃO ATER_ INEXIST`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_DE_ATERRAMENTO_TETRAPOLAR_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CH ATERR (TETRAPOLAR)_SUBSTITUIR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_AT" },
    update: {},
    create: {
      codigoSap: "CH_AT",
      descricao: `CONEXÃO ATER_ FOLG`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_CHAVE_DE_ATERRAMENTO_TETRAPOLAR_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `CH ATERR (TETRAPOLAR)_REAPERTAR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RACKS" },
    update: {},
    create: {
      codigoSap: "RACKS",
      descricao: `ISOLADOR POULUÍDO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_ESTRUTURA_SUPORTE_DOS_CAPACITORES_RACKS_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `("RACKS") _ LIMPAR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RACKS" },
    update: {},
    create: {
      codigoSap: "RACKS",
      descricao: `ISOLADOR TRICADO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_ESTRUTURA_SUPORTE_DOS_CAPACITORES_RACKS_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `("RACKS") _ SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RACKS" },
    update: {},
    create: {
      codigoSap: "RACKS",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_ESTRUTURA_SUPORTE_DOS_CAPACITORES_RACKS_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `ACOMPANHAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RACKS" },
    update: {},
    create: {
      codigoSap: "RACKS",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_ESTRUTURA_SUPORTE_DOS_CAPACITORES_RACKS_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `SUBSTITUIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RACKS" },
    update: {},
    create: {
      codigoSap: "RACKS",
      descricao: `OXIDAÇÃO F4/F5`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_ESTRUTURA_SUPORTE_DOS_CAPACITORES_RACKS_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `SUBSTITUIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `OXIDADA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO _RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `ILEGÍVEL`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO _RECUPERAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `FIXAÇÃO INADEQUADA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO _FIXAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `CÓDIGO DE OPER_ ERRADO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO _SUBSTITUIR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `INEXISTENTE`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO _REPOR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `POLUIÇÃO INTERNA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_RELÉS_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `LIMPAR RELÉ`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `NÃO POSSUI TAMPA PROTEÇÃO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_RELÉS_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `COLOCAR TAMPA DE PROTEÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `DESATIVADO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_RELÉS_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `ATIVAR RELÉ`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `DISPLAY APAGADO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_RELÉS_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `RECUPERAR DISPLAY`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `DISPLAY DANIFICADO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_RELÉS_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `RECUPERAR DISPLAY`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `EM FALHA (LED VERMELHA)`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_RELÉS_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `TROCAR EQUIPAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `FUNÇÕES PROTEÇÃO INATIVAS`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_RELÉS_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `REGULARIZAR FUNÇÕES DE PROTEÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `FALHA DE COMUNICAÇÃO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_RELÉS_BANCO_DE_CAPACITORES_id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `REPARAR COMUNICAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TC" },
    update: {},
    create: {
      codigoSap: "TC",
      descricao: `CONEX_ PRIM_ E SEC_ INADEQUADAS`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_TC_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `TP/TC_SUBSTITUIR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TC" },
    update: {},
    create: {
      codigoSap: "TC",
      descricao: `CONEX_ PRIM_ E SEC_ FOLGADAS`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_TC_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `TP/TC_REAPERTAR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TC" },
    update: {},
    create: {
      codigoSap: "TC",
      descricao: `CONEX_PONTO QUENTE 30°C<DT≤55C`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_TC_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TC" },
    update: {},
    create: {
      codigoSap: "TC",
      descricao: `CONEXÃO_PONTO QUENTE DT > 55°C`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_TC_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TC" },
    update: {},
    create: {
      codigoSap: "TC",
      descricao: `CONEX_PONTO QUENTE 25°C<DT≤30°C`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_TC_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TC" },
    update: {},
    create: {
      codigoSap: "TC",
      descricao: `POLUIÇÃO NAS BUCHAS PORCELANA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_TC_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `TC_LIMPARA BUCHA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TC" },
    update: {},
    create: {
      codigoSap: "TC",
      descricao: `TRINCAS NAS BUCHAS PORCELANA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_TC_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `TC_SUBSTITUIR BUCHA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TC" },
    update: {},
    create: {
      codigoSap: "TC",
      descricao: `EXIST_ DE VAZAMENTO DE ÓLEO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_TC_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `TC_RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TC" },
    update: {},
    create: {
      codigoSap: "TC",
      descricao: `CONEXÃO DE ATERRAMENTO INADEQUAD`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_TC_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `TC_SUBSTITUIR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TC" },
    update: {},
    create: {
      codigoSap: "TC",
      descricao: `CONEXÃO DE ATERRAMENTO FOLGADA`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_TC_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `TC_REAPERTAR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TC" },
    update: {},
    create: {
      codigoSap: "TC",
      descricao: `PLACA IDENT_ OXIDADA OU ILEGÍVEL`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_TC_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `TC_RECUPERAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "B_C" },
    update: {},
    create: {
      codigoSap: "B_C",
      descricao: `FORA DE OPERAÇÃO`,
      grupoId: grupo_BANCO_DE_CAPACITORES.id,
      subgrupoId: subgrupo_B_C_BANCO_DE_CAPACITORES.id,
      grupoDefeitoCodigoId: codigo_SEBC_id,
      acaoRecomendada: `RETIRAR/ RECUPERAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABO" },
    update: {},
    create: {
      codigoSap: "CABO",
      descricao: `EXISTÊNCIA DE POLUIÇÃO`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_CABOS_CONDUTORES_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `CABOS CONDUTORES_LIMPAR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABO" },
    update: {},
    create: {
      codigoSap: "CABO",
      descricao: `TENSIONAMENTO INADEQUADO`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_CABOS_CONDUTORES_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `CABOS CONDUTORES_TENSIONAR ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABO" },
    update: {},
    create: {
      codigoSap: "CABO",
      descricao: `CABOS COM TENTO DANIFICADO`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_CABOS_CONDUTORES_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `CABOS CONDUTORES_APLICAR COBERTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABO" },
    update: {},
    create: {
      codigoSap: "CABO",
      descricao: `OBJETOS ESTRANHOS`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_CABOS_CONDUTORES_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `RETIRAR OBJETOS ESTRANHOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONC" },
    update: {},
    create: {
      codigoSap: "CONC",
      descricao: `INADEQUADOS`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_CONECTORES_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `CONECTORES_SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONC" },
    update: {},
    create: {
      codigoSap: "CONC",
      descricao: `EXISTÊNCIA DE FOLGA`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_CONECTORES_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `CONECTORES_REAPERTAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONC" },
    update: {},
    create: {
      codigoSap: "CONC",
      descricao: `TIPO PINO/CABO`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_CONECTORES_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `CONECTORES_SUBSTITUIR POR PINO/CHAPA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONC" },
    update: {},
    create: {
      codigoSap: "CONC",
      descricao: `TIPO " T "`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_CONECTORES_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `CONECTORES_SUBSTITUIR POR AMPACT`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONC" },
    update: {},
    create: {
      codigoSap: "CONC",
      descricao: `TIPO PARALELO`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_CONECTORES_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `CONECTORES_SUBSTITUIR POR AMPACT`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONC" },
    update: {},
    create: {
      codigoSap: "CONC",
      descricao: `FALTANDO PARAFUSOS`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_CONECTORES_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `CONECTORES_REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONC" },
    update: {},
    create: {
      codigoSap: "CONC",
      descricao: `MUITO POLUÍDOS`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_CONECTORES_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `CONECTORES_LIMPAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONC" },
    update: {},
    create: {
      codigoSap: "CONC",
      descricao: `CONEXÃO INADEQUADA`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_CONECTORES_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `CONECTORES_SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONC" },
    update: {},
    create: {
      codigoSap: "CONC",
      descricao: `EXISTÊNC DE CENTELHAMENTO`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_CONECTORES_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `CONECTORES_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONC" },
    update: {},
    create: {
      codigoSap: "CONC",
      descricao: `RUÍDOS VIBRAÇÕES ANORMAIS`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_CONECTORES_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `CONECTORES_RETIRAR RUÍDOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONC" },
    update: {},
    create: {
      codigoSap: "CONC",
      descricao: `PONTO QUENTE DT > 55°C`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_CONECTORES_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONC" },
    update: {},
    create: {
      codigoSap: "CONC",
      descricao: `PONTO QUENTE 30°C<DT≤55°C`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_CONECTORES_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONC" },
    update: {},
    create: {
      codigoSap: "CONC",
      descricao: `PONTO QUENTE 25°C<DT≤30°C`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_CONECTORES_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_POL" },
    update: {},
    create: {
      codigoSap: "IS_POL",
      descricao: `CHAMUSCADO `,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_POLIMÉRICO_BARRAMENTO_id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_POL" },
    update: {},
    create: {
      codigoSap: "IS_POL",
      descricao: `MUITO CHAMUSCADO `,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_POLIMÉRICO_BARRAMENTO_id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_POL" },
    update: {},
    create: {
      codigoSap: "IS_POL",
      descricao: `RASGADO`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_POLIMÉRICO_BARRAMENTO_id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_POL" },
    update: {},
    create: {
      codigoSap: "IS_POL",
      descricao: `EXISTÊNCIA DE POLUIÇÃO`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_POLIMÉRICO_BARRAMENTO_id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `LIMPAR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_POL" },
    update: {},
    create: {
      codigoSap: "IS_POL",
      descricao: `CORPOS ESTRANHO`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_POLIMÉRICO_BARRAMENTO_id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `RETIRAR CORPOS ESTRANHO`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_POR" },
    update: {},
    create: {
      codigoSap: "IS_POR",
      descricao: `CHAMUSCADO `,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_PORCELANA_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_POR" },
    update: {},
    create: {
      codigoSap: "IS_POR",
      descricao: `EXISTÊNCIA DE POLUIÇÃO`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_PORCELANA_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `LIMPAR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_POR" },
    update: {},
    create: {
      codigoSap: "IS_POR",
      descricao: `QUEBRADO 69 KV _ APENAS 01`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_PORCELANA_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_POR" },
    update: {},
    create: {
      codigoSap: "IS_POR",
      descricao: `QUEBRADO 69 KV _ MAIS DE 01`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_PORCELANA_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_POR" },
    update: {},
    create: {
      codigoSap: "IS_POR",
      descricao: `QUEBRADO 138 KV _ MAIS DE 02`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_PORCELANA_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_POR" },
    update: {},
    create: {
      codigoSap: "IS_POR",
      descricao: `QUEBRAD 138KV_02 OU MENOS 02`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_PORCELANA_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_POR" },
    update: {},
    create: {
      codigoSap: "IS_POR",
      descricao: `QUEBRADA 34,5KV _ APENAS 01`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_PORCELANA_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_POR" },
    update: {},
    create: {
      codigoSap: "IS_POR",
      descricao: `QUEBRADO 34,5 KV_ MAIS DE 01`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_PORCELANA_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_POR" },
    update: {},
    create: {
      codigoSap: "IS_POR",
      descricao: `QUEBRADO 13,8 KV _ APENAS 01`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_PORCELANA_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_POR" },
    update: {},
    create: {
      codigoSap: "IS_POR",
      descricao: `QUEBRADO 13,8 KV_ MAIS DE 01`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_PORCELANA_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_POR" },
    update: {},
    create: {
      codigoSap: "IS_POR",
      descricao: `CORPOS ESTRANHO`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_PORCELANA_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `RETIRAR CORPOS ESTRANHO`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_VID" },
    update: {},
    create: {
      codigoSap: "IS_VID",
      descricao: `QUEBRADO 69 KV _ APENAS 01`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_VIDRO_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_VID" },
    update: {},
    create: {
      codigoSap: "IS_VID",
      descricao: `QUEBRADO 69 KV _ MAIS DE 01`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_VIDRO_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_VID" },
    update: {},
    create: {
      codigoSap: "IS_VID",
      descricao: `QUEBRADO 138 KV _ MAIS DE 02`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_VIDRO_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_VID" },
    update: {},
    create: {
      codigoSap: "IS_VID",
      descricao: `QUEBRAD 138KV_02 OU MENOS 02`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_VIDRO_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_VID" },
    update: {},
    create: {
      codigoSap: "IS_VID",
      descricao: `QUEBRADO 13,8 KV _ APENAS 01`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_VIDRO_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_VID" },
    update: {},
    create: {
      codigoSap: "IS_VID",
      descricao: `QUEBRADO 13,8 KV_ MAIS DE 01`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_VIDRO_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_VID" },
    update: {},
    create: {
      codigoSap: "IS_VID",
      descricao: `QUEBRADO 34,5 KV _ APENAS 01`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_VIDRO_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_VID" },
    update: {},
    create: {
      codigoSap: "IS_VID",
      descricao: `QUEBRADO 34,5 KV_ MAIS DE 01`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_VIDRO_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_VID" },
    update: {},
    create: {
      codigoSap: "IS_VID",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_VIDRO_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_VID" },
    update: {},
    create: {
      codigoSap: "IS_VID",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_VIDRO_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_VID" },
    update: {},
    create: {
      codigoSap: "IS_VID",
      descricao: `OXIDAÇÃO F4/F5`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_VIDRO_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "IS_VID" },
    update: {},
    create: {
      codigoSap: "IS_VID",
      descricao: `CORPOS ESTRANHO`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_ISOLADOR_VIDRO_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `RETIRAR CORPOS ESTRANHO`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VIGA" },
    update: {},
    create: {
      codigoSap: "VIGA",
      descricao: `INEXISTÊNCIA DE GALVANIZAÇÃO`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_VIGAS_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `VIGAS_GALVANIZAR VIGAS`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VIGA" },
    update: {},
    create: {
      codigoSap: "VIGA",
      descricao: `INEXISTÊNCIA DE PARAFUSOS`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_VIGAS_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `VIGAS_REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VIGA" },
    update: {},
    create: {
      codigoSap: "VIGA",
      descricao: `PARAFUSO OXIDAÇÃO F4/F5`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_VIGAS_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `VIGAS_SUBSTITUIR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VIGA" },
    update: {},
    create: {
      codigoSap: "VIGA",
      descricao: `PARAFUSO OXIDAÇÃO F3`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_VIGAS_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `VIGAS_SUBSTITUIR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VIGA" },
    update: {},
    create: {
      codigoSap: "VIGA",
      descricao: `PARAFUSO OXIDAÇÃO F1/F2`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_VIGAS_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `VIGAS_SUBSTITUIR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VIGA" },
    update: {},
    create: {
      codigoSap: "VIGA",
      descricao: `OXIDAÇÃO F4/F5`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_VIGAS_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VIGA" },
    update: {},
    create: {
      codigoSap: "VIGA",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_VIGAS_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VIGA" },
    update: {},
    create: {
      codigoSap: "VIGA",
      descricao: `C/ NINHO DE PÁSSARO`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_VIGAS_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `RETIRAT NINHO DE PÁSSARO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VIGA" },
    update: {},
    create: {
      codigoSap: "VIGA",
      descricao: `OXIDAÇÃO F2`,
      grupoId: grupo_BARRAMENTO.id,
      subgrupoId: subgrupo_VIGAS_BARRAMENTO.id,
      grupoDefeitoCodigoId: codigo_SEBA_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `COM  TENTOS PARTIDOS`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_ATERRAMENTO_CHAVE_FACA.id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `SUBSTITUIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `AUSENTE/ PARTIDO`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_ATERRAMENTO_CHAVE_FACA.id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `INSTALAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `FIXAÇÃO INADEQUADA`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_BASE_CHAVE_FACA.id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `FIXAR CHAVE ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `EXISTÊNCIA DE OXIDAÇÃO F4/F5`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_BASE_CHAVE_FACA.id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `EXISTÊNCIA DE OXIDAÇÃO F3`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_BASE_CHAVE_FACA.id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `EXISTÊNCIA DE OXIDAÇÃO F2`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_BASE_CHAVE_FACA.id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `FALTANDO PARAFUSOS`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_BASE_CHAVE_FACA.id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `BASE_REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `PARAFUSOS INADEQUADOS`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_BASE_CHAVE_FACA.id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `BASE_SUBSTITUIR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `C/ NINHO DE PÁSSARO`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_BASE_CHAVE_FACA.id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `RETIRAT NINHO DE PÁSSARO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONECTORES INADEQUADOS`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `CONEXÃO AT_SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE DT > 55°C`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `CONEXÃO AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 30°C<DT≤55°C`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 25°C<DT≤30°C`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONECTOR FALTANDO PARAFUSO`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `MUITO POLUÍDOS`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `LIMPAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `INAD_ PARA TERM_ COMPRESSÃO`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `INADEQUADA A PARAFUSO`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `FOLGADAS`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `REAPERTAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `EXISTÊNC DE CENTELHAMENTO`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `RUÍDOS VIBRAÇÕES ANORMAIS`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `RETIRAR RUÍDOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `TERM_ A COMPRESSÃO NECESSÁR`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `APLICAR TERMINAIS COMPRESSÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CORDOALHA" },
    update: {},
    create: {
      codigoSap: "CORDOALHA",
      descricao: `PONTO QUENTE DT > 55°C`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_CORDOALHA_CHAVE_FACA.id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CORDOALHA" },
    update: {},
    create: {
      codigoSap: "CORDOALHA",
      descricao: `PONTO QUENTE 30°C<DT≤55C`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_CORDOALHA_CHAVE_FACA.id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CORDOALHA" },
    update: {},
    create: {
      codigoSap: "CORDOALHA",
      descricao: `PONTO QUENTE 25°C<DT≤30C`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_CORDOALHA_CHAVE_FACA.id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `COM TRINCAS`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_FACA.id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `ISOLADORES_SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `POUCO POLUIDO`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_FACA.id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `ISOLADORES_LIMPAR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `MUITO POLUÍDOS`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_FACA.id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `ISOLADORES_LIMPAR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `SAIAS QUEBRADAS`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_FACA.id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `ISOLADORES_SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `CHAMUSCADO`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_FACA.id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `CORPOS ESTRANHO`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_FACA.id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `RETIRAR CORPOS ESTRANHO`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `DESREGULADA`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `REGULAR LÂMINA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `FIXAÇÃO INADEQ_ AO CONTATO`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `FIXAR CONTATO ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `OLHAL QUEBRADO`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `SUBSTITUIR A CHAVE`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `SEM LÂMINA `,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `SUBSTITUIR A CHAVE`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `JUMPEADA`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `SUBSTITUIR A CHAVE`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `PONTO QUENTE DT > 55°C`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `PONTO QUENTE 30°C<DT≤55°C`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `PONTO QUENTE 25°C<DT≤30°C`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `INEXISTENTE`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO_REPOR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `ILEGÍVEL`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO_TORNAR LEGÍVEL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `CÓDIGO DE OPER_ INEXISTENTE`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO _FIXAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `CÓDIGO DE OPER_ ERRADO`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CHAVE_FACA_id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO _SUBSTITUIR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_FA" },
    update: {},
    create: {
      codigoSap: "CH_FA",
      descricao: `FORA DE OPERAÇÃO`,
      grupoId: grupo_CHAVE_FACA.id,
      subgrupoId: subgrupo_CH_FA_CHAVE_FACA.id,
      grupoDefeitoCodigoId: codigo_SECH_id,
      acaoRecomendada: `RETIRAR/ RECUPERAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `FIXAÇÃO INADEQUADA`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_BASE_CHAVE_FUSIVEL.id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `BASE_FIXAR CHAVE ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `EXISTÊNCIA DE OXIDAÇÃO F4/F5`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_BASE_CHAVE_FUSIVEL.id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `EXISTÊNCIA DE OXIDAÇÃO F3`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_BASE_CHAVE_FUSIVEL.id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `EXISTÊNCIA DE OXIDAÇÃO F1/F2`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_BASE_CHAVE_FUSIVEL.id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `FALTANDO PARAFUSOS`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_BASE_CHAVE_FUSIVEL.id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `BASE_REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `C/ NINHO DE PÁSSARO`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_BASE_CHAVE_FUSIVEL.id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `RETIRAT NINHO DE PÁSSARO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `PARAFUSOS INADEQUADOS`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_BASE_CHAVE_FUSIVEL.id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `BASE_SUBSTITUIR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASTÃO" },
    update: {},
    create: {
      codigoSap: "BASTÃO",
      descricao: `DESREGULADA`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_BASTÃO_FUSÍVEL_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `REGULAR BASTÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASTÃO" },
    update: {},
    create: {
      codigoSap: "BASTÃO",
      descricao: `FIXAÇÃO INADEQ_ AO CONTATO`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_BASTÃO_FUSÍVEL_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `FIXAR CONTATO ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASTÃO" },
    update: {},
    create: {
      codigoSap: "BASTÃO",
      descricao: `OLHAL QUEBRADO`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_BASTÃO_FUSÍVEL_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `SUBSTITUIR OLHAL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASTÃO" },
    update: {},
    create: {
      codigoSap: "BASTÃO",
      descricao: `INEXISTENTE`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_BASTÃO_FUSÍVEL_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `REPOR BASTÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASTÃO" },
    update: {},
    create: {
      codigoSap: "BASTÃO",
      descricao: `JUMPEADA`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_BASTÃO_FUSÍVEL_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `REPOR BASTÃO COM ELO FUSIVEL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASTÃO" },
    update: {},
    create: {
      codigoSap: "BASTÃO",
      descricao: `SEM ELO FUSÍVEL`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_BASTÃO_FUSÍVEL_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `INSTALAR ELO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASTÃO" },
    update: {},
    create: {
      codigoSap: "BASTÃO",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_BASTÃO_FUSÍVEL_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `LIMPAR BASTÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASTÃO" },
    update: {},
    create: {
      codigoSap: "BASTÃO",
      descricao: `FALTA ELO RESERVA DO TRAFO 3UN`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_BASTÃO_FUSÍVEL_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `REPOR BASTÃO/ELO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASTÃO" },
    update: {},
    create: {
      codigoSap: "BASTÃO",
      descricao: `FALTA ELO RESERVA DO TRAFO <3UN`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_BASTÃO_FUSÍVEL_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `REPOR BASTÃO/ELO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASTÃO" },
    update: {},
    create: {
      codigoSap: "BASTÃO",
      descricao: `FALTA BASTÃO RESERVA DO TRAFO 3UN`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_BASTÃO_FUSÍVEL_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `REPOR BASTÃO/ELO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASTÃO" },
    update: {},
    create: {
      codigoSap: "BASTÃO",
      descricao: `FALTA BASTÃO RESERVA DO TRAFO <3UN`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_BASTÃO_FUSÍVEL_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `REPOR BASTÃO/ELO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASTÃO" },
    update: {},
    create: {
      codigoSap: "BASTÃO",
      descricao: `ACONDICION_ INADEQ_ RESERVA`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_BASTÃO_FUSÍVEL_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `ADEQUAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONECTORES INADEQUADOS`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `LIMPAR BASTÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE DT > 55°C`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `CONEXÃO AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 30°C<DT≤55°C`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 25°C<DT≤30°C`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONECTOR FALTANDO PARAFUSO`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `CONEXÃO AT_REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `MUITO POLUÍDOS`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `CONEXÃO AT_LIMPAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `INAD_ PARA TERM_ COMPRESSÃO`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `CONEXÃO AT_SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `INADEQUADA A PARAFUSO`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `CONEXÃO AT_SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `FOLGADAS`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `CONEXÃO AT_REAPERTAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `EXISTÊNC DE CENTELHAMENTO`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `CONEXÃO AT_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `RUÍDOS VIBRAÇÕES ANORMAIS`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `CONEXÃO AT_RETIRAR RUÍDOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `TERM_ A COMPRESSÃO NECESSÁR`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `CONEXÃO AT_APLICAR TERMINAIS COMPRESSÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `COM TRINCAS`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_FUSIVEL.id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `ISOLADORES_SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `POUCO POLUIDO`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_FUSIVEL.id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `ISOLADORES_LIMPAR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `MUITO POLUÍDOS`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_FUSIVEL.id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `ISOLADORES_LIMPAR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `SAIAS QUEBRADAS`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_FUSIVEL.id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `ISOLADORES_SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `CHAMUSCADO`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_FUSIVEL.id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `CORPOS ESTRANHO`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_FUSIVEL.id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `RETIRAR CORPOS ESTRANHO`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `INEXISTENTE`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO_REPOR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `ILEGÍVEL`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO_TORNAR LEGÍVEL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `CÓDIGO DE OPER_ INEXISTENTE`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO _FIXAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `CÓDIGO DE OPER_ ERRADO`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CHAVE_FUSIVEL_id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO _SUBSTITUIR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_FU" },
    update: {},
    create: {
      codigoSap: "CH_FU",
      descricao: `FORA DE OPERAÇÃO`,
      grupoId: grupo_CHAVE_FUSIVEL.id,
      subgrupoId: subgrupo_CH_FU_CHAVE_FUSIVEL.id,
      grupoDefeitoCodigoId: codigo_SECF_id,
      acaoRecomendada: `RETIRAR/ RECUPERAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `FIXAÇÃO INADEQUADA`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_BASE_CHAVE_TANDEM.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `BASE_FIXAR CHAVE ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `EXISTÊNCIA DE OXIDAÇÃO F4/F5`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_BASE_CHAVE_TANDEM.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `SUBSTITUIR CHAVE`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `EXISTÊNCIA DE OXIDAÇÃO F3`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_BASE_CHAVE_TANDEM.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `EXISTÊNCIA DE OXIDAÇÃO F1/F2`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_BASE_CHAVE_TANDEM.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `FALTANDO PARAFUSOS`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_BASE_CHAVE_TANDEM.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `BASE_REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `PARAFUSOS INADEQUADOS`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_BASE_CHAVE_TANDEM.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `BASE_SUBSTITUIR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `C/ NINHO DE PÁSSARO`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_BASE_CHAVE_TANDEM.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAT NINHO DE PÁSSARO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONECTORES INADEQUADOS`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `CONEXÃO AT_SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE DT > 55°C`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `CONEXÃO AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 30°C<DT≤55°C`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 25°C<DT≤30°C`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONECTOR FALTANDO PARAFUSO`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `CONEXÃO AT_REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `MUITO POLUÍDOS`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `CONEXÃO AT_LIMPAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `INAD_ PARA TERM_ COMPRESSÃO`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `CONEXÃO AT_SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `INADEQUADA A PARAFUSO`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `CONEXÃO AT_SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `FALGADAS`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `CONEXÃO AT_REAPERTAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `EXISTÊNC DE CENTELHAMENTO`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `CONEXÃO AT_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `RUÍDOS VIBRAÇÕES ANORMAIS`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `CONEXÃO AT_RETIRAR RUÍDOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `TERM_ A COMPRESSÃO NECESSÁR`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `CONEXÃO AT_APLICAR TERMINAIS COMPRESSÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CORDOALHA" },
    update: {},
    create: {
      codigoSap: "CORDOALHA",
      descricao: `ATERRAMENTO PARTIDO`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_CORDOALHA_CHAVE_TANDEM.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `SUBSTITUIR CORDOALHA DE ATERRAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CORDOALHA" },
    update: {},
    create: {
      codigoSap: "CORDOALHA",
      descricao: `PONTO QUENTE DT > 55°C`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_CORDOALHA_CHAVE_TANDEM.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CORDOALHA" },
    update: {},
    create: {
      codigoSap: "CORDOALHA",
      descricao: `PONTO QUENTE 30°C<DT≤55C`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_CORDOALHA_CHAVE_TANDEM.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CORDOALHA" },
    update: {},
    create: {
      codigoSap: "CORDOALHA",
      descricao: `PONTO QUENTE 25°C<DT≤30C`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_CORDOALHA_CHAVE_TANDEM.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `COM TRINCAS`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_TANDEM.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `ISOLADORES_SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `POUCO POLUIDO`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_TANDEM.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `ISOLADORES_LIMPAR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `MUITO POLUÍDOS`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_TANDEM.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `ISOLADORES_LIMPAR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `SAIAS QUEBRADAS`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_TANDEM.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `ISOLADORES_SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `CHAMUSCADO`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_TANDEM.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `COM CORPOS ESTRANHO`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_TANDEM.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR CORPOS ESTRANHO`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `PONTO QUENTE DT > 55°C`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `PONTO QUENTE 30°C<DT≤55°C`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `PONTO QUENTE 25°C<DT≤30°C`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `DESREGULADA`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `REGULARA LÂMINA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `FIXAÇ INADEQUADA AO CONTATO`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `FIXAR CONTATO ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `OLHAL QUEBRADO`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `SUBSTITUIR A CHAVE`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `SEM LÂMINA `,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `SUBSTITUIR A CHAVE`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `JUMPEADA`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `SUBSTITUIR A CHAVE`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `INEXISTENTE`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO_REPOR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `ILEGÍVEL`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO_TORNAR LEGÍVEL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `CÓDIGO DE OPER_ INEXISTENTE`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO _FIXAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `CÓDIGO DE OPER_ ERRADO`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CHAVE_TANDEM_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO _SUBSTITUIR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_TD" },
    update: {},
    create: {
      codigoSap: "CH_TD",
      descricao: `FORA DE OPERAÇÃO`,
      grupoId: grupo_CHAVE_TANDEM.id,
      subgrupoId: subgrupo_CH_TD_CHAVE_TANDEM.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR/ RECUPERAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `FIXAÇÃO INADEQUADA`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_BASE_CHAVE_TRIPOLAR.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `FIXAR CHAVE ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `EXISTÊNCIA OXIDAÇÃO F5`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_BASE_CHAVE_TRIPOLAR.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `SUBSTITUIR CHAVE`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `EXISTÊNCIA OXIDAÇÃO F3`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_BASE_CHAVE_TRIPOLAR.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `EXISTÊNCIA OXIDAÇÃO F2`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_BASE_CHAVE_TRIPOLAR.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `FALTANDO PARAFUSOS`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_BASE_CHAVE_TRIPOLAR.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `BASE_REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `PARAFUSOS INADEQUADOS`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_BASE_CHAVE_TRIPOLAR.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `BASE_SUBSTITUIR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `C/ NINHO DE PÁSSARO`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_BASE_CHAVE_TRIPOLAR.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAT NINHO DE PÁSSARO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONECTORES INADEQUADOS`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `CONEXÃO AT_SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE DT > 55°C`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `CONEXÃO AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 30°C<DT≤55°C`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 25°C<DT≤30°C`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONECTOR FALTANDO PARAFUSO`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `CONEXÃO AT_REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `MUITO POLUÍDOS`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `CONEXÃO AT_LIMPAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `INAD_ PARA TERM_ COMPRESSÃO`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `CONEXÃO AT_SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `INADEQUADA A PARAFUSO`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `CONEXÃO AT_SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `FALGADAS`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `CONEXÃO AT_REAPERTAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `EXISTÊNC DE CENTELHAMENTO`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `CONEXÃO AT_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `RUÍDOS VIBRAÇÕES ANORMAIS`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `CONEXÃO AT_RETIRAR RUÍDOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `TERM_ A COMPRESSÃO NECESSÁR`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `CONEXÃO AT_APLICAR TERMINAIS COMPRESSÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CORDOALHA" },
    update: {},
    create: {
      codigoSap: "CORDOALHA",
      descricao: `ATERRAMENTO PARTIDO`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_CORDOALHA_CHAVE_TRIPOLAR.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `SUBSTITUIR CORDOALHA DE ATERRAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CORDOALHA" },
    update: {},
    create: {
      codigoSap: "CORDOALHA",
      descricao: `PONTO QUENTE DT > 55°C`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_CORDOALHA_CHAVE_TRIPOLAR.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CORDOALHA" },
    update: {},
    create: {
      codigoSap: "CORDOALHA",
      descricao: `PONTO QUENTE 30C<DT≤55C`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_CORDOALHA_CHAVE_TRIPOLAR.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CORDOALHA" },
    update: {},
    create: {
      codigoSap: "CORDOALHA",
      descricao: `PONTO QUENTE 25C<DT≤30C`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_CORDOALHA_CHAVE_TRIPOLAR.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `COM TRINCAS`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_TRIPOLAR.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `ISOLADORES_SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `POUCO POLUIDO`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_TRIPOLAR.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `ISOLADORES_LIMPAR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `MUITO POLUÍDOS`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_TRIPOLAR.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `ISOLADORES_LIMPAR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `SAIAS QUEBRADAS`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_TRIPOLAR.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `ISOLADORES_SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `CHAMUSCADO`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_TRIPOLAR.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `CORPOS ESTRANHO`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_ISOLADOR_CHAVE_TRIPOLAR.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR CORPOS ESTRANHO`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `DESREGULADA`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `REGULARA LÂMINA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `FIXAÇÃO INADEQ_ AO CONTATO`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `FIXAR CONTATO ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `OLHAL QUEBRADO`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `SUBSTITUIR A CHAVE`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `SEM LÂMINA `,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `SUBSTITUIR A CHAVE`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `JUMPEADA`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `SUBSTITUIR A CHAVE`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `PONTO QUENTE DT > 55°C`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `PONTO QUENTE 30°C<DT≤55°C`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "LÂMINA" },
    update: {},
    create: {
      codigoSap: "LÂMINA",
      descricao: `PONTO QUENTE 25°C<DT≤30°C`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_LÂMINA_FACA_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `PLACA INEXISTENTE`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO_REPOR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `PLACA ILEGÍVEL`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO_TORNAR LEGÍVEL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `CÓDIGO DE OPER_ INEXISTENTE`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO _FIXAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `CÓDIGO DE OPER_ ERRADO`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CHAVE_TRIPOLAR_id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO _SUBSTITUIR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CH_TRI" },
    update: {},
    create: {
      codigoSap: "CH_TRI",
      descricao: `FORA DE OPERAÇÃO`,
      grupoId: grupo_CHAVE_TRIPOLAR.id,
      subgrupoId: subgrupo_CH_TRI_CHAVE_TRIPOLAR.id,
      grupoDefeitoCodigoId: codigo_SECT_id,
      acaoRecomendada: `RETIRAR/ RECUPERAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ILUM" },
    update: {},
    create: {
      codigoSap: "ILUM",
      descricao: `AUSÊNCIA DE DE ILUMINAÇÃO`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo__ILUMINAÇÃO_CIVIL_id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `INSTALAÇÃO LUMINÁRIA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ILUM" },
    update: {},
    create: {
      codigoSap: "ILUM",
      descricao: `LUMINÁRIA QUEIMADA`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo__ILUMINAÇÃO_CIVIL_id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `SUBSTITUIR LUMINÁRIA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ILUM" },
    update: {},
    create: {
      codigoSap: "ILUM",
      descricao: `AUSÊNCIA FOTOCÉLULA LUMINÁRIA`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo__ILUMINAÇÃO_CIVIL_id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `INSTALAR FOTOCÉLULA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ILUM" },
    update: {},
    create: {
      codigoSap: "ILUM",
      descricao: `CURTO_CIRCUITO FIAÇÃO ILUMIN`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo__ILUMINAÇÃO_CIVIL_id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `SUBSTITUIR FIAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CANALETA" },
    update: {},
    create: {
      codigoSap: "CANALETA",
      descricao: `S/TAMPA_FORA ÁREA BRITADA`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_CANALETA_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `SUBSTITUIR TAMPA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQP_ DE LIMPEZA `,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CANALETA" },
    update: {},
    create: {
      codigoSap: "CANALETA",
      descricao: `S/TAMPA_DENTRO ÁREA BRITADA`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_CANALETA_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `SUBSTITUIR TAMPA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQP_ DE LIMPEZA `,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CANALETA" },
    update: {},
    create: {
      codigoSap: "CANALETA",
      descricao: `TAMPA QUEBR_DENTRO ÁREA BRITADA`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_CANALETA_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `SUBSTITUIR TAMPA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQP_ DE LIMPEZA `,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CANALETA" },
    update: {},
    create: {
      codigoSap: "CANALETA",
      descricao: `TAMPA QUEBR_FORA ÁREA BRITADA`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_CANALETA_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `SUBSTITUIR TAMPA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQP_ DE LIMPEZA `,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CANALETA" },
    update: {},
    create: {
      codigoSap: "CANALETA",
      descricao: `QUEBRADA_DENTRO ÁREA BRITADA`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_CANALETA_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `RECUPERA CANALETA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQP_ DE LIMPEZA `,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CANALETA" },
    update: {},
    create: {
      codigoSap: "CANALETA",
      descricao: `CAIXA PASSAGEM QUEBRADA`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_CANALETA_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `RECUPERA CAIXA DE PASSAGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQP_ DE LIMPEZA `,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CASA" },
    update: {},
    create: {
      codigoSap: "CASA",
      descricao: `CALÇADA QUEBRADA`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_CASA_DE_COMANDO_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `RECUPERAR CALÇADA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQP_ DE LIMPEZA `,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CASA" },
    update: {},
    create: {
      codigoSap: "CASA",
      descricao: `PINTURA DETERIORADA`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_CASA_DE_COMANDO_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `RECUPERAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CASA" },
    update: {},
    create: {
      codigoSap: "CASA",
      descricao: `EXTINTOR INCÊNCIO INEXISTENTE`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_CASA_DE_COMANDO_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `INSTALAR INCÊNCIO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CASA" },
    update: {},
    create: {
      codigoSap: "CASA",
      descricao: `EXTINTOR DE INCÊNCIO VENCIDO`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_CASA_DE_COMANDO_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `SUBSTITUIR INCÊNCIO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CASA" },
    update: {},
    create: {
      codigoSap: "CASA",
      descricao: `GRADE DA PORTA COM DEFEITO`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_CASA_DE_COMANDO_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `CONSERTAR GRANDE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CASA" },
    update: {},
    create: {
      codigoSap: "CASA",
      descricao: `EXAUSTOR COM DEFEITO`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_CASA_DE_COMANDO_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `SUBSTITUIR EXAUSTOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CASA" },
    update: {},
    create: {
      codigoSap: "CASA",
      descricao: `EXAUSTOR _ NECESSÁRIO`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_CASA_DE_COMANDO_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `INSTALAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CASA" },
    update: {},
    create: {
      codigoSap: "CASA",
      descricao: `AUSÊNCIA DE PIA `,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_CASA_DE_COMANDO_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `INSTALAÇÃO DE PIA `,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CASA" },
    update: {},
    create: {
      codigoSap: "CASA",
      descricao: `INFILTRAÇÃO DE ÁGUA `,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_CASA_DE_COMANDO_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `CONSERTAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CASA" },
    update: {},
    create: {
      codigoSap: "CASA",
      descricao: `FALTA DE ÁGUA`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_CASA_DE_COMANDO_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `ABASTECER`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CASA" },
    update: {},
    create: {
      codigoSap: "CASA",
      descricao: `TEMPERATURA SALA 25°C<T≤27°C`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_CASA_DE_COMANDO_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CASA" },
    update: {},
    create: {
      codigoSap: "CASA",
      descricao: `TEMPERATURA SALA 28°C <T≤30°C`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_CASA_DE_COMANDO_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `NORMALIZAR `,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CASA" },
    update: {},
    create: {
      codigoSap: "CASA",
      descricao: `TEMPERATURA SALA T>30°C`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_CASA_DE_COMANDO_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `NORMALIZAR `,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MURO" },
    update: {},
    create: {
      codigoSap: "MURO",
      descricao: `PINTURA DO MURO DETERIORADA`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_MURO_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `PINTAR MURO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQP_ DE LIMPEZA `,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MURO" },
    update: {},
    create: {
      codigoSap: "MURO",
      descricao: `MURO COM FISSURAS`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_MURO_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `RECUPERAR MURO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQP_ DE LIMPEZA `,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MURO" },
    update: {},
    create: {
      codigoSap: "MURO",
      descricao: `AUSÊNCIA DO NOME SUBESTAÇÃO`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_MURO_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `PINTAR MURO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQP_ DE LIMPEZA `,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MURO" },
    update: {},
    create: {
      codigoSap: "MURO",
      descricao: `AUSÊNCIA SECCIONAMENTO CERCAS`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_MURO_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `REALIZAR SECCIONAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MURO" },
    update: {},
    create: {
      codigoSap: "MURO",
      descricao: `CONCERTINA DANIFICADA`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_MURO_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `SUBSTITUIR  CERCA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MURO" },
    update: {},
    create: {
      codigoSap: "MURO",
      descricao: `CERCA ELÉTRICA DANIFICADA`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_MURO_CIVIL.id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `SUBSTITUIR  CERCA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PÁTIO" },
    update: {},
    create: {
      codigoSap: "PÁTIO",
      descricao: `C/VEGETAÇÃO_ÁREA BRITADA`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_PÁTIO_CIVIL_id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `LIMPAR PÁTIO DA SE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQP_ DE LIMPEZA `,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PÁTIO" },
    update: {},
    create: {
      codigoSap: "PÁTIO",
      descricao: `C/VEGETAÇÃO_FORA ÁREA BRITAD`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_PÁTIO_CIVIL_id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `LIMPAR PÁTIO DA SE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQP_ DE LIMPEZA `,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PÁTIO" },
    update: {},
    create: {
      codigoSap: "PÁTIO",
      descricao: `BLOQUETE VIA ACESSO DETERIOR`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_PÁTIO_CIVIL_id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `REPOR BLOQUETE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQP_ DE LIMPEZA `,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PÁTIO" },
    update: {},
    create: {
      codigoSap: "PÁTIO",
      descricao: `PÁTIO C/DEFICIÊNCIA DE BRITA`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_PÁTIO_CIVIL_id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `REPOR BRITA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQP_ DE LIMPEZA `,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PÁTIO" },
    update: {},
    create: {
      codigoSap: "PÁTIO",
      descricao: `FALTA ACESSO CAMINHÃO 13,8KV`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_PÁTIO_CIVIL_id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `AMPLIAR SE`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EXPANSÃO`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PÁTIO" },
    update: {},
    create: {
      codigoSap: "PÁTIO",
      descricao: `FALTA ACESSO CAMINHÃO 23KV`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_PÁTIO_CIVIL_id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `AMPLIAR SE`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EXPANSÃO`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PÁTIO" },
    update: {},
    create: {
      codigoSap: "PÁTIO",
      descricao: `FALTA ACESSO CAMINHÃO 34,5KV`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_PÁTIO_CIVIL_id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `AMPLIAR SE`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EXPANSÃO`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PÁTIO" },
    update: {},
    create: {
      codigoSap: "PÁTIO",
      descricao: `FALTA ACESSO CAMINHÃO 69KV`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_PÁTIO_CIVIL_id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `AMPLIAR SE`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EXPANSÃO`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PÁTIO" },
    update: {},
    create: {
      codigoSap: "PÁTIO",
      descricao: `FALTA ACESSO CAMINHÃO 138KV`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_PÁTIO_CIVIL_id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `AMPLIAR SE`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EXPANSÃO`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PÁTIO" },
    update: {},
    create: {
      codigoSap: "PÁTIO",
      descricao: `RESTO DE OBRA NO TERRENO SE`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_PÁTIO_CIVIL_id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `RETIRAR MATERIAIS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EXPANSÃO`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PÁTIO" },
    update: {},
    create: {
      codigoSap: "PÁTIO",
      descricao: `EQUIPAMENTO DESATIVADO`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_PÁTIO_CIVIL_id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `RETIRAR EQUIPAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PÁTIO" },
    update: {},
    create: {
      codigoSap: "PÁTIO",
      descricao: `TAMBOR ÓLEO ABANDONADO PÁTIO`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_PÁTIO_CIVIL_id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `RETIRAR `,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PÁTIO" },
    update: {},
    create: {
      codigoSap: "PÁTIO",
      descricao: `FALTA DE EXTINTOR INCÊNCIO`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_PÁTIO_CIVIL_id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `INSTALAR INCÊNCIO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PÁTIO" },
    update: {},
    create: {
      codigoSap: "PÁTIO",
      descricao: `EXTINTOR DE INCÊNCIO VENCIDO`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_PÁTIO_CIVIL_id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `SUBSTITUIR INCÊNCIO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PÁTIO" },
    update: {},
    create: {
      codigoSap: "PÁTIO",
      descricao: `TORRES/ANTENAS DESATIVADAS`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_PÁTIO_CIVIL_id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `RETIRAR EQUIPAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `T_I`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PORTÃO" },
    update: {},
    create: {
      codigoSap: "PORTÃO",
      descricao: `AUSÊNCIA ATERRAMENTO PORTÃO`,
      grupoId: grupo_CIVIL.id,
      subgrupoId: subgrupo_PORTÃO_CIVIL_id,
      grupoDefeitoCodigoId: codigo_SECV_id,
      acaoRecomendada: `INSTALAR ATERRAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARMÁRIO" },
    update: {},
    create: {
      codigoSap: "ARMÁRIO",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_ARMÁRIO_METÁLICO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `PINTAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARMÁRIO" },
    update: {},
    create: {
      codigoSap: "ARMÁRIO",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_ARMÁRIO_METÁLICO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `PINTAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARMÁRIO" },
    update: {},
    create: {
      codigoSap: "ARMÁRIO",
      descricao: `OXIDAÇÃO F4/F5`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_ARMÁRIO_METÁLICO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `SUBSTITUIR EQUIPAMENTO`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARMÁRIO" },
    update: {},
    create: {
      codigoSap: "ARMÁRIO",
      descricao: `POSIÇÃO ELETRODUTO INAD`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_ARMÁRIO_METÁLICO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `ARMÁRIO METÁLICO_ADEQUAR POSIÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARMÁRIO" },
    update: {},
    create: {
      codigoSap: "ARMÁRIO",
      descricao: `PENETRAÇÃO UMIDADE`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_ARMÁRIO_METÁLICO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `ARMÁRIO METÁLICO_VEDAR ELETRODUTOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARMÁRIO" },
    update: {},
    create: {
      codigoSap: "ARMÁRIO",
      descricao: `FUSÍVEIS QUEIMADOS`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_ARMÁRIO_METÁLICO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `ARMÁRIO METÁLICO_SUBSTITUIR FUSÍVEIS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARMÁRIO" },
    update: {},
    create: {
      codigoSap: "ARMÁRIO",
      descricao: `BL_ TERMIN_/C_ FOLGADO`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_ARMÁRIO_METÁLICO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `ARMÁRIO METÁLICO_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARMÁRIO" },
    update: {},
    create: {
      codigoSap: "ARMÁRIO",
      descricao: `LÂMPADA SINAL_ QUEIMADA`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_ARMÁRIO_METÁLICO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `ARMÁRIO METÁLICO_SUBSTITUIR LÂMPADAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARMÁRIO" },
    update: {},
    create: {
      codigoSap: "ARMÁRIO",
      descricao: `RESIST_ AQUEC_ INOPER_`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_ARMÁRIO_METÁLICO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `ARMÁRIO METÁLICO_DESATIVAR RESISTÊNCIA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARMÁRIO" },
    update: {},
    create: {
      codigoSap: "ARMÁRIO",
      descricao: `FIOS SOLTOS S/ISOLAÇÃO`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_ARMÁRIO_METÁLICO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `ARMÁRIO METÁLICO_ISOLAR PONTAS DOS FIOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARMÁRIO" },
    update: {},
    create: {
      codigoSap: "ARMÁRIO",
      descricao: `ILUMIN_ INT_ Ñ FUNCIONA`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_ARMÁRIO_METÁLICO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `ARMÁRIO METÁLICO_RECUPERAR ILUMINAÇÃO IN`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARMÁRIO" },
    update: {},
    create: {
      codigoSap: "ARMÁRIO",
      descricao: `FIXAÇÃO BASE INADEQUA`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_ARMÁRIO_METÁLICO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `ARMÁRIO METÁLICO_FIXAR BASE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARMÁRIO" },
    update: {},
    create: {
      codigoSap: "ARMÁRIO",
      descricao: `BASE DESNIVELADA`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_ARMÁRIO_METÁLICO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `ARMÁRIO METÁLICO_NIVELAR BASE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARMÁRIO" },
    update: {},
    create: {
      codigoSap: "ARMÁRIO",
      descricao: `ATERR_ INEXISTENTE`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_ARMÁRIO_METÁLICO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `ARMÁRIO METÁLICO_REPOR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARMÁRIO" },
    update: {},
    create: {
      codigoSap: "ARMÁRIO",
      descricao: `CONEX ATERR_ INADEQUADO`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_ARMÁRIO_METÁLICO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `ARMÁRIO METÁLICO_SUBSTITUIR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARMÁRIO" },
    update: {},
    create: {
      codigoSap: "ARMÁRIO",
      descricao: `PORTA EMPENADA`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_ARMÁRIO_METÁLICO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `ARMÁRIO METÁLICO_DESEMPENAR PORTA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARMÁRIO" },
    update: {},
    create: {
      codigoSap: "ARMÁRIO",
      descricao: `PORTA SEM TRANCA`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_ARMÁRIO_METÁLICO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `ARMÁRIO METÁLICO_REPOR TRANCA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BARR" },
    update: {},
    create: {
      codigoSap: "BARR",
      descricao: `PONTO QUENTE 30°C<DT≤55°C`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_BARRAMENTOS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BARR" },
    update: {},
    create: {
      codigoSap: "BARR",
      descricao: `PONTO QUENTE DT > 55°C`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_BARRAMENTOS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BARR" },
    update: {},
    create: {
      codigoSap: "BARR",
      descricao: `PONTO QUENTE 25°C<DT≤30°C`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_BARRAMENTOS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BARR" },
    update: {},
    create: {
      codigoSap: "BARR",
      descricao: `CONEXÃO FOLGADA`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_BARRAMENTOS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `BARRAMENTOS_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BARR" },
    update: {},
    create: {
      codigoSap: "BARR",
      descricao: `CONEXÃO PARAFUSOS INADEQUA`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_BARRAMENTOS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `BARRAMENTOS_SUBSTITUIR/REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BARR" },
    update: {},
    create: {
      codigoSap: "BARR",
      descricao: `ISOLADORES SUP_ SUJOS`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_BARRAMENTOS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `BARRAMENTOS_LIMPAR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BARR" },
    update: {},
    create: {
      codigoSap: "BARR",
      descricao: `ISOLADORES SUP_ CHAMUSCADO`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_BARRAMENTOS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `BARRAMENTOS_SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BARR" },
    update: {},
    create: {
      codigoSap: "BARR",
      descricao: `MUFLAS PASSAG_ CONS_ DEFIC`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_BARRAMENTOS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `BARRAMENTOS_MELHORAR ESTADO DE CONSERVAÇ`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BARR" },
    update: {},
    create: {
      codigoSap: "BARR",
      descricao: `MUFLAS PASSAG NÃO ATERRADA`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_BARRAMENTOS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `BARRAMENTOS_ATERRAR CORDOALJA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `OXIDAÇÃO PARTE METÁLICA`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `BUCHAS _RETIRAR CORROSÃO/OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `SINAL DE VAZAMENTO`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `BUCHAS _SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `POLUÍDAS (SUJEIRAS)`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `BUCHAS _LIMPAR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `TRINCAS OU RACHADURAS`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `BUCHAS _SUBSTITUIR BUCHA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `CHAMUSCADA`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `BUCHAS _SUBSTITUIR BUCHA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `SAIS QUEBRADAS`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `BUCHAS _SUBSTITUIR BUCHA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `INFILTRAÇÃO DE ÁGUA`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `BUCHAS_CORRIGIR INFILTRAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `BUCHAS_RETIRAR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `INADEQUADOS`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `CONEXÕES DE AT _SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `FOLGADAS`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `CONEXÕES DE AT _RETIIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 30°C<DT≤55°C`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE DT > 55°C`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 25°C<DT≤30°C`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `TIPO PINO/CABO`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `CONEXÃO AT_SUBSTITUIR POR PINO/CHAPA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `FALTANDO PARAFUSOS`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `CONEXÃO AT_REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `MUITO POLUÍDOS`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `CONEXÃO AT_LIMPAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `INADEQ_ P/ TERM_ COMPRESS`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `CONEXÃO AT_SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÃO INADEQUADA`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `CONEXÃO AT_SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `EXISTÊNC DE CENTELHAMENTO`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `CONEXÃO AT_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `RUÍDOS VIBRAÇÕES ANORMAIS`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `CONEXÃO AT_RETIRAR RUÍDOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `FALTA CONE PROTEÇÃO`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `CONEXÃO AT_COLOCAR CONE DE PROTEÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `TERM_ À COMPRESSÃO NECESS`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `CONEXÃO AT_APLICAR TERMINAIS COMPRESSÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "GALERIA CABO" },
    update: {},
    create: {
      codigoSap: "GALERIA CABO",
      descricao: `BANDEJA DEFEITUOSA`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_GALERIA_DE_CABOS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `GALERIA DE CABOS_REGULARIZAR FIXAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "GALERIA CABO" },
    update: {},
    create: {
      codigoSap: "GALERIA CABO",
      descricao: `S/ATERRAM BANDEJA`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_GALERIA_DE_CABOS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `GALERIA DE CABOS_ATERRAR BANDEJAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "GALERIA CABO" },
    update: {},
    create: {
      codigoSap: "GALERIA CABO",
      descricao: `MUFLAS PASSAG SUJA`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_GALERIA_DE_CABOS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `GALERIA DE CABOS_LIMPARA MUFLAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "GALERIA CABO" },
    update: {},
    create: {
      codigoSap: "GALERIA CABO",
      descricao: `MUFLAS Ñ ATERRADAS`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_GALERIA_DE_CABOS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `GALERIA DE CABOS_CONECTAR CORDOALHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "GALERIA CABO" },
    update: {},
    create: {
      codigoSap: "GALERIA CABO",
      descricao: `ILUM INT_ Ñ FUNCIO`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_GALERIA_DE_CABOS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `GALERIA DE CABOS_REC ILUMINAÇÃO INTERNA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "GALERIA CABO" },
    update: {},
    create: {
      codigoSap: "GALERIA CABO",
      descricao: `ILUM EMERG_ Ñ FUNC`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_GALERIA_DE_CABOS_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `GALERIA DE CABOS_REC ILUMINAÇÃO EMERGÊNC`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `INEXISTENTE`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO_REPOR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `ILEGÍVEL`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO_RECUPERAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `OXIDADA`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `FIXAÇÃO INADEQUADA`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `FIXAR ADEQUADAMEN`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `CÓDIGO DE OPER_ ERRADO`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `PLACA DE IDENTIFICAÇÃO _SUBSTITUIR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `POLUIÇÃO INTERNA`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_RELÉS_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `LIMPAR RELÉ`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `NÃO POSSUI TAMPA PROTEÇÃO`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_RELÉS_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `COLOCAR TAMPA DE PROTEÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `DESATIVADO`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_RELÉS_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `ATIVAR RELÉ DE NEUTRO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `DISPLAY DANIFICADO`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_RELÉS_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `SUBSTITUIR RELÉ`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `DISPLAY APAGADO`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_RELÉS_CUBICULO_id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `RECUPERAR DISPLAY`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CUBICULO" },
    update: {},
    create: {
      codigoSap: "CUBICULO",
      descricao: `FORA DE OPERAÇÃO`,
      grupoId: grupo_CUBICULO.id,
      subgrupoId: subgrupo_CUBICULO_CUBICULO.id,
      grupoDefeitoCodigoId: codigo_SECU_id,
      acaoRecomendada: `RETIRAR/ RECUPERAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `CONEXÕES FOLGADAS`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_ATERRAMENTO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `ATERRAMENTO_REAPERTAR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `CABO DE ATERRAMENTO INADEQUADO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_ATERRAMENTO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `ATERRAMENTO_SUBSTITUIR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `PARTIDO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_ATERRAMENTO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `INEXISTENTE`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_ATERRAMENTO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `INSTALAR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `DESCONECTAD_  CARCAÇA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_ATERRAMENTO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `CONECTAR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `OXIDADO F1/F2`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_ATERRAMENTO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `OXIDADO F3`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_ATERRAMENTO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `OXIDADO F4/F5`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_ATERRAMENTO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `TRELIÇAS OXIDADAS F3`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `BASE DE FIXAÇÃO _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `TRELIÇAS OXIDADAS F4/F5`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `TRELIÇAS OXIDADAS F1/F2`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `PARAFUSOS OXIDADOS F3`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `BASE DE FIXAÇÃO _SUBSTITUIR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `PARAFUSOS OXIDADOS F4/F5`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `PARAFUSOS OXIDADOS F1/F2`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `AUSÊNCIA PARAFUSOS DE FIXAÇÃO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `BASE DE FIXAÇÃO _REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `C/ NINHO DE PÁSSARO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RETIRAT NINHO DE PÁSSARO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `BASE DESNIVELADA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `BASE DE FIXAÇÃO _NIVELAR BASE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA MORTA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `OXIDAÇÃO PARTE METÁLICA F1/F2`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `BUCHAS _RETIRAR CORROSÃO/OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `OXIDAÇÃO PARTE METÁLICA F3`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `BUCHAS _RETIRAR CORROSÃO/OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `OXIDAÇÃO PARTE METÁLICA F4/F5`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `BUCHAS _RETIRAR CORROSÃO/OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `C/VAZAMENTO DE FUGA CORRENTE`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `BUCHAS  _SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `MUITO POLUÍDAS`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `BUCHAS_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `PORCELANA C/TRINCAS/RACHADURAS`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `PORCELANA CHAMUSCADA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `PORCELANA COM SAIAS QUEBRADAS`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `INFILTRAÇÃO PELAS BUCHAS`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `BUCHAS_CORRIGIR INFILTRAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `BUCHAS_RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `PONTO QUENTE DT > 12°C`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `PONTO QUENTE 8°C<DT≤12°C`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHAS" },
    update: {},
    create: {
      codigoSap: "BUCHAS",
      descricao: `PONTO QUENTE 3°C<DT≤8°C`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `OXIDAÇÃO F4/F5`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `PINTAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `PINTAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `PINTAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PINTURA DEFICIENTE`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RECUPERAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PARAFUSO OXIDAÇÃO F4/F5`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PARAFUSO OXIDAÇÃO F3`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PARAFUSO OXIDAÇÃO F1/F2`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `ACOMPANHAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PONTO QUENTE 15°C<DT≤30°C`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PONTO QUENTE DT > 30°C`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PONTO QUENTE 4°C<DT≤15°C`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `FIXAÇÃO ARMÁRIO DEFICIENTE`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `FIXAR ARMÁRIO ADEQUADAMENT`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `POSIÇÃO ELETRODUTOS INADEQUA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `ADEQUAR POSIÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PENETRAÇÃO DE UMIDADE`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `VEDAR ELETRODUTOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `FECHADURA QUEBRADA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR FECHADURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `CABOS S/ ANILHAS/DANIFIC`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `REPOR ANILHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `BORRACHA VEDAÇÃO DANIFICADA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR BORRACHA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `LÂMP DE ILUMINAÇÃO_QUEIMADA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR LÂMPADA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `DOBRADIÇA QUEBRADA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR DOBRADIÇA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `ATERRAMENTO INEXISTENTE`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `ATERRAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PORTA EMPENADA S/TRAVA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `DESEMPENAR/COLOCAR TRANCA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `MANÔMETRO _  VISOR QUEBRADO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR `,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `MANÔMETRO _ VISOR EMBAÇADO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `LIMPAR/ SUBSTITUIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `VEDAÇÃO INSUFICIENTE`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `VEDAR ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `TIPO PINO/CABO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `CONEXÕES DE AT_SUBSTITUIR POR PINO/CHAPA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEX FALTANDO PARAFUSOS`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `CONEXÕES DE AT _REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONECTORES INADEQUADOS`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `CONEXÕES DE AT _SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `MUITO POLUÍDOS`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `CONEXÕES AT_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÕES FOLGADAS`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `CONEXÕES AT_REAPERTAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `EXISTÊNC DE CENTELHAMENTO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `CONEXÕES AT_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÕES AT_PONTO QUENTE 30°C<DT≤55C`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÕES AT_PONTO QUENTE DT > 55°C`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÕES AT_PONTO QUENTE 25°C<DT≤30°C`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `RUÍDOS VIBRAÇÕES ANORMAIS`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR RUÍDOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `LUBRIFICAÇÃO MECANISMO DEFICIENTE`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `LUBRIFICAR MECANISMO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `MOTOR CARREGAMENTO MOLA INOPERANTE`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR MOTOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `COMANDO ELÉTRICO INOPERANTE`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `REPARA COMANDO ELÉTRICO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `FIAÇÃO C/ CONEXÕES FOLGADAS _ RÉGUA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `LÂMPADA SINALIZAÇÃO QUEIMADA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR LÂMPADA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `RESISTÊNCIA AQUECIMENTO INOPERANTE`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `DESATIVAR RESISTÊNCIA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `FIOS SOLTOS S/ISOLAÇÃO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `ISOLAR PONTAS DOS FIOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `RELÉ ANTI_BOMBEAMENTO Ñ ENCAIXADO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `ENCAIXAR RELÉ ANTI BOMBEAM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `IDENTIFICADOR POSIÇÃO Ñ FUNC_(ON/OFF)`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `CONSERTAR INDICADOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `CONTADOR DE OPERAÇÃO Ñ FUNCIONA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `CONSERTAR CONTADOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `Nº OPERAÇÕES INDICA _ SUBST ÓLEO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `CONSERTAR CONTADOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `BOTOEIRA DANIFICADA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR BOTOEIRAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `AMPERÍMETROS Ñ FUNCIONAM`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR AMPERÍMETRO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `AMPERÍMETRO VIDRO QUEBRADO `,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR VIDRO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `RELÉ DE RELIGAMENTO Ñ FUNCIONA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR RELÉ DE RELIGAM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `RELÉ SOBRECORRENTE DANIFICADO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR RELÉ`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `FALTA ACABAMENTO FIAÇÃO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `ACABAR FIAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `RÉGUAS TERMINAIS OXIDAÇÃO F4/F5`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR RÉGUAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `RÉGUAS TERMINAIS OXIDAÇÃO F3`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR RÉGUAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `RÉGUAS TERMINAIS OXIDAÇÃO F1/F2`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `ACOMPANHAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `ALARME INDEVIDO DE GÁS`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `CORRIGIR ALARME`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `COIFA/BORRACHA DANIFICADA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR COIFA/BORRACHA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `BOBINA DE ABERTURA QUEIMADA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR BOBINA DE ABERTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `BOBINA DE FECHAMENTO QUEIMADA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR BOBINA  DE FECHAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `BOB ABER_ 10% ≤ IMPEDÂNCIA ≤ 20% `,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `ACOMPANHAAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `BOB ABER_ 20 % < IMPEDÂNCIA ≤ 30% `,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR BOBINA DE ABERTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `BOB ABER_  IMPEDÂNCIA> 30% `,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR BOBINA DE ABERTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `BOB FEC_ 10% ≤ IMPEDÂNCIA ≤ 20% `,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR BOBINA  DE FECHAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `BOB FEC_ 20 % < IMPEDÂNCIA ≤ 30% `,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR BOBINA  DE FECHAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `BOB FEC_  IMPEDÂNCIA> 30% `,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR BOBINA  DE FECHAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `CHAVE DE FIM DE CURSO AVARIADA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR CHAVE DE FIM DE CURSO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `COMANDO MECÂNICO C/ DEFEITO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `REGULAR MECANISMO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `NIVEL DE GÁS BAIXO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `COMPLETAR GÁS E RETIRAR VAZAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `NIVEL DE GÁS BAIXO CRITICO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `COMPLETAR GÁS E RETIRAR VAZAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `FIAÇÃO ISOLAÇ DANIFICADO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR FIAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `CROSTA TERMINAIS DOS TC'S`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `LIMPAR TERMINAIS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `MEDIDORES ENERGIA INOPERANTES`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_MECANISMO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RECUPERAR/SUBSTITUIR MEDIDO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `OXIDADA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `ILEGÍVEL`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `FIXAÇÃO INADEQUADA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `FIXAR ADEQUADAMEN`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `INEXISTENTE`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `INSTALAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `CÓDIGO DE OPER_ ERRADO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `INSTALAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `POLUIÇÃO INTERNA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_RELÉS_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `LIMPAR RELÉ`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `NÃO POSSUI TAMPA PROTEÇÃO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_RELÉS_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `COLOCAR TAMPA DE PROTEÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `DESATIVADO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_RELÉS_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `ATIVAR RELÉ`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `DISPLAY APAGADO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_RELÉS_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RECUPERAR DISPLAY`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `DISPLAY DANIFICADO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_RELÉS_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RECUPERAR DISPLAY`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `EM FALHA (LED VERMELHA)`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_RELÉS_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `TROCAR EQUIPAMENTO`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `FUNÇÕES PROTEÇÃO INATIVAS`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_RELÉS_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `REGULARIZAR FUNÇÕES DE PROTEÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `FALTA DE COMUNICAÇÃO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_RELÉS_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `REPARAR COMUNICAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RES_ DE CONTATO" },
    update: {},
    create: {
      codigoSap: "RES_ DE CONTATO",
      descricao: `RESISTÊNCIA CONTATO MODERADA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_RES__DE_CONTATO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RETIRAR IMPUREZA, UMIDADE E REAPERTO DAS CONEXÕES _ M3`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RES_ DE CONTATO" },
    update: {},
    create: {
      codigoSap: "RES_ DE CONTATO",
      descricao: `RESISTÊNCIA CONTATO CRÍTICA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_RES__DE_CONTATO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RETIRAR IMPUREZA, UMIDADE E REAPERTO DAS CONEXÕES _ M3`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RES_ ISOLAMENTO" },
    update: {},
    create: {
      codigoSap: "RES_ ISOLAMENTO",
      descricao: `BAIXA RESITÊNCIA DE ISOLAMENTO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_RES__ISOLAMENTO_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RETIRAR DE UMIDADE DOS CIRCUITOS _ ( M3)`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RIGIDEZ" },
    update: {},
    create: {
      codigoSap: "RIGIDEZ",
      descricao: `BAIXA RIGIDEZ 25KV ≤INTERVALO≤ 30KV`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_RIGIDEZ_DIELÉTRICA_DE_ÓLEO_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR ÓLEO _ M3`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RIGIDEZ" },
    update: {},
    create: {
      codigoSap: "RIGIDEZ",
      descricao: `RIGIDEZ  MENOR QUE 25 KV`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_RIGIDEZ_DIELÉTRICA_DE_ÓLEO_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR ÓLEO _ M3`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PINTURA DETERIORADA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_TANQUE_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `TANQUE _RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `COM VAZAMENTO ÓLEO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_TANQUE_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `TANQUE _RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `COM VAZAMENTO SF6`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_TANQUE_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `TANQUE _RETIRAR VAZAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `DISPOSIT_ IÇAMENTO DEFICIENTE`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_TANQUE_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `TANQUE _ RECUPERAR DISPOSITIVO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `FIXAÇÃO TANQUE DEFICIENTE`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_TANQUE_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `TANQUE _FIXAR TANQUE ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_TANQUE_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `TANQUE _LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `OXIDAÇÃO F4/F5`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_TANQUE_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `TANQUE _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_TANQUE_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `TANQUE _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_TANQUE_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `TANQUE _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `TEMPERATURA ANORMAL`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_TANQUE_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `TANQUE_VERIFICAR TERMÔMETROS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PARAFUSOS OXIDADOS F1/F2`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_TANQUE_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO/SUBSTITUIR PARAF`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PARAFUSOS OXIDADOS F3`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_TANQUE_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO/SUBSTITUIR PARAF`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PARAFUSOS OXIDADOS F4/F5`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_TANQUE_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO/SUBSTITUIR PARAF`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `VIBRAÇÃO ANORMAL`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_TANQUE_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RETIRAR VIBRAÇÃO ANORMAL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `NÍVEL DE ÓLEO BAIXO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_TANQUE_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `TANQUE_COMPLETAR NÍVEL DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PONTO QUENTE DT > 12°C`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_TANQUE_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PONTO QUENTE 8°C<DT≤12°C`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_TANQUE_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PONTO QUENTE 3°C<DT≤8°C`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_TANQUE_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: " CÂMARA VÁCUO" },
    update: {},
    create: {
      codigoSap: " CÂMARA VÁCUO",
      descricao: `REPROVADO NO TESTE_AMPOLA DANIFICADA`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_TESTE_DE_CÂMARA_VÁCUO_DISJUNTOR_id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `SUBSTITUIR A CÂMERA VÁCUO OU REALIZAR AJUSTE`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "DJ" },
    update: {},
    create: {
      codigoSap: "DJ",
      descricao: `FORA DE OPERAÇÃO`,
      grupoId: grupo_DISJUNTOR.id,
      subgrupoId: subgrupo_DJ_DISJUNTOR.id,
      grupoDefeitoCodigoId: codigo_SEDJ_id,
      acaoRecomendada: `RETIRAR/ RECUPERAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `DESCONECTADO MALHA`,
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      subgrupoId: subgrupo_CABO_DE_ATERRAMENTO_ESTRUTURA_DE_CONCRETO.id,
      grupoDefeitoCodigoId: codigo_SEEC_id,
      acaoRecomendada: `CABO ATERRAMENTO_CONECTAR CABO Á MALHA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `INEXISTENTE`,
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      subgrupoId: subgrupo_CABO_DE_ATERRAMENTO_ESTRUTURA_DE_CONCRETO.id,
      grupoDefeitoCodigoId: codigo_SEEC_id,
      acaoRecomendada: `CABO ATERRAMENTO_REPOR CABO DE ATERRAMEN`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `EXIST FOLGA CONEXÕES`,
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      subgrupoId: subgrupo_CABO_DE_ATERRAMENTO_ESTRUTURA_DE_CONCRETO.id,
      grupoDefeitoCodigoId: codigo_SEEC_id,
      acaoRecomendada: `CABO ATERRAMENTO_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `ROMPIDO`,
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      subgrupoId: subgrupo_CABO_DE_ATERRAMENTO_ESTRUTURA_DE_CONCRETO.id,
      grupoDefeitoCodigoId: codigo_SEEC_id,
      acaoRecomendada: `CABO ATERRAMENTO_EMENDAR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `INADEQUADO`,
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      subgrupoId: subgrupo_CABO_DE_ATERRAMENTO_ESTRUTURA_DE_CONCRETO.id,
      grupoDefeitoCodigoId: codigo_SEEC_id,
      acaoRecomendada: `CABO ATERRAMENTO_SUBSTITUIR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PARA_RAIO" },
    update: {},
    create: {
      codigoSap: "PARA_RAIO",
      descricao: `INEXISTENTE`,
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      subgrupoId: subgrupo_CABO_PARA_RAIOS_ESTRUTURA_DE_CONCRETO.id,
      grupoDefeitoCodigoId: codigo_SEEC_id,
      acaoRecomendada: `CABO PARA_RAIOS_REPOR CABO PÁRA_RAIOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PARA_RAIO" },
    update: {},
    create: {
      codigoSap: "PARA_RAIO",
      descricao: `MONT FORA PADRÃO`,
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      subgrupoId: subgrupo_CABO_PARA_RAIOS_ESTRUTURA_DE_CONCRETO.id,
      grupoDefeitoCodigoId: codigo_SEEC_id,
      acaoRecomendada: `CABO PARA_RAIOS_MONTAR NO PADRÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PARA_RAIO" },
    update: {},
    create: {
      codigoSap: "PARA_RAIO",
      descricao: `TENSIONAM INADEQ`,
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      subgrupoId: subgrupo_CABO_PARA_RAIOS_ESTRUTURA_DE_CONCRETO.id,
      grupoDefeitoCodigoId: codigo_SEEC_id,
      acaoRecomendada: `CABO PARA_RAIOS_TENSIONAR CORRETAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ESTRUTURA" },
    update: {},
    create: {
      codigoSap: "ESTRUTURA",
      descricao: `TRINCAS/FISSURAS`,
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      subgrupoId: subgrupo_ESTRUTURAS_ESTRUTURA_DE_CONCRETO.id,
      grupoDefeitoCodigoId: codigo_SEEC_id,
      acaoRecomendada: `ESTRUTURAS_RETIRA TRINCAS`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ESTRUTURA" },
    update: {},
    create: {
      codigoSap: "ESTRUTURA",
      descricao: `TRINCAS/FISSURAS_CRITICO`,
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      subgrupoId: subgrupo_ESTRUTURAS_ESTRUTURA_DE_CONCRETO.id,
      grupoDefeitoCodigoId: codigo_SEEC_id,
      acaoRecomendada: `TROCAR ESTRUTURA`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EQP_ TERCEIRA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ESTRUTURA" },
    update: {},
    create: {
      codigoSap: "ESTRUTURA",
      descricao: `FERRAG EXPOSTA_OXID F1/F2`,
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      subgrupoId: subgrupo_ESTRUTURAS_ESTRUTURA_DE_CONCRETO.id,
      grupoDefeitoCodigoId: codigo_SEEC_id,
      acaoRecomendada: `ESTRUTURAS_RETOCAR ESTRUTURA`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EQP_ TERCEIRA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ESTRUTURA" },
    update: {},
    create: {
      codigoSap: "ESTRUTURA",
      descricao: `FERRAG EXPOSTA_OXID F3`,
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      subgrupoId: subgrupo_ESTRUTURAS_ESTRUTURA_DE_CONCRETO.id,
      grupoDefeitoCodigoId: codigo_SEEC_id,
      acaoRecomendada: `ESTRUTURAS_RETOCAR ESTRUTURA`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EQP_ TERCEIRA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ESTRUTURA" },
    update: {},
    create: {
      codigoSap: "ESTRUTURA",
      descricao: `FERRAG EXPOSTA_OXID F4/F5`,
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      subgrupoId: subgrupo_ESTRUTURAS_ESTRUTURA_DE_CONCRETO.id,
      grupoDefeitoCodigoId: codigo_SEEC_id,
      acaoRecomendada: `SUBSTITUIR ESTRUTURA`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EQP_ TERCEIRA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ESTRUTURA" },
    update: {},
    create: {
      codigoSap: "ESTRUTURA",
      descricao: `POSTES DESNIVELADOS`,
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      subgrupoId: subgrupo_ESTRUTURAS_ESTRUTURA_DE_CONCRETO.id,
      grupoDefeitoCodigoId: codigo_SEEC_id,
      acaoRecomendada: `ESTRUTURAS_NIVELAR POSTE`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EQP_ TERCEIRA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ESTRUTURA" },
    update: {},
    create: {
      codigoSap: "ESTRUTURA",
      descricao: `C/ NINHO DE PÁSSARO`,
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      subgrupoId: subgrupo_ESTRUTURAS_ESTRUTURA_DE_CONCRETO.id,
      grupoDefeitoCodigoId: codigo_SEEC_id,
      acaoRecomendada: `RETIRAT NINHO DE PÁSSARO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ESTRUTURA" },
    update: {},
    create: {
      codigoSap: "ESTRUTURA",
      descricao: `VEGETAÇÃO`,
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      subgrupoId: subgrupo_ESTRUTURAS_ESTRUTURA_DE_CONCRETO.id,
      grupoDefeitoCodigoId: codigo_SEEC_id,
      acaoRecomendada: `RETIRAR VEGETAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ESTRUTURA" },
    update: {},
    create: {
      codigoSap: "ESTRUTURA",
      descricao: `EROSÃO NA BASE POSTES`,
      grupoId: grupo_ESTRUTURA_DE_CONCRETO.id,
      subgrupoId: subgrupo_ESTRUTURAS_ESTRUTURA_DE_CONCRETO.id,
      grupoDefeitoCodigoId: codigo_SEEC_id,
      acaoRecomendada: `ESTRUTURAS_RETIRAR EROSÃO`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EQP_ TERCEIRA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `DESCONECTADO MALHA`,
      grupoId: grupo_ESTRUTURA_METALICA.id,
      subgrupoId: subgrupo_CABO_DE_ATERRAMENTO_ESTRUTURA_METALICA.id,
      grupoDefeitoCodigoId: codigo_SEEM_id,
      acaoRecomendada: `CABO ATERRAMENTO_CONECTAR CABO NA MALHA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `INEXISTENTE`,
      grupoId: grupo_ESTRUTURA_METALICA.id,
      subgrupoId: subgrupo_CABO_DE_ATERRAMENTO_ESTRUTURA_METALICA.id,
      grupoDefeitoCodigoId: codigo_SEEM_id,
      acaoRecomendada: `CABO ATERRAMENTO_REPOR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `EXIST FOLGA CONEXÕES`,
      grupoId: grupo_ESTRUTURA_METALICA.id,
      subgrupoId: subgrupo_CABO_DE_ATERRAMENTO_ESTRUTURA_METALICA.id,
      grupoDefeitoCodigoId: codigo_SEEM_id,
      acaoRecomendada: `CABO ATERRAMENTO_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `ROMPIDO`,
      grupoId: grupo_ESTRUTURA_METALICA.id,
      subgrupoId: subgrupo_CABO_DE_ATERRAMENTO_ESTRUTURA_METALICA.id,
      grupoDefeitoCodigoId: codigo_SEEM_id,
      acaoRecomendada: `CABO ATERRAMENTO_EMENDAR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `INADEQUADO`,
      grupoId: grupo_ESTRUTURA_METALICA.id,
      subgrupoId: subgrupo_CABO_DE_ATERRAMENTO_ESTRUTURA_METALICA.id,
      grupoDefeitoCodigoId: codigo_SEEM_id,
      acaoRecomendada: `CABO ATERRAMENTO_SUBSTITUIR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ESTRUTURA" },
    update: {},
    create: {
      codigoSap: "ESTRUTURA",
      descricao: `PEÇAS SEM GALVANIZAÇÃO`,
      grupoId: grupo_ESTRUTURA_METALICA.id,
      subgrupoId: subgrupo_ESTRUTURAS_ESTRUTURA_METALICA.id,
      grupoDefeitoCodigoId: codigo_SEEM_id,
      acaoRecomendada: `ESTRUTURAS_GALVANIZAR PEÇAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ESTRUTURA" },
    update: {},
    create: {
      codigoSap: "ESTRUTURA",
      descricao: `PEÇAS OXIDAÇÃO F1/F2`,
      grupoId: grupo_ESTRUTURA_METALICA.id,
      subgrupoId: subgrupo_ESTRUTURAS_ESTRUTURA_METALICA.id,
      grupoDefeitoCodigoId: codigo_SEEM_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ESTRUTURA" },
    update: {},
    create: {
      codigoSap: "ESTRUTURA",
      descricao: `PEÇAS OXIDAÇÃO F3`,
      grupoId: grupo_ESTRUTURA_METALICA.id,
      subgrupoId: subgrupo_ESTRUTURAS_ESTRUTURA_METALICA.id,
      grupoDefeitoCodigoId: codigo_SEEM_id,
      acaoRecomendada: `SUBSTITUIR ESTRUTURA`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EQP_ TERCEIRA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ESTRUTURA" },
    update: {},
    create: {
      codigoSap: "ESTRUTURA",
      descricao: `PEÇAS OXIDAÇÃO F4/F5`,
      grupoId: grupo_ESTRUTURA_METALICA.id,
      subgrupoId: subgrupo_ESTRUTURAS_ESTRUTURA_METALICA.id,
      grupoDefeitoCodigoId: codigo_SEEM_id,
      acaoRecomendada: `SUBSTITUIR ESTRUTURA`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EQP_ TERCEIRA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ESTRUTURA" },
    update: {},
    create: {
      codigoSap: "ESTRUTURA",
      descricao: `PEÇAS DESNIVELADAS`,
      grupoId: grupo_ESTRUTURA_METALICA.id,
      subgrupoId: subgrupo_ESTRUTURAS_ESTRUTURA_METALICA.id,
      grupoDefeitoCodigoId: codigo_SEEM_id,
      acaoRecomendada: `ESTRUTURAS_NIVELAR PEÇAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ESTRUTURA" },
    update: {},
    create: {
      codigoSap: "ESTRUTURA",
      descricao: `PEÇAS SEM PARAFUSOS`,
      grupoId: grupo_ESTRUTURA_METALICA.id,
      subgrupoId: subgrupo_ESTRUTURAS_ESTRUTURA_METALICA.id,
      grupoDefeitoCodigoId: codigo_SEEM_id,
      acaoRecomendada: `ESTRUTURAS_REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ESTRUTURA" },
    update: {},
    create: {
      codigoSap: "ESTRUTURA",
      descricao: `INEXISTÊNCIA DE PEÇAS`,
      grupoId: grupo_ESTRUTURA_METALICA.id,
      subgrupoId: subgrupo_ESTRUTURAS_ESTRUTURA_METALICA.id,
      grupoDefeitoCodigoId: codigo_SEEM_id,
      acaoRecomendada: `ESTRUTURAS_REPOR PEÇAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ESTRUTURA" },
    update: {},
    create: {
      codigoSap: "ESTRUTURA",
      descricao: `INEXIST PARAFUSO DAS BASES`,
      grupoId: grupo_ESTRUTURA_METALICA.id,
      subgrupoId: subgrupo_ESTRUTURAS_ESTRUTURA_METALICA.id,
      grupoDefeitoCodigoId: codigo_SEEM_id,
      acaoRecomendada: `ESTRUTURAS_REPOR PARAFUSOS NAS BASES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ESTRUTURA" },
    update: {},
    create: {
      codigoSap: "ESTRUTURA",
      descricao: `INFILTRAÇÃO E EROSÃO BASES`,
      grupoId: grupo_ESTRUTURA_METALICA.id,
      subgrupoId: subgrupo_ESTRUTURAS_ESTRUTURA_METALICA.id,
      grupoDefeitoCodigoId: codigo_SEEM_id,
      acaoRecomendada: `ESTRUTURAS_RETIRAR EROSÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ESTRUTURA" },
    update: {},
    create: {
      codigoSap: "ESTRUTURA",
      descricao: `C/ NINHO DE PÁSSARO`,
      grupoId: grupo_ESTRUTURA_METALICA.id,
      subgrupoId: subgrupo_ESTRUTURAS_ESTRUTURA_METALICA.id,
      grupoDefeitoCodigoId: codigo_SEEM_id,
      acaoRecomendada: `RETIRAT NINHO DE PÁSSARO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BATERIA" },
    update: {},
    create: {
      codigoSap: "BATERIA",
      descricao: `NÍVEL ELETRÓLITO BAIXO`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_BATERIA_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `BATERIA_COMPLETAR NÍVEL DE ÁGUA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BATERIA" },
    update: {},
    create: {
      codigoSap: "BATERIA",
      descricao: `CORROSÃO NAS CONEXÕES`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_BATERIA_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `BATERIA_RETIRAR CORROSÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BATERIA" },
    update: {},
    create: {
      codigoSap: "BATERIA",
      descricao: `CONEXÕES FOLGADAS`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_BATERIA_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `BATERIA_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BATERIA" },
    update: {},
    create: {
      codigoSap: "BATERIA",
      descricao: `CONEXÕES INADEQUADAS`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_BATERIA_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `BATERIA_SUBSTITUIR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "GERADOR" },
    update: {},
    create: {
      codigoSap: "GERADOR",
      descricao: `GERADOR POLUÍDO (ÓLEO, FUMAÇA)`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_GERADOR_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `GERADOR_LIMPAR GERADOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "GERADOR" },
    update: {},
    create: {
      codigoSap: "GERADOR",
      descricao: `SEM PLACA DE IDENTIFICAÇÃO`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_GERADOR_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `GERADOR_COLOCAR PLACA DE IDENTIFICAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "GERADOR" },
    update: {},
    create: {
      codigoSap: "GERADOR",
      descricao: `SEM ATERRAMENTO NA CARCAÇA`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_GERADOR_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `GERADOR_ATERRAR CARCAÇA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "GERADOR" },
    update: {},
    create: {
      codigoSap: "GERADOR",
      descricao: `ESCOVAS GASTAS`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_GERADOR_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `GERADOR_SUBSTITUIR ESCOVAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "GERADOR" },
    update: {},
    create: {
      codigoSap: "GERADOR",
      descricao: `ESCOVAS SEM PRESSÃO`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_GERADOR_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `GERADOR_AJUSTAR ESCOVAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "GERADOR" },
    update: {},
    create: {
      codigoSap: "GERADOR",
      descricao: `ANEIS COLETORES SUJOS`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_GERADOR_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `GERADOR_LIMPAR ANÉIS COLETORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "GERADOR" },
    update: {},
    create: {
      codigoSap: "GERADOR",
      descricao: `CONEXÕES ELÉTRICAS FOLGADAS`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_GERADOR_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `GERADOR_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "GERADOR" },
    update: {},
    create: {
      codigoSap: "GERADOR",
      descricao: `CONEXÕES ELÉTRICAS INADEQUADAS`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_GERADOR_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `GERADOR_SUBSTITUIR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_BLOCO" },
    update: {},
    create: {
      codigoSap: "MOTOR_BLOCO",
      descricao: `SUJEIRA ACENTUADA`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_BLOCO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_BLOCO_LIMPAR SUJEIRA DO MOTOR BLOC`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_BLOCO" },
    update: {},
    create: {
      codigoSap: "MOTOR_BLOCO",
      descricao: `RUÍDOS ANORMAIS`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_BLOCO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_BLOCO_RETIRAR RUÍDOS DO MOTOR BLOC`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_BLOCO" },
    update: {},
    create: {
      codigoSap: "MOTOR_BLOCO",
      descricao: `VIBRAÇÃO EXCESSIVA`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_BLOCO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_BLOCO_RETIRAR VIBRAÇÃO DO MOTOR BL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_BLOCO" },
    update: {},
    create: {
      codigoSap: "MOTOR_BLOCO",
      descricao: `FUNCIONA S/ POTÊNCIA`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_BLOCO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_BLOCO_VERIFICAR MOTOR BLOCO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_BLOCO" },
    update: {},
    create: {
      codigoSap: "MOTOR_BLOCO",
      descricao: `FORA DA BASE`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_BLOCO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_BLOCO_COLOCAR NA BASE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_BLOCO" },
    update: {},
    create: {
      codigoSap: "MOTOR_BLOCO",
      descricao: `SEM VIBRA_STOP`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_BLOCO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_BLOCO_COLOCAR VIBRA_STOP`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_CABEÇ" },
    update: {},
    create: {
      codigoSap: "MOTOR_CABEÇ",
      descricao: `VAZAM ÓLEO JUNTAS`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_CABEÇOTE_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_CABEÇOTE_RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_CABEÇ" },
    update: {},
    create: {
      codigoSap: "MOTOR_CABEÇ",
      descricao: `PARAF FIXAÇÃO FOLGAD`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_CABEÇOTE_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_CABEÇOTE_REAPERTAR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_CABEÇ" },
    update: {},
    create: {
      codigoSap: "MOTOR_CABEÇ",
      descricao: `RUÍDOS NA VÁLVULAS`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_CABEÇOTE_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_CABEÇOTE_RETIRAR RUÍDOS DAS VÁLVUL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_CARTER" },
    update: {},
    create: {
      codigoSap: "MOTOR_CARTER",
      descricao: `NÍVEL DE ÓLEO BAIXO`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_CARTER_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_CARTER_COMPLETAR N´VEL DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_CARTER" },
    update: {},
    create: {
      codigoSap: "MOTOR_CARTER",
      descricao: `VAZAM_ ÓLEO JUNTAS`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_CARTER_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_CARTER_RETIRAR VAZAMENTO DE ÓLEO N`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_CARTER" },
    update: {},
    create: {
      codigoSap: "MOTOR_CARTER",
      descricao: `VAZAM TAP DE DRENA`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_CARTER_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_CARTER_RETIRAR VAZAMENTO NO TAP`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_CARTER" },
    update: {},
    create: {
      codigoSap: "MOTOR_CARTER",
      descricao: `FILTROS SUJOS`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_CARTER_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_CARTER_LIMPAR FILTROS DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_CARTER" },
    update: {},
    create: {
      codigoSap: "MOTOR_CARTER",
      descricao: `FALTA ÓLEO LUBRIFIC`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_CARTER_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_CARTER_PREVER ÓLEO LUBRIFICANTE RE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_SIST_ ALIMENT" },
    update: {},
    create: {
      codigoSap: "MOTOR_SIST_ ALIMENT",
      descricao: `VAZAMENTO D`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_SISTEMA_DE_ALIMENTAÇÃO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_SIST_ DE ALIMENTAÇÃO_RETIRAR VAZAM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_SIST_ ALIMENT" },
    update: {},
    create: {
      codigoSap: "MOTOR_SIST_ ALIMENT",
      descricao: `NÍVEL DE ÓL`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_SISTEMA_DE_ALIMENTAÇÃO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_SIST_ DE ALIMENTAÇÃO_COMPLETAR ÓLE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_SIST_ ALIMENT" },
    update: {},
    create: {
      codigoSap: "MOTOR_SIST_ ALIMENT",
      descricao: `FILTROS DE`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_SISTEMA_DE_ALIMENTAÇÃO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_SIST_ DE ALIMENTAÇÃO_LIMPARA FILTR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_SIST_ ALIMENT" },
    update: {},
    create: {
      codigoSap: "MOTOR_SIST_ ALIMENT",
      descricao: `NÃO EXISTE`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_SISTEMA_DE_ALIMENTAÇÃO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_SIST_ DE ALIMENTAÇÃO_PREVER ÓLEO D`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_SIST ESCAP " },
    update: {},
    create: {
      codigoSap: "MOTOR_SIST ESCAP ",
      descricao: `MOTOR_SIST ESCAP _ VAZAMENTO`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_SISTEMA_DE_ESCAPAMENTO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_SIST_E ESCAPAMENTO_RETIRAR VAZAMEN`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_SIST ESCAP " },
    update: {},
    create: {
      codigoSap: "MOTOR_SIST ESCAP ",
      descricao: `MOTOR_SIST ESCAP_CALOR EXCESSI`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_SISTEMA_DE_ESCAPAMENTO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_SIST_E ESCAPAMENTO_RETIRAR CALOR E`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_SIST INJ" },
    update: {},
    create: {
      codigoSap: "MOTOR_SIST INJ",
      descricao: `MOTOR_SIST INJ_VAZAMENTO ÓLEO`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_SISTEMA_DE_INJEÇÂO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_SIST_ DE INJEÇÂO_RETIRAR VAZAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_SIST INJ" },
    update: {},
    create: {
      codigoSap: "MOTOR_SIST INJ",
      descricao: `MOTOR_SIST INJ_VAZAMENTO DE ÓLEO`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_SISTEMA_DE_INJEÇÂO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_SIST_ DE INJEÇÂO_RETIRAR VAZAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_SIST INJ" },
    update: {},
    create: {
      codigoSap: "MOTOR_SIST INJ",
      descricao: `MOTOR_SIST INJ_ENTRADA DE AR`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_SISTEMA_DE_INJEÇÂO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_SIST_ DE INJEÇÂO_RETIRAR ENTRADA D`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_SIST REFRIG" },
    update: {},
    create: {
      codigoSap: "MOTOR_SIST REFRIG",
      descricao: `MOTOR_SIST REFRIG_NIVEL DE ÁGUA`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_SISTEMA_DE_REFRIGERAÇÃO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_SIST_ DE REFRIGERAÇÃO_COMPLETAR NÍ`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_SIST REFRIG" },
    update: {},
    create: {
      codigoSap: "MOTOR_SIST REFRIG",
      descricao: `MOTOR_SIST REFRIG_RADIADOR AVARI`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_SISTEMA_DE_REFRIGERAÇÃO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_SIST_ DE REFRIGERAÇÃO_RETIRAR VAZA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_SIST REFRIG" },
    update: {},
    create: {
      codigoSap: "MOTOR_SIST REFRIG",
      descricao: `MOTOR_SIST REFRIG_ VAZAMENTO`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_SISTEMA_DE_REFRIGERAÇÃO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_SIST_ DE REFRIGERAÇÃO_RETIRAR VAZA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_SIST REFRIG" },
    update: {},
    create: {
      codigoSap: "MOTOR_SIST REFRIG",
      descricao: `MOTOR_SIST REFRIG _ CORREA DA`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_SISTEMA_DE_REFRIGERAÇÃO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_SIST_ DE REFRIGERAÇÃO_SUBSTITUIR C`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_SIST REFRIG" },
    update: {},
    create: {
      codigoSap: "MOTOR_SIST REFRIG",
      descricao: `MOTOR_SIST REFRIG_ NÃO EXISTE`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_SISTEMA_DE_REFRIGERAÇÃO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_SIST_ DE REFRIGERAÇÃO_PREVER CORRE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MOTOR_SIST REFRIG" },
    update: {},
    create: {
      codigoSap: "MOTOR_SIST REFRIG",
      descricao: `MOTOR_SIST REFRIG _ VENTUÍNA E`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_MOTOR_SISTEMA_DE_REFRIGERAÇÃO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `MOTOR_SIST_ DE REFRIGERAÇÃO_DESEMPENAR V`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PAINEL" },
    update: {},
    create: {
      codigoSap: "PAINEL",
      descricao: `MUITO SUJO`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_PAINEL_DE_CONTROLE_MEDIÇÃO_E_PROTEÇÃO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `PAINEL CONT, MED, PROT_LIMPAR PAINEL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PAINEL" },
    update: {},
    create: {
      codigoSap: "PAINEL",
      descricao: `INSTRUMENTOS AVARIADOS`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_PAINEL_DE_CONTROLE_MEDIÇÃO_E_PROTEÇÃO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `PAINEL CONT, MED, PROT_SUBSTITUIR INSTRU`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PAINEL" },
    update: {},
    create: {
      codigoSap: "PAINEL",
      descricao: `CABOS FORÇA FOLGADO`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_PAINEL_DE_CONTROLE_MEDIÇÃO_E_PROTEÇÃO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `PAINEL CONT, MED, PROT_REAPERTAR CABOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PAINEL" },
    update: {},
    create: {
      codigoSap: "PAINEL",
      descricao: `CABOS CONTROLE DESCONECT`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_PAINEL_DE_CONTROLE_MEDIÇÃO_E_PROTEÇÃO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `PAINEL CONT, MED, PROT_CONECTAR CABOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PAINEL" },
    update: {},
    create: {
      codigoSap: "PAINEL",
      descricao: `SEM PROTEÇÃO DO GERADOR`,
      grupoId: grupo_GRUPO_GERADOR_SE.id,
      subgrupoId: subgrupo_PAINEL_DE_CONTROLE_MEDIÇÃO_E_PROTEÇÃO_GRUPO_GERADOR_SE.id,
      grupoDefeitoCodigoId: codigo_SEGG_id,
      acaoRecomendada: `PAINEL CONT, MED, PROT_COLOCAR PROTEÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `FACILITES`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXA" },
    update: {},
    create: {
      codigoSap: "CAIXA",
      descricao: `DANIFICADA`,
      grupoId: grupo_MALHA_DE_TERRA.id,
      subgrupoId: subgrupo_CAIXA_MALHA_DE_TERRA.id,
      grupoDefeitoCodigoId: codigo_SEMT_id,
      acaoRecomendada: `CAIXA_RECUPERAR CAIXA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXA" },
    update: {},
    create: {
      codigoSap: "CAIXA",
      descricao: `FALTA LIMPEZA`,
      grupoId: grupo_MALHA_DE_TERRA.id,
      subgrupoId: subgrupo_CAIXA_MALHA_DE_TERRA.id,
      grupoDefeitoCodigoId: codigo_SEMT_id,
      acaoRecomendada: `CAIXA_LIMPAR CAIXA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXA" },
    update: {},
    create: {
      codigoSap: "CAIXA",
      descricao: `INEXISTÊNCIA TAMPAS`,
      grupoId: grupo_MALHA_DE_TERRA.id,
      subgrupoId: subgrupo_CAIXA_MALHA_DE_TERRA.id,
      grupoDefeitoCodigoId: codigo_SEMT_id,
      acaoRecomendada: `CAIXA_REPOR TAMPA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXA" },
    update: {},
    create: {
      codigoSap: "CAIXA",
      descricao: `INEXIST CAIXA INSPEÇÃO`,
      grupoId: grupo_MALHA_DE_TERRA.id,
      subgrupoId: subgrupo_CAIXA_MALHA_DE_TERRA.id,
      grupoDefeitoCodigoId: codigo_SEMT_id,
      acaoRecomendada: `CAIXA_COLOCAR CAIXA DE INSPEÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `FOLGADAS`,
      grupoId: grupo_MALHA_DE_TERRA.id,
      subgrupoId: subgrupo_CONEXÕES_MALHA_DE_TERRA_id,
      grupoDefeitoCodigoId: codigo_SEMT_id,
      acaoRecomendada: `CONEXÕES_APERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `DANIFICADA`,
      grupoId: grupo_MALHA_DE_TERRA.id,
      subgrupoId: subgrupo_CONEXÕES_MALHA_DE_TERRA_id,
      grupoDefeitoCodigoId: codigo_SEMT_id,
      acaoRecomendada: `CONEXÕES_SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `INADEQUADA`,
      grupoId: grupo_MALHA_DE_TERRA.id,
      subgrupoId: subgrupo_CONEXÕES_MALHA_DE_TERRA_id,
      grupoDefeitoCodigoId: codigo_SEMT_id,
      acaoRecomendada: `CONEXÕES_SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RESITÊNCIA" },
    update: {},
    create: {
      codigoSap: "RESITÊNCIA",
      descricao: `RESITÊNCIA ATERRAM CRÍTICA`,
      grupoId: grupo_MALHA_DE_TERRA.id,
      subgrupoId: subgrupo_RESITÊNCIA_MALHA_DE_TERRA_id,
      grupoDefeitoCodigoId: codigo_SEMT_id,
      acaoRecomendada: `REFORMA DA MALHA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MEDIDOR" },
    update: {},
    create: {
      codigoSap: "MEDIDOR",
      descricao: `MEDIDOR QUEIMADO`,
      grupoId: grupo_MEDIÇÃO_OPERACIONAL_id,
      subgrupoId: subgrupo_MEDIDOR_MEDIÇÃO_OPERACIONAL_id,
      grupoDefeitoCodigoId: codigo_SEMO_id,
      acaoRecomendada: `SUBSTITUIR MEDIDOR`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MEDIDOR" },
    update: {},
    create: {
      codigoSap: "MEDIDOR",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_MEDIÇÃO_OPERACIONAL_id,
      subgrupoId: subgrupo_MEDIDOR_MEDIÇÃO_OPERACIONAL_id,
      grupoDefeitoCodigoId: codigo_SEMO_id,
      acaoRecomendada: `LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MEDIDOR" },
    update: {},
    create: {
      codigoSap: "MEDIDOR",
      descricao: `CONEXÃO FOLGADA`,
      grupoId: grupo_MEDIÇÃO_OPERACIONAL_id,
      subgrupoId: subgrupo_MEDIDOR_MEDIÇÃO_OPERACIONAL_id,
      grupoDefeitoCodigoId: codigo_SEMO_id,
      acaoRecomendada: `REAPERTA CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MEDIDOR" },
    update: {},
    create: {
      codigoSap: "MEDIDOR",
      descricao: `FALTA DE COMUNICAÇÃO`,
      grupoId: grupo_MEDIÇÃO_OPERACIONAL_id,
      subgrupoId: subgrupo_MEDIDOR_MEDIÇÃO_OPERACIONAL_id,
      grupoDefeitoCodigoId: codigo_SEMO_id,
      acaoRecomendada: `RESTABELECER COMUNIÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "AMPERÍMETRO" },
    update: {},
    create: {
      codigoSap: "AMPERÍMETRO",
      descricao: `INOPERANTE`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_AMPERÍMETRO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `SUBSTITUIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "AMPERÍMETRO" },
    update: {},
    create: {
      codigoSap: "AMPERÍMETRO",
      descricao: `DISPLAY APAGADO`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_AMPERÍMETRO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `SUBSTITUIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `RÉGUA_FIAÇÃO DANIFICAD`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_SUBSTITUIR FIAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `RÉGUA_TERM_ DANIFICADO`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_SUBSTITUIR RÉGUAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `SEM TAMPA EXTERNA`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_COLOCAR TAMPA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `SEM TAMPA INTERNA`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_COLOCAR TAMPA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `SEM ATERRAMENTO`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_ATERRAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `PORTA EMPENADA S/TRAVA`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_DESEMPENAR OU COLOCAR TRANCA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `PINTURA DETERIORADA`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `PONTOS DE FERRUGEM`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `ILUMINAÇÃO Ñ FUNCIONA`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_SUBSTITUIR LÂMPADAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `RESIST_ AQUEC_ INOPER_`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_DESATIVAR RESISTÊNCIA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `ENTRADA OMI POR FIAÇÃO`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_VEDAR ELETRODUTOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `S/ACABAMENTO NA FIAÇÃO`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_ACABAR FIAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `FIOS SOLTOS S/ISOLAÇÃO`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_APERTAR TERMINAIS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `RÉGUAS/TERMINAIS OXID F4/F5`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_SUBSTITUIR TERMINAIS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `ENTRADA DE UMIDADE`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_VEDAR ELETRODUTOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `RÉGUAS/TERMINAIS OXID F1/F2`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `RÉGUAS/TERMINAIS OXID F3/F4`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_SUBSTITUIR RÉGUAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `RÉGUAS_CONEXÃO FOLGADA`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `VEDAÇÃO INSUFICIENTE`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_VEDAR ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `FIAÇÃO ISOLAÇ DANIFIC`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_SUBSTITUIR FIAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `FIAÇÃO INADEQUADA`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_FIXAR ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `DOBRADIÇA QUEBRADA`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_SUBSTITUIR DOBRADIÇAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `MUITO POLUÍDO_INTERNA`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `MUITO POLUÍDO_EXTERNA`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `CABOS SEM ANILHAS`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_ANILHAR CABOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `ELETRODUTOS IMPRÓPRIOS`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_SUBSTITUIR ELETRODUTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `EXIST FUSÍVEL QUEIMADO`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_SUBSTITUIR FUSÍVEL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `C/ ATERR_ DEFICIENTE`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_SUBSTITUIR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ARM_" },
    update: {},
    create: {
      codigoSap: "ARM_",
      descricao: `FIAÇÃO COM EMENDAS`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_ARMÁRIO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ARMÁRIO_SUBSTITUIR FIAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONTATOR" },
    update: {},
    create: {
      codigoSap: "CONTATOR",
      descricao: `DANIFICADA/QUEIMAD`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_CONTATOR_PAINEL_CA_E_CC.id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `SUBSTITUIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `POLUIÇÃO INTERNA`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_RELÉS_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `FALTA TAMPA PROTEÇÃO`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_RELÉS_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `COLOCAR TAMPA DE PROTEÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `DESATIVADO`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_RELÉS_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ATIVAR RELÉ`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `DESERNERGIZADO`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_RELÉS_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ATIVAR RELÉ`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `DISPLAY APAGADO`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_RELÉS_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `RECUPERAR DISPLAY`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `DISPLAY DANIFICADO`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_RELÉS_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `RECUPERAR DISPLAY`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `EM FALHA (LED VERMELHA`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_RELÉS_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `TROCAR EQUIPAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `RELÉ AVARIADO`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_RELÉS_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `TROCAR EQUIPAMENTO`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `FUNÇÕES PROT_ INATIVAS`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_RELÉS_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `REGULARIZAR FUNÇÕES DE PROTEÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "UTR" },
    update: {},
    create: {
      codigoSap: "UTR",
      descricao: `POLUIÇÃO`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_UTR_PAINEL_CA_E_CC.id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "UTR" },
    update: {},
    create: {
      codigoSap: "UTR",
      descricao: `DESERNERGIZADO`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_UTR_PAINEL_CA_E_CC.id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `ENERGIZAR EQUIPAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "UTR" },
    update: {},
    create: {
      codigoSap: "UTR",
      descricao: `EM FALHA (LED VERMELHA)`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_UTR_PAINEL_CA_E_CC.id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `RESERT`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VOLTÍMETRO" },
    update: {},
    create: {
      codigoSap: "VOLTÍMETRO",
      descricao: `INOPERANTE`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_VOLTÍMETRO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `SUBSTITUIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VOLTÍMETRO" },
    update: {},
    create: {
      codigoSap: "VOLTÍMETRO",
      descricao: `DISPLAY APAGADO`,
      grupoId: grupo_PAINEL_CA_E_CC.id,
      subgrupoId: subgrupo_VOLTÍMETRO_PAINEL_CA_E_CC_id,
      grupoDefeitoCodigoId: codigo_SEPA_id,
      acaoRecomendada: `SUBSTITUIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PR" },
    update: {},
    create: {
      codigoSap: "PR",
      descricao: `ESTOURADO`,
      grupoId: grupo_PARA_RAIO.id,
      subgrupoId: subgrupo_PARA_RAIO_PARA_RAIO.id,
      grupoDefeitoCodigoId: codigo_SEPR_id,
      acaoRecomendada: `SUBSTITUIR PR`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PR" },
    update: {},
    create: {
      codigoSap: "PR",
      descricao: `CHAMUSCADO`,
      grupoId: grupo_PARA_RAIO.id,
      subgrupoId: subgrupo_PARA_RAIO_PARA_RAIO.id,
      grupoDefeitoCodigoId: codigo_SEPR_id,
      acaoRecomendada: `SUBSTITUIR PR`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PR" },
    update: {},
    create: {
      codigoSap: "PR",
      descricao: `DESCONECTADO DA PARTE VIVA`,
      grupoId: grupo_PARA_RAIO.id,
      subgrupoId: subgrupo_PARA_RAIO_PARA_RAIO.id,
      grupoDefeitoCodigoId: codigo_SEPR_id,
      acaoRecomendada: `CONECTAR `,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PR" },
    update: {},
    create: {
      codigoSap: "PR",
      descricao: `ATERRAMENTO DESCONECTADO`,
      grupoId: grupo_PARA_RAIO.id,
      subgrupoId: subgrupo_PARA_RAIO_PARA_RAIO.id,
      grupoDefeitoCodigoId: codigo_SEPR_id,
      acaoRecomendada: `CONECTAR ATERRAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PR" },
    update: {},
    create: {
      codigoSap: "PR",
      descricao: `AQUECIMENTO NO CORPO DO PR`,
      grupoId: grupo_PARA_RAIO.id,
      subgrupoId: subgrupo_PARA_RAIO_PARA_RAIO.id,
      grupoDefeitoCodigoId: codigo_SEPR_id,
      acaoRecomendada: `SUBSTITUIR PR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PR" },
    update: {},
    create: {
      codigoSap: "PR",
      descricao: `PONTO QUENTE 3°C<DT≤4°C`,
      grupoId: grupo_PARA_RAIO.id,
      subgrupoId: subgrupo_PARA_RAIO_PARA_RAIO.id,
      grupoDefeitoCodigoId: codigo_SEPR_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PR" },
    update: {},
    create: {
      codigoSap: "PR",
      descricao: `PONTO QUENTE 4°C <DT≤ 10°C`,
      grupoId: grupo_PARA_RAIO.id,
      subgrupoId: subgrupo_PARA_RAIO_PARA_RAIO.id,
      grupoDefeitoCodigoId: codigo_SEPR_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PR" },
    update: {},
    create: {
      codigoSap: "PR",
      descricao: `PONTO QUENTE DT > 10°C`,
      grupoId: grupo_PARA_RAIO.id,
      subgrupoId: subgrupo_PARA_RAIO_PARA_RAIO.id,
      grupoDefeitoCodigoId: codigo_SEPR_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PR" },
    update: {},
    create: {
      codigoSap: "PR",
      descricao: `100 μA  < IR CORR <= 200 μA`,
      grupoId: grupo_PARA_RAIO.id,
      subgrupoId: subgrupo_PARA_RAIO_PARA_RAIO.id,
      grupoDefeitoCodigoId: codigo_SEPR_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PR" },
    update: {},
    create: {
      codigoSap: "PR",
      descricao: `200 μA  < IR CORR <= 400 μA`,
      grupoId: grupo_PARA_RAIO.id,
      subgrupoId: subgrupo_PARA_RAIO_PARA_RAIO.id,
      grupoDefeitoCodigoId: codigo_SEPR_id,
      acaoRecomendada: `SUBSTITUIR PR`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PR" },
    update: {},
    create: {
      codigoSap: "PR",
      descricao: `IR COR > 400 μA`,
      grupoId: grupo_PARA_RAIO.id,
      subgrupoId: subgrupo_PARA_RAIO_PARA_RAIO.id,
      grupoDefeitoCodigoId: codigo_SEPR_id,
      acaoRecomendada: `SUBSTITUIR PR`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `OXIDADA`,
      grupoId: grupo_PARA_RAIO.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_PARA_RAIO_id,
      grupoDefeitoCodigoId: codigo_SEPR_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `ILEGÍVEL`,
      grupoId: grupo_PARA_RAIO.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_PARA_RAIO_id,
      grupoDefeitoCodigoId: codigo_SEPR_id,
      acaoRecomendada: `SUBSTITUIR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `FIXAÇÃO INADEQUADA`,
      grupoId: grupo_PARA_RAIO.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_PARA_RAIO_id,
      grupoDefeitoCodigoId: codigo_SEPR_id,
      acaoRecomendada: `FIXAR ADEQUADAMEN`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `INEXISTENTE`,
      grupoId: grupo_PARA_RAIO.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_PARA_RAIO_id,
      grupoDefeitoCodigoId: codigo_SEPR_id,
      acaoRecomendada: `INSTALAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `CÓDIGO DE OPER_ ERRADO`,
      grupoId: grupo_PARA_RAIO.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_PARA_RAIO_id,
      grupoDefeitoCodigoId: codigo_SEPR_id,
      acaoRecomendada: `INSTALAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RACK" },
    update: {},
    create: {
      codigoSap: "RACK",
      descricao: `EQUIPAMENTO DESLIGADO`,
      grupoId: grupo_RACK_TELECOM.id,
      subgrupoId: subgrupo_RACK_TELECOM_RACK_TELECOM.id,
      grupoDefeitoCodigoId: codigo_SERT_id,
      acaoRecomendada: `ENERGIZAR EQUIPAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RACK" },
    update: {},
    create: {
      codigoSap: "RACK",
      descricao: `EQUIPAM_ ALIMENTADO POR C_A`,
      grupoId: grupo_RACK_TELECOM.id,
      subgrupoId: subgrupo_RACK_TELECOM_RACK_TELECOM.id,
      grupoDefeitoCodigoId: codigo_SERT_id,
      acaoRecomendada: `ALIMENTAR PELO C_C`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RACK" },
    update: {},
    create: {
      codigoSap: "RACK",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_RACK_TELECOM.id,
      subgrupoId: subgrupo_RACK_TELECOM_RACK_TELECOM.id,
      grupoDefeitoCodigoId: codigo_SERT_id,
      acaoRecomendada: `LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `BASE DANIFICADA`,
      grupoId: grupo_REATOR.id,
      subgrupoId: subgrupo_BASE_REATOR.id,
      grupoDefeitoCodigoId: codigo_SERE_id,
      acaoRecomendada: `RECUPUERAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `C/ NINHO DE PÁSSARO`,
      grupoId: grupo_REATOR.id,
      subgrupoId: subgrupo_BASE_REATOR.id,
      grupoDefeitoCodigoId: codigo_SERE_id,
      acaoRecomendada: `RETIRAT NINHO DE PÁSSARO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `BASE DANIFICADA CRÍTICA`,
      grupoId: grupo_REATOR.id,
      subgrupoId: subgrupo_BASE_REATOR.id,
      grupoDefeitoCodigoId: codigo_SERE_id,
      acaoRecomendada: `RECUPUERAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 30°C<DT≤55°C`,
      grupoId: grupo_REATOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_REATOR_id,
      grupoDefeitoCodigoId: codigo_SERE_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE DT > 55°C`,
      grupoId: grupo_REATOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_REATOR_id,
      grupoDefeitoCodigoId: codigo_SERE_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 25°C<DT≤30°C`,
      grupoId: grupo_REATOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_REATOR_id,
      grupoDefeitoCodigoId: codigo_SERE_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CORPO" },
    update: {},
    create: {
      codigoSap: "CORPO",
      descricao: `OXIDAÇÃO F4/F5`,
      grupoId: grupo_REATOR.id,
      subgrupoId: subgrupo_CORPO_REATOR.id,
      grupoDefeitoCodigoId: codigo_SERE_id,
      acaoRecomendada: `PINTAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CORPO" },
    update: {},
    create: {
      codigoSap: "CORPO",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_REATOR.id,
      subgrupoId: subgrupo_CORPO_REATOR.id,
      grupoDefeitoCodigoId: codigo_SERE_id,
      acaoRecomendada: `PINTAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CORPO" },
    update: {},
    create: {
      codigoSap: "CORPO",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_REATOR.id,
      subgrupoId: subgrupo_CORPO_REATOR.id,
      grupoDefeitoCodigoId: codigo_SERE_id,
      acaoRecomendada: `PINTAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `COM TRINCAS`,
      grupoId: grupo_REATOR.id,
      subgrupoId: subgrupo_ISOLADOR_REATOR.id,
      grupoDefeitoCodigoId: codigo_SERE_id,
      acaoRecomendada: `ISOLADORES_SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `POUCO POLUIDO`,
      grupoId: grupo_REATOR.id,
      subgrupoId: subgrupo_ISOLADOR_REATOR.id,
      grupoDefeitoCodigoId: codigo_SERE_id,
      acaoRecomendada: `ISOLADORES_LIMPAR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `MUITO POLUÍDOS`,
      grupoId: grupo_REATOR.id,
      subgrupoId: subgrupo_ISOLADOR_REATOR.id,
      grupoDefeitoCodigoId: codigo_SERE_id,
      acaoRecomendada: `ISOLADORES_LIMPAR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `SAIAS QUEBRADAS`,
      grupoId: grupo_REATOR.id,
      subgrupoId: subgrupo_ISOLADOR_REATOR.id,
      grupoDefeitoCodigoId: codigo_SERE_id,
      acaoRecomendada: `ISOLADORES_SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ISOLAD0R" },
    update: {},
    create: {
      codigoSap: "ISOLAD0R",
      descricao: `CHAMUSCADO`,
      grupoId: grupo_REATOR.id,
      subgrupoId: subgrupo_ISOLADOR_REATOR.id,
      grupoDefeitoCodigoId: codigo_SERE_id,
      acaoRecomendada: `SUBSTITUIR ISOLADORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `NÍVEL DE ÓLEO BAIXO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_BUCHAS_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `BUCHAS_COMPLETAR ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_BUCHAS_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `BUCHAS_RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA C/TRINCAS CRÍTICAS`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_BUCHAS_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA C/TRINCAS MODERADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_BUCHAS_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA MUITO POLUIDA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_BUCHAS_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `BUCHAS_LIMPARA BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA POUCO POLUIDA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_BUCHAS_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `BUCHAS_LIMPARA BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `OXIDAÇÃO PARTE METÁLICA F1/F2`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_BUCHAS_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `BUCHAS _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `OXIDAÇÃO PARTE METÁLICA F3`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_BUCHAS_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `BUCHAS _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `OXIDAÇÃO PARTE METÁLICA F4/F5`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_BUCHAS_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `BUCHAS _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `NÍVEL DE ÓLEO CRÍTICO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_BUCHAS_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `BUCHAS_COMPLETAR ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA CHAMUSCADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_BUCHAS_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `VAZAMENTO ÓLEO PELAS GAXETAS`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_BUCHAS_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `BUCHAS_CORRIGIR VAZAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `VAZAMENTO ÓLEO PARAF DRENAGEM`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_BUCHAS_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `BUCHAS_CORRIGIR VAZAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `AQUECIMENTO INTERNO ANORMAL`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_BUCHAS_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `BUCHAS_REGULARIZAR TEMPERATURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PONTO QUENTE DT > 12°C`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_BUCHAS_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PONTO QUENTE 8°C<DT≤12°C`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_BUCHAS_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PONTO QUENTE 3°C<DT≤8°C`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_BUCHAS_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PORTA EMPENADA S/TRAVA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ARM_ RÉGUAS _DESEMPENAR OU COL TRANCA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PINTURA DETERIORADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `OXIDAÇÃO F5`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `ILUM_ INTERNA NÃO FUNCIONA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ARM_ RÉGUAS _SUBSTITUIR LÂMPADAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `RESIST_ AQUEC_ INOPER_`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ARM_ RÉGUAS _DESATIVAR RESISTÊNCIA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `FALTA ACABAMENTO FIAÇÃO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `VEDAR ELETRODUTOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PENETRAÇÃO OMI NA FIAÇÃO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `VEDAÇÃO DA FIAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `TERMINAIS DETERIORADOS`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ARM_ RÉGUAS _SUBSTITUIR TERMINAIS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `ENTRADA DE UMIDADE`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `VEDAR ELETRODUTOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `RÉGUA TERM OXIDAÇÃO F4/F5`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `SUBSTITUIR RÉGUAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `RÉGUA TERM OXIDAÇÃO F3`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `SUBSTITUIR RÉGUAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `RÉGUA TERM OXIDAÇÃO F1/F2`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `SUBSTITUIR RÉGUAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `FIO SOLTO OU CON_ FOLGADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ARM_ RÉGUAS _CONECTAR/APERTAR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `VEDAÇÃO INSUFICIENTE`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ARM_ RÉGUAS _VEDAR ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `FIAÇÃO ISOLAÇ DANIFICADO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ARM_ RÉGUAS _SUBSTITUIR FIAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `FIXAÇÃO INADEQUADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `FIXAR RÉGUA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `DOBRADIÇA TAMPA QUEBRADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ARM_ RÉGUAS _SUBSTITUIR DOBRADIÇAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `ARMARIO SEM TAMPA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ARM_ RÉGUAS_COLOCAR TAMPA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `MUITO POLUÍDO_INTERNA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `MUITO POLUÍDO_EXTERNA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `CABOS S/ ANILHAS/DANIFIC`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ARM_ RÉGUAS_ANILHAR CABOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `ELETRODUTOS IMPRÓPRIOS`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `SUBSTITUIR ELETRODUTOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `EXIST FUSÍVEL QUEIMADO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ARM_ RÉGUAS_SUBSTITUIR FUSÍVEIS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `ATERRAMENTO INEXISTENTE`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `INSTALAR ATERRAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `ATERRAMENTO PARTIDO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `INSTALAR ATERRAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `FIAÇÃO COMPROMETIDA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ARM_ RÉGUAS_SUBSTITUIR FIAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `RÉGUAS TERM_ COMPROMETIDAS`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ARM_ RÉGUAS_SUBSTIUTIR RÉGUAS COMPROMETI`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PONTO QUENTE DT > 30°C`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PONTO QUENTE 15°C<DT≤30C`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PONTO QUENTE 4°C<DT≤15°C`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT C/C" },
    update: {},
    create: {
      codigoSap: "COMUT C/C",
      descricao: `MANIVELA QUEBRADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `COMUTADOR SEM CARGA_SUBSTITUIR MANIVELA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT C/C" },
    update: {},
    create: {
      codigoSap: "COMUT C/C",
      descricao: `VEDAÇÃO INSUFICIENTE`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `COMUTADOR SEM CARGA_VEDAR MECANISMO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT C/C" },
    update: {},
    create: {
      codigoSap: "COMUT C/C",
      descricao: `VISOR DE POSIÇÃO QUEBRADO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `COMUTADOR SEM CARGA_SUBSTITUIR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT C/C" },
    update: {},
    create: {
      codigoSap: "COMUT C/C",
      descricao: `MOTOR DANIFICADO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `SUBSTITUIR MOTOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT C/C" },
    update: {},
    create: {
      codigoSap: "COMUT C/C",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT C/C" },
    update: {},
    create: {
      codigoSap: "COMUT C/C",
      descricao: `FILTRO C/VAZAMENTO ÓLEO `,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT C/C" },
    update: {},
    create: {
      codigoSap: "COMUT C/C",
      descricao: `MOTOR DO FILTRO DANIFICAD`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `SUBSTITUIR MOTOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT C/C" },
    update: {},
    create: {
      codigoSap: "COMUT C/C",
      descricao: `DJ DO MOTOR C/DEFEITO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `SUBSTITUIR MOTOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT S/C" },
    update: {},
    create: {
      codigoSap: "COMUT S/C",
      descricao: `SEM TRAVAMENTO TAP`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `COMUTADOR COM CARGA _COLOCAR CADEADO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT S/C" },
    update: {},
    create: {
      codigoSap: "COMUT S/C",
      descricao: `MANIVELA OXIDAÇÃO F4/F5`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT S/C" },
    update: {},
    create: {
      codigoSap: "COMUT S/C",
      descricao: `MANIVELA OXIDAÇÃO F3`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT S/C" },
    update: {},
    create: {
      codigoSap: "COMUT S/C",
      descricao: `MANIVELA OXIDAÇÃO F1/F2`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT S/C" },
    update: {},
    create: {
      codigoSap: "COMUT S/C",
      descricao: `MECANISMO TRAVADO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `DESTRAVA MECANISMO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT S/C" },
    update: {},
    create: {
      codigoSap: "COMUT S/C",
      descricao: `UMIDADE NO MECANISMO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `COMUTADOR COM CARGA_VEDAR MECANISMO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONECTORES INADEQUADOS`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `CONEXÕES AT_SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 30°C<DT≤55C`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE DT > 55°C`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 25°C<DT≤30°C`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `TIPO PINO/CABO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `CONEXÃO AT_SUBSTIUIR POR PINO/CHAPA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `FALTANDO PARAFUSOS`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `CONEXÃO AT_REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `MUITO POLUÍDOS`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `CONEXÃO AT_LIMPAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÕES FOLGADAS`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `CONEXÃO AT_REAPERTAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `EXISTÊNC DE CENTELHAMENTO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `CONEXÃO AT_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `RUÍDOS VIBRAÇÕES ANORMAIS`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `CONEXÃO AT_RETIRAR RUÍDOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `FALTA PROTETOR DE BUCHA SECUN`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_CONEXÕES_AT_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `CONEXÃO AT_COLOCAR CONE DE PROTEÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `VIBRAÇÃO ANORMAL`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ELETRO VENTILADORES_RETIRAR VIBRAÇÃO ANO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `RUÍDOS ANORMAIS`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ELETRO VENTILADORES_RETIRAR RUÍDO ANORMA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `UND_ FORA DE OPERAÇÃO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ELETRO VENTILADORES_SUBSTITUIR UNIDADE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `PRÓPRIA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `PINTURA DANIFICADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ELETRO VENTILADORES_RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `POLUIÇÃO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ELETRO VENTILADORES_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `MUITO POLUÍDOS`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ELETRO VENTILADORES_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `OXIDAÇÃO F5`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ACOMPANHAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `NÃO FUNCUNCIONA REMOTA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ELETRO VENTILADORES_COR FUNC REMOTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `Ñ FUNCIONA POSIÇÃO LOCAL`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ELETRO VENTILADORES_COR FUNC LOCAL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `CONTATOR AVARIADO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `SUBSTITUIR CONTATOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `RELÉ FALTA FASE_DANIFIC`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `SUBSTITUIR RELÉ`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `CHAVE SELETORA C/DEFEITO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `SUBSTITUIR CHAVE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `PONTO QUENTE DT > 30°C`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `PONTO QUENTE 15°C<DT≤30C`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `PONTO QUENTE 4°C<DT≤15°C`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `OXIDADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `PLACA IDENTIFICAÇÃO_LIMPAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `ILEGÍVEL`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `PLACA IDENTIFICAÇÃO_LIMPAR/SUBSTITUIR PL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `INEXISTENTE`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `PLACA IDENTIFICAÇÃO_INSTALAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `FIXAÇÃO INADEQUADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `PLACA IDENTIFICAÇÃO _ FIXAR ADEQUADAM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `CÓDIGO DE OPER_ ERRADO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `PLACA IDENTIFICAÇÃO _SUBSTITUIR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `VÁLVULAS COM DEFEITO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RADIADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RADIADORES_RECUPERAR VÁLVULAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `VÁLVULAS POSIÇÃO FECHADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RADIADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RADIADORES_ABRIR VÁLVULAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `VÁLVULAS QUEBRADAS_ABERTA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RADIADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RADIADORES_SUBSTITUIR VÁLVULAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `VÁLVULAS QUEBRADAS_FECHADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RADIADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RADIADORES_SUBSTITUIR VÁLVULAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `DRENO COM DEFEITO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RADIADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `CONSERTAR DRENO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `VAZAM_ ÓLEO NAS JUNTAS`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RADIADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RADIADORES_CORRIGIR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `VAZAMENTO ÓLEO_RADIADOR`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RADIADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `VAZAMENTO ÓLEO_VÁLVULA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RADIADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RADIADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RADIADORES_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `PINTURA DANIFICADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RADIADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RADIADORES_RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `OXIDAÇÃO F5`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RADIADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RADIADORES_RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RADIADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RADIADORES_RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RADIADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RADIADORES_RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `PONTO QUENTE DT > 15°C`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RADIADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `PONTO QUENTE 10°C<DT≤15°C`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RADIADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `PONTO QUENTE 3°C<DT≤10°C`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RADIADORES_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ FLUXO" },
    update: {},
    create: {
      codigoSap: "RELÉ FLUXO",
      descricao: `NÍVEL DE ÓLEO BAIXO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RELÉ_DE_FLUXO_DE_ÓLEO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RELÉ FLUXO ÓLEO_COMPLETAR ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ FLUXO" },
    update: {},
    create: {
      codigoSap: "RELÉ FLUXO",
      descricao: `VISOR TRINCADO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RELÉ_DE_FLUXO_DE_ÓLEO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RELÉ FLUXO ÓLEO_SUBSTITUIR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ FLUXO" },
    update: {},
    create: {
      codigoSap: "RELÉ FLUXO",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RELÉ_DE_FLUXO_DE_ÓLEO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RELÉ FLUXO ÓLEO_RETIRAR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ FLUXO" },
    update: {},
    create: {
      codigoSap: "RELÉ FLUXO",
      descricao: `VAZAMENTO ÓLEO CRÍTICO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RELÉ_DE_FLUXO_DE_ÓLEO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RELÉ FLUXO ÓLEO_CORRIGIR VAZAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ FLUXO" },
    update: {},
    create: {
      codigoSap: "RELÉ FLUXO",
      descricao: `VISOR SUJO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RELÉ_DE_FLUXO_DE_ÓLEO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RELÉ FLUXO ÓLEO_LIMPAR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ FLUXO" },
    update: {},
    create: {
      codigoSap: "RELÉ FLUXO",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RELÉ_DE_FLUXO_DE_ÓLEO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RELÉ FLUXO ÓLEO_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ GÁS" },
    update: {},
    create: {
      codigoSap: "RELÉ GÁS",
      descricao: `NÍVEL DE ÓLEO BAIXO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RELÉ_DE_GÁS_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RELÉ GÁS_EFETUARA SANGRIA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ GÁS" },
    update: {},
    create: {
      codigoSap: "RELÉ GÁS",
      descricao: `VISOR TRINCADO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RELÉ_DE_GÁS_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RELÉ GÁS_SUBSTITUIR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ GÁS" },
    update: {},
    create: {
      codigoSap: "RELÉ GÁS",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RELÉ_DE_GÁS_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RELÉ GÁS_RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ GÁS" },
    update: {},
    create: {
      codigoSap: "RELÉ GÁS",
      descricao: `VAZAMENTO ÓLEO CRÍTICO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RELÉ_DE_GÁS_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RELÉ GÁS_CORRIGIR VAZAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ GÁS" },
    update: {},
    create: {
      codigoSap: "RELÉ GÁS",
      descricao: `VISOR SUJO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RELÉ_DE_GÁS_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RELÉ GÁS_LIMPAR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ GÁS" },
    update: {},
    create: {
      codigoSap: "RELÉ GÁS",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_RELÉ_DE_GÁS_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RELÉ GÁS_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "SECADOR GEL" },
    update: {},
    create: {
      codigoSap: "SECADOR GEL",
      descricao: `SILICA_GEL SATURADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_SECADOR_DE_AR_À_SILICA_GEL_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `SECADOR GEL_SUBSTITUIR SÍLICA GEL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "SECADOR GEL" },
    update: {},
    create: {
      codigoSap: "SECADOR GEL",
      descricao: `S/ ÓLEO NO COPO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_SECADOR_DE_AR_À_SILICA_GEL_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `SECADOR GEL_REPOR ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "SECADOR GEL" },
    update: {},
    create: {
      codigoSap: "SECADOR GEL",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_SECADOR_DE_AR_À_SILICA_GEL_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `SECADOR GEL_RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "SECADOR GEL" },
    update: {},
    create: {
      codigoSap: "SECADOR GEL",
      descricao: `COPO DE VIDRO TRINCADO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_SECADOR_DE_AR_À_SILICA_GEL_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `SECADOR GEL_SUBSTITUIR COPO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "SECADOR GEL" },
    update: {},
    create: {
      codigoSap: "SECADOR GEL",
      descricao: `VISOR QUEBRADO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_SECADOR_DE_AR_À_SILICA_GEL_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `SECADOR GEL_SUBSTITUIR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "SECADOR GEL" },
    update: {},
    create: {
      codigoSap: "SECADOR GEL",
      descricao: `PINTURA DETERIORADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_SECADOR_DE_AR_À_SILICA_GEL_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `SECADOR GEL_PINTAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "SECADOR GEL" },
    update: {},
    create: {
      codigoSap: "SECADOR GEL",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_SECADOR_DE_AR_À_SILICA_GEL_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `SECADOR GEL_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP COMUT" },
    update: {},
    create: {
      codigoSap: "TQ EXP COMUT",
      descricao: `VAZAMENTO ÓLEO CRÍTICO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_CORRIGIR NÍVEL DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP COMUT" },
    update: {},
    create: {
      codigoSap: "TQ EXP COMUT",
      descricao: `NÍVEL DE ÓLEO BAIXO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_RETIRAR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP COMUT" },
    update: {},
    create: {
      codigoSap: "TQ EXP COMUT",
      descricao: `IND_ NÍVEL OLÉO Ñ FUNC`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_REC INDICADOR NÍVEL ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP COMUT" },
    update: {},
    create: {
      codigoSap: "TQ EXP COMUT",
      descricao: `VISOR SUJO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_LIMPAR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP COMUT" },
    update: {},
    create: {
      codigoSap: "TQ EXP COMUT",
      descricao: `VISOR QUEBRADO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_SUBSTITUIR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP COMUT" },
    update: {},
    create: {
      codigoSap: "TQ EXP COMUT",
      descricao: `PINTURA DANIFICADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP COMUT" },
    update: {},
    create: {
      codigoSap: "TQ EXP COMUT",
      descricao: `OXIDAÇÃO F5`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP COMUT" },
    update: {},
    create: {
      codigoSap: "TQ EXP COMUT",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP COMUT" },
    update: {},
    create: {
      codigoSap: "TQ EXP COMUT",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP COMUT" },
    update: {},
    create: {
      codigoSap: "TQ EXP COMUT",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP REGU" },
    update: {},
    create: {
      codigoSap: "TQ EXP REGU",
      descricao: `VAZAMENTO ÓLEO CRÍTICO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_R_T_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_CORRIGIR NÍVEL DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP REGU" },
    update: {},
    create: {
      codigoSap: "TQ EXP REGU",
      descricao: `NÍVEL DE ÓLEO BAIXO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_R_T_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_RETIRAR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP REGU" },
    update: {},
    create: {
      codigoSap: "TQ EXP REGU",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_R_T_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_CORRIGIR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP REGU" },
    update: {},
    create: {
      codigoSap: "TQ EXP REGU",
      descricao: `IND_ NÍVEL OLÉO Ñ FUNC`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_R_T_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_REC INDICADOR NÍVEL ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP REGU" },
    update: {},
    create: {
      codigoSap: "TQ EXP REGU",
      descricao: `VISOR SUJO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_R_T_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_LIMPAR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP REGU" },
    update: {},
    create: {
      codigoSap: "TQ EXP REGU",
      descricao: `VISOR QUEBRADO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_R_T_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_SUBSTITUIR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP REGU" },
    update: {},
    create: {
      codigoSap: "TQ EXP REGU",
      descricao: `PINTURA DANIFICADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_R_T_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP REGU" },
    update: {},
    create: {
      codigoSap: "TQ EXP REGU",
      descricao: `OXIDAÇÃO F5`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_R_T_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP REGU" },
    update: {},
    create: {
      codigoSap: "TQ EXP REGU",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_R_T_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP REGU" },
    update: {},
    create: {
      codigoSap: "TQ EXP REGU",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_R_T_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP REGU" },
    update: {},
    create: {
      codigoSap: "TQ EXP REGU",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_R_T_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE EXPANSÃO_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `VAZAM_ ÓLEO PONTOS SOLDA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE PRINCIPAL_RETIRAR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `VAZAM_ ÓLEO NAS JUNTAS`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE PRINCIPAL_RETIRAR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `VAZAM_ ÓLEO PARAF CARCAÇA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE PRINCIPAL_RETIRAR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `VAZAM_ ÓLEO REGISTROS`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE PRINCIPAL_RETIRAR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `PINTURA DETERIORADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE PRINCIPAL_RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE PRINCIPAL_LIMPAR TANQUE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `OXIDAÇÃO F5`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE PRINCIPAL_RETIRAR CORROSÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE PRINCIPAL_RETIRAR CORROSÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ACOMPANHAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `BOLSA DE BORRACHA FURADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `SUBSTITUIR BOLSA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `VÁLV ALÍVIO PRESSÃO DANIFIC`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `COLOCAR TRAVAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `TEMPERATURA ANORMAL`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE PRINCIPAL_VERICAR TERMÔMETRO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `VIBRAÇÃO ANORMAL`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE PRINCIPAL_VERIFICAR RUÍDO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `RUÍDOS ANORMAIS`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE PRINCIPAL_VERIFICAR RUÍDO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `ATERR_ FOLGADO OU INEXIST`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE PRINCIPAL_APERTAR ATERRAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `ATERRAMENTO EM DOIS PONTOS`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `DESCONECTAR UM ATERRAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `TANQUES FORA TRILHOS`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE PRINCIPAL_RECOLOCAR NO TRILHO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `APOIADO SOBRE BASE MADEIRA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE PRINCIPAL_CONSTRUIR BASE CONCRETO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `C/ NINHO DE PÁSSARO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAT NINHO DE PÁSSARO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `RODAS LOCOMOÇÃO SEM TRAVA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TANQUE PRINCIPAL_COLOCAR TRAVAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TC BUCHA" },
    update: {},
    create: {
      codigoSap: "TC BUCHA",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TC_DE_BUCHA_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `BUCHAS_RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TC BUCHA" },
    update: {},
    create: {
      codigoSap: "TC BUCHA",
      descricao: `CAIXA MUITO POLUIDA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TC_DE_BUCHA_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TC BUCHA" },
    update: {},
    create: {
      codigoSap: "TC BUCHA",
      descricao: `CAIXA POUCO POLUIDA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TC_DE_BUCHA_REGULADOR_DE_TENSAO.id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ENROLAM" },
    update: {},
    create: {
      codigoSap: "TERMÔM ENROLAM",
      descricao: `VISOR QUEBRADO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ENROLAMENTO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TERMÔMETRO ENROLAMENTO_SUBSTITUIR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ENROLAM" },
    update: {},
    create: {
      codigoSap: "TERMÔM ENROLAM",
      descricao: `VISOR POLUÍDO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ENROLAMENTO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TERMÔMETRO ENROLAMENTO_LIMPAR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ENROLAM" },
    update: {},
    create: {
      codigoSap: "TERMÔM ENROLAM",
      descricao: `PONTEIROS QUEBRADOS`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ENROLAMENTO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TERMÔMETRO ENROLAMENTO_SUBSTITUIR TERMOM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ENROLAM" },
    update: {},
    create: {
      codigoSap: "TERMÔM ENROLAM",
      descricao: `FORA DE OPERAÇÃO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ENROLAMENTO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TERMÔMETRO ENROLAMENTO_RECUPERAR TERMOME`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ENROLAM" },
    update: {},
    create: {
      codigoSap: "TERMÔM ENROLAM",
      descricao: `OPERAÇÃO C/RESTRIÇÃO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ENROLAMENTO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TERMÔMETRO ENROLAMENTO_RECUPE TERMÔMETRO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ENROLAM" },
    update: {},
    create: {
      codigoSap: "TERMÔM ENROLAM",
      descricao: `90°C ≤T< 105°C`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ENROLAMENTO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `REDUZIR TEMPERATURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ENROLAM" },
    update: {},
    create: {
      codigoSap: "TERMÔM ENROLAM",
      descricao: `105°C <T`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ENROLAMENTO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `REDUZIR TEMPERATURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ÓLEO" },
    update: {},
    create: {
      codigoSap: "TERMÔM ÓLEO",
      descricao: `VISOR QUEBRADO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ÓLEO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TERMÔMETRO ÓLEO_SUBSTITUIR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ÓLEO" },
    update: {},
    create: {
      codigoSap: "TERMÔM ÓLEO",
      descricao: `VISOR POLUÍDO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ÓLEO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TERMÔMETRO ÓLEO_LIMPAR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ÓLEO" },
    update: {},
    create: {
      codigoSap: "TERMÔM ÓLEO",
      descricao: `PONTEIROS QUEBRADOS`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ÓLEO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TERMÔMETRO ÓLEO_SUBSTITUIR TERMÔMETRO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ÓLEO" },
    update: {},
    create: {
      codigoSap: "TERMÔM ÓLEO",
      descricao: `FORA DE OPERAÇÃO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ÓLEO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TERMÔMETRO ÓLEO_RECUPERAR TERMÔMETRO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ÓLEO" },
    update: {},
    create: {
      codigoSap: "TERMÔM ÓLEO",
      descricao: `OPERAÇÃO C/RESTRIÇÃO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ÓLEO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `TERMÔMETRO ÓLEO_RECUPERAR TERMÔMETRO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ÓLEO" },
    update: {},
    create: {
      codigoSap: "TERMÔM ÓLEO",
      descricao: `80°C ≤T< 85°C`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ÓLEO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `REDUZIR TEMPERATURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ÓLEO" },
    update: {},
    create: {
      codigoSap: "TERMÔM ÓLEO",
      descricao: `85°C <T`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ÓLEO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `REDUZIR TEMPERATURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VÁLV PRESSÃO" },
    update: {},
    create: {
      codigoSap: "VÁLV PRESSÃO",
      descricao: `DIAFRAGMA TRINCADO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_VÁLVULA_DE_ALIVIO_DE_PRESSÃO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `VÁLVULA PRESSÃO_SUBSTITUIR DIAFRAGMA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VÁLV PRESSÃO" },
    update: {},
    create: {
      codigoSap: "VÁLV PRESSÃO",
      descricao: `DIAFRAGMA ROMPIDO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_VÁLVULA_DE_ALIVIO_DE_PRESSÃO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `VÁLVULA PRESSÃO_REPOR DIAFRAGMA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VÁLV PRESSÃO" },
    update: {},
    create: {
      codigoSap: "VÁLV PRESSÃO",
      descricao: `VAZAM_ ÓLEO MODERADO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_VÁLVULA_DE_ALIVIO_DE_PRESSÃO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `VÁLVULA PRESSÃO_RETIRAR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VÁLV PRESSÃO" },
    update: {},
    create: {
      codigoSap: "VÁLV PRESSÃO",
      descricao: `VAZAMENTO ÓLEO CRÍTICO`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_VÁLVULA_DE_ALIVIO_DE_PRESSÃO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `VÁLVULA PRESSÃO_CORRIGIR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VÁLV PRESSÃO" },
    update: {},
    create: {
      codigoSap: "VÁLV PRESSÃO",
      descricao: `OXIDAÇÃO F5`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_VÁLVULA_DE_ALIVIO_DE_PRESSÃO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR CORROSÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VÁLV PRESSÃO" },
    update: {},
    create: {
      codigoSap: "VÁLV PRESSÃO",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_VÁLVULA_DE_ALIVIO_DE_PRESSÃO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `RETIRAR CORROSÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VÁLV PRESSÃO" },
    update: {},
    create: {
      codigoSap: "VÁLV PRESSÃO",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_VÁLVULA_DE_ALIVIO_DE_PRESSÃO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `ACOMPANHAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VÁLV PRESSÃO" },
    update: {},
    create: {
      codigoSap: "VÁLV PRESSÃO",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_VÁLVULA_DE_ALIVIO_DE_PRESSÃO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `VÁLVULA PRESSÃO_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VÁLV PRESSÃO" },
    update: {},
    create: {
      codigoSap: "VÁLV PRESSÃO",
      descricao: `PINTURA DANIFICADA`,
      grupoId: grupo_REGULADOR_DE_TENSAO.id,
      subgrupoId: subgrupo_VÁLVULA_DE_ALIVIO_DE_PRESSÃO_REGULADOR_DE_TENSAO_id,
      grupoDefeitoCodigoId: codigo_SERG_id,
      acaoRecomendada: `VÁLVULA PRESSÃO_RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `CONEXÕES FOLGADAS`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_ATERRAMENTO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `ATERRAMENTO_REAPERTAR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `CABO DE ATERRAMENTO INADEQUADO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_ATERRAMENTO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `ATERRAMENTO_SUBSTITUIR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `PARTIDO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_ATERRAMENTO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `INEXISTENTE`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_ATERRAMENTO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `INSTALAR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `DESCONECTADO DA CARCAÇA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_ATERRAMENTO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `CONECTAR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_ATERRAMENTO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_ATERRAMENTO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `OXIDAÇÃO F4/F5`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_ATERRAMENTO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `TRELIÇAS OXIDADAS F3`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `BASE DE FIXAÇÃO _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `TRELIÇAS OXIDADAS F4/F5`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `TRELIÇAS OXIDADAS F1/F2`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `PARAFUSOS OXIDADOS F3`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `BASE DE FIXAÇÃO _SUBSTITUIR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `PARAFUSOS OXIDADOS F4/F5`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `PARAFUSOS OXIDADOS F1/F2`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `AUSÊNCIA PARAFUSOS DE FIXAÇÃO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `BASE DE FIXAÇÃO _REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `C/ NINHO DE PÁSSARO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETIRAT NINHO DE PÁSSARO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `BASE DESNIVELADA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `BASE DE FIXAÇÃO _NIVELAR BASE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `OXIDAÇÃO PARTE METÁLICA F1/F2`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `BUCHAS _RETIRAR CORROSÃO/OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `OXIDAÇÃO PARTE METÁLICA F3`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `BUCHAS _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `OXIDAÇÃO PARTE METÁLICA F4/F5`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `BUCHAS _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `C/VAZAMENTO DE FUGA CORRENTE`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `BUCHAS  _SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `MUITO POLUÍDAS`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `BUCHAS_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA C/TRINCAS/RACHADURAS`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA CHAMUSCADA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA COM SAIAS QUEBRADAS`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `INFILTRAÇÃO PELAS BUCHAS`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `BUCHAS_CORRIGIR INFILTRAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `BUCHAS_RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PONTO QUENTE DT > 12°C`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PONTO QUENTE 8°C<DT≤12°C`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PONTO QUENTE 3°C<DT≤8°C`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PARAFUSOS OXIDAÇÃO F3`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PARAFUSOS OXIDAÇÃO F1/F2`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `ACOMPANHAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `ATERRAMENTO INEXISTENTE`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `ATERRAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `PINTAR E RECUPERAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `CASA DE MARIBONDO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETIRAR CASA DE MARIBONDO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `OXIDAÇÃO F4/F5`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `REALIZAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PINTURA DEFICIENTE`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PARAFUSOS OXIDAÇÃO F4/F5`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `FIXAÇÃO ARMÁRIO DEFICIENTE`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `FIXAR ARMÁRIO ADEQUADAMENT`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `POSIÇÃO ELETRODUTOS INADEQUA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `ADEQUAR POSIÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `ENTRADA UMID_ PELO ELETRODUT`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `VEDAR ELETRODUTOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `FECHADURA QUEBRADA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR FECHADURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `BORRACHA VEDAÇÃO DANIFICADA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR BORRACHA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `LÂMP DE ILUMINAÇÃO_QUEIMADA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR LÂMPADA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `CABOS S/ ANILHAS/DANIFIC`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `REPOR ANILHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `DOBRADIÇA QUEBRADA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR DOBRADIÇA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PORTA EMPENADA S/TRAVA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `DESEMPENAR/COLOCAR TRANCA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `VEDAÇÃO INSUFICIENTE`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `VEDAR ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PONTO QUENTE DT > 30°C`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PONTO QUENTE 15°C<DT≤30°C`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PONTO QUENTE 4°C<DT≤15°C`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÕES AT_TIPO PINO/CABO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `CONEXÕES DE AT_SUBSTITUIR POR PINO/CHAPA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÕES AT_FALTANDO PARAFUSOS`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `CONEXÕES DE AT _REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÕES AT_CONECTORES INADEQUADOS`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `CONEXÕES DE AT _SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÕES AT_MUITO POLUÍDO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `CONEXÕES AT_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÕES AT_CONEXÕES FOLGADAS`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `CONEXÕES AT_REAPERTAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÕES AT_EXISTÊNCIA CENTELHAMENTO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `CONEXÕES AT_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÕES AT_PONTO QUENTE 30°C<DT≤55C`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÕES AT_PONTO QUENTE DT > 55°C`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÕES AT_PONTO QUENTE 25°C<DT≤30C`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÕES AT_RUÍDO/VIBRAÇÕES ANORMAIS`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR RUÍDOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÕES AT_FALTA PROTETOR DE BUCHA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_CONEXÕES_AT_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `CONEXÕES AT_COLOCAR CONE DE PROTEÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `ARM COMANDO_LUBR MECANISM DEFICIENTE`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `LUBRIFICAR MECANISMO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `MOTOR CARREGAMENTO MOLA INOPERANTE`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR MOTOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `COMANDO ELÉTRICO INOPERANTE`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `REPARA COMANDO ELÉTRICO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `LÂMPADA SINALIZAÇÃO QUEIMADA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR LÂMPADAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `RESISTÊNCIA AQUECIMENTO INOPERANTE`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `DESATIVAR RESISTÊNCIA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `FIOS SOLTOS S/ISOLAÇÃO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `ISOLAR PONTAS DOS FIOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `RELÉ ANTI_BOMBEAMENTO Ñ ENCAIXADO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `ENCAIXAR RELÉ ANTI BOMBEAM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `SINALIZ_ A DISTÂNCIA Ñ FUNC_ CORRET_`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RECUPERAR SINALIZAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `IDENTIFIC_ POSIÇÃO Ñ FUNC_ (ON/OFF)`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `CONSERTAR INDICADOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `CONTADOR DE OPERAÇÃO Ñ FUNCIONA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `CONSERTAR CONTADOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `Nº OPERAÇÕES INDICA _ SUBST ÓLEO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `CONSERTAR CONTADOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `BOTOEIRA DANIFICADA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR BOTOEIRAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `AMPERÍMETROS Ñ FUNCIONAM `,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR AMPERÍMETRO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `AMPERÍMETRO VIDRO QUEBRADO `,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR VIDRO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: ` RELÉ DE RELIGAMENTO Ñ FUNCIONA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR RELÉ DE RELIGAM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `RELÉ SOBRECORRENTE DANIFICADO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR RELÉ`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `FALTA ACABAMENTO FIAÇÃO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `ACABAR FIAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `RÉGUAS TERMINAIS OXIDAÇÃO F4/F5`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR RÉGUAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `RÉGUAS TERMINAIS OXIDAÇÃO F3`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR RÉGUAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `RÉGUAS TERMINAIS OXIDAÇÃO F1/F2`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `ACOMPANHAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `BOBINA DE ABERTURA QUEIMADA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR BOBINA DE ABERTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `BOBINA DE FECHAMENTO QUEIMADA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR BOBINA  DE FECHAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `BOB ABER_ 10% ≤ IMPEDÂNCIA ≤ 20% `,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `ACOMPANHAAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `BOB ABER_ 20 % < IMPEDÂNCIA ≤ 30% `,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR BOBINA DE ABERTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `BOB ABER_  IMPEDÂNCIA> 30% `,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR BOBINA DE ABERTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `BOB FEC_ 10% ≤ IMPEDÂNCIA ≤ 20% `,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR BOBINA  DE FECHAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `BOB FEC_ 20 % < IMPEDÂNCIA ≤ 30% `,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR BOBINA  DE FECHAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `BOB FEC_  IMPEDÂNCIA> 30% `,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR BOBINA  DE FECHAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `CHAVE DE FIM DE CURSO AVARIADA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR CHAVE DE FIM DE CURSO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `COMANDO MECÂNICO C/ DEFEITO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `REGULAR MECANISMO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `FIAÇÃO ISOLAÇ DANIFICADO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR FIAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `CROSTA TERMINAIS DOS TC'S`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `LIMPAR TERMINAIS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MECANISMO" },
    update: {},
    create: {
      codigoSap: "MECANISMO",
      descricao: `MEDIDORES ENERGIA INOPERANTES`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_MECANISMO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RECUPERAR/SUBSTITUIR MEDIDO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `OXIDADA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `ILEGÍVEL`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `FIXAÇÃO INADEQUADA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `FIXAR ADEQUADAMEN`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `INEXISTENTE`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `INSTALAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `CÓDIGO DE OPER_ ERRADO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `INSTALAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `POLUIÇÃO INTERNA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_RELÉS_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `LIMPAR RELÉ`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `NÃO POSSUI TAMPA PROTEÇÃO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_RELÉS_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `COLOCAR TAMPA DE PROTEÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `DESATIVADO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_RELÉS_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `ATIVAR RELÉ`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `DISPLAY APAGADO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_RELÉS_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RECUPERAR DISPLAY`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `DISPLAY DANIFICADO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_RELÉS_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RECUPERAR DISPLAY`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `EM FALHA (LED VERMELHA)`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_RELÉS_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `TROCAR EQUIPAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `FUNÇÕES PROTEÇÃO INATIVAS`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_RELÉS_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `REGULARIZAR FUNÇÕES DE PROTEÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ" },
    update: {},
    create: {
      codigoSap: "RELÉ",
      descricao: `FALTA DE COMUNICAÇÃO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_RELÉS_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `REPARAR COMUNICAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RES_ DE CONTATO" },
    update: {},
    create: {
      codigoSap: "RES_ DE CONTATO",
      descricao: `RESISTÊNCIA CONTATO MODERADA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_RES__DE_CONTATO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETIRAR IMPUREZA, UMIDADE E REAPERTO DAS CONEXÕES _ M3`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RES_ DE CONTATO" },
    update: {},
    create: {
      codigoSap: "RES_ DE CONTATO",
      descricao: `RESISTÊNCIA CONTATO CRÍTICA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_RES__DE_CONTATO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETIRAR IMPUREZA, UMIDADE E REAPERTO DAS CONEXÕES _ M3`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RES_ ISOLAMENTO" },
    update: {},
    create: {
      codigoSap: "RES_ ISOLAMENTO",
      descricao: `BAIXA RESITÊNCIA DE ISOLAMENTO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_RES__ISOLAMENTO_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETIRAR DE UMIDADE DOS CIRCUITOS _ ( M3)`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RIGIDEZ" },
    update: {},
    create: {
      codigoSap: "RIGIDEZ",
      descricao: `BAIXA RIGIDEZ 25KV ≤INTERVALO≤ 30KV`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_RIGIDEZ_DIELÉTRICA_DE_ÓLEO_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR ÓLEO _ M3`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RIGIDEZ" },
    update: {},
    create: {
      codigoSap: "RIGIDEZ",
      descricao: `RIGIDEZ  MENOR QUE 25 KV`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_RIGIDEZ_DIELÉTRICA_DE_ÓLEO_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR ÓLEO _ M3`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PINTURA DETERIORADA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_TANQUE_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `TANQUE _RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `COM VAZAMENTO ÓLEO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_TANQUE_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `TANQUE _RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `DISPOSIT_ IÇAMENTO DEFICIENTE`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_TANQUE_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `TANQUE _ RECUPERAR DISPOSITIVO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `FIXAÇÃO TANQUE DEFICIENTE`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_TANQUE_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `TANQUE _FIXAR TANQUE ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_TANQUE_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `TANQUE _LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `OXIDAÇÃO F4/F5`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_TANQUE_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `TANQUE _RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_TANQUE_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `TANQUE _RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_TANQUE_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `TANQUE _RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `TEMPERATURA ANORMAL`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_TANQUE_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `TANQUE_VERIFICAR TERMÔMETROS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PARAFUSOS OXIDADOS F1/F2`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_TANQUE_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `TANQUE_RETIRAR OXIDAÇÃO/SUBSTITUIR PARAF`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PARAFUSOS OXIDADOS F3`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_TANQUE_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PARAFUSOS OXIDADOS F4/F5`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_TANQUE_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `VIBRAÇÃO ANORMAL`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_TANQUE_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `TANQUE_RETIRAR VIBRAÇÃO ANORMAL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `NÍVEL DE ÓLEO BAIXO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_TANQUE_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `TANQUE_COMPLETAR NÍVEL DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PONTO QUENTE DT > 12°C`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_TANQUE_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PONTO QUENTE 8°C<DT≤12°C`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_TANQUE_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PONTO QUENTE 3°C<DT≤8°C`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_TANQUE_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: " CÂMARA VÁCUO" },
    update: {},
    create: {
      codigoSap: " CÂMARA VÁCUO",
      descricao: `REPROVADO NO TESTE_AMPOLA DANIFICADA`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_TESTE_DE_CÂMARA_VÁCUO_RELIGADOR_id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `SUBSTITUIR A CÂMERA VÁCUO OU REALIZAR AJUESTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "REL" },
    update: {},
    create: {
      codigoSap: "REL",
      descricao: `FORA DE OPERAÇÃO`,
      grupoId: grupo_RELIGADOR.id,
      subgrupoId: subgrupo_REL_RELIGADOR.id,
      grupoDefeitoCodigoId: codigo_SERL_id,
      acaoRecomendada: `RETIRAR/ RECUPERAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT" },
    update: {},
    create: {
      codigoSap: "CC_BAT",
      descricao: `AUTONOMIA BAIXA (MENOR DE 30 MIN)`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_BATERIA_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `BATERIA_SUBSTITUIR BANCO`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT" },
    update: {},
    create: {
      codigoSap: "CC_BAT",
      descricao: `TENSÃO DE FLUTUAÇÃO RETIFIC_ALTA`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_BATERIA_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `AJUSTAR O RETIFICADOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT" },
    update: {},
    create: {
      codigoSap: "CC_BAT",
      descricao: `BATERIAS AUTOMOTIVAS`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_BATERIA_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `BATERIA _ SUBSTITUIR BATERIAS POR Pb AC`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT" },
    update: {},
    create: {
      codigoSap: "CC_BAT",
      descricao: `LONGARINA/CAVALETE OXIDAÇÃO F4/F5`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_ESTANTE_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `SUBSTITUIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT" },
    update: {},
    create: {
      codigoSap: "CC_BAT",
      descricao: `LONGARINA/CAVALETE OXIDAÇÃO F3`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_ESTANTE_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `RECUPERAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT" },
    update: {},
    create: {
      codigoSap: "CC_BAT",
      descricao: `LONGARINA/CAVALETE OXIDAÇÃO F1/F2`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_ESTANTE_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `RECUPERAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT" },
    update: {},
    create: {
      codigoSap: "CC_BAT",
      descricao: `ESTANTE LONGARINAS DEFORMADA`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_ESTANTE_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `RECUPERAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT" },
    update: {},
    create: {
      codigoSap: "CC_BAT",
      descricao: `ESTANTE ISOLADOR DOS PÉS_QUEBRADO`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_ESTANTE_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `SUBSTITUIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT" },
    update: {},
    create: {
      codigoSap: "CC_BAT",
      descricao: `PLACAS IDENT_ILEGÍVEL/INEXISTENTE`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_ESTANTE_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `SUBSTITUIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT" },
    update: {},
    create: {
      codigoSap: "CC_BAT",
      descricao: `NÍVEL DO ELETRÓLITO BAIXO`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_PLACAS_E_ELETRÓLITO_SISTEMA_CC___BATERIA_id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `BATERIA_COMPLETAR NÍVEL DE ÁGUA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT" },
    update: {},
    create: {
      codigoSap: "CC_BAT",
      descricao: `NÍVEL DO ELETRÓLITO CRÍTICO`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_PLACAS_E_ELETRÓLITO_SISTEMA_CC___BATERIA_id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `BATERIA_COMPLETAR NÍVEL DE ÁGUA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT" },
    update: {},
    create: {
      codigoSap: "CC_BAT",
      descricao: `PLACA_AUMENTO NA ESPESSURA`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_PLACAS_E_ELETRÓLITO_SISTEMA_CC___BATERIA_id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `SUBSTITUIR/AJUSTAR RETIFICADOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT" },
    update: {},
    create: {
      codigoSap: "CC_BAT",
      descricao: `ELETRÓLITO_EXCESSO GAS EM FLUTUAÇ`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_PLACAS_E_ELETRÓLITO_SISTEMA_CC___BATERIA_id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `AJUSTAR O RETIFICADOR/ CORREÇÃO DA DENSIDADE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT" },
    update: {},
    create: {
      codigoSap: "CC_BAT",
      descricao: `ELETRÓLITO_EXCESSO SENDIMENTOS`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_PLACAS_E_ELETRÓLITO_SISTEMA_CC___BATERIA_id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `SUBSTITUIR BANCO`,
      custeioOuInvestimento: `INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT_LIGAÇÕES" },
    update: {},
    create: {
      codigoSap: "CC_BAT_LIGAÇÕES",
      descricao: `INEXISTÊNCIA DE GRAXA`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_PÓLOS_E_LIGAÇÕES_SISTEMA_CC___BATERIA_id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `APLICAR / REAPLICAR GRAXA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT_LIGAÇÕES" },
    update: {},
    create: {
      codigoSap: "CC_BAT_LIGAÇÕES",
      descricao: `APLIC INCORRETA DE GRAXA`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_PÓLOS_E_LIGAÇÕES_SISTEMA_CC___BATERIA_id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `APLICAR / REAPLICAR GRAXA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT_LIGAÇÕES" },
    update: {},
    create: {
      codigoSap: "CC_BAT_LIGAÇÕES",
      descricao: `AQUECIMENTO ANORMAL`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_PÓLOS_E_LIGAÇÕES_SISTEMA_CC___BATERIA_id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `LIMPEZA/ REAPERTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT_LIGAÇÕES" },
    update: {},
    create: {
      codigoSap: "CC_BAT_LIGAÇÕES",
      descricao: `QUEDA ANORMAL DE TENSÃO`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_PÓLOS_E_LIGAÇÕES_SISTEMA_CC___BATERIA_id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `EQUALIZAR NO RETIFICADOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT_LIGAÇÕES" },
    update: {},
    create: {
      codigoSap: "CC_BAT_LIGAÇÕES",
      descricao: `CORROSÃO NO POLO`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_PÓLOS_E_LIGAÇÕES_SISTEMA_CC___BATERIA_id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `LIMPEZA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT_LIGAÇÕES" },
    update: {},
    create: {
      codigoSap: "CC_BAT_LIGAÇÕES",
      descricao: `VAZAMENTO PELA TAMPA`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_PÓLOS_E_LIGAÇÕES_SISTEMA_CC___BATERIA_id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `LIMPEZA/ RECUPERAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT_LIGAÇÕES" },
    update: {},
    create: {
      codigoSap: "CC_BAT_LIGAÇÕES",
      descricao: `CORROSÃO NAS CONEXÕES`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_PÓLOS_E_LIGAÇÕES_SISTEMA_CC___BATERIA_id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `RETIRAR CORROSÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT_LIGAÇÕES" },
    update: {},
    create: {
      codigoSap: "CC_BAT_LIGAÇÕES",
      descricao: `CONEXÕES FOLGADAS`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_PÓLOS_E_LIGAÇÕES_SISTEMA_CC___BATERIA_id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT_LIGAÇÕES" },
    update: {},
    create: {
      codigoSap: "CC_BAT_LIGAÇÕES",
      descricao: `CONEXÕES INADEQUADAS`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_PÓLOS_E_LIGAÇÕES_SISTEMA_CC___BATERIA_id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `SUBSTITUIR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT_RECIPIENTE" },
    update: {},
    create: {
      codigoSap: "CC_BAT_RECIPIENTE",
      descricao: `TAMPA _ TRICADA`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_RECIPIENTE_E_TAMPA_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `SUBSTITUIR CÉLULA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT" },
    update: {},
    create: {
      codigoSap: "CC_BAT",
      descricao: `POEIRA E CONDENSADOS EM EXCESSO`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_RECIPIENTE_E_TAMPA_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT" },
    update: {},
    create: {
      codigoSap: "CC_BAT",
      descricao: `VÁLV_ ANTI_EXPLOSÃO _ MUITO SUJA`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_RECIPIENTE_E_TAMPA_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT" },
    update: {},
    create: {
      codigoSap: "CC_BAT",
      descricao: `PLUGS DE MANUTENÇÃO_MAL COLOCADO`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_RECIPIENTE_E_TAMPA_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `AJUSTAR PLUG`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT" },
    update: {},
    create: {
      codigoSap: "CC_BAT",
      descricao: `RECIPIENTE_TRINCAS COM VAZAMENTO`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_RECIPIENTE_E_TAMPA_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `SUBSTITUIR CÉLULA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT" },
    update: {},
    create: {
      codigoSap: "CC_BAT",
      descricao: `RECIPIENTE_FISURAS SEM VAZAMENTO`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_RECIPIENTE_E_TAMPA_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `SUBSTITUIR CÉLULA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_BAT" },
    update: {},
    create: {
      codigoSap: "CC_BAT",
      descricao: `RECIPIENTE_C/VAZAMENTO NA JUNÇÃO`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_RECIPIENTE_E_TAMPA_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `LIMPAR / COLAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_SALA" },
    update: {},
    create: {
      codigoSap: "CC_SALA",
      descricao: `SOLUÇÃO DE BATERIAS NO PISO`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_SALA_DE_BATERIAS_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `LIMPAR O PISO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_SALA" },
    update: {},
    create: {
      codigoSap: "CC_SALA",
      descricao: `EXCESSO DE POEIRA/SUJEIRA`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_SALA_DE_BATERIAS_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `RETIRAR POEIRA/SUJEIRA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_SALA" },
    update: {},
    create: {
      codigoSap: "CC_SALA",
      descricao: `ILUMINAÇÃO INADEQUADA`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_SALA_DE_BATERIAS_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `PROVIDENCIAR REPOSIÇÃO DE LÂMPADAS/REPARO DO CIRCUITO DA SALA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_SALA" },
    update: {},
    create: {
      codigoSap: "CC_SALA",
      descricao: `VENTILAÇÃO INADEQUADA`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_SALA_DE_BATERIAS_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `PROVIDENCIAR REPARO/SUBSTITUIÇÃO DO AR CONDICIONADO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_SALA" },
    update: {},
    create: {
      codigoSap: "CC_SALA",
      descricao: `ACESSO INADEQUADO`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_SALA_DE_BATERIAS_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `READEQUAR O ACESSO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_SALA" },
    update: {},
    create: {
      codigoSap: "CC_SALA",
      descricao: `INEXISTÊNCIA DE PIA/ÁGUA`,
      grupoId: grupo_SISTEMA_CC___BATERIA.id,
      subgrupoId: subgrupo_SALA_DE_BATERIAS_SISTEMA_CC___BATERIA.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `SOLICITAR INSTALAÇÃO DE PIA/TORNEIRA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_NOBREAK" },
    update: {},
    create: {
      codigoSap: "CC_NOBREAK",
      descricao: `AUTONOMIA BAIXA (MENOR 15MIN)`,
      grupoId: grupo_SISTEMA_CC___NOBREAK.id,
      subgrupoId: subgrupo_NOBREAK_SISTEMA_CC___NOBREAK.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `SUBSTITUIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_NOBREAK" },
    update: {},
    create: {
      codigoSap: "CC_NOBREAK",
      descricao: `FONTE INTERNA QUEIMADA`,
      grupoId: grupo_SISTEMA_CC___NOBREAK.id,
      subgrupoId: subgrupo_NOBREAK_SISTEMA_CC___NOBREAK.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `SUBSTITUIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_RET" },
    update: {},
    create: {
      codigoSap: "CC_RET",
      descricao: `TENSÃO DE FLUTUAÇÃO RETIFIC_BAIXA`,
      grupoId: grupo_SISTEMA_CC___RETIFICADOR.id,
      subgrupoId: subgrupo_RETIFICADOR_SISTEMA_CC___RETIFICADOR.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `AJUSTAR O RETIFICADOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_RET" },
    update: {},
    create: {
      codigoSap: "CC_RET",
      descricao: `CARGA PROLONGADA _ SOBRECARGA`,
      grupoId: grupo_SISTEMA_CC___RETIFICADOR.id,
      subgrupoId: subgrupo_RETIFICADOR_SISTEMA_CC___RETIFICADOR.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `AJUSTAR O RETIFICADOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_RET" },
    update: {},
    create: {
      codigoSap: "CC_RET",
      descricao: `CARGA PROLONGADA_SOBREAQUECIMENTO`,
      grupoId: grupo_SISTEMA_CC___RETIFICADOR.id,
      subgrupoId: subgrupo_RETIFICADOR_SISTEMA_CC___RETIFICADOR.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `AJUSTAR O RETIFICADOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_RET" },
    update: {},
    create: {
      codigoSap: "CC_RET",
      descricao: `CARGA INSUF_TENSÃO CARGA BAIXA`,
      grupoId: grupo_SISTEMA_CC___RETIFICADOR.id,
      subgrupoId: subgrupo_RETIFICADOR_SISTEMA_CC___RETIFICADOR.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `AJUSTAR O RETIFICADOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_RET" },
    update: {},
    create: {
      codigoSap: "CC_RET",
      descricao: `CARGA INSUF_DESCARG TEMPO PROLONG`,
      grupoId: grupo_SISTEMA_CC___RETIFICADOR.id,
      subgrupoId: subgrupo_RETIFICADOR_SISTEMA_CC___RETIFICADOR.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `AJUSTAR O RETIFICADOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_RET" },
    update: {},
    create: {
      codigoSap: "CC_RET",
      descricao: `ACIONAM FLUTUAÇÃO MANUAL_DEFEITO`,
      grupoId: grupo_SISTEMA_CC___RETIFICADOR.id,
      subgrupoId: subgrupo_RETIFICADOR_SISTEMA_CC___RETIFICADOR.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `NORMALIZAR A OPERAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_RET" },
    update: {},
    create: {
      codigoSap: "CC_RET",
      descricao: `ACIONAM FLUTUAÇÃO AUTOMAT_DEFEITO`,
      grupoId: grupo_SISTEMA_CC___RETIFICADOR.id,
      subgrupoId: subgrupo_RETIFICADOR_SISTEMA_CC___RETIFICADOR.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `NORMALIZAR A OPERAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_RET" },
    update: {},
    create: {
      codigoSap: "CC_RET",
      descricao: `VENTILAÇÃO UR COM DEFEITO`,
      grupoId: grupo_SISTEMA_CC___RETIFICADOR.id,
      subgrupoId: subgrupo_RETIFICADOR_SISTEMA_CC___RETIFICADOR.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `NORMALIZAR A VENTILAÇÃO/SUBSTITUIR A UR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_RET" },
    update: {},
    create: {
      codigoSap: "CC_RET",
      descricao: `UR COM DEFEITO`,
      grupoId: grupo_SISTEMA_CC___RETIFICADOR.id,
      subgrupoId: subgrupo_RETIFICADOR_SISTEMA_CC___RETIFICADOR.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `SUBSTITUIR UR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_RET" },
    update: {},
    create: {
      codigoSap: "CC_RET",
      descricao: `VISOR QUEIMADO/ APAGADO`,
      grupoId: grupo_SISTEMA_CC___RETIFICADOR.id,
      subgrupoId: subgrupo_RETIFICADOR_SISTEMA_CC___RETIFICADOR.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `SUBSTITUIR/LIMPAR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_RET" },
    update: {},
    create: {
      codigoSap: "CC_RET",
      descricao: `TENSÃO DE C_A FORA DA FAIXA`,
      grupoId: grupo_SISTEMA_CC___RETIFICADOR.id,
      subgrupoId: subgrupo_RETIFICADOR_SISTEMA_CC___RETIFICADOR.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `CORRIGIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_RET" },
    update: {},
    create: {
      codigoSap: "CC_RET",
      descricao: `FUGA TERRA POSITIVO`,
      grupoId: grupo_SISTEMA_CC___RETIFICADOR.id,
      subgrupoId: subgrupo_RETIFICADOR_SISTEMA_CC___RETIFICADOR.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `CORRGIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_RET" },
    update: {},
    create: {
      codigoSap: "CC_RET",
      descricao: `FUGA TERRA NEGATIVO`,
      grupoId: grupo_SISTEMA_CC___RETIFICADOR.id,
      subgrupoId: subgrupo_RETIFICADOR_SISTEMA_CC___RETIFICADOR.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `CORRGIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_RET" },
    update: {},
    create: {
      codigoSap: "CC_RET",
      descricao: `MODULO FLAPACK_RETIFICAD_QUEIMADO`,
      grupoId: grupo_SISTEMA_CC___RETIFICADOR.id,
      subgrupoId: subgrupo_RETIFICADOR_SISTEMA_CC___RETIFICADOR.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `SUBSTITUIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_RET" },
    update: {},
    create: {
      codigoSap: "CC_RET",
      descricao: `MODULO FLAPACK_CONVERSOR_QUEIMADO`,
      grupoId: grupo_SISTEMA_CC___RETIFICADOR.id,
      subgrupoId: subgrupo_RETIFICADOR_SISTEMA_CC___RETIFICADOR.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `SUBSTITUIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_RET" },
    update: {},
    create: {
      codigoSap: "CC_RET",
      descricao: `MODULO SMARTPACK2_QUEIMADO`,
      grupoId: grupo_SISTEMA_CC___RETIFICADOR.id,
      subgrupoId: subgrupo_RETIFICADOR_SISTEMA_CC___RETIFICADOR.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `SUBSTITUIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CC_RET" },
    update: {},
    create: {
      codigoSap: "CC_RET",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_SISTEMA_CC___RETIFICADOR.id,
      subgrupoId: subgrupo_RETIFICADOR_SISTEMA_CC___RETIFICADOR.id,
      grupoDefeitoCodigoId: codigo_SECC_id,
      acaoRecomendada: `LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `CONEXÕES FOLGADAS`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_ATERRAMENTO_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `ATERRAMENTO_REAPERTAR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `CABO DE ATERRAMENTO INADEQUADO`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_ATERRAMENTO_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `ATERRAMENTO_SUBSTITUIR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `PARTIDO`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_ATERRAMENTO_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `SUBSTITUIR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `INEXISTENTE`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_ATERRAMENTO_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `INSTALAR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `DESCONECTADO DA CARCAÇA`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_ATERRAMENTO_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CONECTAR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_ATERRAMENTO_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_ATERRAMENTO_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `SUBSTITUIR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `OXIDAÇÃO F4/F5`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_ATERRAMENTO_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `SUBSTITUIR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `TRELIÇAS OXIDADAS F3`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `BASE DE FIXAÇÃO _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `TRELIÇAS OXIDADAS F4/F5`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `TRELIÇAS OXIDADAS F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `PARAFUSOS OXIDADOS F3`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `BASE DE FIXAÇÃO _SUBSTITUIR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `PARAFUSOS OXIDADOS F4/F5`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `PARAFUSOS OXIDADOS F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `AUSÊNCIA PARAFUSOS DE FIXAÇÃO`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `BASE DE FIXAÇÃO _REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `C/ NINHO DE PÁSSARO`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `RETIRAT NINHO DE PÁSSARO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `BASE DESNIVELADA`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `BASE DE FIXAÇÃO _NIVELAR BASE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA MORTA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `OXIDAÇÃO PARTE METÁLICA F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `BUCHAS _RETIRAR CORROSÃO/OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `OXIDAÇÃO PARTE METÁLICA F3`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `BUCHAS _RETIRAR CORROSÃO/OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `OXIDAÇÃO PARTE METÁLICA F4/F5`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `BUCHAS _RETIRAR CORROSÃO/OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `C/VAZAMENTO DE FUGA CORRENTE`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `BUCHAS  _SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `MUITO POLUÍDAS`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `BUCHAS_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA C/TRINCAS/RACHADURAS`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA CHAMUSCADA`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA COM SAIAS QUEBRADAS`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `INFILTRAÇÃO PELAS BUCHAS`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `BUCHAS_CORRIGIR INFILTRAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `BUCHAS_RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABEÇOTE" },
    update: {},
    create: {
      codigoSap: "CABEÇOTE",
      descricao: `PINTURA DANIFICADA`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CABEÇOTE_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CABEÇOTE_RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABEÇOTE" },
    update: {},
    create: {
      codigoSap: "CABEÇOTE",
      descricao: `POLUIÇÃO`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CABEÇOTE_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CABEÇOTE_LIMPAR CABEÇOTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABEÇOTE" },
    update: {},
    create: {
      codigoSap: "CABEÇOTE",
      descricao: `NÍVEL ÓLEO INADEQUADO`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CABEÇOTE_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CABEÇOTE_COMPLETAR NÍVEL DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABEÇOTE" },
    update: {},
    create: {
      codigoSap: "CABEÇOTE",
      descricao: `VAZAMENTO ÓLEO CRÍTICO`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CABEÇOTE_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CABEÇOTE_RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABEÇOTE" },
    update: {},
    create: {
      codigoSap: "CABEÇOTE",
      descricao: `CORROSÃO/OXIDAÇÃO PART METÁL`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CABEÇOTE_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CABEÇOTE_RETIRAR CORROSÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABEÇOTE" },
    update: {},
    create: {
      codigoSap: "CABEÇOTE",
      descricao: `NÍVEL DE ÓLEO CRÍTICO`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CABEÇOTE_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CABEÇOTE_COMPLETAR NÍVEL ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABEÇOTE" },
    update: {},
    create: {
      codigoSap: "CABEÇOTE",
      descricao: `MUITO POLUÍDOS`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CABEÇOTE_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CABEÇOTE_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABEÇOTE" },
    update: {},
    create: {
      codigoSap: "CABEÇOTE",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CABEÇOTE_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CABEÇOTE_CORRIGIR VAZAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXAS CONEX" },
    update: {},
    create: {
      codigoSap: "CAIXAS CONEX",
      descricao: `ELETRODUTOS IMPRÓPRIOS`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CAIXAS CONEXÕES_SUBSTITUIR ELETRODUTOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXAS CONEX" },
    update: {},
    create: {
      codigoSap: "CAIXAS CONEX",
      descricao: `ENTRADA UMIDADE`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CAIXAS CONEXÕES_VEDAR CAIXA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXAS CONEX" },
    update: {},
    create: {
      codigoSap: "CAIXAS CONEX",
      descricao: `RÉGUAS TERM_ OXIDADA`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CAIXAS CONEXÕES_RETIRAR OXIADAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXAS CONEX" },
    update: {},
    create: {
      codigoSap: "CAIXAS CONEX",
      descricao: `FIO SOLTO/CON_ FOLGADA`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CAIXAS CONEXÕES_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXAS CONEX" },
    update: {},
    create: {
      codigoSap: "CAIXAS CONEX",
      descricao: `VEDAÇÃO INSUFICIENTE`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CAIXAS CONEXÕES_VEDAR CAIXA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXAS CONEX" },
    update: {},
    create: {
      codigoSap: "CAIXAS CONEX",
      descricao: `FIAÇÃO ISOLAÇ DANIFICADO`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CAIXAS CONEXÕES_SUBSTITUIR FIAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXAS CONEX" },
    update: {},
    create: {
      codigoSap: "CAIXAS CONEX",
      descricao: `NÃO EXISTE ATERRAMENTO`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CAIXAS CONEXÕES_REPOR ATERRAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXAS CONEX" },
    update: {},
    create: {
      codigoSap: "CAIXAS CONEX",
      descricao: `FIXAÇÃO INADEQUADA`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CAIXAS CONEXÕES_FIXAR ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXAS CONEX" },
    update: {},
    create: {
      codigoSap: "CAIXAS CONEX",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXAS CONEX" },
    update: {},
    create: {
      codigoSap: "CAIXAS CONEX",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXAS CONEX" },
    update: {},
    create: {
      codigoSap: "CAIXAS CONEX",
      descricao: `OXIDAÇÃO F4/F5`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXAS CONEX" },
    update: {},
    create: {
      codigoSap: "CAIXAS CONEX",
      descricao: `RESIST_ AQUEC_ INOPER_`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `SUBSTITUIR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `TIPO PINO/CABO`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CONEXÕES DE AT_SUBSTITUIR POR PINO/CHAPA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `FALTANDO PARAFUSOS`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CONEXÕES DE AT _REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONECTORES INADEQUADOS`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CONEXÕES DE AT _SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `MUITO POLUÍDOS`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CONEXÕES AT_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÕES FOLGADAS`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CONEXÕES AT_REAPERTAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `EXISTÊNC DE CENTELHAMENTO`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CONEXÕES AT_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 30°C<DT≤55°C`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE DT > 55°C`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 25°C<DT≤30°C`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `RUÍDOS VIBRAÇÕES ANORMAIS`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR RUÍDOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `OXIDADA`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `ILEGÍVEL`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `SUBSTITUIR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `FIXAÇÃO INADEQUADA`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `FIXAR ADEQUADAMEN`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `INEXISTENTE`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `INSTALAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `CÓDIGO DE OPER_ ERRADO`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_CORRENTE_id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `INSTALAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PINTURA DETERIORADA`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `TANQUE _RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `COM VAZAMENTO ÓLEO`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `TANQUE _RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `COM VAZAMENTO SF6`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `TANQUE _RETIRAR VAZAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `DISPOSIT_ IÇAMENTO DEFICIENTE`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `TANQUE _ RECUPERAR DISPOSITIVO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `FIXAÇÃO TANQUE DEFICIENTE`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `TANQUE _FIXAR TANQUE ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `TANQUE _LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `OXIDAÇÃO F4/F5`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `TANQUE _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `TANQUE _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `TANQUE _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `TEMPERATURA ANORMAL`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `TANQUE_VERIFICAR TERMÔMETROS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PARAFUSOS OXIDADOS F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO/SUBSTITUIR PARAF`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PARAFUSOS OXIDADOS F3`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO/SUBSTITUIR PARAF`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PARAFUSOS OXIDADOS F4/F5`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO/SUBSTITUIR PARAF`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `VIBRAÇÃO ANORMAL`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `RETIRAR VIBRAÇÃO ANORMAL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `NÍVEL DE ÓLEO BAIXO`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `TANQUE_COMPLETAR NÍVEL DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PONTO QUENTE DT > 12°C`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PONTO QUENTE 8°C<DT≤12°C`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PONTO QUENTE 3°C<DT≤8°C`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TC" },
    update: {},
    create: {
      codigoSap: "TC",
      descricao: `FORA DE OPERAÇÃO`,
      grupoId: grupo_TRANSFORMADOR_DE_CORRENTE.id,
      subgrupoId: subgrupo_TC_TRANSFORMADOR_DE_CORRENTE.id,
      grupoDefeitoCodigoId: codigo_SETC_id,
      acaoRecomendada: `RETIRAR/ RECUPERAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `NÍVEL ÓLEO ABAIXO NORMAL`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_BUCHAS_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `BUCHAS_COMPLETAR ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_BUCHAS_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `BUCHAS_RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA C/TRINCAS CRÍTICAS`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_BUCHAS_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA C/TRINCAS MODERADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_BUCHAS_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA MUITO POLUIDA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_BUCHAS_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `BUCHAS_LIMPARA BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA POUCO POLUIDA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_BUCHAS_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `BUCHAS_LIMPARA BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `OXIDAÇÃO PARTE METÁLICA F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_BUCHAS_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `BUCHAS _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `OXIDAÇÃO PARTE METÁLICA F3`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_BUCHAS_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `BUCHAS _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `OXIDAÇÃO PARTE METÁLICA F4/F5`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_BUCHAS_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `BUCHAS _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `NÍVEL DE ÓLEO CRÍTICO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_BUCHAS_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `BUCHAS_COMPLETAR ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA CHAMUSCADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_BUCHAS_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `VAZAMENTO ÓLEO PELAS GAXETAS`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_BUCHAS_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `BUCHAS_CORRIGIR VAZAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `VAZAM_ ÓLEO PARAFUSO DRENAGEM`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_BUCHAS_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `BUCHAS_CORRIGIR VAZAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `AQUECIMENTO INTERNO ANORMAL`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_BUCHAS_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `BUCHAS_REGULARIZAR TEMPERATURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `INEXISTENTE`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_BUCHAS_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `INSTALAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PONTO QUENTE DT > 12°C`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_BUCHAS_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PONTO QUENTE 8°C<DT≤12°C`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_BUCHAS_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PONTO QUENTE 3°C<DT≤8°C`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_BUCHAS_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PORTA EMPENADA S/TRAVA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ARM_ RÉGUAS _DESEMPENAR OU COL TRANCA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PINTURA DETERIORADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `OXIDAÇÃO F5`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `ILUM_ INT_ NÃO FUNCIONA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ARM_ RÉGUAS _SUBSTITUIR LÂMPADAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `RESIST_ AQUEC_ INOPER_`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ARM_ RÉGUAS _DESATIVAR RESISTÊNCIA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `FALTA ACABAMENTO FIAÇÃO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `VEDAR ELETRODUTOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `ENTRADA OMI POR FIAÇÃO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `VEDAÇÃO DA FIAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `TERMINAIS DETERIORADOS`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ARM_ RÉGUAS _SUBSTITUIR TERMINAIS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `ENTRADA DE UMIDADE`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `VEDAR ELETRODUTOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `TERMINAIS OXIDAÇÃO F4/F5`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `SUBSTITUIR RÉGUAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `TERMINAIS OXIDAÇÃO F3`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `SUBSTITUIR RÉGUAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `TERMINAIS OXIDAÇÃO F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `SUBSTITUIR RÉGUAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `FIO SOLTO/CON_ FOLGADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ARM_ RÉGUAS _CONECTAR/APERTAR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `VEDAÇÃO INSUFICIENTE`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ARM_ RÉGUAS _VEDAR ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `FIAÇÃO ISOLAÇ DANIFICADO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ARM_ RÉGUAS _SUBSTITUIR FIAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `FIXAÇÃO INADEQUADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `FIXAR RÉGUA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `DOBRADIÇA TAMPA QUEBRADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ARM_ RÉGUAS _SUBSTITUIR DOBRADIÇAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `ARMARIO SEM TAMPA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ARM_ RÉGUAS_COLOCAR TAMPA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `MUITO POLUÍDO_INTERNA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `MUITO POLUÍDO_EXTERNA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `CABOS S/ ANILHAS/DANIFIC`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ARM_ RÉGUAS_ANILHAR CABOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `ELETRODUTOS IMPRÓPRIOS`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `SUBSTITUIR ELETRODUTOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `EXIST FUSÍVEL QUEIMADO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ARM_ RÉGUAS_SUBSTITUIR FUSÍVEIS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `ATERRAMENTO INEXISTENTE`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `INSTALAR ATERRAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `ATERRAMENTO PARTIDO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `INSTALAR ATERRAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `FIAÇÃO COMPROMETIDA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ARM_ RÉGUAS_SUBSTITUIR FIAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `CONTATOR INEXISTENTE`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `INSTALAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `TERMINAIS COMPROMETIDAS`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ARM_ RÉGUAS_SUBSTIUTIR RÉGUAS COMPROMETI`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PONTO QUENTE DT > 30°C`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PONTO QUENTE 15°C<DT≤30C`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CX COM" },
    update: {},
    create: {
      codigoSap: "CX COM",
      descricao: `PONTO QUENTE 4°C<DT≤15°C`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CAIXA_DE_COMANDO_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT C/C" },
    update: {},
    create: {
      codigoSap: "COMUT C/C",
      descricao: `MANIVELA QUEBRADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `COMUTADOR SEM CARGA_SUBSTITUIR MANIVELA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT C/C" },
    update: {},
    create: {
      codigoSap: "COMUT C/C",
      descricao: `VEDAÇÃO INSUFICIENTE`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `COMUTADOR SEM CARGA_VEDAR MECANISMO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT C/C" },
    update: {},
    create: {
      codigoSap: "COMUT C/C",
      descricao: `VISOR DE POSIÇÃO QUEBRADO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `COMUTADOR SEM CARGA_SUBSTITUIR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT C/C" },
    update: {},
    create: {
      codigoSap: "COMUT C/C",
      descricao: `MOTOR DANIFICADO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `SUBSTITUIR MOTOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT C/C" },
    update: {},
    create: {
      codigoSap: "COMUT C/C",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT C/C" },
    update: {},
    create: {
      codigoSap: "COMUT C/C",
      descricao: `FILTRO C/VAZAMENTO ÓLEO `,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT C/C" },
    update: {},
    create: {
      codigoSap: "COMUT C/C",
      descricao: `MOTOR DO FILTRO DANIFICADO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `SUBSTITUIR MOTOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT C/C" },
    update: {},
    create: {
      codigoSap: "COMUT C/C",
      descricao: `DJ DO MOTOR C/DEFEITO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_COMUTADOR_COM_CARGA___LTC_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `SUBSTITUIR MOTOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT S/C" },
    update: {},
    create: {
      codigoSap: "COMUT S/C",
      descricao: `SEM TRAVAMENTO TAP`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_COMUTADOR_SEM_CARGA_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `COMUTADOR COM CARGA _COLOCAR CADEADO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT S/C" },
    update: {},
    create: {
      codigoSap: "COMUT S/C",
      descricao: `MANIVELA OXIDAÇÃO F4/F5`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_COMUTADOR_SEM_CARGA_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT S/C" },
    update: {},
    create: {
      codigoSap: "COMUT S/C",
      descricao: `MANIVELA OXIDAÇÃO F3`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_COMUTADOR_SEM_CARGA_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT S/C" },
    update: {},
    create: {
      codigoSap: "COMUT S/C",
      descricao: `MANIVELA OXIDAÇÃO F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_COMUTADOR_SEM_CARGA_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT S/C" },
    update: {},
    create: {
      codigoSap: "COMUT S/C",
      descricao: `MECANISMO TRAVADO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_COMUTADOR_SEM_CARGA_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `DESTRAVA MECANISMO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT S/C" },
    update: {},
    create: {
      codigoSap: "COMUT S/C",
      descricao: `MANIVELA QUEBRADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_COMUTADOR_SEM_CARGA_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `COMUTADOR COM CARGA_SUBSTITUIR MANIVELA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT S/C" },
    update: {},
    create: {
      codigoSap: "COMUT S/C",
      descricao: `UMIDADE NO MECANISMO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_COMUTADOR_SEM_CARGA_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `COMUTADOR COM CARGA_VEDAR MECANISMO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "COMUT S/C" },
    update: {},
    create: {
      codigoSap: "COMUT S/C",
      descricao: `VISOR DE POSIÇÃO QUEBRADO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_COMUTADOR_SEM_CARGA_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `COMUTADOR COM CARGA_SUBSTITUIR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONECTORES INADEQUADOS`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `CONEXÕES AT_SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 30°C<DT≤55°C`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE DT > 55°C`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 25°C<DT≤30°C`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `TIPO PINO/CABO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `CONEXÃO AT_SUBSTIUIR POR PINO/CHAPA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `FALTANDO PARAFUSOS`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `CONEXÃO AT_REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `MUITO POLUÍDOS`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `CONEXÃO AT_LIMPAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÕES FOLGADAS`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `CONEXÃO AT_REAPERTAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `EXISTÊNC DE CENTELHAMENTO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `CONEXÃO AT_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `RUÍDOS VIBRAÇÕES ANORMAIS`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `CONEXÃO AT_RETIRAR RUÍDOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `FALTA PROTETOR BUCHA NO SEC_`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `CONEXÃO AT_COLOCAR CONE DE PROTEÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `VIBRAÇÃO ANORMAL`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ELETRO VENTILADORES_RETIRAR VIBRAÇÃO ANO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `RUÍDOS ANORMAIS`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ELETRO VENTILADORES_RETIRAR RUÍDO ANORMA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `UND_ FORA DE OPERAÇÃO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ELETRO VENTILADORES_SUBSTITUIR UNIDADE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `PRÓPRIA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `PINTURA DANIFICADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ELETRO VENTILADORES_RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `POLUIÇÃO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ELETRO VENTILADORES_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `MUITO POLUÍDOS`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ELETRO VENTILADORES_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `OXIDAÇÃO F5`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ACOMPANHAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `NÃO FUNCUNCIONA REMOTA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ELETRO VENTILADORES_COR FUNC REMOTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `NÃO FUNC_ POS_ LOCAL`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ELETRO VENTILADORES_COR FUNC LOCAL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `CONTATOR AVARIADO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `SUBSTITUIR CONTATOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `RELÉ FALTA FASE_DANIFIC`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `SUBSTITUIR RELÉ`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `INEXISTENTE`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `INSTALAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `CHAVE SELETORA C/DEFEITO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `SUBSTITUIR CHAVE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `PONTO QUENTE DT > 30°C`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `PONTO QUENTE 15°C<DT≤30°C`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VENTILADOR" },
    update: {},
    create: {
      codigoSap: "VENTILADOR",
      descricao: `PONTO QUENTE 4°C<DT≤15°C`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_ELETRO_VENTILADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `OXIDADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `ILEGÍVEL`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `PLACA IDENTIFICAÇÃO_LIMPAR/SUBSTITUIR PL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `INEXISTENTE`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `PLACA IDENTIFICAÇÃO_INSTALAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `FIXAÇÃO INADEQUADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `PLACA IDENTIFICAÇÃO _ FIXAR ADEQUADAM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `CÓDIGO DE OPER_ ERRADO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `PLACA IDENTIFICAÇÃO _SUBSTITUIR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `VÁLVULAS COM DEFEITO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RADIADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RADIADORES_RECUPERAR VÁLVULAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `VÁLVULAS POSIÇÃO FECHADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RADIADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RADIADORES_ABRIR VÁLVULAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `VÁLVULAS QUEBRADAS_ABERTA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RADIADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RADIADORES_SUBSTITUIR VÁLVULAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `VÁLVULAS QUEBRADAS_FECHADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RADIADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RADIADORES_SUBSTITUIR VÁLVULAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `DRENO COM DEFEITO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RADIADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `CONSERTAR DRENO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `VAZAM_ ÓLEO NAS JUNTAS`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RADIADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RADIADORES_CORRIGIR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `VAZAMENTO ÓLEO_RADIADOR`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RADIADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RADIADORES_CORRIGIR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `VAZAMENTO ÓLEO_VÁLVULA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RADIADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RADIADORES_CORRIGIR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RADIADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RADIADORES_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `PINTURA DANIFICADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RADIADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RADIADORES_RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `OXIDAÇÃO F5`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RADIADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RADIADORES_RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RADIADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RADIADORES_RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RADIADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RADIADORES_RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `PONTO QUENTE DT > 15°C`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RADIADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `PONTO QUENTE 10°C<DT≤15°C`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RADIADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RADIADOR" },
    update: {},
    create: {
      codigoSap: "RADIADOR",
      descricao: `PONTO QUENTE 3°C<DT≤10°C`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RADIADORES_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ FLUXO" },
    update: {},
    create: {
      codigoSap: "RELÉ FLUXO",
      descricao: `NÍVEL ÓLEO ABAIXO NORMAL`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RELÉ_DE_FLUXO_DE_ÓLEO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RELÉ FLUXO ÓLEO_COMPLETAR ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ FLUXO" },
    update: {},
    create: {
      codigoSap: "RELÉ FLUXO",
      descricao: `VISOR TRINCADO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RELÉ_DE_FLUXO_DE_ÓLEO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RELÉ FLUXO ÓLEO_SUBSTITUIR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ FLUXO" },
    update: {},
    create: {
      codigoSap: "RELÉ FLUXO",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RELÉ_DE_FLUXO_DE_ÓLEO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RELÉ FLUXO ÓLEO_RETIRAR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ FLUXO" },
    update: {},
    create: {
      codigoSap: "RELÉ FLUXO",
      descricao: `VAZAMENTO ÓLEO CRÍTICO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RELÉ_DE_FLUXO_DE_ÓLEO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RELÉ FLUXO ÓLEO_CORRIGIR VAZAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ FLUXO" },
    update: {},
    create: {
      codigoSap: "RELÉ FLUXO",
      descricao: `VISOR SUJO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RELÉ_DE_FLUXO_DE_ÓLEO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RELÉ FLUXO ÓLEO_LIMPAR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ FLUXO" },
    update: {},
    create: {
      codigoSap: "RELÉ FLUXO",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RELÉ_DE_FLUXO_DE_ÓLEO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RELÉ FLUXO ÓLEO_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ GÁS" },
    update: {},
    create: {
      codigoSap: "RELÉ GÁS",
      descricao: `NÍVEL ÓLEO ABAIXO NORMAL`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RELÉ_DE_GÁS_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RELÉ GÁS_EFETUARA SANGRIA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ GÁS" },
    update: {},
    create: {
      codigoSap: "RELÉ GÁS",
      descricao: `VISOR TRINCADO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RELÉ_DE_GÁS_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RELÉ GÁS_SUBSTITUIR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ GÁS" },
    update: {},
    create: {
      codigoSap: "RELÉ GÁS",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RELÉ_DE_GÁS_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RELÉ GÁS_RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ GÁS" },
    update: {},
    create: {
      codigoSap: "RELÉ GÁS",
      descricao: `VAZAMENTO ÓLEO CRÍTICO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RELÉ_DE_GÁS_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RELÉ GÁS_CORRIGIR VAZAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ GÁS" },
    update: {},
    create: {
      codigoSap: "RELÉ GÁS",
      descricao: `VISOR SUJO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RELÉ_DE_GÁS_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RELÉ GÁS_LIMPAR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "RELÉ GÁS" },
    update: {},
    create: {
      codigoSap: "RELÉ GÁS",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_RELÉ_DE_GÁS_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RELÉ GÁS_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "SECADOR GEL" },
    update: {},
    create: {
      codigoSap: "SECADOR GEL",
      descricao: `SILICA_GEL SATURADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_SECADOR_DE_AR_À_SILICA_GEL_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `SECADOR GEL_SUBSTITUIR SÍLICA GEL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "SECADOR GEL" },
    update: {},
    create: {
      codigoSap: "SECADOR GEL",
      descricao: `NÃO EXISTE ÓLEO NO COPO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_SECADOR_DE_AR_À_SILICA_GEL_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `SECADOR GEL_REPOR ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "SECADOR GEL" },
    update: {},
    create: {
      codigoSap: "SECADOR GEL",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_SECADOR_DE_AR_À_SILICA_GEL_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `SECADOR GEL_RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "SECADOR GEL" },
    update: {},
    create: {
      codigoSap: "SECADOR GEL",
      descricao: `COPO DE VIDRO TRINCADO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_SECADOR_DE_AR_À_SILICA_GEL_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `SECADOR GEL_SUBSTITUIR COPO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "SECADOR GEL" },
    update: {},
    create: {
      codigoSap: "SECADOR GEL",
      descricao: `VISOR QUEBRADO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_SECADOR_DE_AR_À_SILICA_GEL_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `SECADOR GEL_SUBSTITUIR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "SECADOR GEL" },
    update: {},
    create: {
      codigoSap: "SECADOR GEL",
      descricao: `PINTURA DETERIORADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_SECADOR_DE_AR_À_SILICA_GEL_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `SECADOR GEL_PINTAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "SECADOR GEL" },
    update: {},
    create: {
      codigoSap: "SECADOR GEL",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_SECADOR_DE_AR_À_SILICA_GEL_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `SECADOR GEL_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP COMUT" },
    update: {},
    create: {
      codigoSap: "TQ EXP COMUT",
      descricao: `VAZAMENTO ÓLEO CRÍTICO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_CORRIGIR NÍVEL DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP COMUT" },
    update: {},
    create: {
      codigoSap: "TQ EXP COMUT",
      descricao: `NÍVEL ÓLEO ABAIXO NORM`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_RETIRAR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP COMUT" },
    update: {},
    create: {
      codigoSap: "TQ EXP COMUT",
      descricao: `IND_ NÍVEL OLÉO Ñ FUNC`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_REC INDICADOR NÍVEL ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP COMUT" },
    update: {},
    create: {
      codigoSap: "TQ EXP COMUT",
      descricao: `VISOR SUJO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_LIMPAR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP COMUT" },
    update: {},
    create: {
      codigoSap: "TQ EXP COMUT",
      descricao: `VISOR QUEBRADO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_SUBSTITUIR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP COMUT" },
    update: {},
    create: {
      codigoSap: "TQ EXP COMUT",
      descricao: `PINTURA DANIFICADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP COMUT" },
    update: {},
    create: {
      codigoSap: "TQ EXP COMUT",
      descricao: `OXIDAÇÃO F5`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP COMUT" },
    update: {},
    create: {
      codigoSap: "TQ EXP COMUT",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP COMUT" },
    update: {},
    create: {
      codigoSap: "TQ EXP COMUT",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP COMUT" },
    update: {},
    create: {
      codigoSap: "TQ EXP COMUT",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_COMUTADOR_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP TF" },
    update: {},
    create: {
      codigoSap: "TQ EXP TF",
      descricao: `VAZAMENTO ÓLEO CRÍTICO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_T_F_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_CORRIGIR NÍVEL DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP TF" },
    update: {},
    create: {
      codigoSap: "TQ EXP TF",
      descricao: `NÍVEL ÓLEO ABAIXO NORMAL`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_T_F_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_RETIRAR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP TF" },
    update: {},
    create: {
      codigoSap: "TQ EXP TF",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_T_F_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_CORRIGIR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP TF" },
    update: {},
    create: {
      codigoSap: "TQ EXP TF",
      descricao: `IND_ NÍVEL OLÉO Ñ FUNC`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_T_F_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_REC INDICADOR NÍVEL ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP TF" },
    update: {},
    create: {
      codigoSap: "TQ EXP TF",
      descricao: `VISOR SUJO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_T_F_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_LIMPAR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP TF" },
    update: {},
    create: {
      codigoSap: "TQ EXP TF",
      descricao: `VISOR QUEBRADO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_T_F_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_SUBSTITUIR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP TF" },
    update: {},
    create: {
      codigoSap: "TQ EXP TF",
      descricao: `PINTURA DANIFICADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_T_F_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP TF" },
    update: {},
    create: {
      codigoSap: "TQ EXP TF",
      descricao: `OXIDAÇÃO F5`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_T_F_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP TF" },
    update: {},
    create: {
      codigoSap: "TQ EXP TF",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_T_F_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP TF" },
    update: {},
    create: {
      codigoSap: "TQ EXP TF",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_T_F_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_RETIRAR FERRUGEM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ EXP TF" },
    update: {},
    create: {
      codigoSap: "TQ EXP TF",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_DE_EXPANSÃO_T_F_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE EXPANSÃO_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `VAZAM_ ÓLEO PONTOS SOLDA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE PRINCIPAL_RETIRAR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `VAZAM_ ÓLEO NAS JUNTAS`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE PRINCIPAL_RETIRAR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `VAZAM ÓLEO PARAF CARCAÇA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE PRINCIPAL_RETIRAR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `VAZAM_ ÓLEO REGISTROS`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE PRINCIPAL_RETIRAR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `PINTURA DETERIORADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE PRINCIPAL_RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE PRINCIPAL_LIMPAR TANQUE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `OXIDAÇÃO F5`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE PRINCIPAL_RETIRAR CORROSÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE PRINCIPAL_RETIRAR CORROSÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ACOMPANHAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `BOLSA DE BORRACHA FURADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `SUBSTITUIR BOLSA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `VÁLV ALÍVIO PRESSÃO DANIFIC`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `COLOCAR TRAVAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `TEMPERATURA ANORMAL`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE PRINCIPAL_VERICAR TERMÔMETRO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `VIBRAÇÃO ANORMAL`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE PRINCIPAL_VERIFICAR RUÍDO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `RUÍDOS ANORMAIS`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE PRINCIPAL_VERIFICAR RUÍDO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `ATERR_ FOLGADO OU INEXIST`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE PRINCIPAL_APERTAR ATERRAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `ATERRAMENTO EM DOIS PONTOS`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `DESCONECTAR UM ATERRAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `TANQUES FORA TRILHOS`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE PRINCIPAL_RECOLOCAR NO TRILHO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `APOIADO SOBRE BASE MADEIRA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE PRINCIPAL_CONSTRUIR BASE CONCRETO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `C/ NINHO DE PÁSSARO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAT NINHO DE PÁSSARO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TQ PRINC" },
    update: {},
    create: {
      codigoSap: "TQ PRINC",
      descricao: `RODAS LOCOMOÇÃO SEM TRAVA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TANQUE_PRINCIPAL_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TANQUE PRINCIPAL_COLOCAR TRAVAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TC BUCHA" },
    update: {},
    create: {
      codigoSap: "TC BUCHA",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TC_DE_BUCHA_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `BUCHAS_RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TC BUCHA" },
    update: {},
    create: {
      codigoSap: "TC BUCHA",
      descricao: `CAIXA MUITO POLUIDA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TC_DE_BUCHA_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TC BUCHA" },
    update: {},
    create: {
      codigoSap: "TC BUCHA",
      descricao: `CAIXA POUCO POLUIDA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TC_DE_BUCHA_TRANSFORMADOR_DE_FORCA.id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ENROLAM" },
    update: {},
    create: {
      codigoSap: "TERMÔM ENROLAM",
      descricao: `VISOR QUEBRADO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ENROLAMENTO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TERMÔMETRO ENROLAMENTO_SUBSTITUIR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ENROLAM" },
    update: {},
    create: {
      codigoSap: "TERMÔM ENROLAM",
      descricao: `VISOR POLUÍDO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ENROLAMENTO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TERMÔMETRO ENROLAMENTO_LIMPAR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ENROLAM" },
    update: {},
    create: {
      codigoSap: "TERMÔM ENROLAM",
      descricao: `PONTEIROS QUEBRADOS`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ENROLAMENTO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TERMÔMETRO ENROLAMENTO_SUBSTITUIR TERMOM`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ENROLAM" },
    update: {},
    create: {
      codigoSap: "TERMÔM ENROLAM",
      descricao: `FORA DE OPERAÇÃO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ENROLAMENTO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TERMÔMETRO ENROLAMENTO_RECUPERAR TERMOME`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ENROLAM" },
    update: {},
    create: {
      codigoSap: "TERMÔM ENROLAM",
      descricao: `OPERAÇÃO C/RESTRIÇÃO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ENROLAMENTO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TERMÔMETRO ENROLAMENTO_RECUPE TERMÔMETRO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ENROLAM" },
    update: {},
    create: {
      codigoSap: "TERMÔM ENROLAM",
      descricao: `90°C ≤T< 105°C`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ENROLAMENTO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `REDUZIR TEMPERATURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ENROLAM" },
    update: {},
    create: {
      codigoSap: "TERMÔM ENROLAM",
      descricao: `105°C <T`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ENROLAMENTO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `REDUZIR TEMPERATURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ÓLEO" },
    update: {},
    create: {
      codigoSap: "TERMÔM ÓLEO",
      descricao: `VISOR QUEBRADO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ÓLEO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TERMÔMETRO ÓLEO_SUBSTITUIR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ÓLEO" },
    update: {},
    create: {
      codigoSap: "TERMÔM ÓLEO",
      descricao: `VISOR POLUÍDO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ÓLEO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TERMÔMETRO ÓLEO_LIMPAR VISOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ÓLEO" },
    update: {},
    create: {
      codigoSap: "TERMÔM ÓLEO",
      descricao: `PONTEIROS QUEBRADOS`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ÓLEO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TERMÔMETRO ÓLEO_SUBSTITUIR TERMÔMETRO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ÓLEO" },
    update: {},
    create: {
      codigoSap: "TERMÔM ÓLEO",
      descricao: `FORA DE OPERAÇÃO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ÓLEO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TERMÔMETRO ÓLEO_RECUPERAR TERMÔMETRO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ÓLEO" },
    update: {},
    create: {
      codigoSap: "TERMÔM ÓLEO",
      descricao: `OPERAÇÃO C/RESTRIÇÃO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ÓLEO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `TERMÔMETRO ÓLEO_RECUPERAR TERMÔMETRO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ÓLEO" },
    update: {},
    create: {
      codigoSap: "TERMÔM ÓLEO",
      descricao: `80°C ≤T< 85°C`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ÓLEO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `REDUZIR TEMPERATURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TERMÔM ÓLEO" },
    update: {},
    create: {
      codigoSap: "TERMÔM ÓLEO",
      descricao: `85°C <T`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_TERMÔMETRO_DE_ÓLEO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `REDUZIR TEMPERATURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VÁLV PRESSÃO" },
    update: {},
    create: {
      codigoSap: "VÁLV PRESSÃO",
      descricao: `DIAFRAGMA TRINCADO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_VÁLVULA_DE_ALIVIO_DE_PRESSÃO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `VÁLVULA PRESSÃO_SUBSTITUIR DIAFRAGMA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VÁLV PRESSÃO" },
    update: {},
    create: {
      codigoSap: "VÁLV PRESSÃO",
      descricao: `DIAFRAGMA ROMPIDO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_VÁLVULA_DE_ALIVIO_DE_PRESSÃO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `VÁLVULA PRESSÃO_REPOR DIAFRAGMA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VÁLV PRESSÃO" },
    update: {},
    create: {
      codigoSap: "VÁLV PRESSÃO",
      descricao: `VAZAM_ ÓLEO MODERADO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_VÁLVULA_DE_ALIVIO_DE_PRESSÃO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `VÁLVULA PRESSÃO_RETIRAR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VÁLV PRESSÃO" },
    update: {},
    create: {
      codigoSap: "VÁLV PRESSÃO",
      descricao: `VAZAMENTO ÓLEO CRÍTICO`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_VÁLVULA_DE_ALIVIO_DE_PRESSÃO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `VÁLVULA PRESSÃO_CORRIGIR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VÁLV PRESSÃO" },
    update: {},
    create: {
      codigoSap: "VÁLV PRESSÃO",
      descricao: `OXIDAÇÃO F4/F5`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_VÁLVULA_DE_ALIVIO_DE_PRESSÃO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR CORROSÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VÁLV PRESSÃO" },
    update: {},
    create: {
      codigoSap: "VÁLV PRESSÃO",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_VÁLVULA_DE_ALIVIO_DE_PRESSÃO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `RETIRAR CORROSÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPAMENTO AT`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VÁLV PRESSÃO" },
    update: {},
    create: {
      codigoSap: "VÁLV PRESSÃO",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_VÁLVULA_DE_ALIVIO_DE_PRESSÃO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `ACOMPANHAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VÁLV PRESSÃO" },
    update: {},
    create: {
      codigoSap: "VÁLV PRESSÃO",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_VÁLVULA_DE_ALIVIO_DE_PRESSÃO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `VÁLVULA PRESSÃO_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "VÁLV PRESSÃO" },
    update: {},
    create: {
      codigoSap: "VÁLV PRESSÃO",
      descricao: `PINTURA DANIFICADA`,
      grupoId: grupo_TRANSFORMADOR_DE_FORCA.id,
      subgrupoId: subgrupo_VÁLVULA_DE_ALIVIO_DE_PRESSÃO_TRANSFORMADOR_DE_FORCA_id,
      grupoDefeitoCodigoId: codigo_SETF_id,
      acaoRecomendada: `VÁLVULA PRESSÃO_RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `CONEXÕES FOLGADAS`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_ATERRAMENTO_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `ATERRAMENTO_REAPERTAR CONEXÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `CABO DE ATERRAMENTO INADEQUADO`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_ATERRAMENTO_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `ATERRAMENTO_SUBSTITUIR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `PARTIDO`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_ATERRAMENTO_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `SUBSTITUIR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `INEXISTENTE`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_ATERRAMENTO_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `INSTALAR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `DESCONECTADO DA CARCAÇA`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_ATERRAMENTO_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CONECTAR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_ATERRAMENTO_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_ATERRAMENTO_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `SUBSTITUIR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "ATERR" },
    update: {},
    create: {
      codigoSap: "ATERR",
      descricao: `OXIDAÇÃO F4/F5`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_ATERRAMENTO_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `SUBSTITUIR CABO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `TRELIÇAS OXIDADAS F3`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `BASE DE FIXAÇÃO _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `TRELIÇAS OXIDADAS F4/F5`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `TRELIÇAS OXIDADAS F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `PARAFUSOS OXIDADOS F3`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `BASE DE FIXAÇÃO _SUBSTITUIR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `PARAFUSOS OXIDADOS F4/F5`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `PARAFUSOS OXIDADOS F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `AUSÊNCIA PARAFUSOS DE FIXAÇÃO`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `BASE DE FIXAÇÃO _REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `C/ NINHO DE PÁSSARO`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `RETIRAT NINHO DE PÁSSARO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `BASE DESNIVELADA`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_BASE_DE_FIXAÇÃO_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `BASE DE FIXAÇÃO _NIVELAR BASE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA MORTA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `OXIDAÇÃO PARTE METÁLICA F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `BUCHAS _RETIRAR CORROSÃO/OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `OXIDAÇÃO PARTE METÁLICA F3`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `BUCHAS _RETIRAR CORROSÃO/OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `OXIDAÇÃO PARTE METÁLICA F4/F5`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `BUCHAS _RETIRAR CORROSÃO/OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `C/VAZAMENTO DE FUGA CORRENTE`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `BUCHAS  _SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `MUITO POLUÍDAS`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `BUCHAS_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA C/TRINCAS/RACHADURAS`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA CHAMUSCADA`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA COM SAIAS QUEBRADAS`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO/INVESTIMENTO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `INFILTRAÇÃO PELAS BUCHAS`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `BUCHAS_CORRIGIR INFILTRAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `BUCHAS_RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABEÇOTE" },
    update: {},
    create: {
      codigoSap: "CABEÇOTE",
      descricao: `PINTURA DANIFICADA`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CABEÇOTE_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CABEÇOTE_RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABEÇOTE" },
    update: {},
    create: {
      codigoSap: "CABEÇOTE",
      descricao: `POLUIÇÃO`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CABEÇOTE_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CABEÇOTE_LIMPAR CABEÇOTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABEÇOTE" },
    update: {},
    create: {
      codigoSap: "CABEÇOTE",
      descricao: `NÍVEL ÓLEO INADEQUADO`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CABEÇOTE_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CABEÇOTE_COMPLETAR NÍVEL DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABEÇOTE" },
    update: {},
    create: {
      codigoSap: "CABEÇOTE",
      descricao: `VAZAMENTO ÓLEO CRÍTICO`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CABEÇOTE_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CABEÇOTE_RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABEÇOTE" },
    update: {},
    create: {
      codigoSap: "CABEÇOTE",
      descricao: `CORROSÃO/OXIDAÇÃO PART METÁL`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CABEÇOTE_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CABEÇOTE_RETIRAR CORROSÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABEÇOTE" },
    update: {},
    create: {
      codigoSap: "CABEÇOTE",
      descricao: `NÍVEL DE ÓLEO CRÍTICO`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CABEÇOTE_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CABEÇOTE_COMPLETAR NÍVEL ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABEÇOTE" },
    update: {},
    create: {
      codigoSap: "CABEÇOTE",
      descricao: `MUITO POLUÍDOS`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CABEÇOTE_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CABEÇOTE_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABEÇOTE" },
    update: {},
    create: {
      codigoSap: "CABEÇOTE",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CABEÇOTE_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CABEÇOTE_CORRIGIR VAZAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXAS CONEX" },
    update: {},
    create: {
      codigoSap: "CAIXAS CONEX",
      descricao: `ELETRODUTOS IMPRÓPRIOS`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CAIXAS CONEXÕES_SUBSTITUIR ELETRODUTOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXAS CONEX" },
    update: {},
    create: {
      codigoSap: "CAIXAS CONEX",
      descricao: `ENTRADA UMIDADE`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CAIXAS CONEXÕES_VEDAR CAIXA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXAS CONEX" },
    update: {},
    create: {
      codigoSap: "CAIXAS CONEX",
      descricao: `RÉGUAS TERM_ OXIDADA`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CAIXAS CONEXÕES_RETIRAR OXIADAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXAS CONEX" },
    update: {},
    create: {
      codigoSap: "CAIXAS CONEX",
      descricao: `FIO SOLTO/CON_ FOLGADA`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CAIXAS CONEXÕES_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXAS CONEX" },
    update: {},
    create: {
      codigoSap: "CAIXAS CONEX",
      descricao: `VEDAÇÃO INSUFICIENTE`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CAIXAS CONEXÕES_VEDAR CAIXA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXAS CONEX" },
    update: {},
    create: {
      codigoSap: "CAIXAS CONEX",
      descricao: `FIAÇÃO ISOLAÇ DANIFICADO`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CAIXAS CONEXÕES_SUBSTITUIR FIAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXAS CONEX" },
    update: {},
    create: {
      codigoSap: "CAIXAS CONEX",
      descricao: `NÃO EXISTE ATERRAMENTO`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CAIXAS CONEXÕES_REPOR ATERRAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CAIXAS CONEX" },
    update: {},
    create: {
      codigoSap: "CAIXAS CONEX",
      descricao: `FIXAÇÃO INADEQUADA`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CAIXAS_DE_CONEXÕES_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CAIXAS CONEXÕES_FIXAR ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `TIPO PINO/CABO`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CONEXÕES DE AT_SUBSTITUIR POR PINO/CHAPA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEX FALTANDO PARAFUSOS`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CONEXÕES DE AT _REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONECTORES INADEQUADOS`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CONEXÕES DE AT _SUBSTITUIR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `MUITO POLUÍDOS`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CONEXÕES AT_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÕES FOLGADAS`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CONEXÕES AT_REAPERTAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `EXISTÊNC DE CENTELHAMENTO`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CONEXÕES AT_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 30°C<DT≤55°C`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE DT > 55°C`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 25°C<DT≤30°C`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `RUÍDOS VIBRAÇÕES ANORMAIS`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_CONEXÕES_AT_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR RUÍDOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `OXIDADA`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `ILEGÍVEL`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `SUBSTITUIR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `FIXAÇÃO INADEQUADA`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `FIXAR ADEQUADAMEN`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `INEXISTENTE`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `INSTALAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `CÓDIGO DE OPER_ ERRADO`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_POTENCIAL_id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `INSTALAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE " },
    update: {},
    create: {
      codigoSap: "TANQUE ",
      descricao: `PINTURA DETERIORADA`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `TANQUE _RETOCAR PINTURA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE " },
    update: {},
    create: {
      codigoSap: "TANQUE ",
      descricao: `COM VAZAMENTO ÓLEO`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `TANQUE _RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE " },
    update: {},
    create: {
      codigoSap: "TANQUE ",
      descricao: `COM VAZAMENTO SF6`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `TANQUE _RETIRAR VAZAMENTO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE " },
    update: {},
    create: {
      codigoSap: "TANQUE ",
      descricao: `DISPOSIT_ IÇAMENTO DEFICIENTE`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `TANQUE _ RECUPERAR DISPOSITIVO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE " },
    update: {},
    create: {
      codigoSap: "TANQUE ",
      descricao: `FIXAÇÃO TANQUE DEFICIENTE`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `TANQUE _FIXAR TANQUE ADEQUADAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE " },
    update: {},
    create: {
      codigoSap: "TANQUE ",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `TANQUE _LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE " },
    update: {},
    create: {
      codigoSap: "TANQUE ",
      descricao: `OXIDAÇÃO F4/F5`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `TANQUE _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE " },
    update: {},
    create: {
      codigoSap: "TANQUE ",
      descricao: `OXIDAÇÃO F3`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `TANQUE _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE " },
    update: {},
    create: {
      codigoSap: "TANQUE ",
      descricao: `OXIDAÇÃO F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `TANQUE _RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE " },
    update: {},
    create: {
      codigoSap: "TANQUE ",
      descricao: `TEMPERATURA ANORMAL`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `TANQUE_VERIFICAR TERMÔMETROS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE " },
    update: {},
    create: {
      codigoSap: "TANQUE ",
      descricao: `PARAFUSOS OXIDADOS F1/F2`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO/SUBSTITUIR PARAF`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE " },
    update: {},
    create: {
      codigoSap: "TANQUE ",
      descricao: `PARAFUSOS OXIDADOS F3`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO/SUBSTITUIR PARAF`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE " },
    update: {},
    create: {
      codigoSap: "TANQUE ",
      descricao: `PARAFUSOS OXIDADOS F4/F5`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO/SUBSTITUIR PARAF`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE " },
    update: {},
    create: {
      codigoSap: "TANQUE ",
      descricao: `VIBRAÇÃO ANORMAL`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `RETIRAR VIBRAÇÃO ANORMAL`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE " },
    update: {},
    create: {
      codigoSap: "TANQUE ",
      descricao: `NÍVEL DE ÓLEO BAIXO`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `TANQUE_COMPLETAR NÍVEL DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE " },
    update: {},
    create: {
      codigoSap: "TANQUE ",
      descricao: `PONTO QUENTE DT > 12°C`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE " },
    update: {},
    create: {
      codigoSap: "TANQUE ",
      descricao: `PONTO QUENTE 8°C<DT≤12°C`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE " },
    update: {},
    create: {
      codigoSap: "TANQUE ",
      descricao: `PONTO QUENTE 3°C<DT≤8°C`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TP" },
    update: {},
    create: {
      codigoSap: "TP",
      descricao: `FORA DE OPERAÇÃO`,
      grupoId: grupo_TRANSFORMADOR_DE_POTENCIAL.id,
      subgrupoId: subgrupo_TP_TRANSFORMADOR_DE_POTENCIAL.id,
      grupoDefeitoCodigoId: codigo_SETP_id,
      acaoRecomendada: `RETIRAR/ RECUPERAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `FALTANDO PARAFUSOS`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_BASE_DE_APOIO_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `BASE DE APOIO_REPOR PARAFUSOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `BASE DESNIVELADA`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_BASE_DE_APOIO_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `BASE DE APOIO_NIVELAR BASE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `OXIDAÇÃO`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_BASE_DE_APOIO_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `BASE DE APOIO_RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BASE" },
    update: {},
    create: {
      codigoSap: "BASE",
      descricao: `FIXAÇÃO INCORRETA`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_BASE_DE_APOIO_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `BASE DE APOIO_FIXAR CORRETAMENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `CORROSÃO/OXIDAÇÃO PART METÁLIC`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `BUCHAS_RETIRAR CORROSÃO/OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `SINAL DE VAZAMENTO`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `MUITO POLUÍDAS`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `BUCHAS_LIMPAR BUCHAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `TRINCAS OU RACHADURAS`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA CHAMUSCADA`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `PORCELANA COM SAIAS QUEBRADAS`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `BUCHAS_SUBSTITUIR BUCHA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "BUCHA" },
    update: {},
    create: {
      codigoSap: "BUCHA",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_BUCHAS_DE_PORCELANAS_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `BUCHAS_RETITAR VAZAMENTO ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `FALTANDO PARAFUSOS`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_CONEXÕES_DE_AT_E_BT_TRANSFORMADOR_DE_SERVICO_AUXILIAR_id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `CONEXÕES DE AT E BT_REPOR PARAFUSO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONECTORES INADEQUADOS`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_CONEXÕES_DE_AT_E_BT_TRANSFORMADOR_DE_SERVICO_AUXILIAR_id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `CONEXÕES DE AT E BT_REAPERTAR CONECTOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONECTORES POLUÍDOS`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_CONEXÕES_DE_AT_E_BT_TRANSFORMADOR_DE_SERVICO_AUXILIAR_id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `CONEXÕES DE AT E BT_LIMPAR CONECTORES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÃO INADEQUADA`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_CONEXÕES_DE_AT_E_BT_TRANSFORMADOR_DE_SERVICO_AUXILIAR_id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `CONEXÕES DE AT E BT_SUBSTITUIR CONECTOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `CONEXÕES FOLGADAS`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_CONEXÕES_DE_AT_E_BT_TRANSFORMADOR_DE_SERVICO_AUXILIAR_id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `CONEXÕES DE AT E BT_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `EXISTÊNC DE CENTELHAMENTO`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_CONEXÕES_DE_AT_E_BT_TRANSFORMADOR_DE_SERVICO_AUXILIAR_id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `CONEXÕES DE AT E BT_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 30°C<DT≤55°C`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_CONEXÕES_DE_AT_E_BT_TRANSFORMADOR_DE_SERVICO_AUXILIAR_id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE DT > 55°C`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_CONEXÕES_DE_AT_E_BT_TRANSFORMADOR_DE_SERVICO_AUXILIAR_id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `PONTO QUENTE 25°C<DT≤30°C`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_CONEXÕES_DE_AT_E_BT_TRANSFORMADOR_DE_SERVICO_AUXILIAR_id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `RUÍDOS VIBRAÇÕES ANORMAIS`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_CONEXÕES_DE_AT_E_BT_TRANSFORMADOR_DE_SERVICO_AUXILIAR_id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `CONEXÕES DE AT E BT_RETIRAR RUÍDOS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEX" },
    update: {},
    create: {
      codigoSap: "CONEX",
      descricao: `TERM_ A COMPRESSÃO NECESSÁR`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_CONEXÕES_DE_AT_E_BT_TRANSFORMADOR_DE_SERVICO_AUXILIAR_id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `CONEXÕES DE AT E BT_APLICAR TERM COMPRES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `OXIDADA`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_SERVICO_AUXILIAR_id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `ILEGÍVEL`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_SERVICO_AUXILIAR_id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `SUBSTITUIR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `FIXAÇÃO INADEQUADA`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_SERVICO_AUXILIAR_id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `FIXAR ADEQUADAMEN`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `INEXISTENTE`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_SERVICO_AUXILIAR_id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `INSTALAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "PLACA" },
    update: {},
    create: {
      codigoSap: "PLACA",
      descricao: `CÓDIGO DE OPER_ ERRADO`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_PLACA_DE_IDENTIFICAÇÃO_TRANSFORMADOR_DE_SERVICO_AUXILIAR_id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `INSTALAR PLACA`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `VAZAMENTO ÓLEO VISÍVEL`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `TANQUE_RETIRAR VAZAMENTO DE ÓLEO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `OXIDAÇÃO`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `TANQUE_RETIRAR OXIDAÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `FOLGA CONEXÕES DO ATERRAMENTO`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `TANQUE_REAPERTAR CONEXÕES`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `POLUIÇÃO ACENTUADA`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `TANQUE_LIMPAR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `C/ NINHO DE PÁSSARO`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `RETIRAT NINHO DE PÁSSARO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "TANQUE" },
    update: {},
    create: {
      codigoSap: "TANQUE",
      descricao: `PINTURA DETERIORADA`,
      grupoId: grupo_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      subgrupoId: subgrupo_TANQUE_TRANSFORMADOR_DE_SERVICO_AUXILIAR.id,
      grupoDefeitoCodigoId: codigo_SETS_id,
      acaoRecomendada: `TANQUE_REPARAR PINTURAS`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MUFLAS" },
    update: {},
    create: {
      codigoSap: "MUFLAS",
      descricao: `FALTA DE IDENTIFICAÇÃO DE FASES`,
      grupoId: grupo_MUFLAS.id,
      subgrupoId: subgrupo_MUFLAS_MUFLAS.id,
      grupoDefeitoCodigoId: codigo_SEMF_id,
      acaoRecomendada: `IDENTIFICAR AS FASES `,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `EQUIPE SE`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "MUFLAS" },
    update: {},
    create: {
      codigoSap: "MUFLAS",
      descricao: `CONEXÃO INADEQUADA`,
      grupoId: grupo_MUFLAS.id,
      subgrupoId: subgrupo_MUFLAS_MUFLAS.id,
      grupoDefeitoCodigoId: codigo_SEMF_id,
      acaoRecomendada: `SUBSTITUIR CONECTOR`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEXÕES DOS TERMINAIS" },
    update: {},
    create: {
      codigoSap: "CONEXÕES DOS TERMINAIS",
      descricao: `PONTO QUENTE 30°C<DT≤45°C`,
      grupoId: grupo_MUFLAS.id,
      subgrupoId: subgrupo_CONEXÕES_DOS_TERMINAIS_MUFLAS_id,
      grupoDefeitoCodigoId: codigo_SEMF_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEXÕES DOS TERMINAIS" },
    update: {},
    create: {
      codigoSap: "CONEXÕES DOS TERMINAIS",
      descricao: `PONTO QUENTE DT > 45°C`,
      grupoId: grupo_MUFLAS.id,
      subgrupoId: subgrupo_CONEXÕES_DOS_TERMINAIS_MUFLAS_id,
      grupoDefeitoCodigoId: codigo_SEMF_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CONEXÕES DOS TERMINAIS" },
    update: {},
    create: {
      codigoSap: "CONEXÕES DOS TERMINAIS",
      descricao: `PONTO QUENTE 20°C<DT≤30°C`,
      grupoId: grupo_MUFLAS.id,
      subgrupoId: subgrupo_CONEXÕES_DOS_TERMINAIS_MUFLAS_id,
      grupoDefeitoCodigoId: codigo_SEMF_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABOS MUFLA" },
    update: {},
    create: {
      codigoSap: "CABOS MUFLA",
      descricao: `PONTO QUENTE 8°C<DT≤12°C`,
      grupoId: grupo_MUFLAS.id,
      subgrupoId: subgrupo_CABOS_MUFLA_MUFLAS.id,
      grupoDefeitoCodigoId: codigo_SEMF_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P2`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABOS MUFLA" },
    update: {},
    create: {
      codigoSap: "CABOS MUFLA",
      descricao: `PONTO QUENTE DT > 12°C`,
      grupoId: grupo_MUFLAS.id,
      subgrupoId: subgrupo_CABOS_MUFLA_MUFLAS.id,
      grupoDefeitoCodigoId: codigo_SEMF_id,
      acaoRecomendada: `CONEXÕES AT_RETIRAR PONTO QUENTE`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `P1`,
      createdBy: userId,
    },
  });
  await prisma.defeito.upsert({
    where: { codigoSap: "CABOS MUFLA" },
    update: {},
    create: {
      codigoSap: "CABOS MUFLA",
      descricao: `PONTO QUENTE 3°C<DT≤8°C`,
      grupoId: grupo_MUFLAS.id,
      subgrupoId: subgrupo_CABOS_MUFLA_MUFLAS.id,
      grupoDefeitoCodigoId: codigo_SEMF_id,
      acaoRecomendada: `ACOMPANHAR EVOLUÇÃO`,
      custeioOuInvestimento: `CUSTEIO`,
      equipe: `LINHA VIVA`,
      prioridade: `A`,
      createdBy: userId,
    },
  });
}

main().then(() => process_exit(0)).catch(console.error);
