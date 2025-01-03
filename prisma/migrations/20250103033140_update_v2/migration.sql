/*
  Warnings:

  - You are about to drop the column `logged_at` on the `Tokens` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tokens" DROP COLUMN "logged_at",
ADD COLUMN     "logged_in_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "logged_out_at" TIMESTAMP(3);
