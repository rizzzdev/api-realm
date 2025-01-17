import { Mark } from "../types/mark.type";
import prisma from "../database";

export const createMark = async (markData: Mark) => {
  return await prisma.marks.create({
    data: {
      userId: markData.userId,
      testId: markData.testId,
      quizId: markData.quizId,
      mark: markData.mark,
      markedAt: markData.markedAt
    }
  });
};

export const findMarks = async () => {
  return await prisma.marks.findMany();
};

export const findMarkById = async (id: string) => {
  return await prisma.marks.findFirst({
    where: {
      id: id
    }
  });
};

export const findMarkByUserIdAndQuizId = async (userId: string, quizId: string) => {
  return await prisma.marks.findFirst({
    where: {
      userId: userId,
      quizId: quizId
    }
  });
};

export const findMarkByUserIdAndTestId = async (userId: string, testId: string) => {
  return await prisma.marks.findFirst({
    where: {
      userId: userId,
      testId: testId
    }
  });
};

export const updateMarkById = async (id: string, markData: Mark) => {
  return await prisma.marks.update({
    data: {
      userId: markData.userId,
      testId: markData.testId,
      quizId: markData.quizId,
      mark: markData.mark,
      markedAt: markData.markedAt
    },
    where: {
      id: id
    }
  });
};
