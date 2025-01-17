import Joi from "joi";
import { PostMarkRequest } from "../types/mark.type";

export const postMarkRequestValidation = (markData: PostMarkRequest) => {
  const schema = Joi.object({
    userId: Joi.string().required(),
    quizId: Joi.string().optional(),
    testId: Joi.string().optional(),
    mark: Joi.number().required()
  });
  return schema.validate(markData);
};
