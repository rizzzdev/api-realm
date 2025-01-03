import Joi from "joi";
import { RegisterRequest } from "../types/register.type";

const registerValidation = (registerRequest: RegisterRequest) => {
  const schema = Joi.object({
    userId: Joi.string().min(8).max(20).required(),
    password: Joi.string().min(8).max(20).required(),
    fullName: Joi.string().min(1).max(100).required(),
    gender: Joi.string().valid("MALE", "FEMALE").required(),
    avatarUrl: Joi.string()
  });
  return schema.validate(registerRequest);
};

export default registerValidation;
