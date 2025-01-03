import { Request, Response } from "express";
import logoutService from "../services/logout.service";

const logoutController = async (request: Request, response: Response) => {
  const refreshToken = request.cookies["refresh-token"];
  const logoutResponse = await logoutService(refreshToken);

  response
    .cookie("refresh-token", "", { httpOnly: true, maxAge: 0 })
    .cookie("access-token", "", { httpOnly: true, maxAge: 0 })
    .status(logoutResponse.status)
    .send(logoutResponse);
};

export default logoutController;
