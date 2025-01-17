import { Test } from "../types/test.type";
import prisma from "../database";
import { Question } from "../types/question.type";
import { Mark } from "../types/mark.type";

export const createTest = async (testData: Test<Question, Mark>) => {
  return await prisma.tests.create({
    data: {
      createdAt: testData.createdAt,
      deletedAt: testData.deletedAt,
      questions: {
        create: []
      },
      mark: {
        create: []
      }
    }
  });
};

export const findTests = async () => {
  return await prisma.tests.findMany({
    include: {
      questions: true,
      mark: true
    }
  });
};

export const findTestById = async (id: string) => {
  return await prisma.tests.findFirst({
    include: {
      questions: true,
      mark: true
    },
    where: {
      id: id
    }
  });
};

export const updateTestById = async (id: string, testData: Test<Question, Mark>) => {
  return await prisma.tests.update({
    data: {
      createdAt: testData.createdAt,
      deletedAt: testData.deletedAt
    },
    where: {
      id: id
    }
  });
};
