import { hashPassword } from "../utils/hash.util";
import { User } from "../types/user.type";
import { ApiResponse, StatusCode } from "../types/api-response.type";
import userValidation from "../validations/user.validation";
import { createUser, findUserById, findUsers } from "../repos/user.repo";

export const postUser = async (userData: User): Promise<ApiResponse<null>> => {
  const { error } = userValidation(userData);
  if (error) {
    return {
      success: false,
      status: StatusCode.BAD_REQUEST,
      message: error.message,
      data: null
    };
  }
  try {
    await createUser({
      userId: userData.userId.toLowerCase().split(" ").join(""),
      fullName: userData.fullName
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      password: hashPassword(userData.password),
      avatarUrl: userData.avatarUrl,
      registeredAt: userData.registeredAt,
      gender: userData.gender,
      role: userData.role,
      deletedAt: userData.deletedAt
    });
    return {
      success: true,
      status: StatusCode.CREATED,
      message: "User created successfully!",
      data: null
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

export const getAllUsers = async () => {
  const users = await findUsers();
  if (users.length === 0) {
    return {
      success: false,
      status: StatusCode.NOT_FOUND,
      message: "No users found!",
      data: null
    };
  } else {
    return {
      success: true,
      status: StatusCode.OK,
      message: "Users found successfully!",
      data: users
    };
  }
};

export const getUserById = async (id: string) => {
  const user = await findUserById(id);
  if (!user) {
    return {
      success: false,
      status: StatusCode.NOT_FOUND,
      message: `User not found!`,
      data: null
    };
  } else {
    return {
      success: true,
      status: StatusCode.OK,
      message: `Get User successfully!`,
      data: user
    };
  }
};
