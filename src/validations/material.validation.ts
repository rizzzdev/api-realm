import Joi from "joi";
import { PostMaterialRequest } from "../types/material.type";

export const postMaterialRequestValidation = (materialData: PostMaterialRequest) => {
  const schema = Joi.object({
    title: Joi.string().min(1).max(100).required(),
    description: Joi.string().min(1).required(),
    imageUrl: Joi.string().required(),
    materialString: Joi.string().required()
  });
  return schema.validate(materialData);
};
