import { Token } from "../types/token.type";
import { createToken } from "../repos/token.repo";
import { StatusCode } from "../types/api.type";
import { UserPayload } from "../types/user.type";
import { signToken, verifyToken } from "../utils/jwt.util";

export const postToken = async (tokenData: Token) => {
  try {
    const token = await createToken(tokenData);
    return {
      success: true,
      status: StatusCode.CREATED,
      message: "Token created successfully!",
      data: token
    };
  } catch {
    return {
      success: false,
      status: StatusCode.INTERNAL_SERVER_ERROR,
      message: "Something went wrong!",
      data: null
    };
  }
};

export const getNewAccessToken = async (refreshToken: string) => {
  const payload = verifyToken(refreshToken, "refresh") as UserPayload;
  if (!payload) {
    return {
      success: false,
      status: StatusCode.UNAUTHORIZED,
      message: "Unauthorized! Refresh token is invalid, expired, or you're not signed in! Please sign in again!.",
      data: null
    };
  }

  try {
    const newAccessToken = signToken(payload, "access");
    return {
      success: true,
      status: StatusCode.OK,
      message: "New access token created successfully!",
      data: {
        refreshToken: refreshToken,
        accessToken: newAccessToken
      }
    };
  } catch {
    return {
      success: false,
      status: StatusCode.INTERNAL_SERVER_ERROR,
      message: "Something went wrong!",
      data: null
    };
  }
};
