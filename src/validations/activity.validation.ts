import Joi, { string } from "joi";
import { PostActivityRequest } from "../types/activity.type";

export const postActivityRequestValidation = (activityData: PostActivityRequest) => {
  const schema = Joi.object({
    activityType: Joi.string().valid("QUIZ", "TEST", "SIMULATION", "MATERIAL").required(),
    materialId: Joi.string().optional(),
    quizId: Joi.string().optional(),
    testId: Joi.string().optional(),
    message: Joi.string().required(),
    userId: Joi.string().required()
  });
  return schema.validate(activityData);
};
