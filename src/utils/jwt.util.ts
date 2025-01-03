import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/api-response.type";
import ENV from "../configs/env.config";

export const createToken = (payload: JwtPayload, type: "access" | "refresh"): string => {
  if (type === "refresh") {
    return jwt.sign(payload, ENV.REFRESH_TOKEN_SECRET_KEY ?? "", { expiresIn: "1d" });
  } else {
    return jwt.sign(payload, ENV.ACCESS_TOKEN_SECRET_KEY ?? "", { expiresIn: "10m" });
  }
};

export const verifyToken = (token: string, type: "access" | "refresh") => {
  if (type === "access") {
    try {
      const { userId, fullName, gender, avatarUrl } = jwt.verify(
        token ?? "",
        ENV.ACCESS_TOKEN_SECRET_KEY ?? ""
      ) as JwtPayload;
      const payload: JwtPayload = { userId, fullName, gender, avatarUrl };
      return payload;
    } catch {
      return false;
    }
  } else {
    try {
      const { userId, fullName, gender, avatarUrl } = jwt.verify(
        token ?? "",
        ENV.REFRESH_TOKEN_SECRET_KEY ?? ""
      ) as JwtPayload;
      const payload: JwtPayload = { userId, fullName, gender, avatarUrl };
      return payload;
    } catch {
      return false;
    }
  }
};
