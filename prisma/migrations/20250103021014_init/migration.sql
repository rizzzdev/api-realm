-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "Students" (
    "id" TEXT NOT NULL,
    "pass_word" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "avatar_url" TEXT NOT NULL,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tokens" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "logged_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "refresh_token" TEXT NOT NULL,

    CONSTRAINT "Tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LearningMaterials" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "material_url" TEXT NOT NULL,

    CONSTRAINT "LearningMaterials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tests" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Tests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestQuestions" (
    "id" TEXT NOT NULL,
    "test_id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "image_url" TEXT,
    "option_a" TEXT NOT NULL,
    "option_b" TEXT NOT NULL,
    "option_c" TEXT NOT NULL,
    "option_d" TEXT NOT NULL,
    "option_e" TEXT NOT NULL,
    "correct_option" TEXT NOT NULL,

    CONSTRAINT "TestQuestions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestMarks" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "test_id" TEXT NOT NULL,
    "mark" INTEGER NOT NULL,

    CONSTRAINT "TestMarks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Students_id_key" ON "Students"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tokens_refresh_token_key" ON "Tokens"("refresh_token");

-- AddForeignKey
ALTER TABLE "Tokens" ADD CONSTRAINT "Tokens_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestQuestions" ADD CONSTRAINT "TestQuestions_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "Tests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestMarks" ADD CONSTRAINT "TestMarks_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestMarks" ADD CONSTRAINT "TestMarks_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "Tests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
