import Joi from "joi";
import { PostActivityRequest } from "../types/activity.type";

export const postActivityRequestValidation = (activityData: PostActivityRequest) => {
  const schema = Joi.object({
    materialId: Joi.string().required(),
    userId: Joi.string().required()
  });
  return schema.validate(activityData);
};
