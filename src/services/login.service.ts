import { PrismaClient } from ".prisma/client";
import { LoginData, LoginRequest } from "../types/login.type";
import { ApiResponse, JwtPayload, StatusCode } from "../types/api-response.type";
import { verifyPassword } from "../utils/hash.util";
import { createToken } from "../utils/jwt.util";
import loginValidation from "../validations/login.validation";
import logger from "../utils/logger.util";

const loginService = async (loginRequest: LoginRequest): Promise<ApiResponse<null | LoginData>> => {
  const { userId, password } = loginRequest;
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

  const user = await prisma.users.findFirst({ where: { id: userId } });
  if (!user) {
    logger.error(`USER NOT FOUND: ${userId}`);
    return {
      success: false,
      status: StatusCode.NOT_FOUND,
      message: "User ID or Password is incorrect!",
      data: null
    };
  }

  const verify = verifyPassword(password, user.pass_word);
  if (!verify) {
    logger.error(`INCORRECT PASSWORD: ${userId}`);
    return {
      success: false,
      status: StatusCode.NOT_FOUND,
      message: "User ID or Password is incorrect!",
      data: null
    };
  }

  const payload: JwtPayload = {
    userId: user.id,
    fullName: user.full_name,
    gender: user.gender,
    avatarUrl: user.avatar_url
  };

  const refreshToken = createToken(payload, "refresh");
  const accessToken = createToken(payload, "access");
  await prisma.tokens.create({ data: { user_id: user.id, refresh_token: refreshToken } });
  logger.info(`LOGIN SUCCESS: ${userId}`);

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
