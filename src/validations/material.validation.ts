import Joi from "joi";
import { Material } from "../types/material.type";

const materialValidation = (materialData: Material) => {
  const schema = Joi.object({
    title: Joi.string().min(1).max(100).required(),
    description: Joi.string().min(1).max(100).required(),
    imageUrl: Joi.string().required(),
    materialUrl: Joi.string().required(),
    createdAt: Joi.date().required(),
    deletedAt: Joi.date().optional()
  });
  return schema.validate(materialData);
};

export default materialValidation;
