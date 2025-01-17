import Joi from "joi";
import { Question } from "../types/question.type";

export const postQuestionRequestValidation = (questionData: Question) => {
  const schema = Joi.object({
    quizId: Joi.string().optional(),
    testId: Joi.string().optional(),
    question: Joi.string().required(),
    imageUrl: Joi.string().optional(),
    optionA: Joi.string().required(),
    optionB: Joi.string().required(),
    optionC: Joi.string().required(),
    optionD: Joi.string().optional(),
    optionE: Joi.string().optional(),
    correctOption: Joi.string().required()
  });

  return schema.validate(questionData);
};
