import { Request, Response } from "express";
import { getAllUsers, getUserById } from "../services/user.service";
import logger from "../utils/logger.util";
import { JwtPayload } from "../types/api-response.type";
import { verifyToken } from "../utils/jwt.util";

export const getUsersController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const payload = verifyToken(accessToken, "access") as JwtPayload;
  const users = await getAllUsers();

  if (!users.success) {
    logger.error(`${users.message.toUpperCase()}: ${payload.userId}`);
    response.status(users.status).send(users);
    return;
  }

  logger.info(`GET ALL USERS: ${payload.userId}`);
  response.status(users.status).send(users);
  return;
};

export const getUserByIdController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const payload = verifyToken(accessToken, "access") as JwtPayload;
  const id = request.params.id;
  const user = await getUserById(id);

  if (!user.success) {
    logger.error(`${user.message.toUpperCase()}: ${payload.userId}`);
    response.status(user.status).send(user);
    return;
  }

  logger.info(`GET USER BY ID ${id}: ${payload.userId}`);
  response.status(user.status).send(user);
  return;
};
