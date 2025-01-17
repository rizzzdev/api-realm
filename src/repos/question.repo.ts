import prisma from "../database";
import { Question } from "../types/question.type";

export const createQuestion = async (questionData: Question) => {
  return await prisma.questions.create({
    data: {
      testId: questionData.testId,
      quizId: questionData.quizId,
      question: questionData.question,
      imageUrl: questionData.imageUrl,
      optionA: questionData.optionA,
      optionB: questionData.optionB,
      optionC: questionData.optionC,
      optionD: questionData.optionD,
      optionE: questionData.optionE,
      correctOption: questionData.correctOption,
      createdAt: questionData.createdAt,
      deletedAt: questionData.deletedAt
    }
  });
};

export const findQuestions = async () => {
  return await prisma.questions.findMany();
};

export const findQuestionById = async (id: string) => {
  return await prisma.questions.findFirst({
    where: {
      id: id
    }
  });
};

export const updateQuestionById = async (id: string, questionData: Question) => {
  return await prisma.questions.update({
    data: {
      testId: questionData.testId,
      quizId: questionData.quizId,
      question: questionData.question,
      imageUrl: questionData.imageUrl,
      optionA: questionData.optionA,
      optionB: questionData.optionB,
      optionC: questionData.optionC,
      optionD: questionData.optionD,
      optionE: questionData.optionE,
      correctOption: questionData.correctOption,
      createdAt: questionData.createdAt,
      deletedAt: questionData.deletedAt
    },
    where: {
      id: id
    }
  });
};
