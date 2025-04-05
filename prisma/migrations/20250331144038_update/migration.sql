/*
  Warnings:

  - Added the required column `activityType` to the `Activities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doneAt` to the `Activities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `Activities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Tests` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ActivityType" AS ENUM ('MATERIAL', 'QUIZ', 'TEST', 'SIMULATION');

-- DropForeignKey
ALTER TABLE "Activities" DROP CONSTRAINT "Activities_materialId_fkey";

-- AlterTable
ALTER TABLE "Activities" ADD COLUMN     "activityType" "ActivityType" NOT NULL,
ADD COLUMN     "doneAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "message" TEXT NOT NULL,
ADD COLUMN     "quizId" TEXT,
ADD COLUMN     "testId" TEXT,
ALTER COLUMN "materialId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Tests" ADD COLUMN     "title" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Backup" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Backup_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Activities" ADD CONSTRAINT "Activities_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Materials"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activities" ADD CONSTRAINT "Activities_testId_fkey" FOREIGN KEY ("testId") REFERENCES "Tests"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activities" ADD CONSTRAINT "Activities_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quizzes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
