import { RegisterRequest } from "../types/register.type";
import { ApiResponse, StatusCode } from "../types/api-response.type";
import registerValidation from "../validations/register.validation";
import logger from "../utils/logger.util";
import avatarShuffle from "../utils/avatar.util";
import { datetime } from "../utils/datetime.util";
import { Role } from "../types/user.type";
import { getUserById, postUser } from "./user.service";

const registerService = async (registerRequest: RegisterRequest, role?: Role): Promise<ApiResponse<null>> => {
  const { userId } = registerRequest;

  const { error } = registerValidation(registerRequest);
  if (error) {
    logger.error(`VALIDATION ERROR: ${error.message}`);
    return {
      success: false,
      status: StatusCode.BAD_REQUEST,
      message: error.message,
      data: null
    };
  }

  const user = await getUserById(userId);
  if (user.success && user.data) {
    logger.error(`USER ALREADY EXISTS: ${userId}`);
    return {
      success: false,
      status: StatusCode.BAD_REQUEST,
      message: `User with User ID ${userId} already exists, please login!`,
      data: null
    };
  }

  if (role === Role.ADMIN) {
    await postUser({
      ...registerRequest,
      registeredAt: datetime(),
      avatarUrl: avatarShuffle(registerRequest.gender),
      role: Role.ADMIN
    });
  } else {
    await postUser({
      ...registerRequest,
      registeredAt: datetime(),
      avatarUrl: avatarShuffle(registerRequest.gender),
      role: Role.STUDENT
    });
  }
  logger.info(`USER REGISTERED: ${userId}`);
  return {
    success: true,
    status: StatusCode.CREATED,
    message: "User registered successfully, you can login now!",
    data: null
  };
};

export default registerService;
