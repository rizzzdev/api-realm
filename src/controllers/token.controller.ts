import { Request, Response } from "express";
import tokenService from "../services/token.service";

const tokenController = (request: Request, response: Response) => {
  const refreshToken = request.cookies["refresh-token"];
  const tokenResponse = tokenService(refreshToken);
  response.status(tokenResponse.status).send(tokenResponse);
};

export default tokenController;
