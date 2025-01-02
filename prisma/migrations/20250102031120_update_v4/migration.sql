/*
  Warnings:

  - You are about to drop the column `user_name` on the `Students` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Students` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Students" DROP COLUMN "user_name";

-- CreateIndex
CREATE UNIQUE INDEX "Students_id_key" ON "Students"("id");
