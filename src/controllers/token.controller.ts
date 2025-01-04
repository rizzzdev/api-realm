import { Request, Response } from "express";
import tokenService from "../services/token.service";
import logger from "../utils/logger.util";
import { verifyToken } from "..//utils/jwt.util";
import { JwtPayload } from "../types/api-response.type";

const tokenController = (request: Request, response: Response) => {
  const refreshToken = request.cookies["refresh-token"];
  const payload = verifyToken(refreshToken, "refresh") as JwtPayload;
  const tokenResponse = tokenService(refreshToken);

  logger.info(`${tokenResponse.message.toUpperCase()}: ${payload.userId}`);
  response.status(tokenResponse.status).send(tokenResponse);
  return;
};

export default tokenController;
