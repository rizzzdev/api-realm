import { Quiz } from "../types/quiz.type";
import prisma from "../database";
import { Question } from "../types/question.type";
import { Mark } from "../types/mark.type";

export const createQuiz = async (quizData: Quiz<Question, Mark>) => {
  return await prisma.quizzes.create({
    data: {
      createdAt: quizData.createdAt,
      deletedAt: quizData.deletedAt,
      materialId: quizData.materialId,
      questions: {
        create: []
      },
      marks: {
        create: []
      }
    }
  });
};

export const findQuizzes = async () => {
  return await prisma.quizzes.findMany({
    include: {
      questions: true,
      marks: true
    }
  });
};

export const findQuizById = async (id: string) => {
  return await prisma.quizzes.findFirst({
    include: {
      questions: true,
      marks: true
    },
    where: {
      id: id
    }
  });
};

export const updateQuizById = async (id: string, quizData: Quiz<Question, Mark>) => {
  return await prisma.quizzes.update({
    data: {
      createdAt: quizData.createdAt,
      deletedAt: quizData.deletedAt
    },
    where: {
      id: id
    }
  });
};
