import { NextFunction, Request, Response } from "express";
import { ApiResponse, JwtPayload, StatusCode } from "../types/api-response.type";
import logger from "../utils/logger.util";
import { verifyToken } from "../utils/jwt.util";

const accessMiddleware = (request: Request, response: Response, next: NextFunction) => {
  const refreshToken = request.cookies["refresh-token"];
  const accessToken = request.headers?.authorization?.split(" ")[1];
  const refreshTokenPayload = verifyToken(refreshToken, "refresh") as JwtPayload;
  const accessTokenPayload = verifyToken(accessToken!, "access") as JwtPayload;

  if (!accessToken) {
    logger.error("NEED ACCESS TOKEN TO ACCESS THIS ROUTE!");
    const result: ApiResponse<null> = {
      success: false,
      status: StatusCode.UNAUTHORIZED,
      message: "Need access token to access this route!",
      data: null
    };
    response.status(result.status).send(result);
    return;
  }

  if (!accessTokenPayload.userId) {
    logger.error("ACCESS TOKEN IS INVALID OR EXPIRED TO ACCESS THIS ROUTE!");
    const result: ApiResponse<null> = {
      success: false,
      status: StatusCode.UNAUTHORIZED,
      message: "Access token is invalid or expired!",
      data: null
    };
    response.status(result.status).send(result);
    return;
  }

  if (accessTokenPayload.userId !== refreshTokenPayload.userId) {
    logger.error(
      `${refreshTokenPayload.userId} TRY TO USE ${accessTokenPayload.userId}'S ACCESS TOKEN TO ACCESS THIS ROUTE!`
    );
    const result: ApiResponse<null> = {
      success: false,
      status: StatusCode.UNAUTHORIZED,
      message: "Access token is invalid or expired!",
      data: null
    };
    response.status(result.status).send(result);
    return;
  }
  next();
};

export default accessMiddleware;
