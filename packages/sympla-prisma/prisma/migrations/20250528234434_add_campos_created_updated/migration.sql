/*
  Warnings:

  - Added the required column `createdBy` to the `ChecklistModeloTipoAtividadeRelation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ChecklistModeloTipoAtividadeRelation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `TipoAtividadeKpi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TipoAtividadeKpi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ChecklistModeloTipoAtividadeRelation` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `createdBy` VARCHAR(191) NOT NULL,
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `deletedBy` VARCHAR(191) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `updatedBy` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `TipoAtividadeKpi` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `createdBy` VARCHAR(191) NOT NULL,
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `deletedBy` VARCHAR(191) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `updatedBy` VARCHAR(191) NULL;
