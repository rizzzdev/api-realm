/*
  Warnings:

  - Added the required column `mark` to the `TestMarks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TestMarks" ADD COLUMN     "mark" INTEGER NOT NULL;
