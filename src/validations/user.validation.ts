import Joi from "joi";
import { PostUserRequest, SignInUserRequest } from "../types/user.type";

export const postUserRequestValidation = (userData: PostUserRequest) => {
  const schema = Joi.object({
    username: Joi.string().min(8).max(20).required(),
    password: Joi.string().min(8).max(20).required(),
    confirmPassword: Joi.string().min(8).max(20).required(),
    fullName: Joi.string().min(1).max(100).required(),
    gender: Joi.string().valid("MALE", "FEMALE").required()
  });
  return schema.validate(userData);
};

export const signInUserRequestValidation = (userData: SignInUserRequest) => {
  const schema = Joi.object({
    username: Joi.string().min(8).max(20).required(),
    password: Joi.string().min(8).max(20).required()
  });
  return schema.validate(userData);
};
