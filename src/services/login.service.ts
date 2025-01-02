import { PrismaClient } from ".prisma/client";
import { LoginData, LoginRequest } from "../types/login.type";
import { ApiResponse, JwtPayload, StatusCode } from "../types/api-response.type";
import { verifyPassWord } from "../utils/hash.util";
import { createRefreshToken, createAccessToken } from "../utils/jwt.util";
import loginValidation from "../validations/login.validation";
import logger from "../utils/logger.util";

const loginService = async (loginRequest: LoginRequest): Promise<ApiResponse<null | LoginData>> => {
  const { studentId, passWord } = loginRequest;
  const prisma = new PrismaClient();

  const { error } = loginValidation(loginRequest);
  if (error) {
    logger.error(`VALIDATION ERROR: ${error.message}`);
    return {
      success: false,
      status: StatusCode.BAD_REQUEST,
      message: error.message,
      data: null
    };
  }

  const student = await prisma.students.findFirst({ where: { id: studentId } });
  if (!student) {
    logger.error(`STUDENT NOT FOUND: ${studentId}`);
    return {
      success: false,
      status: StatusCode.BAD_REQUEST,
      message: "Student ID or Password is incorrect!",
      data: null
    };
  }

  const verify = verifyPassWord(passWord, student.pass_word);
  if (!verify) {
    logger.error(`INCORRECT PASSWORD: ${studentId}`);
    return {
      success: false,
      status: StatusCode.BAD_REQUEST,
      message: "Student ID or Password is incorrect!",
      data: null
    };
  }

  const payload: JwtPayload = {
    id: student.id,
    fullName: student.full_name,
    gender: student.gender,
    avatarUrl: student.avatar_url
  };

  const refreshToken = createRefreshToken(payload);
  const accessToken = createAccessToken(payload);
  await prisma.tokens.create({ data: { student_id: student.id, refresh_token: refreshToken } });
  logger.info(`LOGIN SUCCESS: ${studentId}`);

  return {
    success: true,
    status: StatusCode.OK,
    message: "Login successfully!",
    data: {
      refreshToken,
      accessToken
    }
  };
};

export default loginService;
