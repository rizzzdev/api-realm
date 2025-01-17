import { postMaterialRequestValidation } from "../validations/material.validation";
import { PostMaterialRequest } from "../types/material.type";
import { StatusCode } from "../types/api.type";
import { createMaterial, findMaterialById, findMaterials, updateMaterialById } from "../repos/material.repo";
import { datetime } from "../utils/datetime.util";
import { apiResponse } from "../utils/response.util";

export const postMaterial = async (materialData: PostMaterialRequest) => {
  const { error } = postMaterialRequestValidation(materialData);
  if (error) {
    return {
      success: false,
      status: StatusCode.BAD_REQUEST,
      message: error.message,
      data: null
    };
  }

  try {
    const material = await createMaterial({
      title: materialData.title
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      description: materialData.description.slice(0, 100) + "...",
      imageUrl: materialData.imageUrl,
      materialString: materialData.materialString,
      createdAt: datetime(),
      quiz: {
        createdAt: datetime()
      }
    });

    const result = apiResponse(true, StatusCode.CREATED, "Material created successfully!", material);
    return result;
  } catch {
    const result = apiResponse(false, StatusCode.INTERNAL_SERVER_ERROR, "Something went wrong!", null);
    return result;
  }
};

export const GetAllMaterials = async () => {
  const materials = await findMaterials();
  if (materials.length === 0) {
    const result = apiResponse(false, StatusCode.NOT_FOUND, "Materials not found!", []);
    return result;
  }

  const result = apiResponse(true, StatusCode.OK, "Get all materials successfully!", materials);
  return result;
};

export const getMaterialById = async (id: string) => {
  const material = await findMaterialById(id);
  if (!material) {
    const result = apiResponse(false, StatusCode.NOT_FOUND, "Material not found!", null);
    return result;
  }
  const result = apiResponse(true, StatusCode.OK, "Get material successfully!", material);
  return result;
};

export const patchMaterialById = async (id: string, materialData: PostMaterialRequest) => {
  const material = await findMaterialById(id);
  if (!material) {
    return {
      success: false,
      status: StatusCode.NOT_FOUND,
      message: "Material not found!",
      data: null
    };
  }
  try {
    const data = await updateMaterialById(id, {
      title: materialData.title
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      description: materialData.description.slice(0, 100) + "...",
      materialString: materialData.materialString,
      imageUrl: materialData.imageUrl,
      createdAt: material.createdAt,
      quiz: {
        createdAt: material.createdAt
      }
    });

    const result = apiResponse(true, StatusCode.OK, "Material updated successfully!", data);
    return result;
  } catch {
    const result = apiResponse(false, StatusCode.INTERNAL_SERVER_ERROR, "Something went wrong!", null);
    return result;
  }
};
