import jwt from "jsonwebtoken";
import ENV from "../configs/env.config";
import { Gender, UserPayload } from "../types/user.type";

export const signToken = (payload: UserPayload, type: "access" | "refresh"): string => {
  if (type === "refresh") {
    return jwt.sign(payload, ENV.REFRESH_TOKEN_SECRET_KEY ?? "", { expiresIn: "1d" });
  } else {
    return jwt.sign(payload, ENV.ACCESS_TOKEN_SECRET_KEY ?? "", { expiresIn: "10m" });
  }
};

export const verifyToken = (token: string, type: "access" | "refresh") => {
  if (type === "access") {
    try {
      const { id, username, fullName, gender, avatarUrl, role, signedUpAt, deletedAt } = jwt.verify(
        token ?? "",
        ENV.ACCESS_TOKEN_SECRET_KEY ?? ""
      ) as UserPayload;
      const payload: UserPayload = { id, username, fullName, gender, avatarUrl, role, signedUpAt, deletedAt };
      return payload;
    } catch {
      return false;
    }
  } else {
    try {
      const { id, username, fullName, gender, avatarUrl, role, signedUpAt, deletedAt } = jwt.verify(
        token ?? "",
        ENV.REFRESH_TOKEN_SECRET_KEY ?? ""
      ) as UserPayload;
      const payload: UserPayload = { id, username, fullName, gender, avatarUrl, role, signedUpAt, deletedAt };
      return payload;
    } catch {
      return false;
    }
  }
};
