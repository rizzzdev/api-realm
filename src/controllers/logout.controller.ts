import { Request, Response } from "express";
import logoutService from "../services/logout.service";
import logger from "../utils/logger.util";
import { verifyToken } from "../utils/jwt.util";
import { JwtPayload } from "../types/api-response.type";

const logoutController = async (request: Request, response: Response) => {
  const refreshToken = request.cookies["refresh-token"];
  const payload = verifyToken(refreshToken, "refresh") as JwtPayload;
  const logoutResponse = await logoutService(refreshToken);

  logger.info(`${logoutResponse.message.toUpperCase()}: ${payload.userId}`);
  response
    .cookie("refresh-token", "", { httpOnly: true, maxAge: 0 })
    .cookie("access-token", "", { httpOnly: true, maxAge: 0 })
    .status(logoutResponse.status)
    .send(logoutResponse);
};

export default logoutController;
