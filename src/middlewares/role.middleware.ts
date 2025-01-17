import { NextFunction, Request, Response } from "express";
import { findTokenByToken } from "../repos/token.repo";
import { getUserById } from "../services/user.service";
import logger from "../utils/logger.util";
import { Role } from "../types/user.type";
import { ApiResponse, StatusCode } from "../types/api.type";

const roleMiddleware = async (request: Request, response: Response, next: NextFunction) => {
  const refreshToken = request.cookies["refresh-token"];
  const refreshTokenDB = await findTokenByToken(refreshToken);
  const userId = refreshTokenDB?.userId;
  const user = await getUserById(userId!);
  if (!user.success) {
    logger.error(`${user.message.toUpperCase()}`);
    response.status(user.status).send(user);
    return;
  }

  if (user.data?.role !== Role.ADMIN) {
    logger.error(`YOU DON'T HAVE PERMISSION TO ACCESS THIS ROUTE!: ${user.data?.username}`);
    const result: ApiResponse<null> = {
      success: false,
      status: StatusCode.FORBIDDEN,
      message: "You don't have permission to access this route!",
      data: null
    };
    response.status(result.status).send(result);
    return;
  }

  next();
};

export default roleMiddleware;
