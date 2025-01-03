/*
  Warnings:

  - You are about to drop the column `student_id` on the `TestMarks` table. All the data in the column will be lost.
  - You are about to drop the column `student_id` on the `Tokens` table. All the data in the column will be lost.
  - You are about to drop the `Students` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_id` to the `TestMarks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Tokens` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'ADMIN');

-- DropForeignKey
ALTER TABLE "TestMarks" DROP CONSTRAINT "TestMarks_student_id_fkey";

-- DropForeignKey
ALTER TABLE "Tokens" DROP CONSTRAINT "Tokens_student_id_fkey";

-- AlterTable
ALTER TABLE "TestMarks" DROP COLUMN "student_id",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tokens" DROP COLUMN "student_id",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "Students";

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "pass_word" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'STUDENT',

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_id_key" ON "Users"("id");

-- AddForeignKey
ALTER TABLE "Tokens" ADD CONSTRAINT "Tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestMarks" ADD CONSTRAINT "TestMarks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
