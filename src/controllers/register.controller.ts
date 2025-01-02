import { Request, Response } from "express";
import registerService from "../services/register.service";

const registerController = async (request: Request, response: Response) => {
  const registerResponse = await registerService(request.body);
  response.status(registerResponse.status).send(registerResponse);
};

export default registerController;
