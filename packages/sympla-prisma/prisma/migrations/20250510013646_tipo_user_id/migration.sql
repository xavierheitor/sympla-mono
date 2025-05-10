-- AlterTable
ALTER TABLE `usuarios` MODIFY `createdBy` VARCHAR(191) NOT NULL,
    MODIFY `updatedBy` VARCHAR(191) NULL,
    MODIFY `deletedBy` VARCHAR(191) NULL;
