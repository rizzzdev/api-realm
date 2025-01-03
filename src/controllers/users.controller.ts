import { Request, Response } from "express";
import { getAllUsers, getUserById } from "../services/user.service";
import logger from "../utils/logger.util";
import { ApiResponse, JwtPayload, StatusCode } from "../types/api-response.type";
import { verifyToken } from "../utils/jwt.util";

const usersController = async (request: Request, response: Response) => {
  const id = request.params.id;
  const accessToken = request.headers.authorization!.split(" ")[1];
  const { userId } = verifyToken(accessToken, "access") as JwtPayload;
  const user = await getUserById(id);
  const users = await getAllUsers();

  if (!accessToken) {
    logger.error("NEED ACCESS TOKEN TO GET USER!");
    const result: ApiResponse<null> = {
      success: false,
      status: StatusCode.UNAUTHORIZED,
      message: "Need access token to get user!",
      data: null
    };
    response.status(result.status).send(result);
    return;
  }

  if (id && !user.success) {
    logger.error(`${user.message.toUpperCase()}: ${userId}`);
    response.status(user.status).send(user);
    return;
  }

  if (id && user.success) {
    logger.info(`GET USER BY ID ${id}: ${userId}`);
    response.status(user.status).send(user);
    return;
  }

  if (!id && !users.success) {
    logger.error(`${users.message.toUpperCase()}: ${userId}`);
    response.status(users.status).send(users);
    return;
  }

  if (!id && users.success) {
    logger.info(`GET ALL USERS: ${userId}`);
    response.status(users.status).send(users);
    return;
  }
};

export default usersController;
