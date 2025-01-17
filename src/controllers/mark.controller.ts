import { Request, Response } from "express";
import { UserPayload } from "../types/user.type";
import { verifyToken } from "../utils/jwt.util";
import logger from "../utils/logger.util";
import { getMarkByUserIdAndQuizId, getMarkByUserIdAndTestId, getMarks, postMark } from "../services/mark.service";

export const postMarkController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const userPayload = verifyToken(accessToken, "access") as UserPayload;
  const markData = request.body;
  const mark = await postMark(markData);

  if (!mark.success) {
    logger.error(`${mark.message.toUpperCase()}: ${userPayload.username}`);
    response.status(mark.status).send(mark);
    return;
  }

  logger.info(`${mark.message.toUpperCase()}: ${userPayload.username}`);
  response.status(mark.status).send(mark);
};

export const getMarksController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const userPayload = verifyToken(accessToken, "access") as UserPayload;
  const userId = request.query["userId"] as string;
  const quizId = request.query["quizId"] as string;
  const testId = request.query["testId"] as string;

  const marks =
    userId && quizId
      ? await getMarkByUserIdAndQuizId(userId, quizId)
      : testId
        ? await getMarkByUserIdAndTestId(userId, testId)
        : await getMarks();

  if (!marks.success) {
    logger.error(`${marks.message.toUpperCase()}: ${userPayload.username}`);
    response.status(marks.status).send(marks);
    return;
  }

  logger.info(`${marks.message.toUpperCase()}: ${userPayload.username}`);
  response.status(marks.status).send(marks);
};

export const getMarkByUserIdAndQuizIdController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const userPayload = verifyToken(accessToken, "access") as UserPayload;
  const userId = request.query["userId"] as string;
  const quizId = request.query["quizId"] as string;

  const marks = await getMarkByUserIdAndQuizId(userId, quizId);

  if (!marks.success) {
    logger.error(`${marks.message.toUpperCase()}: ${userPayload.username}`);
    response.status(marks.status).send(marks);
    return;
  }

  logger.info(`${marks.message.toUpperCase()}: ${userPayload.username}`);
  response.status(marks.status).send(marks);
};

export const getMarkByUserIdAndTestIdController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const userPayload = verifyToken(accessToken, "access") as UserPayload;
  const userId = request.query["userId"] as string;
  const testId = request.query["testId"] as string;

  const marks = await getMarkByUserIdAndTestId(userId, testId);

  if (!marks.success) {
    logger.error(`${marks.message.toUpperCase()}: ${userPayload.username}`);
    response.status(marks.status).send(marks);
    return;
  }

  logger.info(`${marks.message.toUpperCase()}: ${userPayload.username}`);
  response.status(marks.status).send(marks);
};
