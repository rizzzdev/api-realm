import { Request, Response } from "express";
import { getQuestionById, getQuestions, postQuestion } from "../services/question.service";
import logger from "../utils/logger.util";
import { verifyToken } from "../utils/jwt.util";
import { UserPayload } from "../types/user.type";

export const postQuestionController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const userPayload = verifyToken(accessToken, "access") as UserPayload;
  const questionData = request.body;
  const question = await postQuestion(questionData);

  if (!question.success) {
    logger.error(`${question.message.toUpperCase()}: ${userPayload.username}`);
    response.status(question.status).send(question);
    return;
  }

  logger.info(`${question.message.toUpperCase()}: ${userPayload.username}`);
  response.status(question.status).send(question);
};

export const getQuestionsController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const userPayload = verifyToken(accessToken, "access") as UserPayload;
  const questions = await getQuestions();

  if (!questions.success) {
    logger.error(`${questions.message.toUpperCase()}: ${userPayload.username}`);
    response.status(questions.status).send(questions);
    return;
  }

  logger.info(`${questions.message.toUpperCase()}: ${userPayload.username}`);
  response.status(questions.status).send(questions);
};

export const getQuestionByIdController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const userPayload = verifyToken(accessToken, "access") as UserPayload;
  const id = request.params.id;
  const question = await getQuestionById(id);

  if (!question.success) {
    logger.error(`${question.message.toUpperCase()}: ${userPayload.username}`);
    response.status(question.status).send(question);
    return;
  }

  logger.info(`${question.message.toUpperCase()}: ${userPayload.username}`);
  response.status(question.status).send(question);
};
