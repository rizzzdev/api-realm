import { Request, Response } from "express";
import registerService from "../services/register.service";
import logger from "../utils/logger.util";

const registerController = async (request: Request, response: Response) => {
  const registerResponse = await registerService(request.body);

  if (!registerResponse.success) {
    logger.error(`${registerResponse.message.toUpperCase()}: ${request.body.userId}`);
    response.status(registerResponse.status).send(registerResponse);
    return;
  }

  logger.info(`${registerResponse.message.toUpperCase()}: ${request.body.userId}`);
  response.status(registerResponse.status).send(registerResponse);
};

export default registerController;
