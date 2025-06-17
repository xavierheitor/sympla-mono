/*
  Warnings:

  - You are about to drop the `ChecklisrPerguntaRelation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ChecklisrPerguntaRelation` DROP FOREIGN KEY `ChecklisrPerguntaRelation_modeloId_fkey`;

-- DropForeignKey
ALTER TABLE `ChecklisrPerguntaRelation` DROP FOREIGN KEY `ChecklisrPerguntaRelation_perguntaId_fkey`;

-- DropTable
DROP TABLE `ChecklisrPerguntaRelation`;

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

-- AddForeignKey
ALTER TABLE `ChecklistPerguntaRelation` ADD CONSTRAINT `ChecklistPerguntaRelation_perguntaId_fkey` FOREIGN KEY (`perguntaId`) REFERENCES `ChecklistPergunta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChecklistPerguntaRelation` ADD CONSTRAINT `ChecklistPerguntaRelation_modeloId_fkey` FOREIGN KEY (`modeloId`) REFERENCES `ChecklistModelo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
