import { NextFunction, Request, Response } from "express";
import { StatusCode } from "../types/api-response.type";
import logger from "../utils/logger.util";
import { verifyToken } from "../utils/jwt.util";
import { PrismaClient } from ".prisma/client";

const authMiddleware = async (request: Request, response: Response, next: NextFunction) => {
  const prisma = new PrismaClient();

  const refreshToken = request.cookies["refresh-token"];
  if (!refreshToken) {
    logger.error("REFRESH TOKEN NOT FOUND IN COOKIES!");
    const result = {
      success: false,
      status: StatusCode.UNAUTHORIZED,
      message: "Refresh token is invalid, expired, or you're not logged in! Please login again!.",
      data: null
    };
    response.status(result.status).send(result);
    return;
  }

  const isVerifiedToken = verifyToken(refreshToken, "refresh");
  if (!isVerifiedToken) {
    logger.error("REFRESH TOKEN IS INVALID, EXPIRED, OR YOU'RE NOT LOGGED IN! CAN'T CREATE NEW ACCESS TOKEN!");
    const result = {
      success: false,
      status: StatusCode.UNAUTHORIZED,
      message: "Refresh token is invalid, expired, or you're not logged in! Please login again!.",
      data: null
    };
    response.status(result.status).send(result);
    return;
  }

  const refreshTokenDB = await prisma.tokens.findFirst({
    where: {
      refresh_token: refreshToken
    }
  });
  if (!refreshTokenDB) {
    logger.error("REFRESH TOKEN NOT FOUND IN DATABASE!");
    const result = {
      success: false,
      status: StatusCode.UNAUTHORIZED,
      message: "Refresh token is invalid, expired, or you're not logged in! Please login again!.",
      data: null
    };
    response.status(result.status).send(result);
    return;
  }
  next();
};

export default authMiddleware;
