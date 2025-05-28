/*
  Warnings:

  - Added the required column `createdBy` to the `AprModeloTipoAtividadeRelation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `AprModeloTipoAtividadeRelation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `AprModeloTipoAtividadeRelation` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `createdBy` VARCHAR(191) NOT NULL,
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `deletedBy` VARCHAR(191) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `updatedBy` VARCHAR(191) NULL;
