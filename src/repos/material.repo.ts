import { Material } from "../types/material.type";
import prisma from "../database";

export const createMaterial = async (materialData: Material) => {
  return await prisma.learningMaterials.create({
    data: {
      title: materialData.title,
      description: materialData.description,
      image_url: materialData.imageUrl,
      material_url: materialData.materialUrl,
      created_at: materialData.createdAt,
      deleted_at: materialData.deletedAt
    }
  });
};

export const findMaterials = async () => {
  return await prisma.learningMaterials.findMany();
};

export const findMaterialById = async (id: string) => {
  return await prisma.learningMaterials.findFirst({ where: { id } });
};

export const updateMaterialById = async (id: string, materialData: Material) => {
  return await prisma.learningMaterials.update({
    data: {
      title: materialData.title,
      description: materialData.description,
      image_url: materialData.imageUrl,
      material_url: materialData.materialUrl,
      created_at: materialData.createdAt,
      deleted_at: materialData.deletedAt
    },
    where: { id }
  });
};
