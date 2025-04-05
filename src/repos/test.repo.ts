import { Test } from "../types/test.type";
import prisma from "../database";
import { Question } from "../types/question.type";
import { Mark } from "../types/mark.type";

export const createTest = async (testData: Test) => {
  return await prisma.tests.create({
    data: {
      title: testData.title,
      createdAt: testData.createdAt,
      deletedAt: testData.deletedAt,
      description: testData.description,
      imageUrl: testData.imageUrl,
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

export const updateTestById = async (id: string, testData: Test) => {
  return await prisma.tests.update({
    data: {
      createdAt: testData.createdAt,
      deletedAt: testData.deletedAt,
      title: testData.title
    },
    where: {
      id: id
    }
  });
};
