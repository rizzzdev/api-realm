/*
  Warnings:

  - Added the required column `materialId` to the `Activities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quizId` to the `Activities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `testId` to the `Activities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `activities` ADD COLUMN `materialId` VARCHAR(191) NOT NULL,
    ADD COLUMN `quizId` VARCHAR(191) NOT NULL,
    ADD COLUMN `testId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Activities` ADD CONSTRAINT `Activities_materialId_fkey` FOREIGN KEY (`materialId`) REFERENCES `Materials`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Activities` ADD CONSTRAINT `Activities_testId_fkey` FOREIGN KEY (`testId`) REFERENCES `Tests`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Activities` ADD CONSTRAINT `Activities_quizId_fkey` FOREIGN KEY (`quizId`) REFERENCES `Quizzes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
