-- CreateTable
CREATE TABLE `Anomalia` (
    `id` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `numeroNota` VARCHAR(191) NULL,
    `localInstalacao` VARCHAR(191) NULL,
    `prioridade` ENUM('A', 'P1', 'P2', 'P3') NOT NULL DEFAULT 'A',
    `TSGeracao` VARCHAR(191) NULL,
    `centroTrabalhoId` VARCHAR(191) NULL,
    `defeitoId` VARCHAR(191) NULL,
    `equipamentoId` VARCHAR(191) NULL,
    `atividadeGeracaoId` VARCHAR(191) NOT NULL,
    `atividadeConclusaoId` VARCHAR(191) NULL,
    `status` ENUM('PENDENTE', 'EM_EXECUCAO', 'CONCLUIDA', 'CANCELADA') NOT NULL DEFAULT 'PENDENTE',
    `dataConclusao` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AprPerguntas` (
    `id` VARCHAR(191) NOT NULL,
    `pergunta` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AprModelo` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AprModeloTipoAtividadeRelation` (
    `id` VARCHAR(191) NOT NULL,
    `modeloId` VARCHAR(191) NOT NULL,
    `tipoAtividadeId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AprPerguntasRelation` (
    `id` VARCHAR(191) NOT NULL,
    `perguntaId` VARCHAR(191) NOT NULL,
    `ordem` INTEGER NOT NULL DEFAULT 0,
    `modeloId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoAtividade` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `tipoAtividadeMobile` ENUM('ivItIu', 'mpdj', 'mpbb') NOT NULL DEFAULT 'ivItIu',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoAtividadeKpi` (
    `id` VARCHAR(191) NOT NULL,
    `tipoAtividadeId` VARCHAR(191) NOT NULL,
    `kpiId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Atividade` (
    `id` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `notaPmaId` VARCHAR(191) NULL,
    `tipoAtividadeId` VARCHAR(191) NOT NULL,
    `ordemServico` VARCHAR(191) NULL,
    `status` ENUM('PENDENTE', 'EM_EXECUCAO', 'CONCLUIDA', 'CANCELADA') NOT NULL DEFAULT 'PENDENTE',
    `dataInicioPlan` DATETIME(3) NULL,
    `dataFimPlan` DATETIME(3) NULL,
    `dataExecucaoInicio` DATETIME(3) NULL,
    `dataExecucaoFim` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AtividadeAtribuicao` (
    `id` VARCHAR(191) NOT NULL,
    `atividadeId` VARCHAR(191) NOT NULL,
    `usuarioMobileId` VARCHAR(191) NOT NULL,
    `status` ENUM('ATRIBUIDA', 'EM_EXECUCAO', 'FINALIZADA', 'RECUSADA', 'CANCELADA') NOT NULL DEFAULT 'ATRIBUIDA',
    `dataInicio` DATETIME(3) NULL,
    `dataFim` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChecklistPergunta` (
    `id` VARCHAR(191) NOT NULL,
    `pergunta` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChecklistModelo` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChecklistModeloTipoAtividadeRelation` (
    `id` VARCHAR(191) NOT NULL,
    `modeloId` VARCHAR(191) NOT NULL,
    `tipoAtividadeId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChecklistPerguntaRelation` (
    `id` VARCHAR(191) NOT NULL,
    `perguntaId` VARCHAR(191) NOT NULL,
    `ordem` INTEGER NOT NULL DEFAULT 0,
    `modeloId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Distribuidora` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `codigoSap` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    UNIQUE INDEX `Distribuidora_codigoSap_key`(`codigoSap`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Regional` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `codigoSap` VARCHAR(191) NULL,
    `distribuidoraId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    UNIQUE INDEX `Regional_codigoSap_key`(`codigoSap`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CentroTrabalho` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `regionalId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subestacao` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `sigla` VARCHAR(191) NOT NULL,
    `localInstalacao` VARCHAR(191) NULL,
    `codigoSap` VARCHAR(191) NOT NULL,
    `propriedade` ENUM('PROPRIA', 'COMPARTILHADA') NOT NULL,
    `categoria` ENUM('DISTRIBUICAO', 'SUBTRANSMISSAO', 'TRANSMISSAO') NOT NULL,
    `tensao` ENUM('KV_34', 'KV_69', 'KV_138', 'KV_230') NOT NULL,
    `regionalId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    UNIQUE INDEX `Subestacao_codigoSap_key`(`codigoSap`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GrupoDefeitoEquipamento` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `codigo` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    UNIQUE INDEX `GrupoDefeitoEquipamento_nome_key`(`nome`),
    UNIQUE INDEX `GrupoDefeitoEquipamento_codigo_key`(`codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubgrupoDefeitoEquipamento` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `grupoId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Equipamento` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `subestacaoId` VARCHAR(191) NOT NULL,
    `grupoDefeitoCodigo` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Defeito` (
    `id` VARCHAR(191) NOT NULL,
    `codigoSap` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `grupoId` VARCHAR(191) NOT NULL,
    `subgrupoId` VARCHAR(191) NOT NULL,
    `acaoRecomendada` VARCHAR(191) NULL,
    `custeioOuInvestimento` VARCHAR(191) NULL,
    `equipe` VARCHAR(191) NULL,
    `prioridade` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    UNIQUE INDEX `Defeito_codigoSap_key`(`codigoSap`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistoricoAlteracaoNota` (
    `id` VARCHAR(191) NOT NULL,
    `notaId` VARCHAR(191) NOT NULL,
    `campo` VARCHAR(191) NOT NULL,
    `valorAnterior` VARCHAR(191) NULL,
    `valorNovo` VARCHAR(191) NULL,
    `alteradoPor` VARCHAR(191) NOT NULL,
    `alteradoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistoricoAlteracaoAtividade` (
    `id` VARCHAR(191) NOT NULL,
    `atividadeId` VARCHAR(191) NOT NULL,
    `campo` VARCHAR(191) NOT NULL,
    `valorAnterior` VARCHAR(191) NULL,
    `valorNovo` VARCHAR(191) NULL,
    `alteradoPor` VARCHAR(191) NOT NULL,
    `alteradoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistoricoAlteracaoAnomalia` (
    `id` VARCHAR(191) NOT NULL,
    `anomaliaId` VARCHAR(191) NOT NULL,
    `campo` VARCHAR(191) NOT NULL,
    `valorAnterior` VARCHAR(191) NULL,
    `valorNovo` VARCHAR(191) NULL,
    `alteradoPor` VARCHAR(191) NOT NULL,
    `alteradoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios_mobile` (
    `id` VARCHAR(191) NOT NULL,
    `matricula` VARCHAR(50) NOT NULL,
    `nome` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NULL,
    `senha` VARCHAR(255) NOT NULL,
    `funcao` VARCHAR(100) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    UNIQUE INDEX `usuarios_mobile_matricula_key`(`matricula`),
    UNIQUE INDEX `usuarios_mobile_email_key`(`email`),
    INDEX `usuarios_mobile_matricula_idx`(`matricula`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sessoes_mobile` (
    `id` VARCHAR(191) NOT NULL,
    `usuarioMobileId` VARCHAR(191) NOT NULL,
    `deviceInfo` TEXT NULL,
    `lastActive` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `expiresAt` DATETIME(3) NOT NULL,
    `ativa` BOOLEAN NOT NULL DEFAULT true,

    INDEX `sessoes_mobile_usuarioMobileId_idx`(`usuarioMobileId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TokenMobile` (
    `id` VARCHAR(191) NOT NULL,
    `token` VARCHAR(255) NOT NULL,
    `refreshToken` VARCHAR(255) NULL,
    `refreshTokenExpiresAt` DATETIME(3) NULL,
    `usuarioMobileId` VARCHAR(191) NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `revoked` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `TokenMobile_token_key`(`token`),
    UNIQUE INDEX `TokenMobile_refreshToken_key`(`refreshToken`),
    INDEX `TokenMobile_usuarioMobileId_fkey`(`usuarioMobileId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios_mobile_regionais` (
    `id` VARCHAR(191) NOT NULL,
    `usuarioMobileId` VARCHAR(191) NOT NULL,
    `regionalId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    INDEX `usuarios_mobile_regionais_regionalId_idx`(`regionalId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoManutencao` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kpi` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `tipoManutencaoId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NotaPMA` (
    `id` VARCHAR(191) NOT NULL,
    `numeroNota` VARCHAR(191) NULL,
    `localInstalacao` VARCHAR(191) NULL,
    `dataInicioPlan` DATETIME(3) NOT NULL,
    `dataFiPlan` DATETIME(3) NOT NULL,
    `dataInicioReal` DATETIME(3) NULL,
    `dataFiReal` DATETIME(3) NULL,
    `centroTrabalhoId` VARCHAR(191) NULL,
    `equipamentoId` VARCHAR(191) NULL,
    `kpiId` VARCHAR(191) NULL,
    `status` ENUM('PENDENTE', 'PROGRAMADO', 'EXECUTADO', 'BAIXADO_NO_SAP', 'CANCELADO') NOT NULL DEFAULT 'PENDENTE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    `email` VARCHAR(255) NULL,
    `password` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NULL,
    `deletedBy` VARCHAR(191) NULL,

    UNIQUE INDEX `usuarios_username_key`(`username`),
    UNIQUE INDEX `usuarios_email_key`(`email`),
    INDEX `usuarios_username_idx`(`username`),
    INDEX `usuarios_email_idx`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contas` (
    `id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NOT NULL,

    INDEX `contas_userId_idx`(`userId`),
    UNIQUE INDEX `contas_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sessoes` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `sessoes_sessionToken_key`(`sessionToken`),
    INDEX `sessoes_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tokens_verificacao` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `tokens_verificacao_token_key`(`token`),
    UNIQUE INDEX `tokens_verificacao_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Anomalia` ADD CONSTRAINT `Anomalia_centroTrabalhoId_fkey` FOREIGN KEY (`centroTrabalhoId`) REFERENCES `CentroTrabalho`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Anomalia` ADD CONSTRAINT `Anomalia_defeitoId_fkey` FOREIGN KEY (`defeitoId`) REFERENCES `Defeito`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Anomalia` ADD CONSTRAINT `Anomalia_equipamentoId_fkey` FOREIGN KEY (`equipamentoId`) REFERENCES `Equipamento`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Anomalia` ADD CONSTRAINT `Anomalia_atividadeGeracaoId_fkey` FOREIGN KEY (`atividadeGeracaoId`) REFERENCES `Atividade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Anomalia` ADD CONSTRAINT `Anomalia_atividadeConclusaoId_fkey` FOREIGN KEY (`atividadeConclusaoId`) REFERENCES `Atividade`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AprModeloTipoAtividadeRelation` ADD CONSTRAINT `AprModeloTipoAtividadeRelation_modeloId_fkey` FOREIGN KEY (`modeloId`) REFERENCES `AprModelo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AprModeloTipoAtividadeRelation` ADD CONSTRAINT `AprModeloTipoAtividadeRelation_tipoAtividadeId_fkey` FOREIGN KEY (`tipoAtividadeId`) REFERENCES `TipoAtividade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AprPerguntasRelation` ADD CONSTRAINT `AprPerguntasRelation_perguntaId_fkey` FOREIGN KEY (`perguntaId`) REFERENCES `AprPerguntas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AprPerguntasRelation` ADD CONSTRAINT `AprPerguntasRelation_modeloId_fkey` FOREIGN KEY (`modeloId`) REFERENCES `AprModelo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TipoAtividadeKpi` ADD CONSTRAINT `TipoAtividadeKpi_tipoAtividadeId_fkey` FOREIGN KEY (`tipoAtividadeId`) REFERENCES `TipoAtividade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TipoAtividadeKpi` ADD CONSTRAINT `TipoAtividadeKpi_kpiId_fkey` FOREIGN KEY (`kpiId`) REFERENCES `Kpi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Atividade` ADD CONSTRAINT `Atividade_notaPmaId_fkey` FOREIGN KEY (`notaPmaId`) REFERENCES `NotaPMA`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Atividade` ADD CONSTRAINT `Atividade_tipoAtividadeId_fkey` FOREIGN KEY (`tipoAtividadeId`) REFERENCES `TipoAtividade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AtividadeAtribuicao` ADD CONSTRAINT `AtividadeAtribuicao_atividadeId_fkey` FOREIGN KEY (`atividadeId`) REFERENCES `Atividade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AtividadeAtribuicao` ADD CONSTRAINT `AtividadeAtribuicao_usuarioMobileId_fkey` FOREIGN KEY (`usuarioMobileId`) REFERENCES `usuarios_mobile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChecklistModeloTipoAtividadeRelation` ADD CONSTRAINT `ChecklistModeloTipoAtividadeRelation_modeloId_fkey` FOREIGN KEY (`modeloId`) REFERENCES `ChecklistModelo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChecklistModeloTipoAtividadeRelation` ADD CONSTRAINT `ChecklistModeloTipoAtividadeRelation_tipoAtividadeId_fkey` FOREIGN KEY (`tipoAtividadeId`) REFERENCES `TipoAtividade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChecklistPerguntaRelation` ADD CONSTRAINT `ChecklistPerguntaRelation_perguntaId_fkey` FOREIGN KEY (`perguntaId`) REFERENCES `ChecklistPergunta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChecklistPerguntaRelation` ADD CONSTRAINT `ChecklistPerguntaRelation_modeloId_fkey` FOREIGN KEY (`modeloId`) REFERENCES `ChecklistModelo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Regional` ADD CONSTRAINT `Regional_distribuidoraId_fkey` FOREIGN KEY (`distribuidoraId`) REFERENCES `Distribuidora`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CentroTrabalho` ADD CONSTRAINT `CentroTrabalho_regionalId_fkey` FOREIGN KEY (`regionalId`) REFERENCES `Regional`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subestacao` ADD CONSTRAINT `Subestacao_regionalId_fkey` FOREIGN KEY (`regionalId`) REFERENCES `Regional`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubgrupoDefeitoEquipamento` ADD CONSTRAINT `SubgrupoDefeitoEquipamento_grupoId_fkey` FOREIGN KEY (`grupoId`) REFERENCES `GrupoDefeitoEquipamento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipamento` ADD CONSTRAINT `Equipamento_subestacaoId_fkey` FOREIGN KEY (`subestacaoId`) REFERENCES `Subestacao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Defeito` ADD CONSTRAINT `Defeito_grupoId_fkey` FOREIGN KEY (`grupoId`) REFERENCES `GrupoDefeitoEquipamento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Defeito` ADD CONSTRAINT `Defeito_subgrupoId_fkey` FOREIGN KEY (`subgrupoId`) REFERENCES `SubgrupoDefeitoEquipamento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoricoAlteracaoNota` ADD CONSTRAINT `HistoricoAlteracaoNota_notaId_fkey` FOREIGN KEY (`notaId`) REFERENCES `NotaPMA`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoricoAlteracaoAtividade` ADD CONSTRAINT `HistoricoAlteracaoAtividade_atividadeId_fkey` FOREIGN KEY (`atividadeId`) REFERENCES `Atividade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoricoAlteracaoAnomalia` ADD CONSTRAINT `HistoricoAlteracaoAnomalia_anomaliaId_fkey` FOREIGN KEY (`anomaliaId`) REFERENCES `Anomalia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sessoes_mobile` ADD CONSTRAINT `sessoes_mobile_usuarioMobileId_fkey` FOREIGN KEY (`usuarioMobileId`) REFERENCES `usuarios_mobile`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TokenMobile` ADD CONSTRAINT `TokenMobile_usuarioMobileId_fkey` FOREIGN KEY (`usuarioMobileId`) REFERENCES `usuarios_mobile`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usuarios_mobile_regionais` ADD CONSTRAINT `usuarios_mobile_regionais_usuarioMobileId_fkey` FOREIGN KEY (`usuarioMobileId`) REFERENCES `usuarios_mobile`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usuarios_mobile_regionais` ADD CONSTRAINT `usuarios_mobile_regionais_regionalId_fkey` FOREIGN KEY (`regionalId`) REFERENCES `Regional`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kpi` ADD CONSTRAINT `Kpi_tipoManutencaoId_fkey` FOREIGN KEY (`tipoManutencaoId`) REFERENCES `TipoManutencao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NotaPMA` ADD CONSTRAINT `NotaPMA_centroTrabalhoId_fkey` FOREIGN KEY (`centroTrabalhoId`) REFERENCES `CentroTrabalho`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NotaPMA` ADD CONSTRAINT `NotaPMA_equipamentoId_fkey` FOREIGN KEY (`equipamentoId`) REFERENCES `Equipamento`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NotaPMA` ADD CONSTRAINT `NotaPMA_kpiId_fkey` FOREIGN KEY (`kpiId`) REFERENCES `Kpi`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contas` ADD CONSTRAINT `contas_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sessoes` ADD CONSTRAINT `sessoes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
