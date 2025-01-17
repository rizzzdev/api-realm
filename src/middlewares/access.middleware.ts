import { NextFunction, Request, Response } from "express";
import { ApiResponse, StatusCode } from "../types/api.type";
import logger from "../utils/logger.util";
import { verifyToken } from "../utils/jwt.util";
import { UserPayload } from "../types/user.type";
import { apiResponse } from "../utils/response.util";

const accessMiddleware = (request: Request, response: Response, next: NextFunction) => {
  const refreshToken = request.cookies["refresh-token"];
  const accessToken = request.headers?.authorization?.split(" ")[1];
  const refreshTokenPayload = verifyToken(refreshToken, "refresh") as UserPayload;
  const accessTokenPayload = verifyToken(accessToken!, "access") as UserPayload;

  if (!accessToken) {
    logger.error("NEED ACCESS TOKEN TO ACCESS THIS ROUTE!");
    const result = apiResponse(false, StatusCode.UNAUTHORIZED, "Access token not found!", null);
    response.status(result.status).send(result);
    return;
  }

  if (!accessTokenPayload.id) {
    logger.error("ACCESS TOKEN IS INVALID OR EXPIRED TO ACCESS THIS ROUTE!");
    const result = apiResponse(false, StatusCode.UNAUTHORIZED, "Access token is invalid or expired!", null);
    response.status(result.status).send(result);
    return;
  }

  if (accessTokenPayload.id !== refreshTokenPayload.id) {
    logger.error(
      `${refreshTokenPayload.username} TRY TO USE ${accessTokenPayload.username}'S ACCESS TOKEN TO ACCESS THIS ROUTE!`
    );
    const result = apiResponse(false, StatusCode.UNAUTHORIZED, "Access token is invalid or expired!", null);
    response.status(result.status).send(result);
    return;
  }

  next();
};

export default accessMiddleware;
