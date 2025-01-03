import { LoginData, LoginRequest } from "../types/login.type";
import { ApiResponse, JwtPayload, StatusCode } from "../types/api-response.type";
import { verifyPassword } from "../utils/hash.util";
import { createToken } from "../utils/jwt.util";
import loginValidation from "../validations/login.validation";
import { getUserById } from "./user.service";
import { createRefreshToken } from "../repos/token.repo";
import { datetime } from "../utils/datetime.util";

export const login = async (loginRequest: LoginRequest): Promise<ApiResponse<null | LoginData>> => {
  const { userId, password } = loginRequest;

  const { error } = loginValidation(loginRequest);
  if (error) {
    return {
      success: false,
      status: StatusCode.BAD_REQUEST,
      message: error.message,
      data: null
    };
  }

  const user = await getUserById(userId);
  if (!user.success && !user.data) {
    return {
      success: false,
      status: StatusCode.NOT_FOUND,
      message: "User ID or Password is incorrect!",
      data: null
    };
  }

  const verify = verifyPassword(password, user.data!.pass_word);
  if (!verify) {
    return {
      success: false,
      status: StatusCode.NOT_FOUND,
      message: "User ID or Password is incorrect!",
      data: null
    };
  }

  const payload: JwtPayload = {
    userId: user.data!.id,
    fullName: user.data!.full_name,
    gender: user.data!.gender,
    avatarUrl: user.data!.avatar_url
  };

  const refreshToken = createToken(payload, "refresh");
  const accessToken = createToken(payload, "access");
  await createRefreshToken({
    userId: user.data!.id,
    refreshToken,
    loggedInAt: datetime()
  });

  return {
    success: true,
    status: StatusCode.OK,
    message: "Login successfully!",
    data: {
      refreshToken,
      accessToken
    }
  };
};
