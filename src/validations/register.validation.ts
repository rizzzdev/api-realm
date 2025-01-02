import Joi from "joi/lib";
import { RegisterRequest } from "../types/register.type";

const registerValidation = (registerRequest: RegisterRequest) => {
  const schema = Joi.object({
    studentId: Joi.string().min(8).max(20).required(),
    passWord: Joi.string().min(8).max(20).required(),
    fullName: Joi.string().min(1).max(100).required(),
    gender: Joi.string().min(4).max(6).required(),
    avatarUrl: Joi.string()
  });
  return schema.validate(registerRequest);
};

export default registerValidation;
