/*
  Warnings:

  - Added the required column `title` to the `Tests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tests` ADD COLUMN `title` VARCHAR(191) NOT NULL;
