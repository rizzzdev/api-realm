-- DropForeignKey
ALTER TABLE `activities` DROP FOREIGN KEY `Activities_materialId_fkey`;

-- DropForeignKey
ALTER TABLE `activities` DROP FOREIGN KEY `Activities_quizId_fkey`;

-- DropForeignKey
ALTER TABLE `activities` DROP FOREIGN KEY `Activities_testId_fkey`;

-- DropIndex
DROP INDEX `Activities_materialId_fkey` ON `activities`;

-- DropIndex
DROP INDEX `Activities_quizId_fkey` ON `activities`;

-- DropIndex
DROP INDEX `Activities_testId_fkey` ON `activities`;

-- AlterTable
ALTER TABLE `activities` MODIFY `materialId` VARCHAR(191) NULL,
    MODIFY `quizId` VARCHAR(191) NULL,
    MODIFY `testId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Activities` ADD CONSTRAINT `Activities_materialId_fkey` FOREIGN KEY (`materialId`) REFERENCES `Materials`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Activities` ADD CONSTRAINT `Activities_testId_fkey` FOREIGN KEY (`testId`) REFERENCES `Tests`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Activities` ADD CONSTRAINT `Activities_quizId_fkey` FOREIGN KEY (`quizId`) REFERENCES `Quizzes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
