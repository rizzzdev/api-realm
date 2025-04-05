/*
  Warnings:

  - You are about to drop the column `materialId` on the `activities` table. All the data in the column will be lost.
  - Added the required column `activityType` to the `Activities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doneAt` to the `Activities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `Activities` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `activities` DROP FOREIGN KEY `Activities_materialId_fkey`;

-- DropIndex
DROP INDEX `Activities_materialId_fkey` ON `activities`;

-- AlterTable
ALTER TABLE `activities` DROP COLUMN `materialId`,
    ADD COLUMN `activityType` ENUM('MATERIAL', 'QUIZ', 'TEST', 'SIMULATION') NOT NULL,
    ADD COLUMN `doneAt` DATETIME(3) NOT NULL,
    ADD COLUMN `message` VARCHAR(191) NOT NULL;
