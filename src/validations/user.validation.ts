import Joi from "joi/lib";
import { User } from "../types/user.type";

const userValidation = (user: User) => {
  const schema = Joi.object({
    userId: Joi.string().min(8).max(20).required(),
    password: Joi.string().min(8).max(20).required(),
    fullName: Joi.string().min(1).max(100).required(),
    gender: Joi.string().valid("MALE", "FEMALE").required(),
    avatarUrl: Joi.string().required(),
    registeredAt: Joi.date().required(),
    deletedAt: Joi.date().optional(),
    role: Joi.string().valid("ADMIN", "STUDENT").required()
  });
  return schema.validate(user);
};

export default userValidation;
