import { Request, Response } from "express";
import { login } from "../services/login.service";
import logger from "../utils/logger.util";

const loginController = async (request: Request, response: Response) => {
  const loginResponse = await login(request.body);

  if (!loginResponse.success) {
    logger.error(`${loginResponse.message.toUpperCase()}: ${request.body.userId}`);
    response.status(loginResponse.status).send(loginResponse);
    return;
  }

  logger.info(`${loginResponse.message.toUpperCase()}: ${request.body.userId}`);
  response
    .cookie("refresh-token", loginResponse.data!.refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
    .cookie("access-token", loginResponse.data!.accessToken, { httpOnly: true, maxAge: 60 * 1000 })
    .status(loginResponse.status)
    .send(loginResponse);
};

export default loginController;
