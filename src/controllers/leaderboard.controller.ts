import { Request, Response } from "express";
import { UserPayload } from "../types/user.type";
import { verifyToken } from "../utils/jwt.util";
import { getLeaderboard } from "../services/leaderboard.service";
import logger from "../utils/logger.util";

export const getLeaderboardController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const userPayload = verifyToken(accessToken, "access") as UserPayload;
  const leaderboard = await getLeaderboard();

  if (!leaderboard.success) {
    logger.error(`${leaderboard.message.toUpperCase()}: ${userPayload.username}`);
    response.status(leaderboard.status).send(leaderboard);
    return;
  }

  logger.info(`${leaderboard.message.toUpperCase()}: ${userPayload.username}`);
  response.status(leaderboard.status).send(leaderboard);
};
