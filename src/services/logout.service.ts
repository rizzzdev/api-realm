import { verifyToken } from "../utils/jwt.util";
import { ApiResponse, JwtPayload, StatusCode } from "../types/api-response.type";
import logger from "../utils/logger.util";
import { PrismaClient } from ".prisma/client";

const logoutService = async (refreshToken: string): Promise<ApiResponse<null>> => {
  const prisma = new PrismaClient();
  const isVerifiedToken = verifyToken(refreshToken, "refresh") as JwtPayload;
  if (!isVerifiedToken) {
    logger.error("REFRESH TOKEN IS INVALID, EXPIRED, OR YOU'RE NOT LOGGED IN!");
    return {
      success: false,
      status: StatusCode.UNAUTHORIZED,
      message: "Refresh token is invalid, expired, or you're not logged in!",
      data: null
    };
  }

  await prisma.tokens.delete({
    where: {
      refresh_token: refreshToken
    }
  });

  logger.info("LOGOUT SUCCESS!");

  return {
    success: true,
    status: StatusCode.OK,
    message: "Logout Success!",
    data: null
  };
};

export default logoutService;
