import { Request, Response } from "express";
import loginService from "../services/login.service";
import { ApiResponse } from "../types/api-response.type";
import { LoginData } from "../types/login.type";

const loginController = async (request: Request, response: Response) => {
  const loginResponse: ApiResponse<null | LoginData> = await loginService(request.body);
  if (loginResponse.data) {
    response.cookie("refresh-token", loginResponse.data.refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    response.cookie("access-token", loginResponse.data.accessToken, { httpOnly: true, maxAge: 60 * 1000 });
  }
  response.status(loginResponse.status).send(loginResponse);
};

export default loginController;
