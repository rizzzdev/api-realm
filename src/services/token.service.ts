import { createToken, verifyToken } from "../utils/jwt.util";
import { ApiResponse, JwtPayload, StatusCode } from "../types/api-response.type";
import { LoginData } from "../types/login.type";
import logger from "../utils/logger.util";

const tokenService = (refreshToken: string): ApiResponse<null | LoginData> => {
  const isVerifiedToken = verifyToken(refreshToken, "refresh") as JwtPayload;
  const payload: JwtPayload = isVerifiedToken;
  const newAccessToken = createToken(payload, "access");
  return {
    success: true,
    status: StatusCode.OK,
    message: "New Access Token Created!",
    data: {
      refreshToken: refreshToken,
      accessToken: newAccessToken
    }
  };
};

export default tokenService;
