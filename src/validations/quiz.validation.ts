import Joi from "joi";
import { PostQuizRequest } from "../types/quiz.type";

export const postQuizRequestValidation = (quizData: PostQuizRequest) => {
  const schema = Joi.object({
    materialId: Joi.string().required()
  });
  return schema.validate(quizData);
};
