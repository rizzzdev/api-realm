import { Request, Response } from "express";
import tokenService from "../services/token.service";
import logger from "../utils/logger.util";

const tokenController = (request: Request, response: Response) => {
  const refreshToken = request.cookies["refresh-token"];
  const tokenResponse = tokenService(refreshToken);

  if (!tokenResponse.success) {
    logger.error(`${tokenResponse.message.toUpperCase()}: ${refreshToken}`);
    response.status(tokenResponse.status).send(tokenResponse);
  }
};

export default tokenController;
