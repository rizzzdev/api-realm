-- AlterTable
ALTER TABLE `materials` MODIFY `materialString` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `tokens` MODIFY `refreshToken` LONGTEXT NULL;
