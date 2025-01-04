import materialValidation from "../validations/material.validation";
import { Material } from "../types/material.type";
import { ApiResponse, StatusCode } from "../types/api-response.type";
import { createMaterial, findMaterialById, findMaterials, updateMaterialById } from "../repos/material.repo";
import { datetime } from "../utils/datetime.util";
import { LearningMaterials } from ".prisma/client";

export const postMaterial = async (materialData: Material): Promise<ApiResponse<null | LearningMaterials>> => {
  const { error } = materialValidation(materialData);
  if (error) {
    return {
      success: false,
      status: StatusCode.BAD_REQUEST,
      message: error.message,
      data: null
    };
  }

  try {
    const data = await createMaterial({
      title: materialData.title
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      description: materialData.description + "...",
      imageUrl: materialData.imageUrl,
      materialUrl: materialData.materialUrl,
      createdAt: datetime()
    });
    return {
      success: true,
      status: StatusCode.CREATED,
      message: "Material created successfully!",
      data: data
    };
  } catch {
    return {
      success: false,
      status: StatusCode.INTERNAL_SERVER_ERROR,
      message: "Something went wrong!",
      data: null
    };
  }
};

export const GetAllMaterials = async (): Promise<ApiResponse<null | LearningMaterials[]>> => {
  const data = await findMaterials();
  if (data.length === 0) {
    return {
      success: false,
      status: StatusCode.NOT_FOUND,
      message: "No materials found!",
      data: null
    };
  }

  return {
    success: true,
    status: StatusCode.OK,
    message: "Materials found successfully!",
    data: data
  };
};

export const getMaterialById = async (id: string): Promise<ApiResponse<null | LearningMaterials>> => {
  const data = await findMaterialById(id);
  if (!data) {
    return {
      success: false,
      status: StatusCode.NOT_FOUND,
      message: "Material not found!",
      data: null
    };
  }

  return {
    success: true,
    status: StatusCode.OK,
    message: "Get material successfully!",
    data: data
  };
};

export const patchMaterialById = async (
  id: string,
  materialData: Material
): Promise<ApiResponse<null | LearningMaterials>> => {
  const material = await findMaterialById(id);
  if (!material) {
    return {
      success: false,
      status: StatusCode.NOT_FOUND,
      message: "Material not found!",
      data: null
    };
  }

  const materialConverted: Material = {
    title: materialData.title,
    description: material.description,
    imageUrl: material.image_url,
    materialUrl: material.material_url,
    createdAt: material.created_at
  };

  try {
    const data = await updateMaterialById(id, {
      ...materialConverted,
      ...materialData
    });
    return {
      success: true,
      status: StatusCode.OK,
      message: "Material updated successfully!",
      data: data
    };
  } catch {
    return {
      success: false,
      status: StatusCode.INTERNAL_SERVER_ERROR,
      message: "Something went wrong!",
      data: null
    };
  }
};

export const putMaterialById = async (
  id: string,
  materialData: Material
): Promise<ApiResponse<null | LearningMaterials>> => {
  const material = await findMaterialById(id);
  if (!material) {
    return {
      success: false,
      status: StatusCode.NOT_FOUND,
      message: "Material not found!",
      data: null
    };
  }

  const { error } = materialValidation(materialData);
  if (error) {
    return {
      success: false,
      status: StatusCode.BAD_REQUEST,
      message: error.message,
      data: null
    };
  }

  try {
    const data = await updateMaterialById(id, materialData);
    return {
      success: true,
      status: StatusCode.OK,
      message: "Material updated successfully!",
      data: data
    };
  } catch {
    return {
      success: false,
      status: StatusCode.INTERNAL_SERVER_ERROR,
      message: "Something went wrong!",
      data: null
    };
  }
};
