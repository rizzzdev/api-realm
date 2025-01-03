import { PrismaClient } from ".prisma/client";
import { RegisterRequest } from "../types/register.type";
import { ApiResponse, StatusCode } from "../types/api-response.type";
import { hashPassword } from "../utils/hash.util";
import registerValidation from "../validations/register.validation";
import logger from "../utils/logger.util";
import avatarShuffle from "../utils/avatar.util";

const registerService = async (registerRequest: RegisterRequest): Promise<ApiResponse<null>> => {
  const { userId } = registerRequest;
  const prisma = new PrismaClient();

  const { error } = registerValidation(registerRequest);
  if (error) {
    logger.error(`VALIDATION ERROR: ${error.message}`);
    return {
      success: false,
      status: StatusCode.BAD_REQUEST,
      message: error.message,
      data: null
    };
  }

  const user = await prisma.users.findFirst({
    where: {
      id: userId
    }
  });
  if (user) {
    logger.error(`STUDENT ALREADY EXISTS: ${userId}`);
    return {
      success: false,
      status: StatusCode.BAD_REQUEST,
      message: `Student with Student ID ${userId} already exists, please login!`,
      data: null
    };
  }

  await prisma.users.create({
    data: {
      id: registerRequest.userId.split(" ").join(""),
      pass_word: hashPassword(registerRequest.password),
      gender: registerRequest.gender.toLowerCase() === "male" ? "MALE" : "FEMALE",
      full_name: registerRequest.fullName
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      avatar_url: avatarShuffle(registerRequest.gender.toLowerCase() === "male" ? "MALE" : "FEMALE")
    }
  });
  logger.info(`STUDENT REGISTERED: ${userId}`);
  return {
    success: true,
    status: StatusCode.CREATED,
    message: "Student registered successfully, you can login now!",
    data: null
  };
};

export default registerService;
