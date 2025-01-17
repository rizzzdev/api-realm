import { Request, Response } from "express";
import { getQuizById, getQuizzes, postQuiz } from "../services/quiz.service";
import { UserPayload } from "../types/user.type";
import { verifyToken } from "../utils/jwt.util";
import logger from "../utils/logger.util";

export const postQuizController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const userPayload = verifyToken(accessToken, "access") as UserPayload;
  const quizData = request.body;
  const quiz = await postQuiz(quizData);

  if (!quiz.success) {
    logger.error(`${quiz.message.toUpperCase()}: ${userPayload.username}`);
    response.status(quiz.status).send(quiz);
    return;
  }

  logger.info(`${quiz.message.toUpperCase()}: ${userPayload.username}`);
  response.status(quiz.status).send(quiz);
};

export const getQuizzesController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const userPayload = verifyToken(accessToken, "access") as UserPayload;
  const quizzes = await getQuizzes();

  if (!quizzes.success) {
    logger.error(`${quizzes.message.toUpperCase()}: ${userPayload.username}`);
    response.status(quizzes.status).send(quizzes);
    return;
  }

  logger.info(`${quizzes.message.toUpperCase()}: ${userPayload.username}`);
  response.status(quizzes.status).send(quizzes);
};

export const getQuizByIdController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const id = request.params["id"];
  const userPayload = verifyToken(accessToken, "access") as UserPayload;
  const quiz = await getQuizById(id);

  if (!quiz.success) {
    logger.error(`${quiz.message.toUpperCase()}: ${userPayload.username}`);
    response.status(quiz.status).send(quiz);
    return;
  }

  logger.info(`${quiz.message.toUpperCase()}: ${userPayload.username}`);
  response.status(quiz.status).send(quiz);
};
