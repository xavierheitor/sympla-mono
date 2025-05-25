/*
  Warnings:

  - You are about to drop the column `grupoDefeitoCodigoId` on the `Defeito` table. All the data in the column will be lost.
  - You are about to drop the column `grupoDefeitoCodigoId` on the `Equipamento` table. All the data in the column will be lost.
  - You are about to drop the column `grupoId` on the `Equipamento` table. All the data in the column will be lost.
  - You are about to drop the column `subgrupoId` on the `Equipamento` table. All the data in the column will be lost.
  - You are about to drop the `GrupoDefeitoCodigo` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[codigo]` on the table `GrupoDefeitoEquipamento` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `grupoDefeitoCodigo` to the `Equipamento` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Defeito` DROP FOREIGN KEY `Defeito_grupoDefeitoCodigoId_fkey`;

-- DropForeignKey
ALTER TABLE `Equipamento` DROP FOREIGN KEY `Equipamento_grupoDefeitoCodigoId_fkey`;

-- DropForeignKey
ALTER TABLE `Equipamento` DROP FOREIGN KEY `Equipamento_grupoId_fkey`;

-- DropForeignKey
ALTER TABLE `Equipamento` DROP FOREIGN KEY `Equipamento_subgrupoId_fkey`;

-- DropForeignKey
ALTER TABLE `GrupoDefeitoCodigo` DROP FOREIGN KEY `GrupoDefeitoCodigo_grupoId_fkey`;

-- DropIndex
DROP INDEX `Defeito_grupoDefeitoCodigoId_fkey` ON `Defeito`;

-- DropIndex
DROP INDEX `Equipamento_grupoDefeitoCodigoId_fkey` ON `Equipamento`;

-- DropIndex
DROP INDEX `Equipamento_grupoId_fkey` ON `Equipamento`;

-- DropIndex
DROP INDEX `Equipamento_subgrupoId_fkey` ON `Equipamento`;

-- AlterTable
ALTER TABLE `Defeito` DROP COLUMN `grupoDefeitoCodigoId`;

-- AlterTable
ALTER TABLE `Equipamento` DROP COLUMN `grupoDefeitoCodigoId`,
    DROP COLUMN `grupoId`,
    DROP COLUMN `subgrupoId`,
    ADD COLUMN `grupoDefeitoCodigo` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `GrupoDefeitoEquipamento` ADD COLUMN `codigo` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `GrupoDefeitoCodigo`;

-- CreateIndex
CREATE UNIQUE INDEX `GrupoDefeitoEquipamento_codigo_key` ON `GrupoDefeitoEquipamento`(`codigo`);
