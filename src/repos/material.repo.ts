import { Material } from "../types/material.type";
import prisma from "../database";
import { Activity } from "../types/activity.type";
import { Quiz } from "../types/quiz.type";
import { Question } from "../types/question.type";
import { Mark } from "../types/mark.type";

export const createMaterial = async (materialData: Material<Activity, Quiz<Question, Mark>>) => {
  return await prisma.materials.create({
    data: {
      title: materialData.title,
      description: materialData.description,
      imageUrl: materialData.imageUrl,
      materialString: materialData.materialString,
      createdAt: materialData.createdAt,
      deletedAt: materialData.deletedAt,
      quiz: {
        create: {
          createdAt: materialData.createdAt
        }
      }
    }
  });
};

export const findMaterials = async () => {
  return await prisma.materials.findMany({
    include: {
      quiz: true,
      activity: true
    }
  });
};

export const findMaterialById = async (id: string) => {
  return await prisma.materials.findFirst({
    include: {
      quiz: true
    },
    where: {
      id: id
    }
  });
};

export const updateMaterialById = async (id: string, materialData: Material<Activity, Quiz<Question, Mark>>) => {
  return await prisma.materials.update({
    data: {
      title: materialData.title,
      description: materialData.description,
      imageUrl: materialData.imageUrl,
      materialString: materialData.materialString,
      createdAt: materialData.createdAt,
      deletedAt: materialData.deletedAt
    },
    where: { id }
  });
};
