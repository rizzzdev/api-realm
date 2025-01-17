import { Request, Response } from "express";
import logger from "../utils/logger.util";
import { verifyToken } from "..//utils/jwt.util";
import { UserPayload } from "../types/user.type";
import { getNewAccessToken } from "../services/token.service";

export const getNewAccessTokenController = async (request: Request, response: Response) => {
  const refreshToken = request.cookies["refresh-token"];
  const payload = verifyToken(refreshToken, "refresh") as UserPayload;
  const getNewAccessTokenResponse = await getNewAccessToken(refreshToken);
  if (!getNewAccessTokenResponse.success && !payload) {
    logger.error("REFRESH TOKEN NOT FOUND IN COOKIES!");
    response.status(getNewAccessTokenResponse.status).send(getNewAccessTokenResponse);
    return;
  }

  logger.info(`GET NEW ACCESS TOKEN: ${payload.username}`);
  response.status(getNewAccessTokenResponse.status).send(getNewAccessTokenResponse);
  return;
};
