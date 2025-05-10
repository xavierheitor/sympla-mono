/*
  Warnings:

  - Added the required column `createdBy` to the `usuarios_mobile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuarios_mobile` ADD COLUMN `createdBy` VARCHAR(191) NOT NULL,
    ADD COLUMN `deletedBy` VARCHAR(191) NULL,
    ADD COLUMN `updatedBy` VARCHAR(191) NULL;
