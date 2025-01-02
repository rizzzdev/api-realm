import { Request, Response } from "express";
import loginService from "../services/login.service";

const loginController = async (request: Request, response: Response) => {
  const loginResponse = await loginService(request.body);
  response.status(loginResponse.status).send(loginResponse);
};

export default loginController;
