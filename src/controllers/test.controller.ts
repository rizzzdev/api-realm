import { Request, Response } from "express";
import { UserPayload } from "../types/user.type";
import { verifyToken } from "../utils/jwt.util";
import logger from "../utils/logger.util";
import { getTests, postTest } from "../services/test.service";

export const postTestController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const userPayload = verifyToken(accessToken, "access") as UserPayload;
  const test = await postTest();

  if (!test.success) {
    logger.error(`${test.message.toUpperCase()}: ${userPayload.username}`);
    response.status(test.status).send(test);
    return;
  }

  logger.info(`${test.message.toUpperCase()}: ${userPayload.username}`);
  response.status(test.status).send(test);
};

export const getTestsController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const userPayload = verifyToken(accessToken, "access") as UserPayload;
  const tests = await getTests();

  if (!tests.success) {
    logger.error(`${tests.message.toUpperCase()}: ${userPayload.username}`);
    response.status(tests.status).send(tests);
    return;
  }

  logger.info(`${tests.message.toUpperCase()}: ${userPayload.username}`);
  response.status(tests.status).send(tests);
};
