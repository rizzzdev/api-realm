-- AlterTable
ALTER TABLE "LearningMaterials" ALTER COLUMN "created_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "TestMarks" ALTER COLUMN "marked_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "TestQuestions" ALTER COLUMN "created_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Tests" ALTER COLUMN "created_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Tokens" ALTER COLUMN "logged_in_at" DROP DEFAULT;
