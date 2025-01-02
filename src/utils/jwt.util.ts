import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/api-response.type";
import ENV from "../configs/env.config";

export const createAccessToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, ENV.ACCESS_TOKEN_SECRET_KEY ?? "", { expiresIn: "10m" });
};

export const createRefreshToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, ENV.REFRESH_TOKEN_SECRET_KEY ?? "", { expiresIn: "1d" });
};
