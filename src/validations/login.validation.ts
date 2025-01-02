import Joi from "joi/lib";
import { LoginRequest } from "../types/login.type";

const loginValidation = (registerRequest: LoginRequest) => {
  const schema = Joi.object({
    studentId: Joi.string().min(8).max(20).required(),
    passWord: Joi.string().min(8).max(20).required()
  });
  return schema.validate(registerRequest);
};

export default loginValidation;
