import { ApiResponse, StatusCode } from "../types/api-response.type";
import { findRefreshTokenByRefreshToken, updateRefreshTokenById } from "../repos/token.repo";
import { datetime } from "../utils/datetime.util";

const logoutService = async (refreshToken: string): Promise<ApiResponse<null>> => {
  const refreshTokenDB = await findRefreshTokenByRefreshToken(refreshToken);

  if (!refreshTokenDB) {
    return {
      success: false,
      status: StatusCode.NOT_FOUND,
      message: "Refresh token not found!",
      data: null
    };
  }

  await updateRefreshTokenById(refreshTokenDB.id, {
    userId: refreshTokenDB.user_id,
    refreshToken: "",
    loggedInAt: refreshTokenDB.logged_in_at,
    loggedOutAt: datetime()
  });
  return {
    success: true,
    status: StatusCode.OK,
    message: "Logout Success!",
    data: null
  };
};

export default logoutService;
