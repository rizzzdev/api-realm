import { NextFunction, Request, Response } from "express";
import { ApiResponse, StatusCode } from "../types/api.type";
import logger from "../utils/logger.util";
import { verifyToken } from "../utils/jwt.util";
import { findTokenByToken } from "../repos/token.repo";
import { apiResponse } from "../utils/response.util";
import { UserPayload } from "../types/user.type";

const authMiddleware = async (request: Request, response: Response, next: NextFunction) => {
  const refreshToken = request.cookies["refresh-token"];
  if (!refreshToken) {
    logger.error("REFRESH TOKEN NOT FOUND IN COOKIES!");
    const result = apiResponse<null>(false, StatusCode.UNAUTHORIZED, "Refresh token not found in cookies!", null);
    response.status(result.status).send(result);
    return;
  }

  const payload = verifyToken(refreshToken, "refresh") as UserPayload;
  if (!payload) {
    logger.error("REFRESH TOKEN IS INVALID, EXPIRED, OR YOU'RE NOT LOGGED IN! CAN'T CREATE NEW ACCESS TOKEN!");
    const result = apiResponse<null>(
      false,
      StatusCode.UNAUTHORIZED,
      "Refresh token is invalid, expired, or you're not logged in! Please login again!.",
      null
    );
    response.status(result.status).send(result);
    return;
  }

  const refreshTokenDB = await findTokenByToken(refreshToken);
  if (!refreshTokenDB) {
    logger.error("REFRESH TOKEN NOT FOUND IN DATABASE!");
    const result = apiResponse(false, StatusCode.UNAUTHORIZED, "Refresh token not found in database!", null);
    response.status(result.status).send(result);
    return;
  }

  next();
};

export default authMiddleware;
